'use client';

// @ts-nocheck
import { UnicodeCharacterInformation } from '../components/unicode';
import { UnicodePanel } from '../components/unicode';
import { CorsPanel } from '../components/cors_panel';
import './globals.css';

import {
  Parser,
  Lexer,
  VM,
  AstBranch,
  runProgram,
  PrecedenceArgument,
  genAST,
  runAST,
  TreeForJS3,
  TreeForJs3,
} from '@pranosa/makebelieve_parse_precedence';
import * as d3 from 'd3';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import CompilerTile from '@/components/compilers';
import { ASTBranch } from '@pranosa/makebelieve_parse_precedence/dist/cjs/vm';

export default function Home() {
  const [openPanels, setPanels] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
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
  const [openAriclePanels, setArticlePanels] = useState<boolean[]>([false]);
  //Encoding Mode, (Decimal or Hexadecimal)
  const [encodingMode, setEncodingMode] = useState<string>('hexadecimal');
  const [currentStep, setCurrentStep] = useState<number>(0);

  const [unicodeLink, setUnicodeLink] = useState<string>('');

  const [endpoint, setEndpoint] = useState<string>('');
  const [method, setMethod] = useState<string>('');
  const [headers, setHeaders] = useState<string>('');
  const [origin, setOrigin] = useState<string>('');
  const [credentials, setCredentials] = useState<string>('');
  const [allowedHeaders, setAllowedHeaders] = useState<string>('');
  const [allowedMethods, setAllowedMethods] = useState<string>('');
  const [allowedOrigin, setAllowedOrigin] = useState<string>('');
  const [allowedCredentials, setAllowedCredentials] = useState<string>('');
  const [simple, setSimple] = useState<boolean>(false);
  const [allowned, setAllowned] = useState<boolean>(false);
  const [sourceCode, setSourceCode] = useState<string>('');
  const [result, setResult] = useState<number>(0);
  const [ast, setAST] = useState<AstBranch>({
    operator: 'root',
    left: undefined,
    right: undefined,
  });
  const [showStack, setShowStack] = useState<boolean>(false);
  const [vm, setVM] = useState<VM | null>(null);
  const [tree, setTree] = useState<TreeForJs3>({
    value: 'root',
    children: [],
  });

  const d3Ref = useRef<HTMLDivElement>(null);

  let stepintraverse = 0;

  function setHierarchyAttributes(node: any, name = 'default', value = 0) {
    // Set the name and value properties
    const castasnode = node as TreeForJs3;
    node.name = castasnode.value || name;
    node.value = node.value || value + 'VALUE';

    // Recursively set the properties for each child
    if (Array.isArray(node.children)) {
      //Only Two Children , start with 1 and then 0
      const secondChild = node.children[0];
      if (secondChild) setHierarchyAttributes(secondChild, `child2`, 1);
      const firstChild = node.children[1];
      if (firstChild) setHierarchyAttributes(firstChild, `child1`, 0);

      /*node.children.forEach((child: any, index: any) => {
        setHierarchyAttributes(child, `child${index + 1}`, index + 1);
      });*/
    }
    node.step = stepintraverse;
    stepintraverse++;

    const stack_size = vm?.program_states[stepintraverse].stack.length;
    if (!stack_size || stack_size === 0) return;

    node.calculated_value =
      vm?.program_states[stepintraverse].stack[stack_size - 1];
    console.log('Node Info');
    console.log(node.calculated_value);
    console.log(vm?.program_states[stepintraverse].stack[stack_size || 1 - 1]);
    console.log('Stack Info');
    console.log(stepintraverse);
    console.log(stack_size);
    console.log(vm?.program_states[stepintraverse].stack);

    //How to associate current Step with the node

    node.style = currentStep == value ? 'fill: red' : 'fill: white';
  }

  //setHierarchyAttributes(yourTree); // Replace 'yourTree' with your actual tree

  useEffect(() => {
    if (!showStack) {
      d3.select(d3Ref.current).selectAll('*').remove();
      return;
    }
    if (tree && d3Ref.current) {
      // Clear the previous tree

      // Clear the previous tree
      d3.select(d3Ref.current).selectAll('*').remove();

      const svg = d3
        .select(d3Ref.current)
        .append('svg')
        .attr('width', 1200)
        .attr('height', 700);

      const modifiedTree = { ...tree };

      stepintraverse = 0;

      setHierarchyAttributes(modifiedTree);

      // Convert the tree data into a d3 hierarchy
      const root = d3.hierarchy(modifiedTree);

      // Create a tree layout and assign the size
      const treeLayout = d3.tree().size([600, 1100]);

      // Assign the computed layout to root
      treeLayout(root as any);

      const linkGenerator = {
        //@ts-ignore
        source: (d) => [d.source.y + 10, d.source.x + 10],
        //@ts-ignore
        target: (d) => [d.target.y + 10, d.target.x + 10],
      };

      // Render the links
      root.links().forEach((link) => {
        svg
          .append('line')
          .attr('x1', linkGenerator.source(link)[0])
          .attr('y1', linkGenerator.source(link)[1])
          .attr('x2', linkGenerator.target(link)[0])
          .attr('y2', linkGenerator.target(link)[1])
          .style('stroke', 'black');
      });

      // Render the nodes
      root.descendants().forEach((d, i) => {
        svg
          .append('circle')
          //@ts-ignore
          .attr('cx', d.y + 30) // Use d.y for the horizontal position
          //@ts-ignore
          .attr('cy', d.x + 20) // Use d.x for the vertical position
          .attr('r', 25) // Set the radius of the circle
          //.style('fill', 'white'); //Find if current step is refferring to this node
          //@ts-ignore
          .style('fill', currentStep == d.data.step ? 'red' : 'yellow'); //Find if current step is refferring to this node

        //@ts-ignore
        const current_step_text =
          //@ts-ignore
          currentStep < d.data.step + 1 //d.data.step
            ? //@ts-ignore
              currentStep == d.data.step
              ? d.children?.length == 2
                ? //@ts-ignore
                  `${d.children[0].data.calculated_value}${d.data.name}${d.children[1].data.calculated_value}`
                : //@ts-ignore
                  d.data.name
              : //@ts-ignore
                d.data.name && d.data.name
            : //@ts-ignore
              d.data.calculated_value;
        console.log('Current Step Text ' + current_step_text);

        svg
          .append('text')
          //@ts-ignore
          .attr('x', d.y + 0) // Position the label to the right of the node
          //@ts-ignore
          .attr('y', d.x + 0) // Position the label slightly below the node
          //@ts-ignore
          .text(
            current_step_text
            //@ts-ignore
            /*currentStep > d.data.step
              ? //@ts-ignore
                currentStep === d.data.step
                ? current_step_text
                : //@ts-ignore
                  d.data.calculated_value
              : //@ts-ignore
                d.data.name*/
          ) //
          //@ts-ignore
          //.text(d.data.name) //
          .style('font-size', '35px')
          .style('font-weight', 'bold');
      });

      const nodeCount = root.descendants().length;
      console.log(`Number of nodes: ${nodeCount}`); // Log the number of nodes in the tree

      // Render the tree here using d3's selection and data binding methods
      // This will depend on the structure of your tree data and how you want to render it
    }
  }, [tree, currentStep, showStack]);

  const [precedenceArguments, setPrecedenceArguments] =
    useState<PrecedenceArgument>({
      '%_precedence': 1,
      '*_precedence': 2,
      '/_precedence': 2,
      '+_precedence': 3,
      '-_precedence': 3,
      exp_precedence: 4,
    });

  const handlePrecedenceChanges = (e: any, field: string) => {
    setPrecedenceArguments({
      ...precedenceArguments,
      [field]: e.target.value,
    });
  };
  interface Node {
    name: string;
    left?: Node;
    right?: Node;
  }

  interface CompilerProps {
    ast: Node;
  }

  const runCompiler = () => {
    const tokens = Lexer(sourceCode);
    const parser = new Parser(tokens, precedenceArguments, 0);
    setCurrentStep(0);
    parser.beginParsing();

    const new_vm: VM = {
      stack: [],
      top: 0,
      program: parser.bytecode,
      ip: 0,
      state_branch: [],
      program_states: [],
    };

    setVM(new_vm);

    const result = runProgram(new_vm) || 0;

    const vm_for_ast: VM = {
      stack: [],
      top: 0,
      program: parser.bytecode,
      ip: 0,
      state_branch: [],
      program_states: [],
    };

    const ast = genAST(vm_for_ast);

    setTree(TreeForJS3(ast[0]));
    console.log('tree');
    console.log(TreeForJS3(ast[0]));
    console.log(ast);

    console.log(new_vm.stack[new_vm.top - 1]);

    //const ast = genAST(vm_for_ast);

    //let resultast = runAST(ast[0]);

    //console.log(resultast);

    //setAST(ast[0]);

    setResult(result);
  };

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

  const handleCorsChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    switch (name) {
      case 'endpoint':
        setEndpoint(e.target.value);
        break;
      case 'method':
        setMethod(e.target.value);
        break;
      case 'headers':
        setHeaders(e.target.value);
        break;
      case 'origin':
        setOrigin(e.target.value);
        break;

      case 'credentials':
        setCredentials(e.target.value ? 'true' : 'false');
        break;
      default:
        break;
    }
  };

  const fetchCors = async () => {
    // Call to /api/cors/route.ts

    var body = {
      endpoint: endpoint,
      method: method,
      headers: headers,
      origin: origin,
      credentials: credentials,
    };

    console.log(body);

    const response = await fetch('/api/cors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    // Now we have the response from the server
    //set the state of the component

    const data = await response.json();

    setAllowedHeaders(data.Allowed_Headers);
    setAllowedMethods(data.Allowed_Methods);
    setAllowedOrigin(data.Allowed_Origin);
    setAllowedCredentials(data.Allowed_Credentials);
    setSimple(data.Simple);
    setAllowned(data.Allowed);
  };

  return (
    <main className="flex w-full min-h-screen justify-center` p-24">
      <div className="flex flex-wrap justify-center w-full">
        <div className="w-full  p-4 text-center">
          <h1 className="w-full text-3xl font-bold"> Portfolio Page </h1>
        </div>

        <div className="w-full p-4 text-center pb-40">
          <h1 className="w-full text-5xl font-bold "> Projects: </h1>
        </div>

        <div className="w-full p-20 md:w-1/2 flex border-5 border-red-500 flex-wrap p-4 text-center min-h-20 cursor-pointer hover:bg-blue-100 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out">
          <div
            className="w-full p-4 text-center"
            onClick={() =>
              setPanels([!openPanels[0], ...openPanels.slice(1, -1)])
            }
          >
            <h1 className="w-full text-3xl font-bold "> Unicode Project </h1>
          </div>
          <div className="w-full p-4 text-center">
            {UnicodePanel({
              open: openPanels[0],
              submitUnicode: fetchUnicode,
              setCancel: () => {
                setPanels([false, ...openPanels.slice(1, -1)]);
                console.log('Closing');
              },
              unicode_info: unicodeInfo,
              handleChange: handleChange,
              unicodeLink: unicodeLink,
            })}
          </div>
        </div>

        <div className="w-full md:w-1/2 p-10 flex flex-wrap p-4 text-center min-h-20 cursor-pointer hover:bg-blue-100 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out">
          <div
            className="w-full p-4 text-center "
            onClick={() =>
              setPanels([
                ...openPanels.slice(0, 1),
                !openPanels[1],
                ...openPanels.slice(2),
              ])
            }
          >
            <h1 className="w-full text-3xl font-bold "> CORS Project </h1>
          </div>
          {CorsPanel({
            open: openPanels[1],
            endpoint: endpoint,
            method: method,
            headers: headers,
            origin: origin,
            close: () =>
              setPanels([
                openPanels[0],
                !openPanels[1],
                ...openPanels.slice(1, -1),
              ]),
            credentials: credentials,
            handleChange: handleCorsChange,
            handleSubmit: fetchCors,
            Allowed_Headers: allowedHeaders,
            Allowed_Methods: allowedMethods,
            Allowed_Origisn: allowedOrigin,
            Allowed_Credentials: allowedCredentials,
            Simple: simple,
            Allowed: allowned,
          })}
        </div>

        <div className="w-full md:w-1/2 p-10 flex flex-wrap p-4 text-center min-h-20 cursor-pointer hover:bg-blue-100 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out">
          <div
            className="w-full p-4 text-center flex flex-wrap "
            onClick={() =>
              setPanels([
                ...openPanels.slice(0, 2),
                !openPanels[2],
                ...openPanels.slice(3),
              ])
            }
          >
            <h1 className="w-full text-3xl font-bold ">
              {' '}
              Compilers Project :{' '}
            </h1>
          </div>

          <div className="w-full p-4 text-center">
            {openPanels[2] ? (
              <div className="flex w-full flex-wrap">
                {CompilerTile({
                  sourceCode: sourceCode,
                  result: result,
                  precedenceArguments: precedenceArguments,
                  setPrecedenceArguments: handlePrecedenceChanges,
                  runCompiler: runCompiler,
                  setSourceCode: (e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setSourceCode(e.target.value),
                  AST: ast,
                  showStack: showStack,
                  setShowStack: () => {
                    if (vm?.program_states == undefined) return;
                    setShowStack(!showStack);
                  },
                  vm: vm,
                  currentStep: currentStep,
                  setCurrentStep: (step: number) =>
                    setCurrentStep(step + currentStep),
                })}
                <div className="w-full p-4 text-center" ref={d3Ref}></div>
              </div>
            ) : null}
          </div>
        </div>

        <div className="w-full md:w-1/2 p-20 pt-50 flex flex-wrap p-4 text-center min-h-20 cursor-pointer hover:bg-blue-100 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out">
          <h1 className="w-full text-3xl font-bold">Shopping List Project</h1>
        </div>

        <div className="w-full md:w-1/2 p-20 flex flex-wrap p-4 text-center min-h-20 cursor-pointer hover:bg-blue-100 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out">
          <h1 className="w-full text-3xl font-bold">Media Servers Project</h1>
        </div>

        <div className="w-full w p-4 text-center min-h-20">
          <h1 className="w-full text-5xl font-bold "> Articles </h1>
        </div>

        <div className="w-full md:w-2/3 p-20 flex flex-wrap p-4 text-center min-h-20 cursor-pointer hover:bg-blue-100 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out">
          <h1
            className="w-full text-3xl font-bold"
            onClick={() => {
              setArticlePanels([
                !openAriclePanels[0],
                ...openAriclePanels.slice(1),
              ]);
              console.log(openAriclePanels);
            }}
          >
            {' '}
            OpenVPN Networking
          </h1>
          {openAriclePanels[0] ? (
            <div className="m-5">
              <p className="w-full pb-4 text-lg">
                In this article I created separate networks on a single linux
                machine using network namespaces directly, and VETH Peers and
                Setting up Hardcoded IP Routes. I then used Tshark (CLI Utility
                for Wireshark) to capture packets on a network interface, and
                then use Wireshark to analyze the packets. I also use OpenVPN to
                create a VPN Tunnel between two machines, and then use Wireshark
                to capture packets on the VPN Tunnel.
              </p>
              <a
                href="https://articles.compressibleflowcalculator.com/OpenVPN"
                className="bg-blue-200 rounded p-3"
              >
                Read Article{' '}
              </a>
            </div>
          ) : null}
        </div>
        <div className="w-full md:w-1/2 p-20 flex m-10 flex-wrap p-4 text-center min-h-20 cursor-pointer hover:bg-blue-100 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out">
          <h1
            className="w-full text-3xl font-bold"
            onClick={() => {
              setArticlePanels([
                false,
                !openAriclePanels[1],
                ...openAriclePanels.slice(2),
              ]);
              console.log(openAriclePanels);
            }}
          >
            {' '}
            Video Transcoding With FFMEPG
          </h1>
          {openAriclePanels[1] ? (
            <div className="m-5">
              <p className="w-full pb-4 text-lg">
                In this article I analyze a popular steraming protocol built on
                HTTP called MPEG-DASH (Dynamic Adaptive Streaming over HTTP). I
                then use FFMEPG to transcode a video file to what are called mp4
                fragments (.mps) and then create a manifest file (.mpd) that
                contains meta-information of the chosen streams and encoding bit
                rates for streaming options for each media stream (audio and
                video). You can then use a simple Javascript File on an HTML
                file to serve the video to a client and see through the
                Networking Console how the video matches with the contents of
                the manifest file.
              </p>
              <a
                href="https://articles.compressibleflowcalculator.com/MPEG-DASH"
                className="bg-blue-200 rounded p-3"
              >
                Read Article{' '}
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </main>
  );
}
