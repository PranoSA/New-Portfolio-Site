type Unit = {
  value: number;
  Length_Dimension: number;
  Mass_Dimension: number;
  Time_Dimension: number;
  Name: string;
  Alternative_Names: string[];
  Description: string;
};

const multiply_units = (unit1: Unit, unit2: Unit): Unit => {
  return {
    value: unit1.value * unit2.value,
    Length_Dimension: unit1.Length_Dimension + unit2.Length_Dimension,
    Mass_Dimension: unit1.Mass_Dimension + unit2.Mass_Dimension,
    Time_Dimension: unit1.Time_Dimension + unit2.Time_Dimension,
    Name: unit1.Name + ' * ' + unit2.Name,
    Alternative_Names: unit1.Alternative_Names.concat(unit2.Alternative_Names),
    Description: '',
  };
};

const divide_units = (unit1: Unit, unit2: Unit): Unit => {
  return {
    value: unit1.value / unit2.value,
    Length_Dimension: unit1.Length_Dimension - unit2.Length_Dimension,
    Mass_Dimension: unit1.Mass_Dimension - unit2.Mass_Dimension,
    Time_Dimension: unit1.Time_Dimension - unit2.Time_Dimension,
    Name: unit1.Name + ' / ' + unit2.Name,
    Alternative_Names: unit1.Alternative_Names.concat(unit2.Alternative_Names),
    Description: '',
  };
};

const add_units = (unit1: Unit, unit2: Unit): Unit => {
  if (unit1.Name === unit2.Name) {
    return {
      value: unit1.value + unit2.value,
      Length_Dimension: unit1.Length_Dimension,
      Mass_Dimension: unit1.Mass_Dimension,
      Time_Dimension: unit1.Time_Dimension,
      Name: unit1.Name,
      Alternative_Names: unit1.Alternative_Names,
      Description: '',
    };
  } else {
    throw new Error('Cannot add units with different names');
  }
};

const subtract_units = (unit1: Unit, unit2: Unit): Unit => {
  if (unit1.Name === unit2.Name) {
    return {
      value: unit1.value - unit2.value,
      Length_Dimension: unit1.Length_Dimension,
      Mass_Dimension: unit1.Mass_Dimension,
      Time_Dimension: unit1.Time_Dimension,
      Name: unit1.Name,
      Alternative_Names: unit1.Alternative_Names,
      Description: '',
    };
  } else {
    throw new Error('Cannot subtract units with different names');
  }
};

const MultiplyByScalar = (unit: Unit, scalar: number): Unit => {
  return {
    value: unit.value * scalar,
    Length_Dimension: unit.Length_Dimension,
    Mass_Dimension: unit.Mass_Dimension,
    Time_Dimension: unit.Time_Dimension,
    Name: unit.Name,
    Alternative_Names: unit.Alternative_Names,
    Description: '',
  };
};

export type { Unit };

export { multiply_units, divide_units, add_units, subtract_units };
