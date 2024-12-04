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
var articles_1 = require("@/data/articles");
var projects_1 = require("../data/projects");
var projects_2 = require("../data/projects");
//import Up and down arrow
function Home() {
    var _a = react_1.useState(projects_1.Projects.map(function () { return false; })), openPanels = _a[0], setPanels = _a[1];
    var _b = react_1.useState(articles_1.articleDescriptions.map(function () { return false; })), openAriclePanels = _b[0], setArticlePanels = _b[1];
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
            React.createElement("div", { className: "w-full flex flex-wrap flex-row" },
                React.createElement(projects_2["default"], { setLoading: setLoading })),
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
            articles_1.articleDescriptions.map(function (article, index) {
                return (React.createElement("div", { key: index, className: "w-full md:w-2/3 p-20 flex flex-wrap p-4 text-center min-h-20 cursor-pointer hover:bg-blue-100 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out" },
                    React.createElement("h1", { key: index, className: "w-full text-3xl font-bold", onClick: function () {
                            setArticlePanels(__spreadArrays(openAriclePanels.slice(0, index), [
                                !openAriclePanels[index]
                            ], openAriclePanels.slice(index + 1)));
                        } },
                        ' ',
                        article.Title),
                    openAriclePanels[index] ? (React.createElement("div", { className: "m-5" },
                        React.createElement("p", { className: "w-full pb-4 " }, article.Description),
                        React.createElement("div", { className: "w-full w-flex flex-wrap p-4 text-center h-15" }),
                        React.createElement("a", { href: article.URL, className: "p-5 text-center bg-blue-200 rounded m-5" },
                            "Read Article",
                            ' '))) : null));
            }))));
}
exports["default"] = Home;
