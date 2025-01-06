"use strict";
exports.__esModule = true;
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
            URL: 'https://github.com/PranoSA/Samba_Project_Backends',
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
exports["default"] = otherProjects;
