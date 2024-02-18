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
  const [unicodeSet, setUnicode] = useState<string>('');
  const [unicodeInfo, setUnicodeInfo] = useState<UnicodeCharacterInformation>({
    na: '',
    blk: '',
    cp: '',
    na1: '',
    dm: '',
    gc: '',
    sc: '',
  });
  const [openAriclePanels, setArticlePanels] = useState<boolean[]>([false]);
  //Encoding Mode, (Decimal or Hexadecimal)
  const [encodingMode, setEncodingMode] = useState<string>('hexadecimal');

  const [unicodeLink, setUnicodeLink] = useState<string>('');

  const [endpoint, setEndpoint] = useState<string>('');
  const [method, setMethod] = useState<string>('');
  const [headers, setHeaders] = useState<string>('');
  const [origin, setOrigin] = useState<string>('');
  const [credentials, setCredentials] = useState<string>('');
  const [allowedHeaders, setAllowedHeaders] = useState<string>('');
  const [allowedMethods, setAllowedMethods] = useState<string>('');
  const [allowedOrigin, setAllowedOrigin] = useState<string>('');
  const [allowedCredentials, setAllowedCredentials] = useState<string>('');
  const [simple, setSimple] = useState<boolean>(false);
  const [allowned, setAllowned] = useState<boolean>(false);


  const changeEncodingMode = (mode: string) => {
    setEncodingMode(mode);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUnicode(e.target.value);
    //Hexi Value
    const hex = e.target.value;

    // Parse the Hexadecimal Value to a Unicode Character
    const unicode = String.fromCharCode(parseInt(hex, 16));

    setUnicodeLink(
      `https://unicode.compressibleflowcalculator.com?conversions=[{"value":"${unicode}"}]`
    );
  };

  const fetchUnicode = async () => {
    //ENsure that the unicode is a valid string

    if (unicodeSet.length < 1) return;

    // Make Sure Hexadecimal Values [0-9] and [A-F] are the only values in the string
    if (!/^[0-9A-F]+$/i.test(unicodeSet)) return;

    const response = await fetch(
      `https://worker-steep-limit-1990.pcadler.workers.dev/${unicodeSet}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();

    setUnicodeInfo(data);
  };

  const handleCorsChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    switch (name) {
      case 'endpoint':
        setEndpoint(e.target.value);
        break;
      case 'method':
        setMethod(e.target.value);
        break;
      case 'headers':
        setHeaders(e.target.value);
        break;
      case 'origin':
        setOrigin(e.target.value);
        break;

      case 'credentials':
        setCredentials(e.target.value ? 'true' : 'false');
        break;
      default:
        break;
    }
  };

  const fetchCors = async () => {
    // Call to /api/cors/route.ts

    var body = {
      endpoint: endpoint,
      method: method,
      headers: headers,
      origin: origin,
      credentials: credentials,
    };

    console.log(body);

    const response = await fetch('/api/cors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    // Now we have the response from the server
    //set the state of the component

    const data = await response.json();

    setAllowedHeaders(data.Allowed_Headers);
    setAllowedMethods(data.Allowed_Methods);
    setAllowedOrigin(data.Allowed_Origin);
    setAllowedCredentials(data.Allowed_Credentials);
    setSimple(data.Simple);
    setAllowned(data.Allowed);
  };

  return (
    <main className="flex w-full min-h-screen justify-center` p-24">
      <div className="flex flex-wrap justify-center w-full">
        <div className="w-full  p-4 text-center">
          <h1 className="w-full text-6xl font-bold"> Portfolio Page </h1>
        </div>

        <div className="w-full p-4 text-center pb-40">
          <h1 className="w-full text-5xl font-bold "> Projects: </h1>
        </div>

        <div className="w-full p-20 md:w-1/2 flex border-5 border-red-500 flex-wrap p-4 text-center min-h-20 cursor-pointer hover:bg-blue-100 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out">
          <div
            className="w-full p-4 text-center"
            onClick={() =>
              setPanels([!openPanels[0], ...openPanels.slice(1, -1)])
            }
          >
            <h1 className="w-full text-3xl font-bold "> Unicode Project </h1>
          </div>
          <div className="w-full p-4 text-center">
            {UnicodePanel({
              open: openPanels[0],
              submitUnicode: fetchUnicode,
              setCancel: () => {
                setPanels([false, ...openPanels.slice(1, -1)]);
                console.log('Closing');
              },
              unicode_info: unicodeInfo,
              handleChange: handleChange,
              unicodeLink: unicodeLink,
            })}
          </div>
        </div>

        <div className="w-full md:w-1/2 p-10 flex flex-wrap p-4 text-center min-h-20 cursor-pointer hover:bg-blue-100 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out">
          <div
            className="w-full p-4 text-center "
            onClick={() =>
              setPanels([
                ...openPanels.slice(0, 1),
                !openPanels[1],
                ...openPanels.slice(2),
              ])
            }
          >
            <h1 className="w-full text-3xl font-bold "> CORS Project </h1>
          </div>
          {CorsPanel({
            open: openPanels[1],
            endpoint: endpoint,
            method: method,
            headers: headers,
            origin: origin,
            close: () =>
              setPanels([
                openPanels[0],
                !openPanels[1],
                ...openPanels.slice(1, -1),
              ]),
            credentials: credentials,
            handleChange: handleCorsChange,
            handleSubmit: fetchCors,
            Allowed_Headers: allowedHeaders,
            Allowed_Methods: allowedMethods,
            Allowed_Origisn: allowedOrigin,
            Allowed_Credentials: allowedCredentials,
            Simple: simple,
            Allowed: allowned,
          })}
        </div>


        <div             onClick={() =>
              setPanels([
                ...openPanels.slice(0, 2),
                !openPanels[2],
                ...openPanels.slice(3),
              ])
            }
        className="w-full md:w-1/2 p-20 pt-50 flex flex-wrap p-4 text-center min-h-20 cursor-pointer hover:bg-blue-100 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out">
          <h1 className="w-full text-3xl font-bold">Compilers Project </h1>
            <div className='w-full p-4 text-center'>
                {openPanels[2] ? (
                  <div className='w-full flex flex-wrap p-4 text-center'>
                  <div className='w-2/3 p-5 text-center'>
                      Expression Parser and Compiler That Builds a Stack representation,
                      and Abstract Syntax Tree (AST) and a Parse Tree using Generated Grammar Rules.
                      This user is allowed to generate their own grammar rules by specifying the precendence of operators and the associativity of operators.

                  </div>
                  <div className='w-full w-flex flex-wrap p-4 text-center'>
                    <Link href="/compilers">
                      <a>
                      <button className='p-5 text-center bg-blue-200 rounded'> View Compiler App </button> 
                      </a>
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

        <div className="w-full w p-4 text-center min-h-20">
          <h1 className="w-full text-5xl font-bold "> Articles </h1>
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
              <p className="w-full pb-4 text-lg">
                In this article I created separate networks on a single linux
                machine using network namespaces directly, and VETH Peers and
                Setting up Hardcoded IP Routes. I then used Tshark (CLI Utility
                for Wireshark) to capture packets on a network interface, and
                then use Wireshark to analyze the packets. I also use OpenVPN to
                create a VPN Tunnel between two machines, and then use Wireshark
                to capture packets on the VPN Tunnel.
              </p>
              <a
                href="https://articles.compressibleflowcalculator.com/OpenVPN"
                className="bg-blue-200 rounded p-3"
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
              <p className="w-full pb-4 text-lg">
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
                className="bg-blue-200 rounded p-3"
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
