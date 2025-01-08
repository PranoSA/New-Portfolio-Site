//gallons per minute, etc.
import { Unit } from './type_definitions';

const GallonPerMinute = {
  value: 0.00378541 / 60, //1 gallon per minute = 1/60 gallon per second
  Length_Dimension: 3,
  Mass_Dimension: 0,
  Time_Dimension: -1,
  Name: 'Gallon Per Minute',
  Alternative_Names: ['gpm', 'gallon per minute'],
  Description: `
          The gallon per minute is a unit of flow rate in the imperial system of units and
          United States customary units. It is defined as the volume of fluid that passes a point in one minute.
          `,
};

const CubicFootPerSecond = {
  value: 0.0283168,
  Length_Dimension: 3,
  Mass_Dimension: 0,
  Time_Dimension: -1,
  Name: 'Cubic Foot Per Second',
  Alternative_Names: ['ft^3/s', 'cubic foot per second'],
  Description: `
              The cubic foot per second is a unit of flow rate in the imperial and US customary systems of measurement.
              It is defined as the volume of fluid that passes a point in one second.
              `,
};

const CubicMeterPerSecond = {
  value: 1,
  Length_Dimension: 3,
  Mass_Dimension: 0,
  Time_Dimension: -1,
  Name: 'Cubic Meter Per Second',
  Alternative_Names: ['m^3/s', 'cubic meter per second'],
  Description: `
                The cubic meter per second is a unit of flow rate in the International System of Units (SI).
                It is defined as the volume of fluid that passes a point in one second.
                `,
};

const GallonPerSecond = {
  value: 0.00378541,
  Length_Dimension: 3,
  Mass_Dimension: 0,
  Time_Dimension: -1,
  Name: 'Gallon Per Second',
  Alternative_Names: ['gps', 'gallon per second'],
  Description: `
                    The gallon per second is a unit of flow rate in the imperial system of units and
                    United States customary units. It is defined as the volume of fluid that passes a point in one second.
                    `,
};

export const flow_rate_units: Unit[] = [
  GallonPerMinute,
  CubicFootPerSecond,
  CubicMeterPerSecond,
  GallonPerSecond,
];

export default flow_rate_units;
