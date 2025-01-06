'use client';
"use strict";
exports.__esModule = true;
require("../styles/globals.css");
var react_1 = require("react");
var fa_1 = require("react-icons/fa");
var VaultProject = {
    Name: 'Vault Plugin',
    Description: "Vault Plugin That Creates Sample Per JWTs that have an audience\n  attribute mapped to the particular Engine and Per Engine Configuration\n  (Engine Represents Paticular Configuration Objects)",
    Links: [
        {
            URL: 'https://github.com/PranoSA/VaultJWTPlugin',
            Title: 'View on Github',
            Icon: React.createElement(fa_1.FaGithub, { size: 30, className: "text-white" })
        },
    ]
};
var SambaProject = {
    Name: 'Samba Project',
    Description: "Uses OIDC authentication, MongoDB, Postgres, and gRPC in GoLang to\n  dynamically allocate Samba Shares. Consists of 2 Different Tiers - 1.\n  Frontend Servers that handle and route requetsts, and 2. Backend Samba\n  Share Servers That Mount Shares and Make Them Publically Available",
    Links: [
        {
            URL: 'https://github.com?PranoSA/Samba_Project_Backends',
            Title: 'View on Github',
            Icon: React.createElement(fa_1.FaGithub, { size: 30, className: "text-white" })
        },
    ]
};
var CompresibleFlowCalculator = {
    Name: 'Compresible Flow Calculator',
    Description: "Application That Lets you Examine Isentropic and Static Properties of\n  Flows, Make comparisons between Flows, see the effects of adjusting\n  parameters like effeciency ratings, pressure ratios, etc. of things\n  like Turbines, Compressors, Diffuzers, and Nozzles, and analyze the\n  relationships between properties like usable work, entropy, pressure,\n  and enthalpy.",
    Links: [
        {
            URL: 'https://github.com/PhilDeveloperCA/Compressible-Flows-App',
            Title: 'View on Github',
            Icon: React.createElement(fa_1.FaGithub, { size: 30, className: "text-white" })
        },
        {
            URL: 'https://github.com/PranoSA/New-Compressible-Flow-Calculator',
            Title: 'View on Github',
            Icon: React.createElement(fa_1.FaGithub, { size: 30, className: "text-white" })
        },
        {
            URL: 'www.compressibleflowcalculator.com',
            Title: 'View on Web',
            Icon: React.createElement(fa_1.FaArrowAltCircleRight, { size: 30, className: "text-white" })
        },
    ]
};
var PythonUnitsConverterCalculator = {
    Name: 'Python Units Converter Calculator',
    Description: "A Python Bot that Converts Units",
    Links: [
        {
            URL: 'https://github.com/PhilDeveloperCA/Units_Bot_Python',
            Title: 'View on Github',
            Icon: React.createElement(fa_1.FaGithub, { size: 30, className: "text-white" })
        },
    ]
};
var otherProjects = [
    VaultProject,
    SambaProject,
    CompresibleFlowCalculator,
    PythonUnitsConverterCalculator,
];
var Page = function () {
    var _a = react_1.useState([
        false,
        false,
        false,
        false,
        false,
    ]), expandedPanels = _a[0], setExpandedPanels = _a[1];
    return (React.createElement("div", { className: "flex-row flex flex-wrap justify-center items-center text-primary" },
        React.createElement("div", { className: "w-full text-center text-2xl font-bold " }, "Other Projects"),
        otherProjects.map(function (project, index) { return (React.createElement("div", { key: index, className: "w-full text-center w-full pb-4 flex-wrap flex md:w-1/2 border-4 border-gray-400 m-5" },
            React.createElement("div", { className: "w-full text-center p-4" },
                React.createElement("h1", { className: "font-bold text-2xl " }, project.Name)),
            React.createElement("div", { className: "w-full " }, project.Description),
            React.createElement("div", { className: "w-full flex-col" }, project.Links.map(function (link, index) { return (React.createElement("div", { className: "flex flex-row items-end pt-5 pl-4", key: index },
                React.createElement("p", { className: "text-left pr-7 w-[150px]" }, link.Title),
                React.createElement("a", { href: link.URL }, link.Icon))); })))); })));
};
exports["default"] = Page;
