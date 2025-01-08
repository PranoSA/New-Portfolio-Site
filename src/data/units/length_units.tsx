import { Unit } from './type_definitions';

const Mile = {
  value: 1609.34,
  Length_Dimension: 1,
  Mass_Dimension: 0,
  Time_Dimension: 0,
  Name: 'Mile',
  Alternative_Names: ['mi', 'mile'],
  Description: `
          The mile is a unit of length in the imperial and US customary systems of measurement.
          `,
};

const Yard = {
  value: 0.9144,
  Length_Dimension: 1,
  Mass_Dimension: 0,
  Time_Dimension: 0,
  Name: 'Yard',
  Alternative_Names: ['yd', 'yard'],
  Description: `
              The yard is a unit of length in the imperial and US customary systems of measurement.
              `,
};

const Kilometer = {
  value: 1000,
  Length_Dimension: 1,
  Mass_Dimension: 0,
  Time_Dimension: 0,
  Name: 'Kilometer',
  Alternative_Names: ['km', 'kilometer'],
  Description: `
          The kilometer is a unit of length in the metric system of units. It is equal to 1,000 meters.
          `,
};

//other bizarre stuff, like light years, angstroms, etc.
const LightYear = {
  value: 9.461e15,
  Length_Dimension: 1,
  Mass_Dimension: 0,
  Time_Dimension: 0,
  Name: 'Light Year',
  Alternative_Names: ['ly', 'light year'],
  Description: `
      The light year is a unit of length used in astronomy. It is the distance that light travels in one year.
      `,
};

const Angstrom = {
  value: 1e-10,
  Length_Dimension: 1,
  Mass_Dimension: 0,
  Time_Dimension: 0,
  Name: 'Angstrom',
  Alternative_Names: ['Å', 'angstrom'],
  Description: `
          The angstrom is a unit of length equal to 10^-10 meters. It is used to measure atomic distances.
          `,
};

//units of length
const Inch = {
  value: 0.0254,
  Length_Dimension: 1,
  Mass_Dimension: 0,
  Time_Dimension: 0,
  Name: 'Inch',
  Alternative_Names: ['in', 'inch'],
  Description: `
      The inch is a unit of length in the imperial and US customary systems of measurement.
      `,
};

const Foot = {
  value: 0.3048,
  Length_Dimension: 1,
  Mass_Dimension: 0,
  Time_Dimension: 0,
  Name: 'Foot',
  Alternative_Names: ['ft', 'foot'],
  Description: `
          The foot is a unit of length in the imperial and US customary systems of measurement.
          `,
};

const LightSecond = {
  value: 299792458,
  Length_Dimension: 1,
  Mass_Dimension: 0,
  Time_Dimension: 0,
  Name: 'Light Second',
  Alternative_Names: ['light second'],
  Description: `
          The light second is a unit of length used in astronomy. It is the distance that light travels in one second.
          `,
};

const LightMinute = {
  value: 299792458 * 60,
  Length_Dimension: 1,
  Mass_Dimension: 0,
  Time_Dimension: 0,
  Name: 'Light Minute',
  Alternative_Names: ['light minute'],
  Description: `
          The light minute is a unit of length used in astronomy. It is the distance that light travels in one minute.
          `,
};

const LightHour = {
  value: 299792458 * 3600,
  Length_Dimension: 1,
  Mass_Dimension: 0,
  Time_Dimension: 0,
  Name: 'Light Hour',
  Alternative_Names: ['light hour'],
  Description: `
          The light hour is a unit of length used in astronomy. It is the distance that light travels in one hour.
          `,
};

const LightDay = {
  value: 299792458 * 86400,
  Length_Dimension: 1,
  Mass_Dimension: 0,
  Time_Dimension: 0,
  Name: 'Light Day',
  Alternative_Names: ['light day'],
  Description: `
          The light day is a unit of length used in astronomy. It is the distance that light travels in one day.
          `,
};

const LightWeek = {
  value: 299792458 * 604800,
  Length_Dimension: 1,
  Mass_Dimension: 0,
  Time_Dimension: 0,
  Name: 'Light Week',
  Alternative_Names: ['light week'],
  Description: `
          The light week is a unit of length used in astronomy. It is the distance that light travels in one week.
          `,
};

const UnitsOfLength: Unit[] = [
  Inch,
  Foot,
  Yard,
  Mile,
  Kilometer,
  LightYear,
  Angstrom,
  LightSecond,
  LightMinute,
  LightHour,
  LightDay,
  LightWeek,
  LightYear,
];

export default UnitsOfLength;
