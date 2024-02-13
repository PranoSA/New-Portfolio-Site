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
exports.__esModule = true;
exports.POST = exports.GET = void 0;
var server_1 = require("next/server");
function GET(req) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            //res.status(405).json({ message: 'Method not allowed' });
            //res.write("Method not allowed");
            return [2 /*return*/, server_1.NextResponse.json({ message: 'Method not allowed' }, { status: 405 })];
        });
    });
}
exports.GET = GET;
function POST(req) {
    return __awaiter(this, void 0, void 0, function () {
        var data, endpoint, method, headers, origin, credentials, simple, headerArray, response, allowedOrigin, allowedHeaders, allowedMethods, error_1, response, allowedOrigin, allowedHeaders, allowedMethods, allowedCredentials, allowed, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, req.json()];
                case 1:
                    data = _a.sent();
                    endpoint = data.endpoint, method = data.method, headers = data.headers, origin = data.origin, credentials = data.credentials;
                    if (!endpoint || !origin || !method) {
                        return [2 /*return*/, server_1.NextResponse.json({ message: 'Bad request, Missing Field' }, { status: 400 })];
                        return [2 /*return*/];
                    }
                    simple = true;
                    if (!/^(GET|POST|HEAD)$/i.test(method)) {
                        simple = false;
                    }
                    headerArray = headers.replace(" ", "").split(",");
                    //Check if All Headers Are Okay for Simple Request
                    // Accept, Accept-Language, Content-Language, Content-Type
                    headerArray.forEach(function (header) {
                        if (!/^(Accept|Accept-Language|Content-Language|Content-Type)$/i.test(header)) {
                            simple = false;
                        }
                    });
                    if (credentials === "true") {
                        simple = false;
                    }
                    if (!simple) return [3 /*break*/, 6];
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, fetch(endpoint, {
                            method: method,
                            headers: {
                                "Origin": origin
                            }
                        })];
                case 3:
                    response = _a.sent();
                    allowedOrigin = response.headers.get('Access-Control-Allow-Origin');
                    allowedHeaders = response.headers.get('Access-Control-Allow-Headers');
                    allowedMethods = response.headers.get('Access-Control-Allow-Methods');
                    if (allowedOrigin === origin || allowedOrigin === "*") {
                        return [2 /*return*/, server_1.NextResponse.json({
                                Allowed_Headers: allowedHeaders,
                                Allowed_Methods: allowedMethods,
                                Allowed_Origin: allowedOrigin,
                                Allowed_Credentials: "",
                                Simple: true
                            })];
                    }
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    return [2 /*return*/, server_1.NextResponse.json({ message: 'Internal server error' }, { status: 500 })];
                case 5: return [3 /*break*/, 9];
                case 6:
                    _a.trys.push([6, 8, , 9]);
                    return [4 /*yield*/, fetch(endpoint, {
                            method: "OPTIONS",
                            headers: {
                                "Origin": origin,
                                "Access-Control-Request-Method": method,
                                "Access-Control-Request-Headers": headers
                            }
                        })];
                case 7:
                    response = _a.sent();
                    console.log(endpoint);
                    console.log(response.headers);
                    allowedOrigin = response.headers.get('Access-Control-Allow-Origin');
                    allowedHeaders = response.headers.get('Access-Control-Allow-Headers');
                    allowedMethods = response.headers.get('Access-Control-Allow-Methods');
                    allowedCredentials = response.headers.get('Access-Control-Allow-Credentials');
                    allowed = false;
                    if (allowedOrigin === origin || allowedOrigin === "*") {
                        allowed = true;
                    }
                    return [2 /*return*/, server_1.NextResponse.json({
                            Allowed_Headers: allowedHeaders,
                            Allowed_Methods: allowedMethods,
                            Allowed_Origin: allowedOrigin,
                            Allowed_Credentials: allowedCredentials,
                            Simple: false,
                            Allowed: allowed
                        })];
                case 8:
                    error_2 = _a.sent();
                    return [2 /*return*/, server_1.NextResponse.json({ message: 'Internal server error' }, { status: 500 })];
                case 9: return [2 /*return*/];
            }
        });
    });
}
exports.POST = POST;
