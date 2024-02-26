'use client';

import { useState } from 'react';
import Image from 'next/image';

const ContactDropdown = () => {
  const [showContact, setShowContact] = useState(true);

  return (
    <div className="fixed top-0 right-0 pr-3 flex-col ">
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
            <a href="https://github.com/PranoSA">
              <Image
                src="/github-mark.svg"
                alt="Github"
                width={30}
                height={30}
              />
            </a>
          </div>
          <div className="flex flex-row items-end pt-5">
            <p className="text-left pr-4"> Resume </p>
            <a href="/Resume.docx">
              <Image
                src="/download-minimalistic-svgrepo-com.svg"
                width={30}
                height={30}
                alt="Picture of the author"
              />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactDropdown;
