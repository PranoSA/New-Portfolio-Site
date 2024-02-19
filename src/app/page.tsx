'use client';

// @ts-nocheck
import { UnicodeCharacterInformation } from '../components/unicode';
import { UnicodePanel } from '../components/unicode';
import { CorsPanel } from '../components/cors_panel';
import './globals.css';


import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [openPanels, setPanels] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const [openAriclePanels, setArticlePanels] = useState<boolean[]>([false]);
  //Encoding Mode, (Decimal or Hexadecimal)

  return (
    <main className="flex w-full min-h-screen justify-center` p-24">
      <div className="flex flex-wrap justify-center w-full">
        <div className="w-full  p-4 text-center">
          <h1 className="w-full text-6xl font-bold"> Portfolio Page </h1>
        </div>

        <div className="w-full p-4 text-center pb-30 pt-10">
          <h1 className="w-full text-5xl font-bold "> Projects: </h1>
        </div>

      <div 
            onClick={() =>
              setPanels([
                !openPanels[0],
                ...openPanels.slice(1),
              ])
            }
        className="w-full md:w-1/2 p-20 pt-50 flex flex-wrap p-4 text-center min-h-20 cursor-pointer hover:bg-blue-100 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out">
          <h1 className="w-full text-3xl font-bold"> Unicode Project  </h1>
            <div className='w-full p-4 text-center flex-center'>
                {openPanels[0] ? (
                  <div className='w-full flex flex-wrap p-4 text-center justify-center'>
                  <div className='w-2/3 p-5 text-center'>
                      Learn About the Binary Representation of Textual Objects in Unicode. This project 
                      demonstrate the use of Unicode Character Standards, Unicode Character Information, 
                      and Encoding of Characters using UTF-8, UTF-16, and UTF-32. 
                      Also Creates a Link Based on the Character Form to my Full-Fledged Unicode Inspection Application.
                  </div>
                  <div className='w-full w-flex flex-wrap p-4 text-center'>
                    <Link href="/unicode">
                      <button className='p-5 text-center bg-blue-200 rounded'> View Unicode Mini-App </button> 
                  </Link>
                  </div>
                  </div>
                ):null}
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
        className="w-full md:w-1/2 p-20 pt-50 flex flex-wrap p-4 text-center min-h-20 cursor-pointer hover:bg-blue-100 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out">
          <h1 className="w-full text-3xl font-bold"> CORS Test </h1>
            <div className='w-full p-4 text-center flex-center'>
                {openPanels[1] ? (
                  <div className='w-full flex flex-wrap p-4 text-center justify-center'>
                  <div className='w-2/3 p-5 text-center'>
                      Run Pre-Configured Integration Tests against a Certain HTTP(S) Path Using a Certain 
                      Origin and Method, and Headers. This will allow you to tell if the server is configured 
                      properly or not for your frontend application running in a different origin to make requests to.
                  </div>
                  <div className='w-full w-flex flex-wrap p-4 text-center'>
                    <Link href="/cors">
                      <button className='p-5 text-center bg-blue-200 rounded'> View Mini-CORS Tester </button> 
                  </Link>
                  </div>
                  </div>
                ):null}
            </div>
        </div>


        <div             
        onClick={() =>
              setPanels([
                ...openPanels.slice(0, 2),
                !openPanels[2],
                ...openPanels.slice(3),
              ])
            }
        className="w-full md:w-1/2 p-20 pt-50 flex flex-wrap p-4 text-center min-h-20 cursor-pointer hover:bg-blue-100 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out">
          <h1 className="w-full text-3xl font-bold">Compilers Project </h1>
            <div className='w-full p-4 text-center flex-center'>
                {openPanels[2] ? (
                  <div className='w-full flex flex-wrap p-4 text-center justify-center'>
                  <div className='w-2/3 p-5 text-center'>
                      Expression Parser and Compiler That Builds a Stack representation,
                      and Abstract Syntax Tree (AST) and a Parse Tree using Generated Grammar Rules.
                      This user is allowed to generate their own grammar rules by specifying the precendence of operators and the associativity of operators.

                  </div>
                  <div className='w-full w-flex flex-wrap p-4 text-center'>
                    <Link href="/compilers">
                      <button className='p-5 text-center bg-blue-200 rounded'> View Compiler App </button> 
                  </Link>
                  </div>
                  </div>
                ):null}
            </div>
        </div>

        <div className="w-full md:w-1/2 p-20 pt-50 flex flex-wrap p-4 text-center min-h-20 cursor-pointer hover:bg-blue-100 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out">
          <h1 className="w-full text-3xl font-bold">Shopping List Project</h1>
        </div>

        <div className="w-full md:w-1/2 p-20 flex flex-wrap p-4 text-center min-h-20 cursor-pointer hover:bg-blue-100 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out">
          <h1 className="w-full text-3xl font-bold">Media Servers Project</h1>
        </div>

        <div className="w-full md:w-1/2 p-20 flex flex-wrap p-4 text-center min-h-20 cursor-pointer hover:bg-blue-100 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out">
          <h1 className="w-full text-3xl font-bold">Other Project</h1>
        </div>

        <div className="w-full w p-4 text-center min-h-20">
        <div className="w-full w p-4 text-center min-h-20">
          <h1 className="w-full text-5xl font-bold "> Articles: </h1>
        </div>

        <div className="w-full md:w-2/3 p-20 flex flex-wrap p-4 text-center min-h-20 cursor-pointer hover:bg-blue-100 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out">
        <h1
            className="w-full text-3xl font-bold"
            onClick={() => {
              setArticlePanels([
                !openAriclePanels[0],
                ...openAriclePanels.slice(1),
              ]);
            }}
          >
            {' '}
            OpenVPN Networking
          </h1>
          {openAriclePanels[0] ? (
            <div className="m-5">
              <p className="w-full pb-4 ">
                In this article I created separate networks on a single linux
                for Wireshark) to capture packets on one network interface, and
                then use Wireshark to analyze the packets. I also use OpenVPN to
                create a VPN Tunnel between two machines, and then use Wireshark
                to capture packets on the VPN Tunnel.
              </p>
              <a
                href="https://articles.compressibleflowcalculator.com/OpenVPN"
                className="p-5 text-center bg-blue-200 rounded"
              >
                Read Article{' '}
              </a>
            </div>
          ) : null}
        </div>
        <div className="w-full md:w-1/2 p-20 flex m-10 flex-wrap p-4 text-center min-h-20 cursor-pointer hover:bg-blue-100 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out">
          <h1
            className="w-full text-3xl font-bold"
            onClick={() => {
              setArticlePanels([
                false,
                !openAriclePanels[1],
                ...openAriclePanels.slice(2),
              ]);
              console.log(openAriclePanels);
            }}
          >
            {' '}
            Video Transcoding With FFMEPG
          </h1>
          {openAriclePanels[1] ? (
            <div className="m-5">
              <p className="w-full pb-4 ">
                In this article I analyze a popular steraming protocol built on
                HTTP called MPEG-DASH (Dynamic Adaptive Streaming over HTTP). I
                then use FFMEPG to transcode a video file to what are called mp4
                fragments (.mps) and then create a manifest file (.mpd) that
                contains meta-information of the chosen streams and encoding bit
                rates for streaming options for each media stream (audio and
                video). You can then use a simple Javascript File on an HTML
                file to serve the video to a client and see through the
                Networking Console how the video matches with the contents of
                the manifest file.
              </p>
              <a
                href="https://articles.compressibleflowcalculator.com/MPEG-DASH"
                className="p-5 text-center bg-blue-200 rounded"
              >
                Read Article{' '}
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </main>
  );
}
