'use client';
import { useState } from 'react';
import Image from 'next/image';
import '../styles/globals.css';
import Link from 'next/link';

const Page = () => {
  const [expandedPanels, setExpandedPanels] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);

  return (
    <div className="flex-row flex flex-wrap justify-center items-center">
      <div className="w-full text-center pt-20 text-3xl font-bold">
        Other Projects
      </div>
      <div>
        <div className="w-full text-center w-full flex-wrap flex md:w-1/2 border-4 border-gray-400 m-5">
          <div className="w-full text-center">
            {' '}
            <h1 className="font-bold text-2xl "> Vault Plugin </h1>{' '}
          </div>
          <div className="w-full ">
            Vault Plugin That Creates Sample Per JWTs that have an audience
            attribute mapped to the particular Engine and Per Engine
            Configuration (Engine Represents Paticular Configuration Objects){' '}
            <p> </p>
          </div>
          <div className="w-full flex-col">
            <div className="flex flex-row items-end pt-5">
              <p className="text-left pr-7"> Github </p>
              <a href="https://github.com/PranoSA/VaultJWTPlugin">
                <Image
                  src="/github-mark.svg"
                  alt="Github"
                  width={30}
                  height={30}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full text-center w-full flex-wrap flex md:w-1/2 border-4 border-gray-400 m-5">
        <div className="w-full text-center">
          {' '}
          <h1 className="font-bold text-2xl "> Samba Project </h1>{' '}
        </div>
        <div className="w-full ">
          Uses OIDC authentication, MongoDB, Postgres, and gRPC in GoLang to
          dynamically allocate Samba Shares. Consists of 2 Different Tiers - 1.
          Frontend Servers that handle and route requetsts, and 2. Backend Samba
          Share Servers That Mount Shares and Make Them Publically Available{' '}
          <p> </p>
        </div>
        <div className="w-full flex-col justify-center">
          <div className="flex flex-row items-end pt-5">
            <p className="text-left pr-7"> Github </p>
            <a href="https://github.com/PranoSA/Samba_Project_Backends">
              <Image
                src="/github-mark.svg"
                alt="Github"
                width={30}
                height={30}
              />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full text-center w-full flex-wrap flex md:w-1/2 border-4 border-gray-400 m-5">
        <div className="w-full text-center">
          {' '}
          <h1 className="font-bold text-2xl ">
            {' '}
            Compresible Flow Calculator{' '}
          </h1>{' '}
        </div>
        <div className="w-full ">
          Application That Lets you Examine Isentropic and Static Properties of
          Flows, Make comparisons between Flows, see the effects of adjusting
          parameters like effeciency ratings, pressure ratios, etc. of things
          like Turbines, Compressors, Diffuzers, and Nozzles, and analyze the
          relationships between properties like usable work, entropy, pressure,
          and enthalpy. <p> </p>
        </div>
        <div className="w-full flex-col justify-center">
          <div className="flex flex-row items-end pt-5 pl-3">
            <p className="text-left pr-7 pl-8"> Github </p>
            <a href="https://github.com/PhilDeveloperCA/Compressible-Flows-App">
              <Image
                src="/github-mark.svg"
                alt="Github"
                width={30}
                height={30}
              />
            </a>
          </div>
          <div className="flex flex-row items-end pt-5 pl-2">
            <p className="text-left pr-7"> New Github </p>
            <a href="https://github.com/PranoSA/New-Compressible-Flow-Calculator">
              <Image
                src="/github-mark.svg"
                alt="Github"
                width={30}
                height={30}
              />
            </a>
          </div>
          <div className="flex flex-row items-end pt-5 pl-2 pb-5">
            <Link href="www.compressibleflowcalculator.com">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Web Link
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full text-center w-full flex-wrap flex md:w-1/2 border-4 border-gray-400 m-5">
        <div className="w-full text-center">
          {' '}
          <h1 className="font-bold text-2xl ">
            {' '}
            Python Units Converter Calculator{' '}
          </h1>{' '}
        </div>
        <div className="w-full ">
          <p> </p>
        </div>
        <div className="w-full flex-col justify-center">
          <div className="flex flex-row items-end pt-5">
            <p className="text-left pr-7"> Github </p>
            <a href="https://github.com/PhilDeveloperCA/Units_Bot_Python">
              <Image
                src="/github-mark.svg"
                alt="Github"
                width={30}
                height={30}
              />
            </a>
          </div>
        </div>
      </div>

      <div>
        <div></div>
        <div className="w-full flex flex-around">
          Units Converter Python Discord Bot
        </div>
      </div>
    </div>
  );
};

export default Page;
