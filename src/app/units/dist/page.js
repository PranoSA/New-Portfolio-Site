'use client';
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var unit_types_1 = require("@/data/unit_types");
require("../styles/globals.css");
var react_1 = require("react");
function Page() {
    var _a = react_1.useState([]), expressions = _a[0], setExpressions = _a[1];
    var _b = react_1.useState([]), results = _b[0], setResults = _b[1];
    var _c = react_1.useState([]), result_units = _c[0], setResultUnits = _c[1];
    var addExpression = function () {
        setExpressions(__spreadArrays(expressions, [
            {
                initialUnit: unit_types_1.AllUnitClasses[0],
                operations: [],
                resultUnit: unit_types_1.AllUnitClasses[0]
            },
        ]));
    };
    var deleteExpression = function (index) {
        var newExpressions = expressions.filter(function (_, i) { return i !== index; });
        setExpressions(newExpressions);
        setResults(results.filter(function (_, i) { return i !== index; }));
    };
    var updateExpression = function (exprIndex, field, value) {
        var _a;
        var newExpressions = __spreadArrays(expressions);
        newExpressions[exprIndex] = __assign(__assign({}, newExpressions[exprIndex]), (_a = {}, _a[field] = value, _a));
        setExpressions(newExpressions);
    };
    var updateOperation = function (exprIndex, opIndex, field, value) {
        var _a;
        var newExpressions = __spreadArrays(expressions);
        newExpressions[exprIndex].operations[opIndex] = __assign(__assign({}, newExpressions[exprIndex].operations[opIndex]), (_a = {}, _a[field] = value, _a));
        setExpressions(newExpressions);
    };
    var addOperation = function (exprIndex) {
        var newExpressions = __spreadArrays(expressions);
        newExpressions[exprIndex].operations.push({
            operation: '',
            unit: unit_types_1.AllUnitClasses[0],
            scalar: 1
        });
        setExpressions(newExpressions);
    };
    var deleteOperation = function (exprIndex, opIndex) {
        var newExpressions = __spreadArrays(expressions);
        newExpressions[exprIndex].operations = newExpressions[exprIndex].operations.filter(function (_, i) { return i !== opIndex; });
        setExpressions(newExpressions);
    };
    var evaluateExpressions = function () {
        var new_result_units = [];
        var newResults = expressions.map(function (expr) {
            var result = expr.initialUnit;
            if (!result)
                return 0;
            expr.operations.forEach(function (op) {
                var unit = op.unit;
                if (!unit)
                    return;
                var scaled_unit = unit.multiplyByScalar(op.scalar);
                switch (op.operation) {
                    case 'Add':
                        result = result.add(scaled_unit);
                        break;
                    case 'Subtract':
                        result = result.subtract(scaled_unit);
                        break;
                    case 'Multiply':
                        result = result.multiply(scaled_unit);
                        break;
                    case 'Divide':
                        result = result.divide(scaled_unit);
                        break;
                    default:
                        break;
                }
                //result = result.multiplyByScalar(op.scalar);
            });
            // Convert result to the desired unit
            var conversionFactor = result.value / expr.resultUnit.value;
            new_result_units.push(result);
            return conversionFactor;
        });
        setResultUnits(new_result_units);
        setResults(newResults);
    };
    return (React.createElement("div", { className: "flex flex-col items-center text-primary h-full min-h-screen" },
        React.createElement("h1", null, "Unit Expressions"),
        React.createElement("button", { onClick: addExpression, className: "mb-4 p-2 bg-blue-500 text-white rounded" }, "Add Expression"),
        expressions.map(function (expr, exprIndex) {
            var _a, _b, _c, _d, _e;
            return (React.createElement("div", { key: exprIndex, className: "flex flex-col mb-4 p-4 border rounded" },
                React.createElement("div", { className: "flex items-center mb-2" },
                    React.createElement("input", { type: "number", 
                        //value={expr.initialUnit?.value}
                        onChange: function (e) {
                            var _a;
                            return updateExpression(exprIndex, 'initialUnit', __assign(__assign({}, expr.initialUnit), { value: parseFloat(e.target.value) * ((_a = expr.initialUnit) === null || _a === void 0 ? void 0 : _a.value) }));
                        }, className: "mr-2 p-2 border rounded" }),
                    React.createElement("select", { value: ((_a = expr.initialUnit) === null || _a === void 0 ? void 0 : _a.Name) || '', onChange: function (e) {
                            //just set expression directly -> What is this utter nonsense
                            var this_expr = expressions[exprIndex];
                            //set the initial unit
                            var selected_unit_name = e.target.value;
                            //AllUnits is an array -> not a map you bozo
                            var selected_unit = unit_types_1.AllUnitClasses.find(function (unit) { return unit.Name === selected_unit_name; });
                            console.log('FOUND UNIT', selected_unit);
                            if (!selected_unit) {
                                console.error("Unit " + selected_unit_name + " not found");
                                return;
                            }
                            //set the initial unit
                            this_expr.initialUnit = selected_unit;
                            //set the expression
                            setExpressions(__spreadArrays(expressions.slice(0, exprIndex), [
                                this_expr
                            ], expressions.slice(exprIndex + 1)));
                        }, className: "mr-2 p-2 border rounded" },
                        React.createElement("option", { value: "" }, "Select Initial Unit"),
                        Object.values(unit_types_1.AllUnits).map(function (unit) { return (React.createElement("option", { key: unit.Name, value: unit.Name }, unit.Name)); })),
                    React.createElement("button", { onClick: function () { return deleteExpression(exprIndex); }, className: "p-2 bg-red-500 text-white rounded" }, "Delete Expression")),
                expr.operations.map(function (op, opIndex) { return (React.createElement("div", { key: opIndex, className: "flex items-center mb-2" },
                    React.createElement("select", { value: op.operation, onChange: function (e) {
                            return updateOperation(exprIndex, opIndex, 'operation', e.target.value);
                        }, className: "mr-2 p-2 border rounded" },
                        React.createElement("option", { value: "" }, "Select Operation"),
                        React.createElement("option", { value: "Add" }, "Add"),
                        React.createElement("option", { value: "Subtract" }, "Subtract"),
                        React.createElement("option", { value: "Multiply" }, "Multiply"),
                        React.createElement("option", { value: "Divide" }, "Divide")),
                    React.createElement("select", { value: op.unit.Name, onChange: function (e) {
                            /*                  updateOperation(
                              exprIndex,
                              opIndex,
                              'unit',
                              AllUnits[e.target.value as keyof typeof AllUnits]
                            )
                              */
                            //ignore this nonsense -> just find the unit
                            var unit_text = e.target.value;
                            var unit = unit_types_1.AllUnitClasses.find(function (unit) { return unit.Name === unit_text; });
                            var this_expr = expressions[exprIndex];
                            if (!unit) {
                                console.error("Unit " + unit_text + " not found");
                                return;
                            }
                            //edit the operation
                            updateOperation(exprIndex, opIndex, 'unit', unit);
                        }, className: "mr-2 p-2 border rounded" },
                        React.createElement("option", { value: "" }, "Select Unit"),
                        Object.values(unit_types_1.AllUnits).map(function (unit) { return (React.createElement("option", { key: unit.Name, value: unit.Name }, unit.Name)); })),
                    React.createElement("input", { type: "number", value: op.scalar, onChange: function (e) {
                            return updateOperation(exprIndex, opIndex, 'scalar', parseFloat(e.target.value));
                        }, className: "mr-2 p-2 border rounded" }),
                    React.createElement("button", { onClick: function () { return deleteOperation(exprIndex, opIndex); }, className: "p-2 bg-red-500 text-white rounded" }, "Delete Operation"))); }),
                React.createElement("button", { onClick: function () { return addOperation(exprIndex); }, className: "p-2 bg-green-500 text-white rounded" }, "Add Operation"),
                React.createElement("div", { className: "flex items-center mt-2" },
                    React.createElement("span", null,
                        "Result: ",
                        results[exprIndex]),
                    React.createElement("select", { value: ((_b = expr.resultUnit) === null || _b === void 0 ? void 0 : _b.Name) || '', onChange: function (e) {
                            var unit_string = e.target.value;
                            var resulant_unit = unit_types_1.AllUnitClasses.find(function (unit) { return unit.Name === unit_string; });
                            var this_expr = expr;
                            if (!resulant_unit) {
                                console.error("Unit " + unit_string + " not found");
                                return;
                            }
                            this_expr.resultUnit = resulant_unit;
                            setExpressions(__spreadArrays(expressions.slice(0, exprIndex), [
                                this_expr
                            ], expressions.slice(exprIndex + 1)));
                        }, className: "mr-2 p-2 border rounded" },
                        React.createElement("option", { value: "" }, "Select Result Unit"),
                        Object.values(unit_types_1.AllUnits).map(function (unit) { return (React.createElement("option", { key: unit.Name, value: unit.Name }, unit.Name)); }))),
                React.createElement("div", { className: "flex flex-col" },
                    React.createElement("div", null,
                        "Length: ", (_c = result_units[exprIndex]) === null || _c === void 0 ? void 0 :
                        _c.Length_Dimension),
                    React.createElement("div", null,
                        "Mass: ", (_d = result_units[exprIndex]) === null || _d === void 0 ? void 0 :
                        _d.Mass_Dimension),
                    React.createElement("div", null,
                        "Time: ", (_e = result_units[exprIndex]) === null || _e === void 0 ? void 0 :
                        _e.Time_Dimension)),
                result_units[exprIndex] &&
                    !result_units[exprIndex].hasSameDimensions(expr.resultUnit) && (React.createElement("div", { className: "text-red-500" },
                    "Dimensions do not match, Missing Dimensions :",
                    ' ',
                    result_units[exprIndex].missingDimensions(expr.resultUnit)))));
        }),
        React.createElement("button", { onClick: evaluateExpressions, className: "mb-4 p-2 bg-green-500 text-white rounded" }, "Evaluate Expressions"),
        results.map(function (result, index) { return (React.createElement("div", { key: index, className: "mb-2" },
            "Result ",
            index + 1,
            ": ",
            result)); })));
}
exports["default"] = Page;
