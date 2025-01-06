"use strict";
/*

    A Project should have
    1. Name
    2. Description
    3. A List of Links to Pages with their name
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
//fa-icons, down arrow, visit page, up arrow
var fa_1 = require("react-icons/fa");
var SportsPickProject = {
    Name: 'Sports Pick App',
    Description: "This is a Sports Pick App that allows users to create groups, invite users to groups,\n  and make picks for a weekly set of games based on the group settings for allocated picks and points. Then - it constructs\n  a leaderboard based on the picks made by the users.",
    Links: [
        {
            URL: 'https://sportspicks.compressibleflowcalculator.com',
            Title: 'View Sports Pick App'
        },
    ]
};
var TimelinesProject = {
    Name: 'Timelines App',
    Description: "Created an application enabling users to build custom historical timelines, save them to personal accounts, and optionally publish them to a central catalog. For a cross-topic historical analysis, users can search and compare multiple timelines from published timelines or their custom timelines in a single combined timeline.",
    Links: [
        {
            URL: 'https://timelines.compressibleflowcalculator.com',
            Title: 'View Timelines App'
        },
    ]
};
var MapsProject = {
    Name: 'Map Projection and Distortion Viewer',
    Description: 'This Map allows you to show how a circular land mass will distort both laterally and vertically when subjected to different 2-D projections of the Earth, including Web Mercator, Equirectangular, Lambert Equal Area, Azimuthal Equadistant, Azimuthal Equal Area, and more.',
    Links: [
        {
            URL: 'https://maps.compressibleflowcalculator.com',
            Title: 'View Map Projection and Distortion Viewer'
        },
    ]
};
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
            URL: 'github.com/PranoSA/MediaServer',
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
    ImageApp,
    TimelinesProject,
    SportsPickProject,
    MapsProject,
    CompilerProject,
    CORSProject,
    ElevationProject,
    OtherProjects,
    MediaServer,
    ShoppingListApp,
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
    return (React.createElement("div", { className: "w-full flex-wrap flex pt-10 " }, exports.Projects.map(function (project, index) {
        return (React.createElement("div", { key: project.Name, onClick: function () { return onClose(index); }, className: "w-full md:w-1/2 \n            hover:text-black hover:font-bold\n            pt-50 flex flex-wrap  text-center min-h-20 cursor-pointer hover:bg-blue-300 hover:shadow-lg transform hover:scale-100 transition-all duration-200 ease-in-out" },
            React.createElement("div", { className: " relative w-full border-black border-2" },
                React.createElement("h1", { className: "w-full text-3xl font-bold" }, project.Name),
                React.createElement("div", { className: "absolute right-10 top-10" }, openPanels[index] ? (React.createElement(fa_1.FaArrowUp, { size: 20 })) : (React.createElement(fa_1.FaArrowDown, { size: 20 }))),
                React.createElement("div", { className: "w-full p-2 text-center flex-center " }, openPanels[index] ? (React.createElement("div", { className: "w-full flex flex-wrap p-2 text-center justify-center" },
                    React.createElement("div", { className: "p-2  text-center" }, project.Description),
                    React.createElement("div", { className: "w-full flex flex-wrap flex-col p-2 text-center" }, project.Links.map(function (link, index) {
                        return (React.createElement(link_1["default"], { href: link.URL, 
                            //make lionk absolute path
                            key: index },
                            React.createElement("button", { className: "p-5 m-5 text-center bg-blue-200 rounded  hover:shadow-lg transform hover:scale-110 \n                              \n                              hover:font-bold hover:border-4 hover:border-black\n                              transition-all duration-200 ease-in-out", onClick: function () { return setLoading(true); } }, link.Title)));
                    })))) : null))));
    })));
};
exports["default"] = ProjectModal;
