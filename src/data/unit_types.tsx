import { Unit } from '@/data/units/type_definitions';

import EnergyUnits from '@/data/units/energy_units';
import ForceUnits from '@/data/units/force_units';
import LengthUnits from '@/data/units/length_units';
import MassUnits from '@/data/units/mass_units';
import PowerUnits from '@/data/units/power_units';
import TimeUnits from '@/data/units/time_units';
import VolumeUnits from '@/data/units/volume_units';
import FlowRateUnits from '@/data/units/flow_rate_units';
import AreaUnits from '@/data/units/area_units';

//we already did newtons, and pounds-force, but what about other units of force?

/**
 *
 * Flow Rates
 */

/**
 * This function takes in Unit Dimensions with the following string
 * "LMT" where L is the length dimension, M is the mass dimension, and T is the time dimension
 * so "1,0,0" would be L=1, M=0, T=0
 * Then it should return "Length"
 *
 * If its "1,0,-1" it should return "Velocity"
 * If its "1,1,-2" it should return "Force"
 * etc..
 *
 */

const getUnitType = (unit: Unit): string => {
  const { Length_Dimension, Mass_Dimension, Time_Dimension } = unit;
  if (Length_Dimension === 1 && Mass_Dimension === 0 && Time_Dimension === 0) {
    return 'Length';
  } else if (
    Length_Dimension === 0 &&
    Mass_Dimension === 1 &&
    Time_Dimension === 0
  ) {
    return 'Mass';
  } else if (
    Length_Dimension === 0 &&
    Mass_Dimension === 0 &&
    Time_Dimension === 1
  ) {
    return 'Time';
  } else if (
    Length_Dimension === 1 &&
    Mass_Dimension === 1 &&
    Time_Dimension === -2
  ) {
    return 'Force';
  } else if (
    Length_Dimension === 2 &&
    Mass_Dimension === 1 &&
    Time_Dimension === -2
  ) {
    return 'Energy or Torque';
  } else if (
    Length_Dimension === 2 &&
    Mass_Dimension === 1 &&
    Time_Dimension === -3
  ) {
    return 'Power';
  } else if (
    Length_Dimension === 3 &&
    Mass_Dimension === 0 &&
    Time_Dimension === 0
  ) {
    return 'Volume';
  }
  //area
  else if (
    Length_Dimension === 2 &&
    Mass_Dimension === 0 &&
    Time_Dimension === 0
  ) {
    return 'Area';
  }
  //velocity
  else if (
    Length_Dimension === 1 &&
    Mass_Dimension === 0 &&
    Time_Dimension === -1
  ) {
    return 'Velocity';
  }
  //Acceleration
  else if (
    Length_Dimension === 1 &&
    Mass_Dimension === 0 &&
    Time_Dimension === -2
  ) {
    return 'Acceleration';
  }
  //Density
  else if (
    Length_Dimension === -3 &&
    Mass_Dimension === 1 &&
    Time_Dimension === 0
  ) {
    return 'Density';
  }
  //Flow Rate
  else if (
    Length_Dimension === 3 &&
    Mass_Dimension === 0 &&
    Time_Dimension === -1
  ) {
    return 'Flow Rate';
  } else {
    return 'Other';
  }
};

/**
 *
 * Create a Class Called Unit,
 * so that you can override the multipllication, division, and addition operators
 * instead of coming up with your own parser
 */

class UnitClass {
  //members should be value, Length_Dimension, Mass_Dimension, Time_Dimension

  //constructor should take in value, Length_Dimension, Mass_Dimension, Time_Dimension
  //and set the members
  value: number;
  Length_Dimension: number;
  Mass_Dimension: number;
  Time_Dimension: number;
  Name: string;

  //override operators
  //override multiplication operator
  //defining a function called multiply is NOT overriding the multiplication operator

  constructor(
    value: number,
    Length_Dimension: number,
    Mass_Dimension: number,
    Time_Dimension: number,
    Name: string = ''
  ) {
    this.value = value;
    this.Length_Dimension = Length_Dimension;
    this.Mass_Dimension = Mass_Dimension;
    this.Time_Dimension = Time_Dimension;
    this.Name = Name;
  }

