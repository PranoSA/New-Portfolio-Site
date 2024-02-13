"use strict";
exports.__esModule = true;
/*type RequestBody = {
    endpoint : string;
    method : string;
    headers : string
    origin : string;
    credentials : string;
}

type ResponseBody = {
    Allowed_Headers : string;
    Allowed_Methods : string;
    Allowed_Origisn : string;
    Allowed_Credentials : string;
    Simple : boolean;
    Allowed : boolean;
}
*/
var CorsPanel = function (props) {
    //Destructure the Props
    var endpoint = props.endpoint, method = props.method, headers = props.headers, origin = props.origin, credentials = props.credentials, handleChange = props.handleChange, open = props.open, Allowed_Headers = props.Allowed_Headers, Allowed_Methods = props.Allowed_Methods, Allowed_Origisn = props.Allowed_Origisn, Allowed_Credentials = props.Allowed_Credentials, Simple = props.Simple, Allowed = props.Allowed, handleSubmit = props.handleSubmit, close = props.close;
    return (React.createElement("div", { className: "p-6 max-w-sm w-full mx-auto bg-white rounded-xl shadow-md flex flex-wrap items-center justify-center space-x-4" },
        React.createElement("div", { className: "flex items-center justify-between w-full" },
            React.createElement("button", { className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/2", type: "button", onClick: handleSubmit }, "Submit"),
            React.createElement("button", { className: "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-1/2", type: "button", onClick: close }, "Cancel")),
        React.createElement("div", { className: "w-full flex flex-wrap justify-center" },
            React.createElement("form", null,
                React.createElement("div", { className: "mb-4" },
                    React.createElement("label", { className: "block text-gray-700 text-sm font-bold mb-2", htmlFor: "endpoint" }, "Endpoint"),
                    React.createElement("input", { className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline", id: "endpoint", type: "text", value: endpoint, onChange: function (e) { return handleChange(e, 'endpoint'); } })),
                React.createElement("div", { className: "mb-4" },
                    React.createElement("label", { className: "block text-gray-700 text-sm font-bold mb-2", htmlFor: "method" }, "Method"),
                    React.createElement("input", { className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline", id: "method", type: "text", value: method, onChange: function (e) { return handleChange(e, 'method'); } })),
                React.createElement("div", { className: "mb-4" },
                    React.createElement("label", { className: "block text-gray-700 text-sm font-bold mb-2", htmlFor: "headers" }, "Headers"),
                    React.createElement("input", { className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline", id: "headers", type: "text", value: headers, onChange: function (e) { return handleChange(e, 'headers'); } })),
                React.createElement("div", { className: "mb-4" },
                    React.createElement("label", { className: "block text-gray-700 text-sm font-bold mb-2", htmlFor: "credentials" }, "Credentials"),
                    React.createElement("input", { className: "mt-1 block h-6 w-6 rounded-full border-gray-300 shadow focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border-gray-300", id: "credentials", type: "checkbox", checked: credentials == 'true' ? true : false, onChange: function (e) { return handleChange(e, 'credentials'); } })),
                React.createElement("div", { className: "mb-4" },
                    React.createElement("label", { className: "block text-gray-700 text-sm font-bold mb-2", htmlFor: "origins" }, "Origins"),
                    React.createElement("input", { className: "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline", id: "origins", type: "text", value: origin, onChange: function (e) { return handleChange(e, 'origin'); } })))),
        React.createElement("div", null,
            React.createElement("h2", { className: "text-xl font-bold mb-2" }, "CORS Panel"),
            React.createElement("p", null,
                React.createElement("strong", null, "Open:"),
                " ",
                open ? 'Yes' : 'No'),
            React.createElement("p", null,
                React.createElement("strong", null, "Allowed Headers:"),
                " ",
                Allowed_Headers),
            React.createElement("p", null,
                React.createElement("strong", null, "Allowed Methods:"),
                " ",
                Allowed_Methods),
            React.createElement("p", null,
                React.createElement("strong", null, "Allowed Origins:"),
                " ",
                Allowed_Origisn),
            React.createElement("p", null,
                React.createElement("strong", null, "Allowed Credentials:"),
                ' ',
                Allowed_Credentials ? 'Yes' : 'No'),
            React.createElement("p", null,
                React.createElement("strong", null, "Simple:"),
                " ",
                Simple ? 'Yes' : 'No'),
            React.createElement("p", null,
                React.createElement("strong", null, "Allowed:"),
                " ",
                Allowed ? 'Yes' : 'No'))));
};
exports["default"] = CorsPanel;
