import { Unit } from './type_definitions';

/**
 *
 * Units of Area
 */

const SquareMeter = {
  value: 1,
  Length_Dimension: 2,
  Mass_Dimension: 0,
  Time_Dimension: 0,
  Name: 'Square Meter',
  Alternative_Names: ['m^2', 'square meter'],

  Description: `
          The square meter is a unit of area in the International System of Units (SI).
          It is defined as the area of a square with sides of one meter.
          `,
};

const SquareKilometer = {
  value: 1e6,
  Length_Dimension: 2,
  Mass_Dimension: 0,
  Time_Dimension: 0,
  Name: 'Square Kilometer',
  Alternative_Names: ['km^2', 'square kilometer'],
  Description: `
          The square kilometer is a unit of area in the International System of Units (SI).
          It is defined as the area of a square with sides of one kilometer.
          `,
};

const SquareMile = {
  value: 2.59e6,
  Length_Dimension: 2,
  Mass_Dimension: 0,
  Time_Dimension: 0,
  Name: 'Square Mile',
  Alternative_Names: ['mi^2', 'square mile'],
  Description: `
              The square mile is a unit of area in the imperial and US customary systems of measurement.
              It is defined as the area of a square with sides of one mile.
              `,
};

const SquareFoot = {
  value: 0.092903,
  Length_Dimension: 2,
  Mass_Dimension: 0,
  Time_Dimension: 0,
  Name: 'Square Foot',
  Alternative_Names: ['ft^2', 'square foot'],
  Description: `
                      The square foot is a unit of area in the imperial and US customary systems of measurement.
                      It is defined as the area of a square with sides of one foot.
                      `,
};

const Acre = {
  value: 4046.86, //1 acre = 4046.86 square meters,
  Length_Dimension: 2,
  Mass_Dimension: 0,
  Time_Dimension: 0,
  Name: 'Acre',
  Alternative_Names: ['acre'],
  Description: `
                  The acre is a unit of area in the imperial and US customary systems of measurement.
                  It is defined as the area of a rectangle with sides of one chain and one furlong.
                  `,
};

export const AreaUnits: Unit[] = [
  SquareMeter,
  SquareKilometer,
  SquareMile,
  SquareFoot,
  Acre,
];

export default AreaUnits;