  //static method to create a UnitClass from a Unit
  static fromUnit(unit: Unit) {
    return new UnitClass(
      unit.value,
      unit.Length_Dimension,
      unit.Mass_Dimension,
      unit.Time_Dimension,
      unit.Name
    );
  }

  // Method to multiply two UnitClass instances
  multiply(other: UnitClass | number): UnitClass {
    //if is number, then convert to UnitClass
    if (typeof other === 'number') {
      return new UnitClass(
        this.value * other,
        this.Length_Dimension,
        this.Mass_Dimension,
        this.Time_Dimension
      );
    }

    return new UnitClass(
      this.value * other.value,
      this.Length_Dimension + other.Length_Dimension,
      this.Mass_Dimension + other.Mass_Dimension,
      this.Time_Dimension + other.Time_Dimension
    );
  }

  // Method to divide two UnitClass instances
  divide(other: UnitClass | number): UnitClass {
    //if is number, then convert to UnitClass
    console.log('other', other);
    if (typeof other === 'number') {
      return new UnitClass(
        this.value / other,
        this.Length_Dimension,
        this.Mass_Dimension,
        this.Time_Dimension
      );
    }
    return new UnitClass(
      this.value / other.value,
      this.Length_Dimension - other.Length_Dimension,
      this.Mass_Dimension - other.Mass_Dimension,
      this.Time_Dimension - other.Time_Dimension
    );
  }
  multiplyByScalar(scalar: number): UnitClass {
    return new UnitClass(
      this.value * scalar,
      this.Length_Dimension,
      this.Mass_Dimension,
      this.Time_Dimension
    );
  }

  // Method to add two UnitClass instances
  add(other: UnitClass): UnitClass {
    if (
      this.Length_Dimension !== other.Length_Dimension ||
      this.Mass_Dimension !== other.Mass_Dimension ||
      this.Time_Dimension !== other.Time_Dimension
    ) {
      console.log("Units don't have the same dimensions");
      throw new Error('Units are not compatible for addition');
    }
    return new UnitClass(
      this.value + other.value,
      this.Length_Dimension,
      this.Mass_Dimension,
      this.Time_Dimension
    );
  }

  hasSameDimensions(other: UnitClass): boolean {
    return (
      this.Length_Dimension === other.Length_Dimension &&
      this.Mass_Dimension === other.Mass_Dimension &&
      this.Time_Dimension === other.Time_Dimension
    );
  }
  //show the VALUE Of the missing dimensions
  missingDimensions(other: UnitClass): string {
    let missingDimensions = '';
    if (this.Length_Dimension !== other.Length_Dimension) {
      missingDimensions +=
        'Length: ' + (other.Length_Dimension - this.Length_Dimension) + ', ';
    }
    if (this.Mass_Dimension !== other.Mass_Dimension) {
      missingDimensions +=
        'Mass: ' + (other.Mass_Dimension - this.Mass_Dimension) + ', ';
    }
    if (this.Time_Dimension !== other.Time_Dimension) {
      missingDimensions +=
        'Time: ' + (other.Time_Dimension - this.Time_Dimension) + ', ';
    }
    return missingDimensions;
  }

  // Method to subtract two UnitClass instances
  subtract(other: UnitClass): UnitClass {
    if (
      this.Length_Dimension !== other.Length_Dimension ||
      this.Mass_Dimension !== other.Mass_Dimension ||
      this.Time_Dimension !== other.Time_Dimension
    ) {
      throw new Error('Units are not compatible for subtraction');
    }
    return new UnitClass(
      this.value - other.value,
      this.Length_Dimension,
      this.Mass_Dimension,
      this.Time_Dimension
    );
  }
}

