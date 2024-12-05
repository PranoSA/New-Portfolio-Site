'use client';

import { useState } from 'react';
import Image from 'next/image';

//download icon from react-icons
import { FaDownload } from 'react-icons/fa';

//github icon from react-icons
import { FaGithub } from 'react-icons/fa';

const ContactDropdown = () => {
  const [showContact, setShowContact] = useState(true);

  return (
    <div className="fixed top-0 right-0 pr-3 flex-col text-white ">
      <div onClick={() => setShowContact(!showContact)}>
        <p className="pt-4 pr-5">
          {' '}
          {showContact ? 'Hide Contact' : 'Show Contact '}{' '}
          {showContact ? '▲' : '▼'}{' '}
        </p>
      </div>
      {showContact && (
        <div className=" flex-col w-full items-start justify-start">
          <p className="pt-4"> Phillip Adler </p>
          <p className="pt-4"> pcadler@gmail.com</p>
          <p className="pt-4"> 818-518-4354 </p>

          <div className="flex flex-row items-end pt-5">
            <p className="text-left pr-7"> Github </p>
            <a href="https://github.com/PranoSA" className="pr-7">
              <FaGithub size={30} className="text-white" />
            </a>
          </div>
          <div className="flex flex-row items-end pt-5">
            <p className="text-left pr-4"> Resume </p>
            <a href="/Resume.docx">
              <FaDownload size={22} />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactDropdown;
