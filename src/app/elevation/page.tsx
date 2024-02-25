'use client';
import '../styles/globals.css';

import { useSession } from 'next-auth/react';

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

  const { data: session, status } = useSession();

  let max_c_Y = 0;
  let min_c_Y = 0;
  let max_c_X = 0;
  let min_c_X = 0;

  const distanceBetweenPoints = (
    c1: { lat: string; long: string },
    c2: { lat: string; long: string }
  ): number => {
    //=acos(sin(lat1)*sin(lat2)+cos(lat1)*cos(lat2)*cos(lon2-lon1))*6371
    //acos(sin(lat1)*sin(lat2)+cos(lat1)*cos(lat2)*cos(lon2-lon1))*6371 (
    const lat1 = parseFloat(c1.lat);
    const lat2 = parseFloat(c2.lat);

    const long1 = parseFloat(c1.long);
    const long2 = parseFloat(c2.long);

    const sinlat1 = Math.sin(lat1);
    const sinlat2 = Math.sin(lat2);
    const coslat1 = Math.cos(lat1);
    const coslat2 = Math.cos(lat2);
    const coslon2lon1 = Math.cos(long2 - long1);
    const acos = Math.acos(sinlat1 * sinlat2 + coslat1 * coslat2 * coslon2lon1);

    const distance = acos * 6371;

    const sinLat1 = Math.sin(lat1);
    const sinLat2 = Math.sin(lat2);
    const cosLat1 = Math.cos(lat1);
    const cosLat2 = Math.cos(lat2);
    const cosLong1 = Math.cos(long1);
    const cosLong2 = Math.cos(long2);
    const sinLong1 = Math.sin(long1);
    const sinLong2 = Math.sin(long2);

    console.log('distance', distance);
    return distance;
  };

  const transformCoordinatesToXY = () => {
    //The X Value is The DIstance Between the First Point and the Current Point
    //The Y Value is The Elevation
    if (coordinatesWithElevation.length === 0) return [];

    let previousX = 0;
    let shortest_y = 40000;
    let tallest_y = -40000;

    console.log('coordinatesWithElevation', coordinatesWithElevation);

    const newCoordinates: { x: number; y: number }[] =
      coordinatesWithElevation.map((coordinate, index) => {
        const x =
          index === 0
            ? 0
            : //Distance between the 0 and the current point, not the current point and the previous point
              distanceBetweenPoints(coordinate, coordinates[index - 1]) +
              previousX;

        coordinate.elevation < shortest_y
          ? (shortest_y = coordinate.elevation)
          : null;

        coordinate.elevation > tallest_y
          ? (tallest_y = coordinate.elevation)
          : null;

        previousX = x;

        return { x: x, y: coordinate.elevation };
      });

    const max_x = newCoordinates[newCoordinates.length - 1].x;
    const normalizedCoordinates: { x: number; y: number }[] =
      newCoordinates.map((c) => {
        const y = (c.y * 500) / (tallest_y - shortest_y);
        return { x: (c.x / max_x) * 1000, y };
      });

    max_c_X = max_x;
    max_c_Y = tallest_y;
    min_c_X = 0;
    min_c_Y = shortest_y;
    //return normalizedCoordinates;
    return newCoordinates;
  };

  //@ts-ignore
  useEffect(() => {
    d3.select(d3ref.current).selectAll('*').remove();

    const height = 700;
    const width = 1000;

    const svg2 = d3
      .select(d3ref.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    /*svg2
      .append('circle')
      .attr('cx', 250)
      .attr('cy', 250)
      .attr('r', 50)
      .attr('fill', 'steelblue');*/

    /*const lineData = [
      { x: 0, y: 80 },
      { x: 100, y: 200 },
      { x: 200, y: 50 },
      { x: 300, y: 100 },
      { x: 400, y: 20 },
      { x: 500, y: 300 },
    ];*/

    const lineData = transformCoordinatesToXY();
    console.log('lineData', lineData);
    /*const lineData = [
      { x: 0, y: 0 },
      { x: 40., y: 386 },
      { x: 82, y: 200 },
      { x: 120, y: 138 },
      { x: 165, y: 400 },
    ].map((v) => ({ x: v.x * 5, y: v.y }));
    */
    let yScale2 = d3
      .scaleLinear()
      .domain([min_c_Y - 100, 1.5 * max_c_Y])
      .range([height, 0]);

    let xScale2 = d3
      .scaleLinear()
      .domain([0, 1.5 * max_c_X])
      .range([0, width]);

    //@ts-ignore
    const line = d3
      .line()
      //@ts-ignore
      .x((d) => xScale2(d.x))
      //@ts-ignore
      .y((d) => yScale2(d.y));

    svg2
      .selectAll('.dot')
      .data(lineData)
      .enter()
      .append('circle') // Uses enter() to deal with the data points one by one
      .attr('class', 'dot') // Assigns a class for easier CSS styling
      .attr('cx', function (d) {
        return xScale2(d.x);
      })
      .attr('cy', function (d) {
        return yScale2(d.y);
      })
      .attr('r', 10); // Radi

    const path = svg2
      .append('path')
      .datum(lineData)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      //@ts-ignore
      .attr('d', line);

    const legend = svg2.append('g').attr('transform', 'translate(50, 50)');

    legend
      .append('rect')
      .attr('width', 10)
      .attr('height', 10)
      .style('fill', 'steelblue');

    legend
      .append('text')
      .attr('x', 20)
      .attr('y', 10)
      .text('Line')
      .style('font-size', '15px')
      .attr('alignment-baseline', 'middle');

    // Gridlines
    const xGridlines = d3
      .axisBottom(xScale2)
      .ticks(10)
      .tickSize(-height)
      .tickFormat(() => '');

    svg2
      .append('g')
      .attr('class', 'grid')
      .attr('transform', 'translate(0,' + height + ')')

      .call(xGridlines);

    const yGridlines = d3.axisRight(yScale2).ticks(10).tickSize(-width);
    //.tickFormat(() => "2112");

    svg2.append('g').attr('class', 'grid').call(yGridlines);

    // Axis labels
    svg2
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 0 - 30)
      .attr('x', 0 - height / 2)
      .attr('dy', '1em')
      .style('text-anchor', 'middle')
      .text('Elevation');

    svg2
      .append('text')
      .attr(
        'transform',
        'translate(' + width / 2 + ' ,' + (height + 20 + 20) + ')'
      )
      .style('text-anchor', 'middle')
      .text('Distance');

    for (let i = 0; i < lineData.length - 1; i++) {
      const segmentData = [lineData[i], lineData[i + 1]];

      const path = svg2
        .append('path')
        .datum(segmentData)
        .attr('fill', 'none')
        .attr('stroke', 'steelblue')
        .attr('stroke-width', 3.5)

        //@ts-ignore
        .attr('d', line);

      const tooltip = d3
        .select('body')
        .append('div')
        .style('position', 'absolute')
        .style('z-index', '10')
        .style('visibility', 'hidden')
        .text('a simple tooltip');

      const pathInvisible = svg2
        .append('path')
        .datum(segmentData)
        .attr('fill', 'none')
        .attr('stroke', 'transparent')
        .attr('stroke-width', 10) // Increase this number to increase the mouseover margin
        //@ts-ignore
        .attr('d', line);

      pathInvisible
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
      fetch('/api/auth/elevation/', {
        method: 'POST',
        body: formData,
      });
    }

    if (tab === 'json') {
      console.log('json', name, coordinates);

      // Send JSON requests
      const res = await fetch('/api/auth/elevation/', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          name,
          path: {
            coordinates,
          },
        }),
      });

      if (!res.ok) {
        console.log('Error');
        return;
      }

      const data = await res.json();

      console.log(data);

      // Set coordinatesWithElevation
      setCoordinatesWithElevation(
        data.path.map((c: { lat: string; long: string; elevation: number }) => {
          return {
            lat: c.lat,
            long: c.long,
            elevation: c.elevation * 3.28,
          };
        })
      );
    }

    // Read Response
  };

  if (status != 'authenticated') {
    return <a href="/api/auth/signin">Sign in</a>;
  }

  return (
    <div className="w-full flex flex-wrap p-4 pt-20">
      <div className="w-full flex flex-wrap justify-around m-5  p-5">
        <h1 className="text-left text-2xl"> Elevation Application </h1>
      </div>
      <div className="w-full mt-4 ">
        <div className="flex flex-wrap w-full justify-around mb-4">
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
            <label className="text-2xl font-bold">
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
          <div className="w-full flex flex-wrap flex-col items-center justify-around">
            <form onSubmit={handleSubmit}>
              <label className="w-full text-2xl pt-20 pb-20">
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
                    className="font-bold text-2xl p-2 m-1"
                    type="button"
                    onClick={() => handleRemoveCoordinate(index)}
                    title="Remove Coordinate"
                  >
                    -
                  </button>
                </div>
              ))}
              <button
                className="w-full font-bold text-2xl p-3 m-3 "
                type="button"
                onClick={handleAddCoordinate}
              >
                + ADD COORDINATE
              </button>
              <button className="w-full font-bold text-2xl " type="submit">
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
      <div ref={d3ref} className="w-full bg-gray-200 mt-4 pb-20"></div>
      <div className="w-full flex flex-wrap justify-around m-5  p-5">
        <div className="w-1/2 ">
          Total Elevation +{' '}
          {coordinatesWithElevation.reduce((acc, coordinate, index) => {
            if (index === 0) return 0;
            if (
              coordinate.elevation >
              coordinatesWithElevation[index - 1].elevation
            ) {
              return (
                acc +
                coordinate.elevation -
                coordinatesWithElevation[index - 1].elevation
              );
            } else return acc;
          }, 0)}
        </div>
        <div className="w-1/2 ">
          Total Elevation -{' '}
          {coordinatesWithElevation.reduce((acc, coordinate, index) => {
            if (index === 0) return 0;
            if (
              coordinate.elevation <
              coordinatesWithElevation[index - 1].elevation
            ) {
              return (
                acc +
                coordinatesWithElevation[index - 1].elevation -
                coordinate.elevation
              );
            } else return acc;
          }, 0)}
        </div>
      </div>
    </div>
  );
}

//Filter -> Only Reduce if the next point is higher than the current point
