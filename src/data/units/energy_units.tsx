import { Unit } from './type_definitions';

//Units of Energy
const Calorie = {
  value: 4.184,
  Length_Dimension: 2,
  Mass_Dimension: 1,
  Time_Dimension: -2,
  Name: 'Calorie',
  Alternative_Names: ['cal', 'calorie'],
  Description: `
      The calorie is a unit of energy. It is defined as the amount of heat required to raise the temperature of one gram of water by one degree Celsius.
      `,
};

const Joule = {
  value: 1,
  Length_Dimension: 2,
  Mass_Dimension: 1,
  Time_Dimension: -2,
  Name: 'Joule',
  Alternative_Names: ['J', 'joule'],
  Description: `
            The joule is a derived unit of energy in the International System of Units (SI).
            It is defined as the amount of energy transferred when a force of one newton acts on an object that moves one meter.
            `,
};

//there are many others to add, such as British Thermal Units, etc.
const ElectronVolt = {
  value: 1.60218e-19,
  Length_Dimension: 2,
  Mass_Dimension: 1,
  Time_Dimension: -2,
  Name: 'Electron Volt',
  Alternative_Names: ['eV', 'electron volt'],
  Description: `
          The electron volt is a unit of energy. It is defined as the amount of energy gained by an electron when it moves through an electric potential difference of one volt.
          `,
};

const BritishThermalUnit = {
  value: 1055.06,
  Length_Dimension: 2,
  Mass_Dimension: 1,
  Time_Dimension: -2,
  Name: 'British Thermal Unit',
  Alternative_Names: ['BTU', 'british thermal unit'],
  Description: `
                  The British thermal unit is a unit of energy. It is defined as the amount of heat required to raise the temperature of one pound of water by one degree Fahrenheit.
              `,
};

//also, --> gigawatt hours, kilowatt hours, etc.
const KiloWattHour = {
  value: 3600000,
  Length_Dimension: 2,
  Mass_Dimension: 1,
  Time_Dimension: -2,
  Name: 'Kilowatt Hour',
  Alternative_Names: ['kWh', 'kilowatt hour'],
  Description: `
          The kilowatt hour is a unit of energy. It is defined as the amount of energy consumed by a 1 kilowatt appliance in one hour.
          `,
};

const GigaWattHour = {
  value: 3.6e12,
  Length_Dimension: 2,
  Mass_Dimension: 1,
  Time_Dimension: -2,
  Name: 'Gigawatt Hour',
  Alternative_Names: ['GWh', 'gigawatt hour'],
  Description: `
                  The gigawatt hour is a unit of energy. It is defined as the amount of energy consumed by a 1 gigawatt appliance in one hour.
                  `,
};

const KiloCalorie = {
  value: 4184,
  Length_Dimension: 2,
  Mass_Dimension: 1,
  Time_Dimension: -2,
  Name: 'Kilocalorie',
  Alternative_Names: ['kcal', 'kilocalorie'],
  Description: `
            The kilocalorie is a unit of energy. It is defined as the amount of heat required to raise the temperature of one kilogram of water by one degree Celsius.
            `,
};

const KiloJoule = {
  value: 1000,
  Length_Dimension: 2,
  Mass_Dimension: 1,
  Time_Dimension: -2,
  Name: 'Kilojoule',
  Alternative_Names: ['kJ', 'kilojoule'],
  Description: `
              The kilojoule is a derived unit of energy in the International System of Units (SI).
              It is defined as 1,000 joules and is used to quantify the amount of energy transferred.
              `,
};

const EnergyUnits: Unit[] = [
  Calorie,
  ElectronVolt,
  BritishThermalUnit,
  KiloWattHour,
  GigaWattHour,
  KiloCalorie,
  Joule,
  KiloJoule,
];

export default EnergyUnits;
