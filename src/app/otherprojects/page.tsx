'use client';
import '../styles/globals.css';
import { useState, ReactNode } from 'react';
import Image from 'next/image';
import {
  FaArrowAltCircleDown,
  FaArrowAltCircleRight,
  FaGithub,
} from 'react-icons/fa';

import Link from 'next/link';

import otherProjects from '@/data/other_projects';

const Page = () => {
  const [expandedPanels, setExpandedPanels] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);

  return (
    <div className="flex-row flex flex-wrap justify-center items-center text-primary">
      <div className="w-full text-center text-2xl font-bold ">
        Other Projects
      </div>

      {otherProjects.map((project, index) => (
        <div
          key={index}
          className="w-full text-center w-full pb-4 flex-wrap flex md:w-1/2 border-4 border-gray-400 m-5"
        >
          <div className="w-full text-center p-4">
            <h1 className="font-bold text-2xl ">{project.Name}</h1>
          </div>
          <div className="w-full ">{project.Description}</div>
          <div className="w-full flex-col">
            {project.Links.map((link, index) => (
              <div className="flex flex-row items-end pt-5 pl-4" key={index}>
                <p className="text-left pr-7 w-[150px]">{link.Title}</p>
                <a href={link.URL}>{link.Icon}</a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
