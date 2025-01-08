import { Unit } from './type_definitions';

const Second = {
  value: 1,
  Length_Dimension: 0,
  Mass_Dimension: 0,
  Time_Dimension: 1,
  Name: 'Second',
  Alternative_Names: ['s', 'second'],
  Description: `
            The second is the base unit of time in the International System of Units (SI).
            It is defined as the duration of 9,192,631,770 periods of the radiation corresponding to the transition between two hyperfine levels of the ground state of the cesium-133 atom.
            `,
};

//units of time
const Minute = {
  value: 60,
  Length_Dimension: 0,
  Mass_Dimension: 0,
  Time_Dimension: 1,
  Name: 'Minute',
  Alternative_Names: ['min', 'minute'],
  Description: `
      The minute is a unit of time equal to 60 seconds.
      `,
};

const Hour = {
  value: 3600,
  Length_Dimension: 0,
  Mass_Dimension: 0,
  Time_Dimension: 1,
  Name: 'Hour',
  Alternative_Names: ['h', 'hour'],
  Description: `
          The hour is a unit of time equal to 60 minutes.
          `,
};

const Day = {
  value: 86400,
  Length_Dimension: 0,
  Mass_Dimension: 0,
  Time_Dimension: 1,
  Name: 'Day',
  Alternative_Names: ['d', 'day'],
  Description: `
              The day is a unit of time equal to 24 hours.
              `,
};

const Week = {
  value: 604800,
  Length_Dimension: 0,
  Mass_Dimension: 0,
  Time_Dimension: 1,
  Name: 'Week',
  Alternative_Names: ['wk', 'week'],
  Description: `
                  The week is a unit of time equal to 7 days.
                  `,
};

const TimeUnits = [Second, Minute, Hour, Day, Week];

export default TimeUnits;
