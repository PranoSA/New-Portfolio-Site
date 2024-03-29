'use client';

// @ts-nocheck
import '../styles/globals.css';

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
  ParseNode,
  BNFGrammarExpressions,
  TreeForJs3,
  ParseTreeBranch,
  PrecedenceLevels,
  coinTypesValues,
} from '@pranosa/makebelieve_parse_precedence';
import * as d3 from 'd3';

import { useEffect, useRef, useState } from 'react';
import CompilerTile, { DisplayStates } from '@/components/compilers';
import Link from 'next/link';

export default function Home() {
  //Encoding Mode, (Decimal or Hexadecimal)
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [openPrecedence, setOpenPrecedence] = useState<boolean>(false);
  const [displayState, setDisplayState] = useState<DisplayStates>(
    DisplayStates.None
  );
  const [about, setAbout] = useState<boolean>(false);

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
  const [parseTree, setParseTree] = useState<ParseTreeBranch>({
    operator: 'root',
    children: [],
    current_expression: [],
    string_representation: '',
    matching_string: '',
    grammar_rule_depth: 0,
  });
  const [grammarRules, setGrammerRules] = useState<string[]>([]);

  const d3Ref = useRef<HTMLDivElement>(null);
  const d3RefAST = useRef<HTMLDivElement>(null);

  let stepintraverse = 0;
  var pathToNode = [];

  const stackWithBlanks = (): string[] => {
    const stack = vm?.program_states[currentStep]?.stack.map((item) => {
      return String(item);
    });
    if (!stack) return [];
    const stackFilled = stack.concat(new Array(10 - stack.length).fill('X'));
    return stackFilled.reverse();
  };

  const stackDisplay = () => {
    return (
      <div className="w-full flex flex-wrap flex-row item-center justify-center pt-20">
        <div className="w-1/2">
          <h1 className="text-4xl font-bold">
            {' '}
            NEXT OP CODE : {vm?.program_states[currentStep].name} {}{' '}
            {vm?.program_states[currentStep].name === 'END' ? [result] : ''}
          </h1>
        </div>
        <div className="w-1/2 ">
          <h1 className="font-bold text-3xl pb-10 "> STACK : </h1>
          {stackWithBlanks().map((item, index) => (
            <div key={index} className="border-3 border-black mx-auto w-1/3 ">
              <h2 className="text-2xl font-bold m-1">
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

  function setHierarchyAttributes(node: D3Node, name = 'default', value = 0) {
    // Set the name and value properties
    node.name = node.value || name;
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

    // path to node ->
    //Find Path To Root And Reverse It
    let path = [];
    let current = node; // There is No Field Called Parent Here ...

    //How to associate current Step with the node

    node.style = currentStep == value ? 'fill: red' : 'fill: white';
  }

  //setHierarchyAttributes(yourTree); // Replace 'yourTree' with your actual tree

  type D3Node = TreeForJs3 & {
    name: string;
    value: string;
    children: D3Node[];
    step: number;
    calculated_value: number;
    style: string;
    y: number;
    x: number;
  };

  type D3ASTNode = ParseTreeBranch & {};

  function convertToD3ASTNode(tree: ParseTreeBranch): D3ASTNode {
    const d3Node: D3ASTNode = {
      ...tree,
    };
    return d3Node;
  }

  function convertToD3Node(tree: TreeForJs3): D3Node {
    // Add additional properties to the tree
    const d3Node: D3Node = {
      ...tree,
      name: tree.value,
      value: tree.value,
      children: [],
      step: 0,
      calculated_value: 0,
      style: 'fill: white',
      y: 0,
      x: 0,
      // ... additional properties
    };

    // If the tree has children, convert them to D3Node as well
    if (tree.children) {
      d3Node.children = tree.children.map(convertToD3Node);
    }

    return d3Node;
  }

  useEffect(() => {
    if (!(DisplayStates.ParseTree === displayState)) {
      d3.select(d3RefAST.current).selectAll('*').remove();
      return;
    }
    if (parseTree && d3RefAST.current) {
      d3.select(d3RefAST.current).selectAll('*').remove();

      const svg = d3
        .select(d3RefAST.current)
        .append('svg')
        .attr('width', 2200)
        .attr('height', 800);

      //const modifiedTree = { ...tree };
      const modifiedTree: D3ASTNode = convertToD3ASTNode(parseTree);

      //stepintraverse = 0;

      //setHierarchyAttributes(modifiedTree);

      // Convert the tree data into a d3 hierarchy
      const root = d3.hierarchy(modifiedTree);

      // Create a tree layout and assign the size
      const treeLayout = d3.tree().size([750, 2000]);

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
          .style('fill', 'yellow'); //Find if current step is refferring to this node

        const current_step_text = d.data.string_representation;

        const offset = d.data.grammar_rule_depth % 2 == 0 ? 20 : 20;

        svg
          .append('text')
          //@ts-ignore
          .attr('x', d.y + 20) // Position the label to the right of the node
          //@ts-ignore
          .attr('y', d.x + offset) // Position the label slightly below the node

          .text(current_step_text) //
          .style('font-size', '25px')
          .style('font-weight', 'bold');

        svg
          .append('text')
          //@ts-ignore
          .attr('x', d.y - 60) // Position the label to the right of the node

          //Maybe if depth is odd then make it below the node
          //@ts-ignore
          .attr('y', d.x + 60 - offset) // Position the label slightly below the node

          .text(`[R#${d.data.grammar_rule_depth + 1}]→`) //
          .style('font-size', '15px')
          .style('font-weight', 'bold');
      });
    }
  }, [parseTree, vm, displayState]);

  useEffect(() => {
    if (!(DisplayStates.AST === displayState)) {
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
        .attr('width', 2200)
        .attr('height', 800);

      //const modifiedTree = { ...tree };

      const modifiedTree: D3Node = convertToD3Node(tree);

      stepintraverse = 0;

      setHierarchyAttributes(modifiedTree);

      // Convert the tree data into a d3 hierarchy
      const root = d3.hierarchy(modifiedTree);

      // Create a tree layout and assign the size
      const treeLayout = d3.tree().size([800, 2000]);

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
          .style('fill', currentStep == d.data.step ? 'red' : 'yellow'); //Find if current step is refferring to this node

        const current_step_text =
          currentStep < d.data.step + 1 //d.data.step
            ? currentStep == d.data.step
              ? d.children?.length == 2
                ? `${d.children[0].data.calculated_value}${d.data.name}${d.children[1].data.calculated_value}`
                : d.data.name
              : d.data.name && d.data.name
            : d.data.calculated_value;

        svg
          .append('text')
          //@ts-ignore
          .attr('x', d.y + 15) // Position the label to the right of the node
          //@ts-ignore
          .attr('y', d.x + 25) // Position the label slightly below the node

          .text(
            current_step_text
            /*currentStep > d.data.step
              ? //@ts-ignore
                currentStep === d.data.step
                ? current_step_text
                : //@ts-ignore
                  d.data.calculated_value
              : //@ts-ignore
                d.data.name*/
          ) //
          .style('font-size', '35px')
          .style('font-weight', 'bold');
      });

      const nodeCount = root.descendants().length;
      console.log(`Number of nodes: ${nodeCount}`); // Log the number of nodes in the tree

      // Render the tree here using d3's selection and data binding methods
      // This will depend on the structure of your tree data and how you want to render it
    }
  }, [tree, currentStep, displayState]);

  const [precedenceArguments, setPrecedenceArguments] =
    useState<PrecedenceArgument>({
      '%_precedence': 3,
      '*_precedence': 3,
      '/_precedence': 3,
      '+_precedence': 2,
      '-_precedence': 2,
      exp_precedence: 4,
    });

  const handlePrecedenceChanges = (e: any, field: string) => {
    setPrecedenceArguments({
      ...precedenceArguments,
      [field]: e.target.value,
    });
  };

  interface CompilerProps {
    ast: Node;
  }

  const runCompiler = () => {
    const tokens = Lexer(sourceCode);
    const expressions = BNFGrammarExpressions(precedenceArguments);
    setGrammerRules(expressions);

    const GraphASTRoot: ParseTreeBranch = {
      operator: 'root',
      children: [],
      current_expression: tokens,
      string_representation: tokens
        .map((token) => {
          coinTypesValues[token.type];
        })
        .join(''),
      matching_string: expressions[0],
      grammar_rule_depth: 0,
    };

    const precedence_values: coinTypesValues[][] =
      PrecedenceLevels(precedenceArguments);

    ParseNode(GraphASTRoot, precedenceArguments);

    setParseTree(GraphASTRoot);

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
    setResult(result);

    const ast = genAST(vm_for_ast);

    setTree(TreeForJS3(ast[0]));
  };

  return (
    <div className="flex flex-wrap justify-center w-full bg-gradient-to-r from-pink-300 to-purple-500 min-h-screen min-w-screen">
      <div className="fixed top-0 left-0 p-4 pb-10">
        {/*<Link
          href="/"
          className="text-blue-900 font-bold text-bold hover:underline text-3xl"
        >
          ← Home
        </Link>
  */}
      </div>
      <div
        className="w-1/3 p-10 flex flex-wrap p-4 text-center min-h-20 fixed top-0 left-w-1/2"
        onClick={() => setAbout(!about)}
      >
        <h1 className="w-full text-3xl font-bold ">
          {' '}
          Compilers Project {about ? '▲' : '▼'}{' '}
        </h1>
        {about && (
          <div className="w-full flex flex-col bg-purple-400 text-gray text-lg font-bold text-center justify-center items-center p-10 mt-5">
            <p className="text-center items-center pb-5">
              This is a simple in-progress compiler project that parses an
              algebraic expression and generates a bytecode and a Stack
              Representative for the Program, and then runs the program on a
              virtual machine.
            </p>
            <p className="pb-4">
              The stack tab allows you to see the bytecode and operations (The
              OP_CONST operations are translated from an index to the constants
              array to the actual value being pushed on to the stack).
            </p>
            <p>
              The AST Allows you to see the running tree representation of the
              program
            </p>
            <p className="pb-4">
              The Parse Tree uses a Recursive Decent parser to generate a parse
              tree, which is different than the actual Pratt Parser being used
              to generate the AST. This is because it allows you to better to
              see how the grammar rules can be used to parse the input
              recursively. The Pratt Parser is harder to visualize, but you may
              see the Parse Tree slightly deviates from the Pratt Parser - as
              the Pratt Parser doesn&apos;t consume the whole string at a level
              - but iterates accross the string and changes parse precedence
              along the way. This Parse Tree is used to visualize how the
              grammar rules COULD be used in the most clear manner.
            </p>
          </div>
        )}
      </div>
      <div className="h-20 w-full"></div>

      <div className="w-full p-30 text-center flex flex-wrap justify-center">
        {
          <div className="flex w-full flex-wrap justify-center">
            <div className="w-full flex flex-wrap flex-center justify-center">
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
                openPrecedence: openPrecedence,
                setOpenPrecedence: () => {
                  setOpenPrecedence(!openPrecedence);
                },
                vm: vm,
                display_state: displayState,
                setDisplayState: (state: DisplayStates) =>
                  setDisplayState(state),
                currentStep: currentStep,
                setCurrentStep: (step: number) =>
                  setCurrentStep(step + currentStep),
              })}
            </div>
            <div className="w-full flex flex-center pt-4 text-center">
              <div className="w-full flex flex-center justify-around text-center h-10">
                <button
                  className=" text-black text-xl pt-4  font-bold  rounded h-10 "
                  onClick={() => {
                    displayState === DisplayStates.AST
                      ? setDisplayState(DisplayStates.None)
                      : setDisplayState(DisplayStates.AST);
                  }}
                >
                  AST
                </button>
                <button
                  className=" text-black text-xl  font-bold pt-4  rounded h-10 "
                  onClick={() =>
                    displayState === DisplayStates.ParseTree
                      ? setDisplayState(DisplayStates.None)
                      : setDisplayState(DisplayStates.ParseTree)
                  }
                >
                  Parse Tree
                </button>
                <button
                  className=" text-black text-xl  font-bold pt-4  rounded h-10 "
                  onClick={() =>
                    displayState === DisplayStates.Stack
                      ? setDisplayState(DisplayStates.None)
                      : setDisplayState(DisplayStates.Stack)
                  }
                >
                  Stack
                </button>
              </div>
            </div>
            <div className="w-full justify-center pl-10" ref={d3Ref}></div>

            <div className="w-full flex text-center justify-around">
              <div
                className="text-center justify-center pl-10"
                ref={d3RefAST}
              ></div>
              <div className=" pt-4 text-center">
                {displayState === DisplayStates.ParseTree ? (
                  <div className="w-full p-4 text-center">
                    {grammarRules.map((rule, index) => {
                      return (
                        <p
                          key={index}
                          className="p-4 text-2xl font-black font-bold"
                        >
                          Rule #{index + 1} : {rule}
                        </p>
                      );
                    })}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="w-full pt-4 text-center justify-around">
              <div className=" text-center flex flex-wrap">
                {DisplayStates.AST === displayState ? (
                  <div className="w-full  flex  justify-around">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold  px-4 p-2 rounded  "
                      onClick={() => setCurrentStep(currentStep - 1)}
                      disabled={currentStep === 0}
                    >
                      Previous
                    </button>
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 rounded "
                      onClick={() => setCurrentStep(currentStep + 1)}
                      //@ts-ignore
                      disabled={currentStep >= vm?.program_states.length - 1}
                    >
                      Next
                    </button>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="w-full text-center h-[70vh]">
              {DisplayStates.Stack === displayState ? (
                <div className="w-full  p-10 flex flex-col items-center justify-center">
                  <div className="w-full">
                    {`STEP ` +
                      (currentStep + 1) +
                      ` of ` +
                      vm?.program_states.length}
                  </div>
                  <div className="w-full  flex  items-around justify-around h-[50vh]">
                    {stackDisplay()}
                  </div>
                  <div className="w-full flex  items-center justify-center">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 m-5 p-3"
                      onClick={() => setCurrentStep(currentStep - 1)}
                      disabled={currentStep === 0}
                    >
                      Previous
                    </button>
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 m-5 p-3"
                      onClick={() => setCurrentStep(currentStep + 1)}
                      //@ts-ignore
                      disabled={currentStep >= vm?.program_states.length - 1}
                    >
                      Next
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        }
      </div>
    </div>
  );
}
