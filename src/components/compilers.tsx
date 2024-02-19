import {
  Lexer,
  VMSteps,
  coinTypesValues,
} from '@pranosa/makebelieve_parse_precedence';
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

type AstBranch = {
  operator: string;
  left: AstBranch | undefined;
  right: AstBranch | undefined;
};

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
  AST: AstBranch;
  showStack: boolean;
  setShowStack: () => void;
  vm: VM | null;
  currentStep: number;
  setCurrentStep: (jump: number) => void;
  openPrecedence : boolean;
  setOpenPrecedence : () => void;
  display_state : DisplayStates;
  setDisplayState : (state : DisplayStates) => void;
};

enum DisplayStates {
  AST = 'AST',
  Stack = 'Stack',
  ParseTree = 'ParseTree',
  None = 'None',
}

export {
  DisplayStates,
};

//First Level Nodes

const DisplayAST = (props: { AST: AstBranch }) => {
  <div className="w-full h-1/2 flex flex-col items-center justify-center"></div>;
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
    AST,
    showStack,
    setShowStack,
    vm,
    currentStep,
    setCurrentStep,
    openPrecedence,
    setOpenPrecedence
  } = props;

  const typescriptIsAnnoyingMe = (): VMSteps => {
    // Replace any[] with the actual type of program_states if available
    return vm?.program_states ?? [];
  };

  const parseOPerationType = (operation: Opcode): string => {
    // turn into string like OP_ADD
    switch (operation) {
      case Opcode.OP_ADD:
        return 'OP_ADD';
      case Opcode.OP_SUB:
        return 'OP_SUB';
      case Opcode.OP_MUL:
        return 'OP_MUL';
      case Opcode.OP_DIV:
        return 'OP_DIV';
      case Opcode.OP_FACTORIAL:
        return 'OP_FACTORIAL';
      case Opcode.OP_EOF:
        return 'OP_EOF';
      case Opcode.OP_CONST:
        //Find What the index of the constant is and return the value
        return 'OP_CONST';
      default:
        return 'OP_UNKNOWN';
    }
  };

  const stackWithBlanks = (): string[] => {
    const stack = typescriptIsAnnoyingMe()[currentStep]?.stack.map((item) => {
      return String(item);
    });
    const stackFilled = stack.concat(new Array(10 - stack.length).fill('X'));
    return stackFilled.reverse();
  };

  const constantsWithBlanks = (): string[] => {
    const stack = typescriptIsAnnoyingMe()[currentStep]?.constants.map(
      (item) => {
        return String(item);
      }
    );
    const stackFilled = stack.concat(new Array(10 - stack.length).fill('X'));
    return stackFilled.reverse();
  };

  const stackDisplay = () => {
    return (
      <div className="w-full flex  items-center justify-center">
        <div className="w-full">
          <h1 className="text-2xl">
            {' '}
            NEXT OP CODE : {typescriptIsAnnoyingMe()[currentStep].name}{' '}
          </h1>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center">
          <h1> STACK : </h1>
          {stackWithBlanks().map((item, index) => (
            <div key={index}>
              <h2 className="text-xl">
                {10 - index} : {item}{' '}
              </h2>
            </div>
          ))}
        </div>
        {/*<div className="w-1/2 flex flex-col items-center justify-center">
          {constantsWithBlanks().map((item, index) => (
            <div key={index}>
              {10 - index} : {item}
            </div>
          ))}
          </div>*/}
      </div>
    );
  };


  const DropDownDisplay = () => {
    return (

<div className="w-full flex flex-wrap items-center justify-left ">
  <button
    className="block w-full text-gray-700 text-md font-bold mb-2"
    //onClick={() => setIsOpen(!isOpen)}
    onClick={() => setOpenPrecedence()}
  >
    Configure Precedence {openPrecedence ? '▲' : '▼'}
  </button>
  <div className='w-full pt-20'></div>
  <div className='w-full pt-20'></div>
  {openPrecedence && (
    // Form To Configure Precedence of Operations
    // @ts-ignore
    Object.keys(precedenceArguments).map((field, index) => (
      <div key={index} className="mb-4 w-full ">
        <label
          className="block text-gray-700 text-md font-bold mb-2"
          htmlFor={field}
        >
          {field}
        </label>
        <select
          className="shadow appearance-none border rounded text-md w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
  )}
</div>
    )
  }

  return (
    <div className="w-3/4 flex flex-wrap bg-gray-300 justify-center pt-10">
        {/**.The Top Is Just The Source Code Enter Box */}
        <div className='w-1/10 pt-20'></div>
        <div className="w-4/5  flex items-center justify-center bg-gray-300  ">
          <textarea
            className="shadow appearance-none bg-gray-200 border rounded w-full  text-xl py-2 px-3 text-black-500 "
            placeholder="Source Code"
            value={sourceCode}
            onChange={(e) => setSourceCode(e)}
          ></textarea>
        </div>
        <div className='w-1/10'></div>
        <div className='w-full flex flex-wrap h-20 '>
          <div className='w-1/5 pt-5 items-center overflow-auto flex-none'>
            {DropDownDisplay()}
          </div>
          <div className='w-3/5 flex flex-wrap pt-6 items-top'> 
            <div className='w-1/5 pt-4 text-xl'> Result : </div>
             <div  className="border-4 h-10 border-black  rounded w-4/5"> {result} </div>
          </div>
          <div className='w-1/5 items-top'>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 m-5 p-10"
              onClick={runCompiler}
            >
              Run Compiler
            </button>
          </div>
        </div>
    </div>
  );

  return (
    <div className="w-3/4 flex flex-col items-center justify-center pt-40 pr-30  bg-gray-500  ">
      <div className="w-full  flex flex-col items-center justify-center p-30  bg-gray-300  ">
        <textarea
          className="shadow appearance-none border rounded w-full  text-xl py-2 px-3 text-black-500 focus:outline-none focus:shadow-outline"
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
          <h1 className="text-2xl font-bold pt-20">Compiler Result</h1>
          <h1 className="text-2xl font-bold">{result}</h1>
        </div>
      </div>
      <div className="w-full h-1/2 flex flex-col items-center justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 m-5 p-3"
          onClick={() => setShowStack()}
        >
          {showStack ? 'Show Stack' : 'Hide Stack'}
        </button>
      </div>
      {showStack ? (
        <div className="w-full  flex flex-col items-center justify-center">
          <div className="w-full">
            {`STEP ` +
              (currentStep + 1) +
              ` of ` +
              typescriptIsAnnoyingMe().length}
          </div>
          <div className="w-full  flex  items-center justify-center">
            {stackDisplay()}
          </div>
          <div className="w-full h-1/2 flex  items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 m-5 p-3"
              onClick={() => setCurrentStep(-1)}
              disabled={currentStep === 0}
            >
              Previous
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 m-5 p-3"
              onClick={() => setCurrentStep(1)}
              disabled={currentStep >= typescriptIsAnnoyingMe().length - 1}
            >
              Next
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default CompilerTile;
