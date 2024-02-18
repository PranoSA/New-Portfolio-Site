'use client';

import '../styles/globals.css'

import { useState } from 'react';
// @ts-nocheck
import { UnicodeCharacterInformation } from '../../components/unicode';
import { UnicodePanel } from '../../components/unicode';



export default function Home() {

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
  //Encoding Mode, (Decimal or Hexadecimal)
  const [encodingMode, setEncodingMode] = useState<string>('hexadecimal');

  const [unicodeLink, setUnicodeLink] = useState<string>('');


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
          <div className="w-full p-4 text-center">
            {UnicodePanel({
              open: true,
              submitUnicode: fetchUnicode,
              setCancel: () => {},
              unicode_info: unicodeInfo,
              handleChange: handleChange,
              unicodeLink: unicodeLink,
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
