import { Lexer, coinTypesValues } from '@pranosa/makebelieve_parse_precedence';
import { SourceCode, Token } from '@pranosa/makebelieve_parse_precedence';
import { Parser, Program, Opcode } from '@pranosa/makebelieve_parse_precedence';
import {
  VM,
  runProgram,
} from '@pranosa/makebelieve_parse_precedence/dist/esm/vm';

import {
  AST,
  PrecedenceArgument,
  PrecedenceList,
} from '@pranosa/makebelieve_parse_precedence';
import React, { useState } from 'react';

type CompilerTileProps = {
  setSourceCode: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  sourceCode: string;
  result: number;
  setPrecedenceArguments: (
    e: React.ChangeEvent<HTMLSelectElement>,
    field: string
  ) => void;
  runCompiler: () => void;
  precedenceArguments: PrecedenceArgument;
};

const CompilerTile = (props: CompilerTileProps) => {
  //Destructore Props
  const {
    sourceCode,
    setSourceCode,
    result,
    setPrecedenceArguments,
    runCompiler,
    precedenceArguments,
  } = props;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center pt-20">
      <div className="w-full h-1/2 flex flex-col items-center justify-center">
        <textarea
          className="shadow appearance-none border rounded w-full  text-xl py-2 px-3 text-black-500 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Source Code"
          value={sourceCode}
          onChange={(e) => setSourceCode(e)}
        ></textarea>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 m-5 p-3"
          onClick={runCompiler}
        >
          Run Compiler
        </button>
      </div>
      <div className="w-full h-1/2 flex flex-col items-center justify-center pt-20">
        {
          // Form To Configure Precedence of Operations
          // @ts-ignore
          Object.keys(precedenceArguments).map((field, index) => (
            <div key={index} flex-flex-wrap className="mb-4 w-1/2 md:w-1/3">
              <label
                className="block text-gray-700 text-2xl font-bold mb-2"
                htmlFor={field}
              >
                {field}
              </label>
              <select
                className="shadow appearance-none border rounded text-lg-2 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id={field}
                // @ts-ignore
                value={precedenceArguments[field]}
                onChange={(e) => setPrecedenceArguments(e, field)}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          ))
        }
      </div>
      <div className="w-full h-1/2 flex flex-col items-center justify-center">
        <div className="w-full h-1/2 flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold pt-20">Result</h1>
          <h1 className="text-2xl font-bold">{result}</h1>
        </div>
      </div>
    </div>
  );
};

export default CompilerTile;
