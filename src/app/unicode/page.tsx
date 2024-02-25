'use client';

import '../styles/globals.css';

import { useState } from 'react';
// @ts-nocheck
import { UnicodeCharacterInformation } from '../../components/unicode';
import { UnicodePanel } from '../../components/unicode';
import Link from 'next/link';
import { TerraformString } from '@/components/terraform_provider_text';

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
  const [openMiniPanel, setOpenMiniPanel] = useState<boolean>(false);
  const [openTerraformPanel, setOpenTerraformPanel] = useState<boolean>(false);
  const [showTerraformExample, setShowTerraformExample] =
    useState<boolean>(false);

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
    console.log('fetching unicode', unicodeSet);

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

    console.log('data', data);

    setUnicodeInfo(data);
  };

  return (
    <main className="flex w-full items-start justify-center min-h-screen p-24">
      <div className="flex flex-wrap justify-center align-start w-full">
        <div className="fixed top-0 left-0 p-4">
          <Link
            href="/"
            className="text-black hover:underline text-3xl font-bold"
          >
            ← Home
          </Link>
        </div>
        <div className="w-full  text-center">
          <h1 className="w-full text-3xl font-bold"> Unicode Page </h1>
        </div>

        <div className="w-full  md:w-1/2 flex flex-wrap p-4 text-center min-h-20 ">
          <div className="w-full p-4 text-center">
            {UnicodePanel({
              open: openMiniPanel,
              submitUnicode: fetchUnicode,
              setCancel: () => {
                setOpenMiniPanel(!openMiniPanel);
              },
              unicode_info: unicodeInfo,
              handleChange: handleChange,
              unicodeLink: unicodeLink,
            })}
          </div>
        </div>
        <div
          className="w-full p-4 text-center text-3xl font-bold"
          onClick={() => setOpenTerraformPanel(!openTerraformPanel)}
        >
          Terraform Project {openTerraformPanel ? '▲' : '▼'}
        </div>
        {openTerraformPanel && (
          <div className="w-full p-20  flex  align-center flex-wrap p-4 text-center min-h-20 justify-center p-5">
            <div className="w-full md:w-1/3 lg:w-1/2 p-4 text-center">
              <div
                className="w-full p-4 text-center font-bold text-2xl"
                onClick={() => setShowTerraformExample(!showTerraformExample)}
              >
                Expand Terraform Example {showTerraformExample ? '▲' : '▼'}
              </div>
              {showTerraformExample ? (
                <div
                  className="w-full  p-4 text-left justify-center bg-gray-300 font-bold font-xl"
                  dangerouslySetInnerHTML={{ __html: TerraformString }}
                />
              ) : (
                <div className="w-1/2 md:w-1/3 "></div>
              )}
            </div>
            <div className="w-full md:w-1/3 lg:w-1/2 p-4 text-left justify-start flex align-start flex-col font-bold font-xl">
              <div className="w-full p-4 text-center font-bold text-2xl justify-center">
                Docker Application Example{' '}
              </div>
              <p>Running Default Using Volume </p>
              <div className="w-full p-5 bg-black text-yellow-500">
                docker run -v {`$(terraform_application_directory)`}:/home/app
                pcadler/unicode-terraform-plugin:latest --var user={`$(user)`}
              </div>
              <div className="w-full h-15 p-5 "></div>
              <p> Building Docker File Example From Default Application</p>
              <div className="w-full p-5 bg-black text-yellow-500">
                FROM pcadler/unicode-terraform-plugin:latest <br />
                # Need to Chown on at least the terraform files <br />
                COPY . /home/app {'\n'}
                RUN chown -R 1000:1000 /home/app <br />
                USER app <br />
                ENTRYPOINT {`["terraform", "apply", "-auto-approve"]`} <br />
                CMD {`["--var", "user=default" ]`}
                {'\n'}
              </div>
              <div className="w-full h-15 p-5 "></div>
              <p>Halloween Application</p>
              <div className="w-full p-5 bg-black text-yellow-500">
                docker run pcadler/unicode-terraform-plugin:halloween-latest
                --var user={`$(user)`}
              </div>
              <div className="w-full h-15 p-5 "></div>
              <p> Amphibian Application </p>
              <div className="w-full p-5 bg-black text-yellow-500">
                docker run pcadler/unicode-terraform-plugin:amphibian-latest
                --var user={`$(user)`}
              </div>
              <div className="w-full h-15 p-5 "></div>
              <p> American Themed Application </p>
              <div className="w-full p-5 bg-black text-yellow-500">
                docker run pcadler/unicode-terraform-plugin:american-latest
                --var user={`$(user)`}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
