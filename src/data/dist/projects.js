"use strict";
/*

    A Project should have
    1. Name
    2. Description
    3. A List of Links to Pages with their name
    Such as :
                  <div className="w-full flex flex-wrap p-4 text-center justify-center">
                <div className="w-2/3 p-5 text-center">
                  Expression Parser and Compiler That Builds a Stack
                  representation, and Abstract Syntax Tree (AST) and a Parse
                  Tree using Generated Grammar Rules. This user is allowed to
                  generate their own grammar rules by specifying the precendence
                  of operators and the associativity of operators.
                </div>
                <div className="w-full w-flex flex-wrap p-4 text-center">
                  <Link href="/compilers">
                    <button
                      className="p-5 text-center bg-blue-200 rounded"
                      onClick={() => setLoading(true)}
                    >
                      {' '}
                      View Compiler App{' '}
                    </button>
                  </Link>
                </div>
              </div>

              Where their is one of more links, each with a URL and a Title
*/
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.Projects = void 0;
var link_1 = require("next/link");
var react_1 = require("react");
var CompilerProject = {
    Name: 'Expression Parser and Compiler',
    Description: "Expression Parser and Compiler That Builds a Stack\n                  representation, and Abstract Syntax Tree (AST) and a Parse\n                  Tree using Generated Grammar Rules. This user is allowed to\n                  generate their own grammar rules by specifying the precendence\n                  of operators and the associativity of operators.",
    Links: [
        {
            URL: '/compilers',
            Title: 'View Compiler App'
        },
    ]
};
var CORSProject = {
    Name: 'Mini-CORS Tester',
    Description: "Run Pre-Configured Integration Tests against a Certain HTTP(S)\n                Path Using a Certain Origin and Method, and Headers. This will\n                allow you to tell if the server is configured properly or not\n                for your frontend application running in a different origin to\n                make requests to.",
    Links: [
        {
            URL: '/cors',
            Title: 'View Mini-CORS Tester'
        },
    ]
};
var ElevationProject = {
    Name: 'Elevation Chart',
    Description: "Create and View Elevation Charts for a Route. This will allow you to\n                see the elevation of a route and see the elevation gain and loss of a route.",
    Links: [
        {
            URL: '/elevation/view',
            Title: 'View Elevation Charts'
        },
        {
            URL: '/elevation',
            Title: 'Create Elevation Chart'
        },
    ]
};
var OtherProjects = {
    Name: 'Miscellaneous Other Projects',
    Description: "Miscellaneous Other Projects that I have worked on.",
    Links: [
        {
            URL: '/otherprojects',
            Title: 'View Other Projects'
        },
    ]
};
var MediaServer = {
    //just use link to github for now
    Name: 'Media Server',
    Description: "A Media Server that allows you to upload and download media files.\n                    This is a work in progress.",
    Links: [
        {
            URL: 'github.com/PranSA/MediaServer',
            Title: 'View Media Server on Github'
        },
    ]
};
//this is also just a link github for now
var ShoppingListApp = {
    Name: 'Shopping List App',
    Description: "This is my Portfolio Website. It is a work in progress.",
    Links: [
        {
            URL: 'https://github.com/PranoSA/Portfolio',
            Title: 'View Portfolio on Github'
        },
    ]
};
var ImageApp = {
    Name: 'Image Mapper',
    Description: "This Application Allows users to create trips, upload images to them, categorize them, edit them, and view them on a map",
    Links: [
        {
            URL: 'https://images.compressibleflowcalculator.com',
            Title: 'View Image Mapper'
        },
    ]
};
/*
              <div className="w-full flex flex-wrap p-4 text-center justify-center">
                <div className="w-2/3 p-5 text-center">
                  Learn About the Binary Representation of Textual Objects in
                  Unicode. This project demonstrate the use of Unicode Character
                  Standards, Unicode Character Information, and Encoding of
                  Characters using UTF-8, UTF-16, and UTF-32. Also Creates a
                  Link Based on the Character Form to my Full-Fledged Unicode
                  Inspection Application.
                </div>
                <div className="w-full w-flex flex-wrap p-4 text-center">
                  <Link href="/unicode">
                    <button
                      className="p-5 text-center bg-blue-200 rounded"
                      onClick={() => {
                        setLoading(true);
                        setPanels([
                          !openPanels[0] || loading,
                          ...openPanels.slice(1),
                        ]);
                      }}
                    >
                      {' '}
                      View Unicode Mini-App{' '}
                    </button>
                  </Link>
                </div>
              </div>
              */
