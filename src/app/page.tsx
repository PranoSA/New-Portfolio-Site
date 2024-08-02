'use client';

import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import { ReactNode } from 'react';
// @ts-nocheck
import { UnicodeCharacterInformation } from '../components/unicode';
import { UnicodePanel } from '../components/unicode';
import { CorsPanel } from '../components/cors_panel';
import './globals.css';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

type ArticleDescription = {
  URL: string;
  Description: string;
  Title: string;
};

const articleDescriptions: ArticleDescription[] = [
  {
    Title: 'OpenVPN Networking',
    Description: `                In this article I created separate networks on a single linux
                for Wireshark) to capture packets on one network interface, and
                then use Wireshark to analyze the packets. I also use OpenVPN to
                create a VPN Tunnel between two machines, and then use Wireshark
                to capture packets on the VPN Tunnel.`,
    URL: 'https://articles.compressibleflowcalculator.com/OpenVPN',
  },
  {
    Title: 'Video Transcoding With FFMEPG',
    Description: `In this article I analyze a popular steraming protocol built on HTTP called 
    MPEG-DASH (Dynamic Adaptive Streaming over HTTP). I then use FFMEPG to transcode a video 
    file to what are called mp4 fragments (.mps) and then create a manifest file (.mpd) that
     contains meta-information of the chosen streams and encoding bit rates for streaming options
      for each media stream (audio and video). You can then use a simple Javascript File on an HTML
       file to serve the video to a client and see throug
    h the Networking Console how the video matches with the contents of the manifest file.`,
    URL: 'https://articles.compressibleflowcalculator.com/MPEG-DASH',
  },
  {
    Title: 'Digital Maps',
    Description: `                In this article I introduce the concept of Digital Maps, and how
                they compare to Image Maps and SVG Maps. Image Maps give visual
                information to the user and may involve pre-rendered
                geographical information about a variables, SVG Maps on the web
                allow native javascript interaction with image, but digital maps
                offer high degree of variant information handling and display
                capabilities, allowing the use of various raster data formats,
                vector data formats, and tiled vector and raster data formats,
                as well as rich display capabilities (Heat maps, contour maps,
                clustering, etc.), and interaction with a geoServer to render
                new layers on a map.`,
    URL: 'https://articles.compressibleflowcalculator.com/Digital_Maps',
  },
  {
    Title: 'DNSSEC and Reverse DNS Part 1',
    Description: `                In this first part of the series, we will set up the basic tools
                with Docker to run a parent and child nameserver as well as a
                Dig DNS client. We Will also go over reading the output of the
                Dig Command and concepts such as DNS flags, EDNS, and TShark/
                Wireshark. We will then talk about inspecting the DNS packets
                inside of wireshark using tshark to capture the packets on the
                DNS client interface. We will then inspect the idea of zone
                files and the records contained inside of them. These articles
                will not teach about DNS and DNS-SEC basic conepts but Will
                refer to other articles on the topic, and rather lay groundwork
                for experimentation with DNS in a easy to use environment.We
                will also go over features of the dig command`,
    URL: 'https://articles.compressibleflowcalculator.com/DNSSEC_PART_1',
  },
  {
    Title: 'DNSSEC and Reverse DNS Part 2',
    Description: `                 In this article, we will build off the 2nd and fix the DNS-SEC
                implimentation by adding the appropriate DS record to the parent
                server to properly authenticate the zone transfer. Here, we will
                be able to use tshark as well as the dig response to see the
                verification of the DNS in the EDNS flags as well as the DNSSEC
                flags in the request.`,
    URL: 'https://articles.compressibleflowcalculator.com/DNSSEC_PART_2',
  },
  {
    Title: 'Introduction to Timestamps in Postgres',
    Description: `In thie article, I will discuss the basic premises of Clocks, Timers, and Time Zones and 
    Concepts such as UTC, IAT, Unix Timestamps, and Timestamp Formats. Then I will go over examples of the time 
    library in GO, and talk about the "awareness" time libraries have with dealing with time zones and locations when
    making time calculations. Then I will introduce the different Time and Date types in Postgres, how they work, and examples
    of queries to make time calculations such as Evaluating a Timestamp at a particular Time Zone (If It Has Time Zone Information), 
    Calculating the Time Between Events, and extracting second, minute, hour, day, month, year, and epoch information from a timestamp.`,
    URL: 'https://articles.compressibleflowcalculator.com/Timestamp_Introduction_Postgres',
  },
];

