//Metric Units

import { Unit } from './type_definitions';

const Liter = {
  value: 0.001, //1 liter = 0.001 cubic meters
  Length_Dimension: 3,
  Mass_Dimension: 0,
  Time_Dimension: 0,
  Name: 'Liter',
  Alternative_Names: ['L', 'liter'],
  Description: `
      The liter is a metric unit of volume equal to one cubic decimeter, 
      1/1,000 cubic meter, or 1,000 cubic centimeters.
    `,
};

//Imperial Units
const Gallon = {
  value: 0.00378541, //1 gallon = 0.00378541 cubic meters
  Length_Dimension: 3,
  Mass_Dimension: 0,
  Time_Dimension: 0,
  Name: 'Gallon',
  Alternative_Names: ['gal', 'gallon', 'g'],
  Description: `
          The gallon is a unit of volume in the imperial system of units and
          United States customary units. It is primarily used in the United States
          and some Caribbean countries.
      `,
};

const Teaspoon = {
  value: 0.00378541 / 768, //1 teaspoon = 1/768 gallon
  Length_Dimension: 3,
  Mass_Dimension: 0,
  Time_Dimension: 0,
  Name: 'Teaspoon',
  Alternative_Names: ['tsp', 'teaspoon'],
  Description: `
          The teaspoon is a unit of volume in the imperial system of units and
          United States customary units. It is primarily used in the United States
          and some Caribbean countries.
      `,
};

const Cup = {
  value: 0.00378541 / 16, //1 cup = 1/16 gallon
  Length_Dimension: 3,
  Mass_Dimension: 0,
  Time_Dimension: 0,
  Name: 'Cup',
  Alternative_Names: ['cup'],
  Description: `
          The cup is a unit of volume in the imperial system of units and
          United States customary units. It is primarily used in the United States
          and some Caribbean countries.
      `,
};

const Tablespoon = {
  value: 0.00378541 / 32, //1 tablespoon = 1/32 gallon
  Length_Dimension: 3,
  Mass_Dimension: 0,
  Time_Dimension: 0,
  Name: 'Tablespoon',
  Alternative_Names: ['tbsp', 'tablespoon'],
  Description: `
          The tablespoon is a unit of volume in the imperial system of units and
          United States customary units. It is primarily used in the United States
          and some Caribbean countries.
      `,
};

const FluidOunce = {
  value: 0.00378541 / 128, //1 fluid ounce = 1/128 gallon
  Length_Dimension: 3,
  Mass_Dimension: 0,
  Time_Dimension: 0,
  Name: 'Fluid Ounce',
  Alternative_Names: ['fl oz', 'fluid ounce'],
  Description: `
          The fluid ounce is a unit of volume in the imperial system of units and
          United States customary units. It is primarily used in the United States
          and some Caribbean countries. It is defined as 1/128 of a gallon.
          One fluid ounce of water has a mass of about 1.041 ounces.
      `,
};

const Quart = {
  value: 0.00378541 / 4, //1 quart = 1/4 gallon
  Length_Dimension: 3,
  Mass_Dimension: 0,
  Time_Dimension: 0,
  Name: 'Quart',
  Alternative_Names: ['qt', 'quart'],
  Description: `
              The quart is a unit of volume in the imperial system of units and
              United States customary units. It is primarily used in the United States
              and some Caribbean countries.
          `,
};

const Pint = {
  value: 0.00378541 / 8, //1 pint = 1/8 gallon
  Length_Dimension: 3,
  Mass_Dimension: 0,
  Time_Dimension: 0,
  Name: 'Pint',
  Alternative_Names: ['pt', 'pint'],
  Description: `
                  The pint is a unit of volume in the imperial system of units and
                  United States customary units. It is primarily used in the United States
                  and some Caribbean countries.
              `,
};

const FluidDram = {
  value: 0.00378541 / 256, //1 fluid dram = 1/256 gallon
  Length_Dimension: 3,
  Mass_Dimension: 0,
  Time_Dimension: 0,
  Name: 'Fluid Dram',
  Alternative_Names: ['fl dr', 'fluid dram'],
  Description: `
                  The fluid dram is a unit of volume in the imperial system of units and
                  United States customary units. It is primarily used in the United States
                  and some Caribbean countries.
              `,
};

const CubicLightYear = {
  value: 9.461e15 ** 3,
  Length_Dimension: 3,
  Mass_Dimension: 0,
  Time_Dimension: 0,
  Name: 'Cubic Light Year',
  Alternative_Names: ['ly^3', 'cubic light year'],
  Description: `
        The cubic light year is a unit of volume used in astronomy. It is the volume of a cube with sides of one light year.
        `,
};

const CubicMeter = {
  value: 1,
  Length_Dimension: 3,
  Mass_Dimension: 0,
  Time_Dimension: 0,
  Name: 'Cubic Meter',
  Alternative_Names: ['m^3', 'cubic meter'],
  Description: `
            The cubic meter is the SI derived unit of volume. It is the volume of a cube with edges one meter in length.
            `,
};

const VolumeUnits: Unit[] = [
  Liter,
  Gallon,
  Teaspoon,
  Cup,
  Tablespoon,
  FluidOunce,
  Quart,
  Pint,
  FluidDram,
  CubicLightYear,
  CubicMeter,
];

export default VolumeUnits;
