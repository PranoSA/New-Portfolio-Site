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

import { articleDescriptions } from '@/data/articles';
import { Projects } from '../data/projects';
import ProjectModal from '../data/projects';

import { FaArrowDown, FaArrowRight, FaArrowUp } from 'react-icons/fa';

//import Up and down arrow

export default function Home() {
  const [openPanels, setPanels] = useState<boolean[]>(
    Projects.map(() => false)
  );

  const [openAriclePanels, setArticlePanels] = useState<boolean[]>(
    articleDescriptions.map(() => false)
  );
  const [loading, setLoading] = useState<boolean>(false);
  //Encoding Mode, (Decimal or Hexadecimal)

  return (
    <main className="flex w-full min-h-screen justify-center p-24 text-primary">
      <div className="flex flex-wrap justify-center w-full">
        <div className="w-full  p-4 text-center">
          <h1
            className="w-full text-6xl font-bold
          
          text-primary
          "
          >
            {' '}
            Portfolio Page{' '}
          </h1>
        </div>{' '}
        <div className="w-full p-4 text-center">
          <Link href="/about">
            <div
              onClick={() => setLoading(true)}
              className="p-5 text-center text-3xl rounded transform transition duration-500 ease-in-out hover:scale-110 hover:text-4xl hover:text-white flex items-center justify-center"
            >
              {/* Centered Div with About Me + Arrow in the same row horizontally level */}
              About Me
              <FaArrowRight size={25} className=" ml-3" />
            </div>
          </Link>
        </div>
        <div className="w-full p-4 text-center pb-30 pt-10">
          <h1 className="w-full text-5xl font-bold "> Projects</h1>
        </div>
        <div className="w-full flex flex-wrap flex-row">
          <ProjectModal setLoading={setLoading} />
        </div>
        <div className="w-full w p-4 text-center min-h-20">
          <h1 className="w-full text-5xl font-bold "> Articles </h1>
        </div>
        {articleDescriptions.map((article, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                setArticlePanels([
                  ...openAriclePanels.slice(0, index),
                  !openAriclePanels[index],
                  ...openAriclePanels.slice(index + 1),
                ]);
              }}
              className="relative w-full md:w-2/3 p-20 flex flex-wrap p-4 text-center min-h-20 cursor-pointer hover:bg-blue-400 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out hover:text-black hover:font-bold"
            >
              {!openAriclePanels[index] && (
                <FaArrowDown size={25} className="absolute right-0 top-10" />
              )}
              {openAriclePanels[index] && (
                <FaArrowUp size={25} className="absolute right-0 top-10" />
              )}
              <h1 key={index} className="w-full text-3xl font-bold">
                {' '}
                {article.Title}
              </h1>
              {openAriclePanels[index] ? (
                <div className="relative m-5">
                  <p className="w-full pb-4 ">{article.Description}</p>
                  <div className="w-full w-flex flex-wrap p-4 text-center h-15"></div>
                  <a
                    href={article.URL}
                    //make button bigger on hover, make border
                    className="p-5 text-center bg-blue-200 rounded m-5
                      
                    hover:shadow-lg hover:font-bold hover:border-4 hover:border-black 
                    hover:text-2xl
                    "
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
