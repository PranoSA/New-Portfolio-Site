import { Unit } from '@/data/units/type_definitions';
/*
    Base Units are 

    - Grams
    - Meters
    - Seconds
*/

//base units, meter, gram, second
const Meter: Unit = {
  value: 1,
  Length_Dimension: 1,
  Mass_Dimension: 0,
  Time_Dimension: 0,
  Name: 'Meter',
  Alternative_Names: ['m', 'meter'],
  Description:
    'The meter is the base unit of length in the International System of Units (SI). The SI unit symbol is m.',
};

const Gram: Unit = {
  value: 0.001,
  Length_Dimension: 0,
  Mass_Dimension: 1,
  Time_Dimension: 0,
  Name: 'Gram',
  Alternative_Names: ['g', 'gram'],
  Description:
    'The gram is a metric system unit of mass. Originally   defined as "the absolute weight of a volume of pure water equal to the cube of the hundredth part of a metre, and at the temperature of melting ice" (later at 4 °C, the temperature of maximum density of water).',
};

const Second: Unit = {
  value: 1,
  Length_Dimension: 0,
  Mass_Dimension: 0,
  Time_Dimension: 1,
  Name: 'Second',
  Alternative_Names: ['s', 'second'],
  Description:
    'A Second is the base unit of time in the International System of Units (SI). It is qualitatively defined as the second division of the hour by sixty, the first division by sixty being the minute. It is quantitatively defined in terms of a certain number of periods of radiation corresponding to a certain transition in the cesium atom.',
};

const Mega = 1e6;
const Kilo = 1e3;
const Centi = 1e-2;
const Milli = 1e-3;
const Micro = 1e-6;
const Nano = 1e-9;
const Giga = 1e9;

export { Meter, Gram, Second, Mega, Kilo, Centi, Milli, Micro, Nano, Giga };
