import { Unit, multiply_units } from './type_definitions';

const HorsepowerMechanical = {
  value: 745.7,
  Length_Dimension: 2,
  Mass_Dimension: 1,
  Time_Dimension: -3,
  Name: 'Horsepower (mechanical)',
  Alternative_Names: ['hp', 'horsepower'],
  Description: `
      Horsepower is a unit of power. It is a measure of the rate at which work is done.
      The most common conversion factor, especially for electrical power, is 1 hp = 746 watts.
    `,
};
//Units of Power
const Watt = {
  value: 1,
  Length_Dimension: 2,
  Mass_Dimension: 1,
  Time_Dimension: -3,
  Name: 'Watt',
  Alternative_Names: ['W', 'watt'],
  Description: `
        The watt is a derived unit of power in the International System of Units (SI).
        It is defined as 1 joule per second and is used to quantify the rate of energy transfer.
      `,
};

const Kilowatt = {
  value: 1000,
  Length_Dimension: 2,
  Mass_Dimension: 1,
  Time_Dimension: -3,
  Name: 'Kilowatt',
  Alternative_Names: ['kW', 'kilowatt'],
  Description: `
            The kilowatt is a derived unit of power in the International System of Units (SI).
            It is defined as 1,000 watts and is used to quantify the rate of energy transfer.
        `,
};

const GigaWatt = {
  value: 1e9,
  Length_Dimension: 2,
  Mass_Dimension: 1,
  Time_Dimension: -3,
  Name: 'Gigawatt',
  Alternative_Names: ['GW', 'gigawatt'],
  Description: `
              The gigawatt is a derived unit of power in the International System of Units (SI).
              It is defined as 1,000,000,000 watts and is used to quantify the rate of energy transfer.
          `,
};

const MegaWatt = {
  value: 1e6,
  Length_Dimension: 2,
  Mass_Dimension: 1,
  Time_Dimension: -3,
  Name: 'Megawatt',
  Alternative_Names: ['MW', 'megawatt'],
  Description: `
                The megawatt is a derived unit of power in the International System of Units (SI).
                It is defined as 1,000,000 watts and is used to quantify the rate of energy transfer.
            `,
};

const Horsepower = {
  value: 745.7,
  Length_Dimension: 2,
  Mass_Dimension: 1,
  Time_Dimension: -3,
  Name: 'Horsepower',
  Alternative_Names: ['hp', 'horsepower'],
  Description: `
      Horsepower is a unit of power. It is a measure of the rate at which work is done.
      The most common conversion factor, especially for electrical power, is 1 hp = 746 watts.
    `,
};

const UnitsOfPower: Unit[] = [
  Watt,
  Kilowatt,
  MegaWatt,
  GigaWatt,
  Horsepower,
  HorsepowerMechanical,
];

export default UnitsOfPower;