export default function Home() {
  const [openPanels, setPanels] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const [openAriclePanels, setArticlePanels] = useState<boolean[]>(
    articleDescriptions.map(() => false)
  );
  const [loading, setLoading] = useState<boolean>(false);
  //Encoding Mode, (Decimal or Hexadecimal)

  return (
    <main className="flex w-full min-h-screen justify-center p-24">
      <div className="flex flex-wrap justify-center w-full">
        <div className="w-full  p-4 text-center">
          <h1 className="w-full text-6xl font-bold"> Portfolio Page </h1>
        </div>

        <div className="w-full  p-4 text-center">
          <Link href="/about">
            <button
              onClick={() => setLoading(true)}
              className="p-5 text-center text-3xl rounded transform transition duration-500 ease-in-out hover:scale-110 hover:text-4xl hover:text-white"
            >
              {' '}
              About Me{' '}
            </button>
          </Link>
        </div>

        <div className="w-full p-4 text-center pb-30 pt-10">
          <h1 className="w-full text-5xl font-bold "> Projects</h1>
        </div>

        <div
          onClick={() =>
            setPanels([!openPanels[0] || loading, ...openPanels.slice(1)])
          }
          className="w-full md:w-1/2 p-20 pt-50 rounded flex flex-wrap p-4 text-center min-h-20 cursor-pointer hover:bg-blue-300 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out"
        >
          <h1 className="w-full text-3xl font-bold"> Unicode Project </h1>
          <div className="w-full p-4 text-center flex-center">
            {openPanels[0] ? (
              <div className="w-full flex flex-wrap p-4 text-center justify-center">
                <div className="w-2/3 p-5 text-center">
                  Learn About the Binary Representation of Textual Objects in
                  Unicode. This project demonstrate the use of Unicode Character
                  Standards, Unicode Character Information, and Encoding of
                  Characters using UTF-8, UTF-16, and UTF-32. Also Creates a
                  Link Based on the Character Form to my Full-Fledged Unicode
                  Inspection Application.
                </div>
                <div className="w-full w-flex flex-wrap p-4 text-center">
                  <Link href="/unicode">
                    <button
                      className="p-5 text-center bg-blue-200 rounded"
                      onClick={() => {
                        setLoading(true);
                        setPanels([
                          !openPanels[0] || loading,
                          ...openPanels.slice(1),
                        ]);
                      }}
                    >
                      {' '}
                      View Unicode Mini-App{' '}
                    </button>
                  </Link>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <div
          onClick={() =>
            setPanels([
              ...openPanels.slice(0, 1),
              !openPanels[1],
              ...openPanels.slice(2),
            ])
          }
          className="w-full md:w-1/2 p-20 pt-50 flex flex-wrap p-4 text-center min-h-20 cursor-pointer hover:bg-blue-400 hover:shadow-lg transform hover:scale-90 transition-all duration-200 ease-in-out"
        >
          <h1 className="w-full text-3xl font-bold"> CORS Test </h1>
          <div className="w-full p-4 text-center flex-center">
            {openPanels[1] ? (
              <div className="w-full flex flex-wrap p-4 text-center justify-center">
                <div className="w-2/3 p-5 text-center">
                  Run Pre-Configured Integration Tests against a Certain HTTP(S)
                  Path Using a Certain Origin and Method, and Headers. This will
                  allow you to tell if the server is configured properly or not
                  for your frontend application running in a different origin to
                  make requests to.
                </div>
                <div className="w-full w-flex flex-wrap p-4 text-center">
                  <Link href="/cors">
                    <button
                      className="p-5 text-center bg-blue-200 rounded"
                      onClick={() => setLoading(true)}
                    >
                      {' '}
                      View Mini-CORS Tester{' '}
                    </button>
                  </Link>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <div
          onClick={() =>
            setPanels([
              ...openPanels.slice(0, 2),
              !openPanels[2] || loading,
              ...openPanels.slice(3),
            ])
          }
          className="w-full md:w-1/2 p-20 pt-50 flex flex-wrap p-4 text-center min-h-20 cursor-pointer hover:bg-blue-100 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out"
        >
          <h1 className="w-full text-3xl font-bold">Compilers Project </h1>
          <div className="w-full p-4 text-center flex-center">
            {openPanels[2] ? (
              <div className="w-full flex flex-wrap p-4 text-center justify-center">
                <div className="w-2/3 p-5 text-center">
                  Expression Parser and Compiler That Builds a Stack
                  representation, and Abstract Syntax Tree (AST) and a Parse
                  Tree using Generated Grammar Rules. This user is allowed to
                  generate their own grammar rules by specifying the precendence
                  of operators and the associativity of operators.
                </div>
                <div className="w-full w-flex flex-wrap p-4 text-center">
                  <Link href="/compilers">
                    <button
                      className="p-5 text-center bg-blue-200 rounded"
                      onClick={() => setLoading(true)}
                    >
                      {' '}
                      View Compiler App{' '}
                    </button>
                  </Link>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <div className="w-full md:w-1/2 p-20 pt-50 flex flex-wrap p-4 text-center min-h-20 cursor-pointer hover:bg-blue-100 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out">
          <h1 className="w-full text-3xl font-bold">Shopping List Project</h1>
        </div>

        <div className="w-full md:w-1/2 p-20 flex flex-wrap p-4 text-center min-h-20 cursor-pointer hover:bg-blue-100 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out">
          <h1 className="w-full text-3xl font-bold">Media Servers Project</h1>
        </div>

        <div
          onClick={() =>
            setPanels([
              ...openPanels.slice(0, 5),
              !openPanels[5],
              ...openPanels.slice(6),
            ])
          }
          className="w-full md:w-1/2 p-20 flex flex-wrap p-4 text-center min-h-20 cursor-pointer hover:bg-blue-100 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out"
        >
          <div className="w-full p-4 text-center">
            <h1 className="w-full text-3xl font-bold">Other Projects</h1>
          </div>
          {openPanels[5] && (
            <div className="w-full flex flex-wrap p-4 text-center justify-center">
              <div className="w-full justify-center p-4">
                Miscellaneous Other Projects that I have worked on.{' '}
              </div>
              <Link href="/otherprojects">
                <button className="p-5 text-center bg-blue-200 rounded">
                  {' '}
                  View Other Projects{' '}
                </button>
              </Link>
            </div>
          )}
        </div>

        <div
          onClick={() =>
            setPanels([
              ...openPanels.slice(0, 6),
              !openPanels[6] || loading,
              ...openPanels.slice(7),
            ])
          }
          className="w-full md:w-1/2 p-20 pt-50 flex flex-wrap p-4 text-center min-h-20 cursor-pointer hover:bg-blue-100 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out"
        >
          <h1 className="w-full text-3xl font-bold">Elevation Project </h1>
          <div className="w-full p-4 text-center flex-center">
            {openPanels[6] ? (
              <div className="w-full flex flex-wrap p-4 text-center justify-center">
                <div className="w-2/3 p-5 text-center"></div>
                <div className="w-full flex flex-wrap flex-col p-4 text-center">
                  <Link href="/elevation/view">
                    <button
                      className="p-5 m-5 text-center bg-blue-200 rounded hover:bg-blue-300 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out"
                      onClick={() => setLoading(true)}
                    >
                      {' '}
                      View Elevation Charts{' '}
                    </button>
                  </Link>
                  <Link href="/elevation">
                    <button
                      className="p-5 m-5 text-center bg-blue-200 rounded hover:bg-blue-300 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out"
                      onClick={() => setLoading(true)}
                    >
                      {' '}
                      Create Elevation Chart{' '}
                    </button>
                  </Link>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        <div className="w-full w p-4 text-center min-h-20">
          <h1 className="w-full text-5xl font-bold "> Articles </h1>
        </div>

        {articleDescriptions.map((article, index) => {
          return (
            <div
              key={index}
              className="w-full md:w-2/3 p-20 flex flex-wrap p-4 text-center min-h-20 cursor-pointer hover:bg-blue-100 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out"
            >
              <h1
                key={index}
                className="w-full text-3xl font-bold"
                onClick={() => {
                  setArticlePanels([
                    ...openAriclePanels.slice(0, index),
                    !openAriclePanels[index],
                    ...openAriclePanels.slice(index + 1),
                  ]);
                }}
              >
                {' '}
                {article.Title}
              </h1>
              {openAriclePanels[index] ? (
                <div className="m-5">
                  <p className="w-full pb-4 ">{article.Description}</p>
                  <div className="w-full w-flex flex-wrap p-4 text-center h-15"></div>
                  <a
                    href={article.URL}
                    className="p-5 text-center bg-blue-200 rounded m-5"
                  >
                    Read Article{' '}
                  </a>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </main>
  );
}