var UnicodeProject = {
    Name: 'Unicode Mini-App',
    Description: "Learn About the Binary Representation of Textual Objects in\n                    Unicode. This project demonstrate the use of Unicode Character\n                    Standards, Unicode Character Information, and Encoding of\n                    Characters using UTF-8, UTF-16, and UTF-32. Also Creates a\n                    Link Based on the Character Form to my Full-Fledged Unicode\n                    Inspection Application.",
    Links: [
        {
            URL: '/unicode',
            Title: 'View Unicode Mini-App'
        },
        {
            URL: 'https://unicode.compressibleflowcalculator.com',
            Title: 'View Full Unicode Inspection Application'
        },
    ]
};
exports.Projects = [
    CompilerProject,
    CORSProject,
    ElevationProject,
    OtherProjects,
    MediaServer,
    ShoppingListApp,
    ImageApp,
    UnicodeProject,
];
var ProjectModal = function (_a) {
    //should be a mapping that for each proejct shows something like above comment
    var setLoading = _a.setLoading;
    var _b = react_1.useState(exports.Projects.map(function () { return false; })), openPanels = _b[0], setPanels = _b[1];
    var onClose = function (index) {
        //toggle the panel
        setPanels(__spreadArrays(openPanels.slice(0, index), [
            !openPanels[index]
        ], openPanels.slice(index + 1)));
    };
    return (React.createElement("div", { className: "w-full flex-wrap flex " }, exports.Projects.map(function (project, index) {
        return (React.createElement("div", { onClick: function () { return onClose(index); }, className: "w-full md:w-1/2 p-20 pt-50 flex flex-wrap p-4 text-center min-h-20 cursor-pointer hover:bg-blue-100 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out" },
            React.createElement("h1", { className: "w-full text-3xl font-bold" }, project.Name),
            React.createElement("div", { className: "w-full p-4 text-center flex-center" }, openPanels[index] ? (React.createElement("div", { className: "w-full flex flex-wrap p-4 text-center justify-center" },
                React.createElement("div", { className: "w-2/3 p-5 text-center" }, project.Description),
                React.createElement("div", { className: "w-full flex flex-wrap flex-col p-4 text-center" }, project.Links.map(function (link, index) {
                    return (React.createElement(link_1["default"], { href: link.URL },
                        React.createElement("button", { className: "p-5 m-5 text-center bg-blue-200 rounded hover:bg-blue-300 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out", onClick: function () { return setLoading(true); } }, link.Title)));
                })))) : null)));
    })));
};
exports["default"] = ProjectModal;
//shoukld be something like this:
/*

        <div
          onClick={() =>
            setPanels([
              ...openPanels.slice(0, 6),
              !openPanels[6] || loading,
              ...openPanels.slice(7),
            ])
          }
          className="w-full md:w-1/2 p-20 pt-50 flex flex-wrap p-4 text-center min-h-20 cursor-pointer hover:bg-blue-100 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out"
        >
          <h1 className="w-full text-3xl font-bold">Elevation Project </h1>
          <div className="w-full p-4 text-center flex-center">
            {openPanels[6] ? (
              <div className="w-full flex flex-wrap p-4 text-center justify-center">
                <div className="w-2/3 p-5 text-center"></div>
                <div className="w-full flex flex-wrap flex-col p-4 text-center">
                  <Link href="/elevation/view">
                    <button
                      className="p-5 m-5 text-center bg-blue-200 rounded hover:bg-blue-300 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out"
                      onClick={() => setLoading(true)}
                    >
                      {' '}
                      View Elevation Charts{' '}
                    </button>
                  </Link>
                  <Link href="/elevation">
                    <button
                      className="p-5 m-5 text-center bg-blue-200 rounded hover:bg-blue-300 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out"
                      onClick={() => setLoading(true)}
                    >
                      {' '}
                      Create Elevation Chart{' '}
                    </button>
                  </Link>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        */
//for each project
