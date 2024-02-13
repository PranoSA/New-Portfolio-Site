/*

What Shall I demonstrate in The Unicode Characters

*/
'use client';
import './globals.css';

type UnicodePanelProps = {
  open: boolean;
  unicode_value?: string;
  unicode_info?: UnicodeCharacterInformation;
  setCancel: () => void;
  submitUnicode: (unicode: string) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  unicodeLink?: string;
  encodeUnicode?: (unicode: string) => string;
};

type UnicodeCharacterInformation = {
  na: string;
  blk: string;
  cp: string;
  na1: string;
  dm: string;
  gc: string;
  sc: string;
};

export type { UnicodePanelProps, UnicodeCharacterInformation };

export const UnicodePanel = (props: UnicodePanelProps) => {
  console.log(props);

  if (!props.open) return null;

  return (
    <div className=" flex flex-around flex-wrap w-full border-5 border-red-400 p-15">
      <div className="w-full p-4 justify-center text-center">
        <h1 className="w-full text-3xl font-bold">About The Project :</h1>
      </div>
      <div className="w-full p-4 justify-center text-center text-3xl">
        <p className="text-xl">
          For Computers To Perform Operations on Data Types Like Strings, such
          as Concatenation, Searching, and Sorting, Splitting A String by a
          Delimiter, or Replacing a Substring, The Computer Must Have A Way to
          Represent Characters. The Unicode Standard Provides A Unique Number
          for Every Character, No Matter What the Platform, No Matter What the
          Program, No Matter What the Language. For Example, How do you print
          the Letter {'"A"'} to the screen? Well, you can use the ASCII code for{' '}
          {'"A"'} which is 65. But what about the letter {'"Ω"'}? Well, you can
          use the Unicode code for {'"Ω"'} which is 937. The Unicode Standard
          Provides A Unique Number for Every Character, No Matter What the
          Platform, No Matter What the Program, No Matter What the Language.
          Another Example Is Say We Want To Split a String by Codepoint, we need
          a way to find when a character starts and ends. My hope is that this
          application will aid in the understanding of how Characters and
          Strings are represented in Binary.
        </p>
      </div>

      <div className="w-full p-4 justify-center text-center">
        <h1 className="w-full text-3xl font-bold"> Project Description : </h1>
      </div>

      <div className="w-full p-4 justify-center text-center">
        <p className="w-full text-3xl font-bold">
          The Project Consist of 3 parts
        </p>
        {
          //List
          /*
                    1. Frontend Appliation (Built In Typescript, React, and TailwindCSS) \n
                    2. Backend Application (Built with AWS Lambda, DynamoDB, and AWS SAM)\n
                    3. Terraform Plugin Provider Written in GoLang\n
                */
        }
        <ol>
          <li>
            {' '}
            1. Frontend Appliation (Built In Typescript, React, and TailwindCSS){' '}
          </li>
          <li>
            {' '}
            2. Backend Application (Built with AWS Lambda, DynamoDB, and AWS
            SAM)
          </li>
          <li> 3. Terraform Plugin Provider Written in GoLang</li>
        </ol>
      </div>

      <div className="w-full p-4 justify-center text-center">
        <h1 className="w-full text-3xl font-bold"> Demonstration : </h1>
      </div>

      <div className="w-full p-4 justify-center text-center">
        <label>U+</label>
        <input
          type="text"
          value={props.unicode_value}
          onChange={(e) => props.handleChange(e)}
          className="pr-5"
        />
        <button
          className="bg-blue-400 w-33 rounded text-center"
          onClick={() => props.submitUnicode(props.unicode_value || '')}
        >
          {' '}
          Submit{' '}
        </button>
      </div>

      <div className="w-full p-4 justify-center text-center">
        <h1 className="w-full text-3xl font-bold"> Information : </h1>

        <div className="w-full flex p-4 justify-center text-center">
          <div className="w-1/2"> Name :</div>
          <div className="w-1/2">{props.unicode_info?.na}</div>
        </div>

        <div className="w-full flex p-4 justify-center text-center">
          <div className="w-1/2"> Block :</div>
          <div className="w-1/2">{props.unicode_info?.blk}</div>
        </div>

        <div className="w-full flex p-4 justify-center text-center">
          <div className="w-1/2">Codepoint:</div>
          <div className="w-1/2"> {props.unicode_info?.cp} </div>
        </div>

        <div className="w-full flex p-4 justify-center text-center">
          <div className="w-1/2">Name Alias:</div>
          <div className="w-1/2"> {props.unicode_info?.na1}.</div>
        </div>

        <div className="w-full flex p-4 justify-center text-center">
          <div className="w-1/2">Decomposition:</div>
          <div className="w-1/2">{props.unicode_info?.dm} </div>
        </div>

        <div className="w-full flex p-4 justify-center text-center">
          <div className="w-1/2"> General Category : </div>
          <div className="w-1/2">{props.unicode_info?.gc} </div>
        </div>
        <div className="w-full p-4 flex justify-center text-center">
          <div className="w-1/2"> Script : </div>
          <div className="w-1/2">{props.unicode_info?.sc} </div>
        </div>
        <div></div>
      </div>
      <div className="w-full p-4 flex flex-wrap justify-center text-center">
        <div className="w-1/2 p-4 justify-center text-center p-25">
          <h1 className="w-full text-xl font-bold p-10"> Unicode Link : </h1>
          <a
            href={props.unicodeLink || ''}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500"
          >
            {props.unicodeLink}
          </a>
        </div>
        <div className="w-1/2 p-4 justify-center text-center p-25">
          <button
            className="bg-blue-500 w-33 h-12 p-5 rounded text-center font-bold text-black"
            onClick={(e) => {
              e.preventDefault();
              navigator.clipboard.writeText(props.unicodeLink || '');
            }}
          >
            {' '}
            Copy Link{' '}
          </button>
        </div>
      </div>
    </div>
  );
};
