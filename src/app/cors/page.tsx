'use client';

import '../styles/globals.css';

import { CorsPanel } from '../../components/cors_panel';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Page() {
  //Encoding Mode, (Decimal or Hexadecimal)

  const [endpoint, setEndpoint] = useState<string>(
    'https://unicode.compressibleflowcalculator.com/Prod/api/v1/application'
  );
  const [method, setMethod] = useState<string>('POST');
  const [headers, setHeaders] = useState<string>(
    'Authorization,Content-Type,Accept'
  );
  const [origin, setOrigin] = useState<string>('http://localhost:5173');
  const [credentials, setCredentials] = useState<string>('');
  const [allowedHeaders, setAllowedHeaders] = useState<string>('');
  const [allowedMethods, setAllowedMethods] = useState<string>('');
  const [allowedOrigin, setAllowedOrigin] = useState<string>('');
  const [allowedCredentials, setAllowedCredentials] = useState<string>('');
  const [simple, setSimple] = useState<boolean>(false);
  const [allowned, setAllowned] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

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
    try {
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
      setSubmitted(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <main className="flex w-full min-h-screen justify-center p-24 bg-gradient-to-r from-pink-300 to-purple-500 min-h-screen min-w-screen">
      <div className="fixed top-0 left-0 p-4">
        <Link
          href="/"
          className="text-blue-900 font-bold text-bold hover:underline text-3xl"
        >
          ← Home
        </Link>
      </div>
      <div className="flex flex-wrap justify-center w-full">
        <div className="w-full md:w-1/2 p-10 flex flex-wrap p-4 text-center min-h-20 cursor-pointer hover:bg-blue-100 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out">
          {CorsPanel({
            open: submitted,
            endpoint: endpoint,
            method: method,
            headers: headers,
            origin: origin,
            close: () => {},
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
      </div>
    </main>
  );
}
