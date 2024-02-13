'use client';
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var unicode_1 = require("../app/unicode");
var Cors_Panel_1 = require("./Cors_Panel");
require("./globals.css");
var react_1 = require("react");
function Home() {
    var _this = this;
    var _a = react_1.useState([false]), openPanels = _a[0], setPanels = _a[1];
    var _b = react_1.useState(''), unicodeSet = _b[0], setUnicode = _b[1];
    var _c = react_1.useState({
        na: '',
        blk: '',
        cp: '',
        na1: '',
        dm: '',
        gc: '',
        sc: ''
    }), unicodeInfo = _c[0], setUnicodeInfo = _c[1];
    var _d = react_1.useState([false]), openAriclePanels = _d[0], setArticlePanels = _d[1];
    //Encoding Mode, (Decimal or Hexadecimal)
    var _e = react_1.useState('hexadecimal'), encodingMode = _e[0], setEncodingMode = _e[1];
    var _f = react_1.useState(''), unicodeLink = _f[0], setUnicodeLink = _f[1];
    var _g = react_1.useState(''), endpoint = _g[0], setEndpoint = _g[1];
    var _h = react_1.useState(''), method = _h[0], setMethod = _h[1];
    var _j = react_1.useState(''), headers = _j[0], setHeaders = _j[1];
    var _k = react_1.useState(''), origin = _k[0], setOrigin = _k[1];
    var _l = react_1.useState(''), credentials = _l[0], setCredentials = _l[1];
    var _m = react_1.useState(''), allowedHeaders = _m[0], setAllowedHeaders = _m[1];
    var _o = react_1.useState(''), allowedMethods = _o[0], setAllowedMethods = _o[1];
    var _p = react_1.useState(''), allowedOrigin = _p[0], setAllowedOrigin = _p[1];
    var _q = react_1.useState(''), allowedCredentials = _q[0], setAllowedCredentials = _q[1];
    var _r = react_1.useState(false), simple = _r[0], setSimple = _r[1];
    var changeEncodingMode = function (mode) {
        setEncodingMode(mode);
    };
    var handleChange = function (e) {
        setUnicode(e.target.value);
        //Hexi Value
        var hex = e.target.value;
        // Parse the Hexadecimal Value to a Unicode Character
        var unicode = String.fromCharCode(parseInt(hex, 16));
        setUnicodeLink("https://unicode.compressibleflowcalculator.com?conversions=[{\"value\":\"" + unicode + "\"}]");
    };
    var fetchUnicode = function () { return __awaiter(_this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    //ENsure that the unicode is a valid string
                    if (unicodeSet.length < 1)
                        return [2 /*return*/];
                    // Make Sure Hexadecimal Values [0-9] and [A-F] are the only values in the string
                    if (!/^[0-9A-F]+$/i.test(unicodeSet))
                        return [2 /*return*/];
                    return [4 /*yield*/, fetch("https://worker-steep-limit-1990.pcadler.workers.dev/" + unicodeSet, {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    setUnicodeInfo(data);
                    return [2 /*return*/];
            }
        });
    }); };
    var handleCorsChange = function (e, name) {
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
    var fetchCors = function () { return __awaiter(_this, void 0, void 0, function () {
        var body, response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    body = {
                        endpoint: endpoint,
                        method: method,
                        headers: headers,
                        origin: origin,
                        credentials: credentials
                    };
                    console.log(body);
                    return [4 /*yield*/, fetch('/api/cors', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(body)
                        })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    setAllowedHeaders(data.Allowed_Headers);
                    setAllowedMethods(data.Allowed_Methods);
                    setAllowedOrigin(data.Allowed_Origin);
                    setAllowedCredentials(data.Allowed_Credentials);
                    setSimple(data.Simple);
                    return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement("main", { className: "flex w-full min-h-screen justify-center` p-24" },
        React.createElement("div", { className: "flex flex-wrap justify-center w-full" },
            React.createElement("div", { className: "w-full  p-4 text-center" },
                React.createElement("h1", { className: "w-full text-3xl font-bold" }, " Portfolio Page ")),
            React.createElement("div", { className: "w-full p-4 text-center pb-40" },
                React.createElement("h1", { className: "w-full text-5xl font-bold " }, " Projects: ")),
            React.createElement("div", { className: "w-full p-20 md:w-1/2 flex border-5 border-red-500 flex-wrap p-4 text-center min-h-20 cursor-pointer hover:bg-blue-100 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out" },
                React.createElement("div", { className: "w-full p-4 text-center", onClick: function () {
                        return setPanels(__spreadArrays([!openPanels[0]], openPanels.slice(1, -1)));
                    } },
                    React.createElement("h1", { className: "w-full text-3xl font-bold " }, " Unicode Project ")),
                React.createElement("div", { className: "w-full p-4 text-center" }, unicode_1.UnicodePanel({
                    open: openPanels[0],
                    submitUnicode: fetchUnicode,
                    setCancel: function () {
                        setPanels(__spreadArrays([false], openPanels.slice(1, -1)));
                        console.log('Closing');
                    },
                    unicode_info: unicodeInfo,
                    handleChange: handleChange,
                    unicodeLink: unicodeLink
                }))),
            React.createElement("div", { className: "w-full md:w-1/2 p-20  pt-50 flex flex-wrap p-4 text-center min-h-20 cursor-pointer hover:bg-blue-100 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out" },
                React.createElement("div", { className: "w-full p-4 text-center" },
                    React.createElement("h1", { className: "w-full text-3xl font-bold " }, " CORS Project ")),
                Cors_Panel_1["default"]({
                    open: openPanels[1],
                    endpoint: endpoint,
                    method: method,
                    headers: headers,
                    origin: origin,
                    close: function () {
                        return setPanels(__spreadArrays([openPanels[0], false], openPanels.slice(1, -1)));
                    },
                    credentials: credentials,
                    handleChange: handleCorsChange,
                    handleSubmit: fetchCors,
                    Allowed_Headers: allowedHeaders,
                    Allowed_Methods: allowedMethods,
                    Allowed_Origisn: allowedOrigin,
                    Allowed_Credentials: allowedCredentials,
                    Simple: false,
                    Allowed: false
                })),
            React.createElement("div", { className: "w-full md:w-1/2 p-20 pt-50 flex flex-wrap p-4 text-center min-h-20 cursor-pointer hover:bg-blue-100 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out" },
                React.createElement("h1", { className: "w-full text-3xl font-bold" }, "Shopping List Project")),
            React.createElement("div", { className: "w-full md:w-1/2 p-20 flex flex-wrap p-4 text-center min-h-20 cursor-pointer hover:bg-blue-100 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out" },
                React.createElement("h1", { className: "w-full text-3xl font-bold" }, "Media Servers Project")),
            React.createElement("div", { className: "w-full w p-4 text-center min-h-20" },
                React.createElement("h1", { className: "w-full text-5xl font-bold " }, " Articles ")),
            React.createElement("div", { className: "w-full md:w-1/2 p-20 flex flex-wrap p-4 text-center min-h-20 cursor-pointer hover:bg-blue-100 hover:shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out" },
                React.createElement("h1", { className: "w-full text-3xl font-bold" }, " OpenVPN Networking"),
                openAriclePanels[0] ? (React.createElement("p", null, "In this article I created separate networks on a single linux machine using network namespaces directly, and VETH Peers and Setting up Hardcoded IP Routes. I then used Tshark (CLI Utility for Wireshark) to capture packets on a network interface, and then use Wireshark to analyze the packets. I also use OpenVPN to create a VPN Tunnel between two machines, and then use Wireshark to capture packets on the VPN Tunnel.")) : null))));
}
exports["default"] = Home;
