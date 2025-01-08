import { Unit } from './type_definitions';

const Pound = {
  value: 0.453592,
  Length_Dimension: 0,
  Mass_Dimension: 1,
  Time_Dimension: 0,
  Name: 'Pound',
  Alternative_Names: ['lb', 'pound'],
  Description: `
      The pound or pound-mass is a unit of mass used in the
      imperial, United States customary and other systems of measurement.
      It is different than    the pound-force, which is a unit of force.
    `,
};

/**
 *
 * UNITS OF MASS
 * 1. We have already defined the gram, and the pound
 * 2. We can add the kilogram,
 *
 */

const MetricTon = {
  value: 1000, //we used gram as the base unit, so 1 metric ton = 1,000,000 grams
  Length_Dimension: 0,
  Mass_Dimension: 1,
  Time_Dimension: 0,
  Name: 'Metric Ton',
  Alternative_Names: ['t', 'metric ton'],
  Description: `
          The metric ton is a unit of mass in the metric system. It is equal to 1,000 kilograms.
          `,
};

const ImperialTon = {
  value: 2240 * 0.453592, //1 imperial ton = 2240 pounds
  Length_Dimension: 0,
  Mass_Dimension: 1,
  Time_Dimension: 0,
  Name: 'Imperial Ton',
  Alternative_Names: ['ton', 'imperial ton'],
  Description: `
              The imperial ton is a unit of mass in the imperial system of units.
              It is equal to 2,240 pounds.
              `,
};

const AmericanTon = {
  value: 2000 * 0.453592, //1 American ton = 2000 pounds
  Length_Dimension: 0,
  Mass_Dimension: 1,
  Time_Dimension: 0,
  Name: 'American Ton',
  Alternative_Names: ['ton', 'American ton'],
  Description: `
                  The American ton is a unit of mass in the United States customary units.
                  It is equal to 2,000 pounds.
                  `,
};

const Kilogram = {
  value: 1, //1 kilogram = 1,000 grams
  Length_Dimension: 0,
  Mass_Dimension: 1,
  Time_Dimension: 0,
  Name: 'Kilogram',
  Alternative_Names: ['kg', 'kilogram'],
  Description: `
            The kilogram is the base unit of mass in the International System of Units (SI).
            It is defined as being equal to the mass of the International Prototype of the Kilogram.
            `,
};

const Gram = {
  value: 0.001, //1 gram = 0.001 kilograms
  Length_Dimension: 0,
  Mass_Dimension: 1,
  Time_Dimension: 0,
  Name: 'Gram',
  Alternative_Names: ['g', 'gram'],
  Description: `
            The gram is a metric system unit of mass. Originally defined as "the absolute weight of a volume of pure water equal to the cube of the hundredth part of a metre, and at the temperature of melting ice" (later at 4 °C, the temperature of maximum density of water).
            `,
};

const Ounce = {
  value: 0.453592 / 16, //1 ounce = 1/16 pound
  Length_Dimension: 0,
  Mass_Dimension: 1,
  Time_Dimension: 0,
  Name: 'Ounce',
  Alternative_Names: ['oz', 'ounce'],
  Description: `
            The ounce is a unit of mass in the imperial, United States customary and other systems of measurement.
            It is used in the United States, the United Kingdom, and some other countries.
            `,
};

const Stone = {
  value: 14 * 0.453592, //1 stone = 14 pounds
  Length_Dimension: 0,
  Mass_Dimension: 1,
  Time_Dimension: 0,
  Name: 'Stone',
  Alternative_Names: ['stone'],
  Description: `
            The stone is a unit of mass in the imperial system of units and the United States customary units.
            It is equal to 14 pounds.
            `,
};

const Tonne = {
  value: 1000, //1 tonne = 1,000 kilograms
  Length_Dimension: 0,
  Mass_Dimension: 1,
  Time_Dimension: 0,
  Name: 'Tonne',
  Alternative_Names: ['tonne'],
  Description: `
            The tonne is a unit of mass in the metric system. It is equal to 1,000 kilograms.
            `,
};

//mass
const Slug = {
  value: 14.5939,
  Length_Dimension: 0,
  Mass_Dimension: 1,
  Time_Dimension: 0,
  Name: 'Slug',
  Alternative_Names: ['slug'],
  Description: `
          The slug is a unit of mass in the US customary and British imperial systems of units.
          The slug is defined as the mass that is accelerated by 1 foot per second squared when a force of one pound (lbf) is exerted on it.
          This makes it equal to 32.17405 pounds (14.59390 kg) because 1 lbf is equal to 32.17405 pounds.
          It is used in American engineering and aviation.
          `,
};

const MassUnits: Unit[] = [
  Pound,
  MetricTon,
  ImperialTon,
  AmericanTon,
  Kilogram,
  Gram,
  Ounce,
  Stone,
  Tonne,
  Slug,
];

export default MassUnits;
