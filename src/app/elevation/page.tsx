'use client';
import '../styles/globals.css';

import React, { useState, useRef, useEffect } from 'react';
import * as d3 from 'd3';

export default function Page() {
  const [tab, setTab] = useState('upload');
  const [name, setName] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [coordinates, setCoordinates] = useState([{ lat: '', long: '' }]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [coordinatesWithElevation, setCoordinatesWithElevation] = useState<
    { lat: string; long: string; elevation: number }[]
  >([]);
  const d3ref = useRef(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const distanceBetweenPoints = (
    c1: { lat: string; long: string },
    c2: { lat: string; long: string }
  ): number => {
    //=acos(sin(lat1)*sin(lat2)+cos(lat1)*cos(lat2)*cos(lon2-lon1))*6371

    const lat1 = parseFloat(c1.lat);
    const lat2 = parseFloat(c2.lat);

    const long1 = parseFloat(c1.long);
    const long2 = parseFloat(c2.long);

    const sinLat1 = Math.sin(lat1);
    const sinLat2 = Math.sin(lat2);
    const cosLat1 = Math.cos(lat1);
    const cosLat2 = Math.cos(lat2);
    const cosLong1 = Math.cos(long1);
    const cosLong2 = Math.cos(long2);
    const sinLong1 = Math.sin(long1);
    const sinLong2 = Math.sin(long2);

    const distance =
      Math.acos(sinLat1 * sinLat2 + cosLat1 * cosLat2 * cosLong2 - cosLong1) *
      6371;
    console.log('distance', distance);
    return distance;
  };

  const transformCoordinatesToXY = () => {
    //The X Value is The DIstance Between the First Point and the Current Point
    //The Y Value is The Elevation
    let previousX = 0;

    console.log('coordinatesWithElevation', coordinatesWithElevation);

    const newCoordinates: { x: number; y: number }[] =
      coordinatesWithElevation.map((coordinate, index) => {
        const x =
          index === 0
            ? 0
            : //Distance between the 0 and the current point, not the current point and the previous point
              distanceBetweenPoints(coordinate, coordinates[index - 1]) +
              previousX;
        console.log('previousX', previousX);
        console.log('change', x - previousX);
        previousX = x;
        return { x: x / 10, y: coordinate.elevation / 10 };
      });
    console.log('newCoordinates', newCoordinates);
    return newCoordinates;
  };

  //@ts-ignore
  useEffect(() => {
    d3.select(d3ref.current).selectAll('*').remove();

    const svg2 = d3
      .select(d3ref.current)
      .append('svg')
      .attr('width', 2000)
      .attr('height', 2000);

    /*svg2
      .append('circle')
      .attr('cx', 250)
      .attr('cy', 250)
      .attr('r', 50)
      .attr('fill', 'steelblue');*/

    let me = 5;
    let you = 5 + '12';

    /*const lineData = [
      { x: 0, y: 80 },
      { x: 100, y: 200 },
      { x: 200, y: 50 },
      { x: 300, y: 100 },
      { x: 400, y: 20 },
      { x: 500, y: 300 },
    ];*/

    const lineData = transformCoordinatesToXY();
    /*const lineData = [
      { x: 0, y: 0 },
      { x: 40., y: 386 },
      { x: 82, y: 200 },
      { x: 120, y: 138 },
      { x: 165, y: 400 },
    ].map((v) => ({ x: v.x * 5, y: v.y }));
    */

    //@ts-ignore
    const line = d3
      .line()
      //@ts-ignore
      .x((d) => d.x)
      //@ts-ignore
      .y((d) => d.y);

    const path = svg2
      .append('path')
      .datum(lineData)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      //@ts-ignore
      .attr('d', line);

    for (let i = 0; i < lineData.length - 1; i++) {
      const segmentData = [lineData[i], lineData[i + 1]];

      const path = svg2
        .append('path')
        .datum(segmentData)
        .attr('fill', 'none')
        .attr('stroke', 'steelblue')
        //@ts-ignore
        .attr('d', line);

      const tooltip = d3
        .select('body')
        .append('div')
        .style('position', 'absolute')
        .style('z-index', '10')
        .style('visibility', 'hidden')
        .text('a simple tooltip');

      path
        .on('mouseover', function () {
          tooltip.text(
            `Change in x: ${
              segmentData[1].x - segmentData[0].x
            }, Change in y: ${segmentData[1].y - segmentData[0].y}`
          );
          return tooltip.style('visibility', 'visible');
        })
        .on('mousemove', function (event) {
          return tooltip
            .style('top', event.pageY - 10 + 'px')
            .style('left', event.pageX + 10 + 'px');
        })
        .on('mouseout', function () {
          return tooltip.style('visibility', 'hidden');
        });
    }

    return;

    console.log('coordinatesWithElevation', coordinatesWithElevation);
    const data = coordinatesWithElevation;

    const svg = d3.select(d3ref.current);
    console.log(d3ref);
    const xScale = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([0, 500]);

    //@ts-ignore
    const yScale = d3
      .scaleLinear()
      //@ts-ignore
      .domain([0, 1000])
      .range([1000, 0]);

    //const yScale = d3.scaleLinear().domain(d3.extent(data, d => d.elevation)).range([500, 0]);

    //
    const line2 = d3
      .line()
      .x((d, i) => xScale(i))
      //@ts-ignore
      .y((d) => yScale(d.elevation));
    // Add the line
    svg
      .append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 1.5)
      .attr(
        'd',
        //@ts-ignore
        d3
          .line()
          .x((d) => 1)
          //@ts-ignore
          .y((d) => d.elevation)
      );
    svg
      .append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      //@ts-ignore
      .attr('d', line);
    svg
      .append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')

      //@ts-ignore
      .attr('d', line);
  }, [coordinatesWithElevation]);

  type Field = 'lat' | 'long';

  const handleCoordinateChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const newCoordinates = [...coordinates];

    if (field === 'lat' && parseInt(value) > 90) {
      value = '90';
    }

    if (field === 'lat' && parseInt(value) < -90) {
      value = '-90';
    }

    if (field != 'lat' && field != 'long') {
      return;
    }
    const field_ = field as Field;

    newCoordinates[index][field_] = value;
    setCoordinates(newCoordinates);
  };

  const handleAddCoordinate = () => {
    setCoordinates([...coordinates, { lat: '', long: '' }]);
  };

  const handleRemoveCoordinate = (index: number) => {
    const newCoordinates = [...coordinates];
    newCoordinates.splice(index, 1);
    setCoordinates(newCoordinates);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add form submission logic
    if (tab === 'upload') {
      console.log('upload', name, file);

      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }

      // Send Multi part form requests
      const formData = new FormData();
      formData.append('name', name);
      formData.append('path', file as Blob);
      fetch('/api/elevation/', {
        method: 'POST',
        body: formData,
      });
    }

    if (tab === 'json') {
      console.log('json', name, coordinates);

      // Send JSON requests
      const res = await fetch('/api/elevation/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          coordinates,
        }),
      });

      const data = await res.json();

      console.log(data);

      // Set coordinatesWithElevation
      console.log(data.enrichedGeoJson.coordinates);
      setCoordinatesWithElevation(data.enrichedGeoJson.coordinates);
    }

    // Read Response
  };

  return (
    <div className="w-full flex flex-wrap p-4 pt-30">
      <h1>Elevation</h1>
      <div className="w-full mt-4">
        <div className="flex mb-4">
          <button
            className={`px-4 py-2 ${
              tab === 'upload' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => setTab('upload')}
          >
            Upload JSON
          </button>
          <button
            className={`px-4 py-2 ${
              tab === 'coordinates' ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
            onClick={() => setTab('json')}
          >
            Enter Coordinates
          </button>
        </div>
        {tab === 'upload' ? (
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <label>
              File:
              <input
                type="file"
                accept=".json"
                ref={fileInputRef}
                onChange={handleFileChange}
                required
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        ) : (
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            {coordinates.map((coordinate, index) => (
              <div key={index}>
                <label>
                  Latitude:
                  <input
                    type="number"
                    value={coordinate.lat}
                    onChange={(e) =>
                      handleCoordinateChange(index, 'lat', e.target.value)
                    }
                    required
                  />
                </label>
                <label>
                  Longitude:
                  <input
                    type="number"
                    value={coordinate.long}
                    onChange={(e) =>
                      handleCoordinateChange(index, 'long', e.target.value)
                    }
                    required
                  />
                </label>
                <button
                  type="button"
                  onClick={() => handleRemoveCoordinate(index)}
                >
                  -
                </button>
              </div>
            ))}
            <button type="button" onClick={handleAddCoordinate}>
              +
            </button>
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
      <div ref={d3ref} className="w-full h-96 bg-gray-200 mt-4"></div>
    </div>
  );
}
