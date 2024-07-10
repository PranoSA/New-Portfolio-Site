'use client';
"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
require("./globals.css");
var react_1 = require("react");
var link_1 = require("next/link");
function Home() {
    var _a = react_1.useState([
        false,
        false,
        false,
        false,
        false,
        false,
    ]), openPanels = _a[0], setPanels = _a[1];
    var _b = react_1.useState([false]), openAriclePanels = _b[0], setArticlePanels = _b[1];
    var _c = react_1.useState(false), loading = _c[0], setLoading = _c[1];
    //Encoding Mode, (Decimal or Hexadecimal)
    return (React.createElement("main", { className: "flex w-full min-h-screen justify-center p-24" },
        React.createElement("div", { className: "flex flex-wrap justify-center w-full" },
            React.createElement("div", { className: "w-full  p-4 text-center" },
                React.createElement("h1", { className: "w-full text-6xl font-bold" }, " Portfolio Page ")),
            React.createElement("div", { className: "w-full  p-4 text-center" },
                React.createElement(link_1["default"], { href: "/about" },
                    React.createElement("button", { onClick: function () { return setLoading(true); }, className: "p-5 text-center text-3xl rounded transform transition duration-500 ease-in-out hover:scale-110 hover:text-4xl hover:text-white" },
                        ' ',
                        "About Me",
                        ' '))),
            React.createElement("div", { className: "w-full p-4 text-center pb-30 pt-10" },
                React.createElement("h1", { className: "w-full text-5xl font-bold " }, " Projects")),
            React.createElement("div", { onClick: function () {
                    return setPanels(__spreadArrays([!openPanels[0] || loading], openPanels.slice(1)));
                }, className: "w-full md:w-1/2 p-20 pt-50 rounded flex flex-wrap p-4 text-center min-h-20 cursor-pointer hover:bg-blue-300 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out" },
                React.createElement("h1", { className: "w-full text-3xl font-bold" }, " Unicode Project "),
                React.createElement("div", { className: "w-full p-4 text-center flex-center" }, openPanels[0] ? (React.createElement("div", { className: "w-full flex flex-wrap p-4 text-center justify-center" },
                    React.createElement("div", { className: "w-2/3 p-5 text-center" }, "Learn About the Binary Representation of Textual Objects in Unicode. This project demonstrate the use of Unicode Character Standards, Unicode Character Information, and Encoding of Characters using UTF-8, UTF-16, and UTF-32. Also Creates a Link Based on the Character Form to my Full-Fledged Unicode Inspection Application."),
                    React.createElement("div", { className: "w-full w-flex flex-wrap p-4 text-center" },
                        React.createElement(link_1["default"], { href: "/unicode" },
                            React.createElement("button", { className: "p-5 text-center bg-blue-200 rounded", onClick: function () {
                                    setLoading(true);
                                    setPanels(__spreadArrays([
                                        !openPanels[0] || loading
                                    ], openPanels.slice(1)));
                                } },
                                ' ',
                                "View Unicode Mini-App",
                                ' '))))) : null)),
            React.createElement("div", { onClick: function () {
                    return setPanels(__spreadArrays(openPanels.slice(0, 1), [
                        !openPanels[1]
                    ], openPanels.slice(2)));
                }, className: "w-full md:w-1/2 p-20 pt-50 flex flex-wrap p-4 text-center min-h-20 cursor-pointer hover:bg-blue-400 hover:shadow-lg transform hover:scale-90 transition-all duration-200 ease-in-out" },
                React.createElement("h1", { className: "w-full text-3xl font-bold" }, " CORS Test "),
                React.createElement("div", { className: "w-full p-4 text-center flex-center" }, openPanels[1] ? (React.createElement("div", { className: "w-full flex flex-wrap p-4 text-center justify-center" },
                    React.createElement("div", { className: "w-2/3 p-5 text-center" }, "Run Pre-Configured Integration Tests against a Certain HTTP(S) Path Using a Certain Origin and Method, and Headers. This will allow you to tell if the server is configured properly or not for your frontend application running in a different origin to make requests to."),
                    React.createElement("div", { className: "w-full w-flex flex-wrap p-4 text-center" },
                        React.createElement(link_1["default"], { href: "/cors" },
                            React.createElement("button", { className: "p-5 text-center bg-blue-200 rounded", onClick: function () { return setLoading(true); } },
                                ' ',
                                "View Mini-CORS Tester",
                                ' '))))) : null)),
            React.createElement("div", { onClick: function () {
                    return setPanels(__spreadArrays(openPanels.slice(0, 2), [
                        !openPanels[2] || loading
                    ], openPanels.slice(3)));
                }, className: "w-full md:w-1/2 p-20 pt-50 flex flex-wrap p-4 text-center min-h-20 cursor-pointer hover:bg-blue-100 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out" },
                React.createElement("h1", { className: "w-full text-3xl font-bold" }, "Compilers Project "),
                React.createElement("div", { className: "w-full p-4 text-center flex-center" }, openPanels[2] ? (React.createElement("div", { className: "w-full flex flex-wrap p-4 text-center justify-center" },
                    React.createElement("div", { className: "w-2/3 p-5 text-center" }, "Expression Parser and Compiler That Builds a Stack representation, and Abstract Syntax Tree (AST) and a Parse Tree using Generated Grammar Rules. This user is allowed to generate their own grammar rules by specifying the precendence of operators and the associativity of operators."),
                    React.createElement("div", { className: "w-full w-flex flex-wrap p-4 text-center" },
                        React.createElement(link_1["default"], { href: "/compilers" },
                            React.createElement("button", { className: "p-5 text-center bg-blue-200 rounded", onClick: function () { return setLoading(true); } },
                                ' ',
                                "View Compiler App",
                                ' '))))) : null)),
            React.createElement("div", { className: "w-full md:w-1/2 p-20 pt-50 flex flex-wrap p-4 text-center min-h-20 cursor-pointer hover:bg-blue-100 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out" },
                React.createElement("h1", { className: "w-full text-3xl font-bold" }, "Shopping List Project")),
            React.createElement("div", { className: "w-full md:w-1/2 p-20 flex flex-wrap p-4 text-center min-h-20 cursor-pointer hover:bg-blue-100 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out" },
                React.createElement("h1", { className: "w-full text-3xl font-bold" }, "Media Servers Project")),
            React.createElement("div", { onClick: function () {
                    return setPanels(__spreadArrays(openPanels.slice(0, 5), [
                        !openPanels[5]
                    ], openPanels.slice(6)));
                }, className: "w-full md:w-1/2 p-20 flex flex-wrap p-4 text-center min-h-20 cursor-pointer hover:bg-blue-100 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out" },
                React.createElement("div", { className: "w-full p-4 text-center" },
                    React.createElement("h1", { className: "w-full text-3xl font-bold" }, "Other Projects")),
                openPanels[5] && (React.createElement("div", { className: "w-full flex flex-wrap p-4 text-center justify-center" },
                    React.createElement("div", { className: "w-full justify-center p-4" },
                        "Miscellaneous Other Projects that I have worked on.",
                        ' '),
                    React.createElement(link_1["default"], { href: "/otherprojects" },
                        React.createElement("button", { className: "p-5 text-center bg-blue-200 rounded" },
                            ' ',
                            "View Other Projects",
                            ' '))))),
            React.createElement("div", { onClick: function () {
                    return setPanels(__spreadArrays(openPanels.slice(0, 6), [
                        !openPanels[6] || loading
                    ], openPanels.slice(7)));
                }, className: "w-full md:w-1/2 p-20 pt-50 flex flex-wrap p-4 text-center min-h-20 cursor-pointer hover:bg-blue-100 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out" },
                React.createElement("h1", { className: "w-full text-3xl font-bold" }, "Elevation Project "),
                React.createElement("div", { className: "w-full p-4 text-center flex-center" }, openPanels[6] ? (React.createElement("div", { className: "w-full flex flex-wrap p-4 text-center justify-center" },
                    React.createElement("div", { className: "w-2/3 p-5 text-center" }),
                    React.createElement("div", { className: "w-full flex flex-wrap flex-col p-4 text-center" },
                        React.createElement(link_1["default"], { href: "/elevation/view" },
                            React.createElement("button", { className: "p-5 m-5 text-center bg-blue-200 rounded hover:bg-blue-300 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out", onClick: function () { return setLoading(true); } },
                                ' ',
                                "View Elevation Charts",
                                ' ')),
                        React.createElement(link_1["default"], { href: "/elevation" },
                            React.createElement("button", { className: "p-5 m-5 text-center bg-blue-200 rounded hover:bg-blue-300 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out", onClick: function () { return setLoading(true); } },
                                ' ',
                                "Create Elevation Chart",
                                ' '))))) : null)),
            React.createElement("div", { className: "w-full w p-4 text-center min-h-20" },
                React.createElement("h1", { className: "w-full text-5xl font-bold " }, " Articles ")),
            React.createElement("div", { className: "w-full md:w-2/3 p-20 flex flex-wrap p-4 text-center min-h-20 cursor-pointer hover:bg-blue-100 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out" },
                React.createElement("h1", { className: "w-full text-3xl font-bold", onClick: function () {
                        setArticlePanels(__spreadArrays([
                            !openAriclePanels[0]
                        ], openAriclePanels.slice(1)));
                    } },
                    ' ',
                    "OpenVPN Networking"),
                openAriclePanels[0] ? (React.createElement("div", { className: "m-5" },
                    React.createElement("p", { className: "w-full pb-4 " }, "In this article I created separate networks on a single linux for Wireshark) to capture packets on one network interface, and then use Wireshark to analyze the packets. I also use OpenVPN to create a VPN Tunnel between two machines, and then use Wireshark to capture packets on the VPN Tunnel."),
                    React.createElement("div", { className: "w-full w-flex flex-wrap p-4 text-center h-15" }),
                    React.createElement("a", { href: "https://articles.compressibleflowcalculator.com/OpenVPN", className: "p-5 text-center bg-blue-200 rounded m-5" },
                        "Read Article",
                        ' '))) : null),
            React.createElement("div", { className: "w-full md:w-1/2 p-20 flex m-10 flex-wrap p-4 text-center min-h-20 cursor-pointer hover:bg-blue-100 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out" },
                React.createElement("h1", { className: "w-full text-3xl font-bold", onClick: function () {
                        setArticlePanels(__spreadArrays([
                            false,
                            !openAriclePanels[1]
                        ], openAriclePanels.slice(2)));
                        console.log(openAriclePanels);
                    } },
                    ' ',
                    "Video Transcoding With FFMEPG"),
                openAriclePanels[1] ? (React.createElement("div", { className: "m-5" },
                    React.createElement("p", { className: "w-full pb-4 " }, "In this article I analyze a popular steraming protocol built on HTTP called MPEG-DASH (Dynamic Adaptive Streaming over HTTP). I then use FFMEPG to transcode a video file to what are called mp4 fragments (.mps) and then create a manifest file (.mpd) that contains meta-information of the chosen streams and encoding bit rates for streaming options for each media stream (audio and video). You can then use a simple Javascript File on an HTML file to serve the video to a client and see through the Networking Console how the video matches with the contents of the manifest file."),
                    React.createElement("div", { className: "w-full w-flex flex-wrap p-4 text-center h-15" }),
                    React.createElement("a", { href: "https://articles.compressibleflowcalculator.com/MPEG-DASH", className: "p-5 text-center bg-blue-200 rounded" },
                        "Read Article",
                        ' '))) : null),
            React.createElement("div", { className: "w-full md:w-2/3 p-20 flex flex-wrap p-4 text-center min-h-20 cursor-pointer hover:bg-blue-100 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out" },
                React.createElement("h1", { className: "w-full text-3xl font-bold", onClick: function () {
                        setArticlePanels(__spreadArrays([
                            false,
                            false,
                            !openAriclePanels[2]
                        ], openAriclePanels.slice(3)));
                    } },
                    ' ',
                    "OpenVPN Networking"),
                openAriclePanels[2] ? (React.createElement("div", { className: "m-5" },
                    React.createElement("p", { className: "w-full pb-4 " }, "In this article I introduce the concept of Digital Maps, and how they compare to Image Maps and SVG Maps. Image Maps give visual information to the user and may involve pre-rendered geographical information about a variables, SVG Maps on the web allow native javascript interaction with image, but digital maps offer high degree of variant information handling and display capabilities, allowing the use of various raster data formats, vector data formats, and tiled vector and raster data formats, as well as rich display capabilities (Heat maps, contour maps, clustering, etc.), and interaction with a geoServer to render new layers on a map."),
                    React.createElement("div", { className: "w-full w-flex flex-wrap p-4 text-center h-15" }),
                    React.createElement("a", { href: "https://articles.compressibleflowcalculator.com/Digital_Maps", className: "p-5 text-center bg-blue-200 rounded m-5" },
                        "Read Article",
                        ' '))) : null))));
}
exports["default"] = Home;
