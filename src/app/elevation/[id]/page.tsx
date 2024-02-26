import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import * as d3 from 'd3';

import '../../styles/globals.css';

type CoordinateWithElevation = {
  lat: string;
  long: string;
  elevation: number;
};

type ElevationData = {
  id: string;

  path: CoordinateWithElevation[];
};

type ElevationResponse = {
  id: string;
  userid: string;
  email: string;
  name: string;
} & ElevationData;

interface DataPoint {
  x: number;
  y: number;
}

interface LineChartProps {
  data: DataPoint[];
}

interface GridProps {
  scale: d3.ScaleLinear<number, number>;
  tickSize: number;
  transform: string;
}

const XGrid: React.FC<GridProps> = ({ scale, tickSize, transform }) => {
  const ticks = scale.ticks(10).map((tick) => (
    <g key={tick}>
      <line
        stroke="gray"
        x1={scale(tick)}
        x2={scale(tick)}
        y1={0}
        y2={tickSize}
      />
      <text
        textAnchor="middle"
        x={scale(tick)}
        y={tickSize + 50} // Adjust this value to move the label up or down
      >
        {tick}
      </text>
    </g>
  ));

  return (
    <g className="grid x-grid" transform={transform}>
      {ticks}
    </g>
  );
};

const YGrid: React.FC<GridProps> = ({ scale, tickSize, transform }) => {
  const ticks = scale.ticks(10).map((tick) => (
    <g key={tick}>
      <line
        stroke="gray"
        x1={0}
        x2={tickSize}
        y1={scale(tick)}
        y2={scale(tick)}
      />
      <text
        textAnchor="end"
        x={-40} // Adjust this value to move the label left or right
        y={scale(tick) - 10}
        dy=".32em" // Vertically center the text
      >
        {tick}
      </text>
    </g>
  ));

  return (
    <g className="grid y-grid" transform={transform}>
      {ticks}
    </g>
  );
};

async function getData(id: string) {
  console.log(process.env.DOMAIN);
  // fetch data
  try {
    const res = await fetch(`${process.env.DOMAIN}/api/auth/elevation/${id}`);

    console.log(res.status);

    if (!res.ok) {
      return null;
    }

    // parse json
    const data: ElevationResponse = await res.json();

    console.log(data);

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function Page({
  params: { id },
}: {
  params: { id: string };
}) {
  const data = await getData(id);

  const coordinates = data?.path;

  if (!coordinates) {
    return <h1>Not Found</h1>;
  }

  let max_c_Y = 0;
  let min_c_Y = 0;
  let max_c_X = 0;
  let min_c_X = 0;

  //acos(sin(lat1)*sin(lat2)+cos(lat1)*cos(lat2)*cos(lon2-lon1))*6371
  //=ACOS((SIN(RADIANS(Lat1)) * SIN(RADIANS(Lat2))) + (COS(RADIANS(Lat1)) * COS(RADIANS(Lat2))) * (COS(RADIANS(Lon2) - RADIANS(Lon1)))) * 6371

  const distanceBetweenPoints = (
    c1: CoordinateWithElevation,
    c2: CoordinateWithElevation
  ): number => {
    const lat1 = (parseFloat(c1.lat) / 180) * Math.PI;
    const lat2 = (parseFloat(c2.lat) / 180) * Math.PI;

    const long1 = (parseFloat(c1.long) / 180) * Math.PI;
    const long2 = (parseFloat(c2.long) / 180) * Math.PI;

    const sinlat1 = Math.sin(lat1);
    const sinlat2 = Math.sin(lat2);
    const coslat1 = Math.cos(lat1);
    const coslat2 = Math.cos(lat2);
    const coslon2lon1 = Math.cos(long2 - long1);
    const acos = Math.acos(sinlat1 * sinlat2 + coslat1 * coslat2 * coslon2lon1);

    const distance = acos * 6371;
    //Distance in KM
    //Convert to Miles?

    return distance / 1.609;
  };

  //@ts-ignore

  const transformCoordinatesToXY = () => {
    //The X Value is The DIstance Between the First Point and the Current Point
    //The Y Value is The Elevation
    if (coordinates.length === 0) return [];

    let previousX = 0;
    let shortest_y = 40000;
    let tallest_y = -40000;

    const newCoordinates: { x: number; y: number }[] = coordinates.map(
      (coordinate, index) => {
        coordinate.elevation *= 3.28084; //Convert to Feet
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
      }
    );

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

  const height = 700;
  const width = 800;
  const margin = { top: 50, right: 50, bottom: 50, left: 50 };

  /*const svg2 = d3
    .select(d3ref.current)
    .append('svg')
    .attr('width', width)
    .attr('height', height);*/

  const lineData = transformCoordinatesToXY();

  let yScale2 = d3
    .scaleLinear()
    .domain([Math.floor((min_c_Y - 100) / 1000) * 1000, 1.5 * max_c_Y])
    .range([height, 0]);

  let xScale2 = d3
    .scaleLinear()
    .domain([0, 1.5 * max_c_X])
    .range([0, width]);

  const line = d3
    .line()
    //@ts-ignore
    .x((d) => xScale2(d.x))
    //@ts-ignore
    .y((d) => yScale2(d.y));

  const xGridlines = d3
    .axisBottom(xScale2)
    .ticks(10)
    .tickSize(-height)
    .tickFormat(() => '');

  //@ts-ignore
  const pathData = line(lineData);

  if (!data) {
    return <h1>Not Found</h1>;
  }

  return (
    <div className="flex flex-wrap items-center justify-center bg-pink-100 min-h-screen">
      <div className="w-full items-center pt-40">
        <div className="w-full items-center">
          <h1 className="text-4xl font-bold text-center">{data.name}</h1>
        </div>
        <div className="w-full items-center">
          <h1 className="text-2xl font-bold text-center">{data.email}</h1>
        </div>
      </div>
      <div className="w-full pt-10 items-center">
        <h1 className="text-4xl font-bold text-center">Elevation Profile</h1>
      </div>
      <div className="w-full items-center justify-center">
        <svg
          width={width + 200}
          height={height + 200}
          viewBox={`-100 -100 ${width + 100} ${height + 300}`}
          className=""
        >
          <XGrid
            scale={xScale2}
            tickSize={height}
            transform={`translate(0,${0})`}
          />
          <YGrid
            scale={yScale2}
            tickSize={width}
            transform={`translate(0,0)`}
          />
          {/* ...rest of your SVG elements... */}
          <path d={pathData} fill="none" stroke="steelblue" />
          {lineData.map((d, i) => (
            <circle
              key={i}
              className="dot"
              cx={xScale2(d.x)}
              cy={yScale2(d.y)}
              r={10}
            />
          ))}
          {/* Add other SVG elements as needed */}
        </svg>
      </div>
    </div>
  );
}