function evaluateExpression(
  expression: string,
  units: { [key: string]: UnitClass }
): UnitClass {
  const operators = {
    '+': { precedence: 1, associativity: 'L' },
    '-': { precedence: 1, associativity: 'L' },
    '*': { precedence: 2, associativity: 'L' },
    '/': { precedence: 2, associativity: 'L' },
  };

  const outputQueue: (string | UnitClass)[] = [];
  const operatorStack: (keyof typeof operators | '(' | ')')[] = [];

  const tokens = expression.split(' ');

  tokens.forEach((token: keyof typeof operators | string) => {
    if (units[token]) {
      outputQueue.push(units[token]);
    } else if (operators[token as keyof typeof operators]) {
      while (
        operatorStack.length &&
        operators[
          operatorStack[operatorStack.length - 1] as keyof typeof operators
        ] &&
        ((operators[token as keyof typeof operators].associativity === 'L' &&
          operators[token as keyof typeof operators].precedence <=
            operators[
              operatorStack[operatorStack.length - 1] as keyof typeof operators
            ].precedence) ||
          (operators[token as keyof typeof operators].associativity === 'R' &&
            operators[token as keyof typeof operators].precedence <
              operators[
                operatorStack[
                  operatorStack.length - 1
                ] as keyof typeof operators
              ].precedence))
      ) {
        outputQueue.push(operatorStack.pop()!);
      }
      operatorStack.push(token as '+' | '-' | '*' | '/' | '(' | ')');
    } else if (token === '(') {
      operatorStack.push(token);
    } else if (token === ')') {
      while (
        operatorStack.length &&
        operatorStack[operatorStack.length - 1] !==
          ('(' as keyof typeof operators)
      ) {
        outputQueue.push(operatorStack.pop()!);
      }
      operatorStack.pop();
    }
  });

  while (operatorStack.length) {
    outputQueue.push(operatorStack.pop()!);
  }

  const evaluationStack: UnitClass[] = [];

  outputQueue.forEach((token) => {
    if (
      typeof token === 'string' &&
      operators[token as keyof typeof operators]
    ) {
      const b = evaluationStack.pop()!;
      const a = evaluationStack.pop()!;
      switch (token) {
        case '+':
          evaluationStack.push(a.add(b));
          break;
        case '-':
          evaluationStack.push(a.subtract(b));
          break;
        case '*':
          evaluationStack.push(a.multiply(b));
          break;
        case '/':
          evaluationStack.push(a.divide(b));
          break;
      }
    } else {
      evaluationStack.push(token as UnitClass);
    }
  });

  return evaluationStack[0];
}

const getTypeOfUnitClass = (unit: UnitClass): string => {
  if (!unit) {
    console.log('WHYYYYYYYYYY');
    return '';
  }
  const unit_type: Unit = {
    value: unit.value,
    Length_Dimension: unit.Length_Dimension,
    Mass_Dimension: unit.Mass_Dimension,
    Time_Dimension: unit.Time_Dimension,
    Name: unit.Name,
    Alternative_Names: [],
    Description: '',
  };

  return getUnitType(unit_type);
};

const AllUnits: Unit[] = [
  ...EnergyUnits,
  ...ForceUnits,
  ...LengthUnits,
  ...MassUnits,
  ...PowerUnits,
  ...TimeUnits,
  ...VolumeUnits,
  ...FlowRateUnits,
  ...AreaUnits,
];

const AllUnitClasses = AllUnits.map((unit) => UnitClass.fromUnit(unit));

const getUnitByType = (unitType: string): UnitClass[] => {
  switch (unitType) {
    case 'None':
      return AllUnitClasses;
    case 'Volume':
      return VolumeUnits.map((unit) => UnitClass.fromUnit(unit));
    case 'Power':
      return PowerUnits.map((unit) => UnitClass.fromUnit(unit));
    case 'Energy or Torque':
      return EnergyUnits.map((unit) => UnitClass.fromUnit(unit));
    case 'Force':
      return ForceUnits.map((unit) => UnitClass.fromUnit(unit));
    case 'Mass':
      return MassUnits.map((unit) => UnitClass.fromUnit(unit));
    case 'Length':
      return LengthUnits.map((unit) => UnitClass.fromUnit(unit));
    case 'Time':
      return TimeUnits.map((unit) => UnitClass.fromUnit(unit));
    case 'Area':
      return AreaUnits.map((unit) => UnitClass.fromUnit(unit));
    case 'Flow Rate':
      return FlowRateUnits.map((unit) => UnitClass.fromUnit(unit));
    default:
      return [];
  }
};

const UnitTypes: string[] = [
  'None',
  'Volume',
  'Power',
  'Energy or Torque',
  'Force',
  'Mass',
  'Length',
  'Time',
  'Area',
  'Flow Rate',
];

export {
  AllUnits,
  UnitClass,
  getUnitType,
  AllUnitClasses,
  evaluateExpression,
  getTypeOfUnitClass,
  getUnitByType,
  UnitTypes,
};
