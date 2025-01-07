'use client';

import {
  UnitClass,
  AllUnitClasses,
  getTypeOfUnitClass,
} from '@/data/unit_types';
import '../styles/globals.css';
import { useState } from 'react';

type Operation = {
  operation: string;
  unit: UnitClass;
  scalar: number;
};

type Expression = {
  initialUnit: UnitClass;
  operations: Operation[];
  resultUnit: UnitClass;
};

export default function Page() {
  const [expressions, setExpressions] = useState<Expression[]>([]);
  const [results, setResults] = useState<number[]>([]);
  const [result_units, setResultUnits] = useState<UnitClass[]>([]);

  const addExpression = () => {
    setExpressions([
      ...expressions,
      {
        initialUnit: AllUnitClasses[0],
        operations: [],
        resultUnit: AllUnitClasses[0],
      },
    ]);
  };

  const deleteExpression = (index: number) => {
    const newExpressions = expressions.filter((_, i) => i !== index);
    setExpressions(newExpressions);
    setResults(results.filter((_, i) => i !== index));
  };

  const updateExpression = (exprIndex: number, field: string, value: any) => {
    const newExpressions = [...expressions];
    newExpressions[exprIndex] = {
      ...newExpressions[exprIndex],
      [field]: value,
    };
    setExpressions(newExpressions);
  };

  const updateOperation = (
    exprIndex: number,
    opIndex: number,
    field: string,
    value: any
  ) => {
    const newExpressions = [...expressions];
    newExpressions[exprIndex].operations[opIndex] = {
      ...newExpressions[exprIndex].operations[opIndex],
      [field]: value,
    };
    setExpressions(newExpressions);
  };

  const addOperation = (exprIndex: number) => {
    const newExpressions = [...expressions];
    newExpressions[exprIndex].operations.push({
      operation: '',
      unit: AllUnitClasses[0],
      scalar: 1,
    });
    setExpressions(newExpressions);
  };

  const deleteOperation = (exprIndex: number, opIndex: number) => {
    const newExpressions = [...expressions];
    newExpressions[exprIndex].operations = newExpressions[
      exprIndex
    ].operations.filter((_, i) => i !== opIndex);
    setExpressions(newExpressions);
  };

  const evaluateExpressions = () => {
    const new_result_units: UnitClass[] = [];

    const newResults = expressions.map((expr) => {
      let result = expr.initialUnit;
      if (!result) return 0;

      expr.operations.forEach((op) => {
        const unit = op.unit;
        if (!unit) return;

        const scaled_unit = unit.multiplyByScalar(op.scalar);

        switch (op.operation) {
          case 'Add':
            console.log('Result', result);
            console.log('Scaled Unit', scaled_unit);
            console.log('Adding');
            result = result.add(scaled_unit);
            console.log('Resultant', result);
            break;
          case 'Subtract':
            result = result.subtract(scaled_unit);
            break;
          case 'Multiply':
            result = result.multiply(scaled_unit);
            break;
          case 'Divide':
            console.log('Result', result);
            console.log('Scaled Unit', scaled_unit);
            console.log('Dividing');

            //check if type of result is UnitClass
            //if not, convert to UnitClass
            if (result.constructor.name !== 'UnitClass') {
              //result = new UnitClass(result);
              console.log('WHYYYY???');
              console.log('RESULT IS', result);
            }

            result = result.divide(scaled_unit);
            console.log('Resultant', result);
            break;
          default:
            break;
        }

        //result = result.multiplyByScalar(op.scalar);
      });

      // Convert result to the desired unit
      const conversionFactor = result.value / expr.resultUnit.value;
      new_result_units.push(result);
      console.log('Conversion Factor', conversionFactor);
      console.log('Result Unit value', expr.resultUnit.value);
      return conversionFactor;
    });

    setResultUnits(new_result_units);

    setResults(newResults);
  };

  return (
    <div className="flex flex-col items-center text-primary h-full min-h-screen">
      <h1>Unit Expressions</h1>
      <button
        onClick={addExpression}
        className="mb-4 p-2 bg-blue-500 text-white rounded"
      >
        Add Expression
      </button>
      {expressions.map((expr, exprIndex) => (
        <div key={exprIndex} className="flex flex-col mb-4 p-4 border rounded">
          <div className="flex items-center mb-2">
            {/* Set Scalar Amount */}
            <input
              type="number"
              //value={expr.initialUnit?.value}
              onChange={(e) =>
                updateExpression(exprIndex, 'initialUnit', {
                  ...expr.initialUnit,
                  value: parseFloat(e.target.value) * expr.initialUnit?.value,
                })
              }
              className="mr-2 p-2 border rounded"
            />
            <select
              value={expr.initialUnit?.Name || ''}
              onChange={
                (e) => {
                  //just set expression directly -> What is this utter nonsense
                  const this_expr = expressions[exprIndex];

                  //set the initial unit
                  const selected_unit_name = e.target.value;

                  //AllUnits is an array -> not a map you bozo
                  const selected_unit = AllUnitClasses.find(
                    (unit) => unit.Name === selected_unit_name
                  );

                  console.log('FOUND UNIT', selected_unit);
                  if (!selected_unit) {
                    console.error(`Unit ${selected_unit_name} not found`);
                    return;
                  }
                  //set the initial unit
                  this_expr.initialUnit = selected_unit;

                  //set the expression
                  setExpressions([
                    ...expressions.slice(0, exprIndex),
                    this_expr,
                    ...expressions.slice(exprIndex + 1),
                  ]);
                }
                /*updateExpression(
                  exprIndex,
                  'initialUnit',
                  AllUnits[e.target.value as keyof typeof AllUnits]
                )*/
              }
              className="mr-2 p-2 border rounded"
            >
              <option value="">Select Initial Unit</option>
              {Object.values(AllUnitClasses).map((unit) => (
                <option key={unit.Name} value={unit.Name}>
                  {unit.Name}
                </option>
              ))}
            </select>
            <button
              onClick={() => deleteExpression(exprIndex)}
              className="p-2 bg-red-500 text-white rounded"
            >
              Delete Expression
            </button>
          </div>
          {expr.operations.map((op, opIndex) => (
            <div key={opIndex} className="flex items-center mb-2">
              <select
                value={op.operation}
                onChange={(e) =>
                  updateOperation(
                    exprIndex,
                    opIndex,
                    'operation',
                    e.target.value
                  )
                }
                className="mr-2 p-2 border rounded"
              >
                <option value="">Select Operation</option>
                <option value="Add">Add</option>
                <option value="Subtract">Subtract</option>
                <option value="Multiply">Multiply</option>
                <option value="Divide">Divide</option>
              </select>
              <select
                value={op.unit.Name}
                onChange={(e) => {
                  /*                  updateOperation(
                    exprIndex,
                    opIndex,
                    'unit',
                    AllUnits[e.target.value as keyof typeof AllUnits]
                  )
                    */

                  //ignore this nonsense -> just find the unit
                  const unit_text = e.target.value;
                  const unit = AllUnitClasses.find(
                    (unit) => unit.Name === unit_text
                  );

                  const this_expr = expressions[exprIndex];

                  if (!unit) {
                    console.error(`Unit ${unit_text} not found`);
                    return;
                  }

                  //edit the operation
                  updateOperation(exprIndex, opIndex, 'unit', unit);
                }}
                className="mr-2 p-2 border rounded"
              >
                <option value="">Select Unit</option>
                {Object.values(AllUnitClasses).map((unit) => (
                  <option key={unit.Name} value={unit.Name}>
                    {unit.Name}
                  </option>
                ))}
              </select>
              <input
                type="number"
                value={op.scalar}
                onChange={(e) =>
                  updateOperation(
                    exprIndex,
                    opIndex,
                    'scalar',
                    parseFloat(e.target.value)
                  )
                }
                className="mr-2 p-2 border rounded"
              />
              <button
                onClick={() => deleteOperation(exprIndex, opIndex)}
                className="p-2 bg-red-500 text-white rounded"
              >
                Delete Operation
              </button>
            </div>
          ))}
          <button
            onClick={() => addOperation(exprIndex)}
            className="p-2 bg-green-500 text-white rounded"
          >
            Add Operation
          </button>
          <div className="flex items-center mt-2">
            <span>Result: {results[exprIndex]?.toExponential(4) || ''}</span>
            <select
              value={expr.resultUnit?.Name || ''}
              onChange={(e) => {
                const unit_string = e.target.value;

                const resulant_unit = AllUnitClasses.find(
                  (unit) => unit.Name === unit_string
                );

                console.log('FOUND UNIT', resulant_unit);

                const this_expr = expr;

                if (!resulant_unit) {
                  console.error(`Unit ${unit_string} not found`);
                  return;
                }

                this_expr.resultUnit = resulant_unit;

                setExpressions([
                  ...expressions.slice(0, exprIndex),
                  this_expr,
                  ...expressions.slice(exprIndex + 1),
                ]);
              }}
              className="mr-2 p-2 border rounded"
            >
              <option value="">Select Result Unit</option>
              {Object.values(AllUnitClasses).map((unit) => (
                <option key={unit.Name} value={unit.Name}>
                  {unit.Name}
                </option>
              ))}
            </select>

            {/* Now iNformation of the result units does not have the same index as the results */}
          </div>
          {/* Show Dimensions of Length, Mass, Time */}
          <div className="flex flex-col">
            <div>Length: {result_units[exprIndex]?.Length_Dimension}</div>
            <div>Mass: {result_units[exprIndex]?.Mass_Dimension}</div>
            <div>Time: {result_units[exprIndex]?.Time_Dimension}</div>
          </div>
          {/* Show Type of the result unit */}
          <div>Type: {getTypeOfUnitClass(result_units[exprIndex])}</div>

          {/* Show an Error if they do not match with the result unit */}
          {/* Has absolutely nothing to do with the name, only matching dimensions */}
          {result_units[exprIndex]?.hasSameDimensions &&
            !result_units[exprIndex].hasSameDimensions(expr.resultUnit) && (
              <div className="text-red-500">
                Dimensions do not match, Missing Dimensions :{' '}
                {result_units[exprIndex].missingDimensions(expr.resultUnit)}
              </div>
            )}
        </div>
      ))}
      <button
        onClick={evaluateExpressions}
        className="mb-4 p-2 bg-green-500 text-white rounded"
      >
        Evaluate Expressions
      </button>
    </div>
  );
}
