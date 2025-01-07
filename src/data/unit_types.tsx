type Unit = {
  value: number;
  Length_Dimension: number;
  Mass_Dimension: number;
  Time_Dimension: number;
  Name: string;
  Alternative_Names: string[];
  Description: string;
};

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

//now, some common metric base units but derived from the above
const Newton: Unit = {
  value: 1, //is exactly 1, because it is equal to 1 kg*m/s^2
  Length_Dimension: 1,
  Mass_Dimension: 1,
  Time_Dimension: -2,
  Name: 'Newton',
  Alternative_Names: ['N', 'newton'],
  Description:
    'The newton is the International System of Units (SI) derived unit of force. It is named after Isaac Newton in recognition of his work on classical mechanics, specifically Newtons second law of motion.',
};

const Joule: Unit = {
  value: 1,
  Length_Dimension: 2,
  Mass_Dimension: 1,
  Time_Dimension: -2,
  Name: 'Joule',
  Alternative_Names: ['J', 'joule'],
  Description:
    'The joule is the derived unit of energy in the International System of Units. It is equal to the amount of work done when a force of 1 newton displaces a distance of 1 meter in the direction of the force applied.',
};

//Imperial Units,
//Value is relative to the base unit, meter, gram, second
const Foot = {
  value: 0.3048,
  Length_Dimension: 1,
  Mass_Dimension: 0,
  Time_Dimension: 0,
  Name: 'Foot',
  Alternative_Names: ['ft', 'foot'],
  Description:
    'The foot is a unit of length in the imperial and US customary systems of measurement. Since 1959, both units have been defined by international agreement as equivalent to 0.3048 meters exactly.',
};

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

const PoundForce = {
  value: 4.44822, //1 lb * 9.81 m/s^2 = 4.44822 N
  Length_Dimension: 1,
  Mass_Dimension: 1,
  Time_Dimension: -2,
  Name: 'Pound-force',
  Alternative_Names: ['lbf', 'pound-force', 'lb-f'],
  Description: `
        The pound-force is a unit of force in some systems of measurement including
        British engineering units and British gravitational units. Pound force is 
        defined as the force exerted by a mass of one avoirdupois pound on the surface of the Earth.
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

/**
 *
 * Units of Volume
 */

//Metric Units
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

//now, non-metric?
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

//there has to be other units of energy to add - such as ergs, etc.

//Units of Force
const Dyne = {
  value: 1e-5,
  Length_Dimension: 1,
  Mass_Dimension: 1,
  Time_Dimension: -2,
  Name: 'Dyne',
  Alternative_Names: ['dyn', 'dyne'],
  Description: `
    The dyne is a unit of force in the centimeter-gram-second (CGS) system of units.
    It is defined as the force required to accelerate a mass of one gram by one centimeter per second squared.
    `,
};

//we already did newtons, and pounds-force, but what about other units of force?

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

/**
 *
 * Flow Rates
 */

const CubmicMeter = {
  value: 1,
  Length_Dimension: 3,
  Mass_Dimension: 0,
  Time_Dimension: 0,
  Name: 'Cubic Meter',
  Alternative_Names: ['m^3', 'cubic meter'],
  Description: `
        The cubic meter is a unit of volume in the International System of Units (SI).
        It is defined as the volume of a cube with sides of one meter.
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

//gallons per minute, etc.
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

/**
 * This function takes in Unit Dimensions with the following string
 * "LMT" where L is the length dimension, M is the mass dimension, and T is the time dimension
 * so "1,0,0" would be L=1, M=0, T=0
 * Then it should return "Length"
 *
 * If its "1,0,-1" it should return "Velocity"
 * If its "1,1,-2" it should return "Force"
 * etc..
 *
 */

const getUnitType = (unit: Unit): string => {
  const { Length_Dimension, Mass_Dimension, Time_Dimension } = unit;
  if (Length_Dimension === 1 && Mass_Dimension === 0 && Time_Dimension === 0) {
    return 'Length';
  } else if (
    Length_Dimension === 0 &&
    Mass_Dimension === 1 &&
    Time_Dimension === 0
  ) {
    return 'Mass';
  } else if (
    Length_Dimension === 0 &&
    Mass_Dimension === 0 &&
    Time_Dimension === 1
  ) {
    return 'Time';
  } else if (
    Length_Dimension === 1 &&
    Mass_Dimension === 1 &&
    Time_Dimension === -2
  ) {
    return 'Force';
  } else if (
    Length_Dimension === 2 &&
    Mass_Dimension === 1 &&
    Time_Dimension === -2
  ) {
    return 'Energy or Torque';
  } else if (
    Length_Dimension === 2 &&
    Mass_Dimension === 1 &&
    Time_Dimension === -3
  ) {
    return 'Power';
  } else if (
    Length_Dimension === 3 &&
    Mass_Dimension === 0 &&
    Time_Dimension === 0
  ) {
    return 'Volume';
  }
  //area
  else if (
    Length_Dimension === 2 &&
    Mass_Dimension === 0 &&
    Time_Dimension === 0
  ) {
    return 'Area';
  }
  //velocity
  else if (
    Length_Dimension === 1 &&
    Mass_Dimension === 0 &&
    Time_Dimension === -1
  ) {
    return 'Velocity';
  }
  //Acceleration
  else if (
    Length_Dimension === 1 &&
    Mass_Dimension === 0 &&
    Time_Dimension === -2
  ) {
    return 'Acceleration';
  }
  //Density
  else if (
    Length_Dimension === -3 &&
    Mass_Dimension === 1 &&
    Time_Dimension === 0
  ) {
    return 'Density';
  }
  //Flow Rate
  else if (
    Length_Dimension === 3 &&
    Mass_Dimension === 0 &&
    Time_Dimension === -1
  ) {
    return 'Flow Rate';
  } else {
    return 'Other';
  }
};

const UnitsOfVolume: Unit[] = [
  Liter,
  Gallon,
  Teaspoon,
  Cup,
  Tablespoon,
  FluidOunce,
  Quart,
  Pint,
  FluidDram,
];

const UnitsOfPower: Unit[] = [Watt, Kilowatt, MegaWatt, GigaWatt];

const UnitsOfEnergy: Unit[] = [Calorie, ElectronVolt, BritishThermalUnit];

const UnitsOfForce: Unit[] = [Newton, Dyne, PoundForce];

const UnitsOfFlowRate: Unit[] = [CubmicMeter, CubicMeterPerSecond];

const UnitsOfMass: Unit[] = [
  Gram,
  Pound,
  MetricTon,
  ImperialTon,
  AmericanTon,
  Slug,
];

const UnitsOfLength: Unit[] = [
  Meter,
  Foot,
  Inch,
  Mile,
  Yard,
  Kilometer,
  LightYear,
  Angstrom,
];

const UnitsOfTime: Unit[] = [Second, Minute, Hour, Day, Week];

const UnitsOfArea: Unit[] = [
  SquareMeter,
  SquareKilometer,
  SquareMile,
  SquareFoot,
  Acre,
];

/**
 *
 * Create a Class Called Unit,
 * so that you can override the multipllication, division, and addition operators
 * instead of coming up with your own parser
 */

class UnitClass {
  //members should be value, Length_Dimension, Mass_Dimension, Time_Dimension

  //constructor should take in value, Length_Dimension, Mass_Dimension, Time_Dimension
  //and set the members
  value: number;
  Length_Dimension: number;
  Mass_Dimension: number;
  Time_Dimension: number;
  Name: string;

  //override operators
  //override multiplication operator
  //defining a function called multiply is NOT overriding the multiplication operator

  constructor(
    value: number,
    Length_Dimension: number,
    Mass_Dimension: number,
    Time_Dimension: number,
    Name: string = ''
  ) {
    this.value = value;
    this.Length_Dimension = Length_Dimension;
    this.Mass_Dimension = Mass_Dimension;
    this.Time_Dimension = Time_Dimension;
    this.Name = Name;
  }

  //static method to create a UnitClass from a Unit
  static fromUnit(unit: Unit) {
    return new UnitClass(
      unit.value,
      unit.Length_Dimension,
      unit.Mass_Dimension,
      unit.Time_Dimension,
      unit.Name
    );
  }

  // Method to multiply two UnitClass instances
  multiply(other: UnitClass | number): UnitClass {
    //if is number, then convert to UnitClass
    if (typeof other === 'number') {
      return new UnitClass(
        this.value * other,
        this.Length_Dimension,
        this.Mass_Dimension,
        this.Time_Dimension
      );
    }

    return new UnitClass(
      this.value * other.value,
      this.Length_Dimension + other.Length_Dimension,
      this.Mass_Dimension + other.Mass_Dimension,
      this.Time_Dimension + other.Time_Dimension
    );
  }

  // Method to divide two UnitClass instances
  divide(other: UnitClass | number): UnitClass {
    //if is number, then convert to UnitClass
    console.log('other', other);
    if (typeof other === 'number') {
      return new UnitClass(
        this.value / other,
        this.Length_Dimension,
        this.Mass_Dimension,
        this.Time_Dimension
      );
    }
    return new UnitClass(
      this.value / other.value,
      this.Length_Dimension - other.Length_Dimension,
      this.Mass_Dimension - other.Mass_Dimension,
      this.Time_Dimension - other.Time_Dimension
    );
  }
  multiplyByScalar(scalar: number): UnitClass {
    return new UnitClass(
      this.value * scalar,
      this.Length_Dimension,
      this.Mass_Dimension,
      this.Time_Dimension
    );
  }

  // Method to add two UnitClass instances
  add(other: UnitClass): UnitClass {
    if (
      this.Length_Dimension !== other.Length_Dimension ||
      this.Mass_Dimension !== other.Mass_Dimension ||
      this.Time_Dimension !== other.Time_Dimension
    ) {
      console.log("Units don't have the same dimensions");
      throw new Error('Units are not compatible for addition');
    }
    return new UnitClass(
      this.value + other.value,
      this.Length_Dimension,
      this.Mass_Dimension,
      this.Time_Dimension
    );
  }

  hasSameDimensions(other: UnitClass): boolean {
    return (
      this.Length_Dimension === other.Length_Dimension &&
      this.Mass_Dimension === other.Mass_Dimension &&
      this.Time_Dimension === other.Time_Dimension
    );
  }
  //show the VALUE Of the missing dimensions
  missingDimensions(other: UnitClass): string {
    let missingDimensions = '';
    if (this.Length_Dimension !== other.Length_Dimension) {
      missingDimensions +=
        'Length: ' + (other.Length_Dimension - this.Length_Dimension) + ', ';
    }
    if (this.Mass_Dimension !== other.Mass_Dimension) {
      missingDimensions +=
        'Mass: ' + (other.Mass_Dimension - this.Mass_Dimension) + ', ';
    }
    if (this.Time_Dimension !== other.Time_Dimension) {
      missingDimensions +=
        'Time: ' + (other.Time_Dimension - this.Time_Dimension) + ', ';
    }
    return missingDimensions;
  }

  // Method to subtract two UnitClass instances
  subtract(other: UnitClass): UnitClass {
    if (
      this.Length_Dimension !== other.Length_Dimension ||
      this.Mass_Dimension !== other.Mass_Dimension ||
      this.Time_Dimension !== other.Time_Dimension
    ) {
      throw new Error('Units are not compatible for subtraction');
    }
    return new UnitClass(
      this.value - other.value,
      this.Length_Dimension,
      this.Mass_Dimension,
      this.Time_Dimension
    );
  }
}

function evaluateExpression(
  expression: string,
  units: { [key: string]: UnitClass }
): UnitClass {
  const operators = {
    '+': { precedence: 1, associativity: 'L' },
    '-': { precedence: 1, associativity: 'L' },
    '*': { precedence: 2, associativity: 'L' },
    '/': { precedence: 2, associativity: 'L' },
  };

  const outputQueue: (string | UnitClass)[] = [];
  const operatorStack: (keyof typeof operators | '(' | ')')[] = [];

  const tokens = expression.split(' ');

  tokens.forEach((token: keyof typeof operators | string) => {
    if (units[token]) {
      outputQueue.push(units[token]);
    } else if (operators[token as keyof typeof operators]) {
      while (
        operatorStack.length &&
        operators[
          operatorStack[operatorStack.length - 1] as keyof typeof operators
        ] &&
        ((operators[token as keyof typeof operators].associativity === 'L' &&
          operators[token as keyof typeof operators].precedence <=
            operators[
              operatorStack[operatorStack.length - 1] as keyof typeof operators
            ].precedence) ||
          (operators[token as keyof typeof operators].associativity === 'R' &&
            operators[token as keyof typeof operators].precedence <
              operators[
                operatorStack[
                  operatorStack.length - 1
                ] as keyof typeof operators
              ].precedence))
      ) {
        outputQueue.push(operatorStack.pop()!);
      }
      operatorStack.push(token as '+' | '-' | '*' | '/' | '(' | ')');
    } else if (token === '(') {
      operatorStack.push(token);
    } else if (token === ')') {
      while (
        operatorStack.length &&
        operatorStack[operatorStack.length - 1] !==
          ('(' as keyof typeof operators)
      ) {
        outputQueue.push(operatorStack.pop()!);
      }
      operatorStack.pop();
    }
  });

  while (operatorStack.length) {
    outputQueue.push(operatorStack.pop()!);
  }

  const evaluationStack: UnitClass[] = [];

  outputQueue.forEach((token) => {
    if (
      typeof token === 'string' &&
      operators[token as keyof typeof operators]
    ) {
      const b = evaluationStack.pop()!;
      const a = evaluationStack.pop()!;
      switch (token) {
        case '+':
          evaluationStack.push(a.add(b));
          break;
        case '-':
          evaluationStack.push(a.subtract(b));
          break;
        case '*':
          evaluationStack.push(a.multiply(b));
          break;
        case '/':
          evaluationStack.push(a.divide(b));
          break;
      }
    } else {
      evaluationStack.push(token as UnitClass);
    }
  });

  return evaluationStack[0];
}

const NewtonUnit = UnitClass.fromUnit(Newton);
const DyneUnit = UnitClass.fromUnit(Dyne);

const getTypeOfUnitClass = (unit: UnitClass): string => {
  if (!unit) {
    console.log('WHYYYYYYYYYY');
    return '';
  }
  const unit_type: Unit = {
    value: unit.value,
    Length_Dimension: unit.Length_Dimension,
    Mass_Dimension: unit.Mass_Dimension,
    Time_Dimension: unit.Time_Dimension,
    Name: unit.Name,
    Alternative_Names: [],
    Description: '',
  };

  return getUnitType(unit_type);
};

const AllUnits: Unit[] = [
  ...UnitsOfVolume,
  ...UnitsOfPower,
  ...UnitsOfEnergy,
  ...UnitsOfForce,
  ...UnitsOfMass,
  ...UnitsOfLength,
  ...UnitsOfTime,
  ...UnitsOfArea,
  ...UnitsOfFlowRate,
];

const AllUnitClasses = AllUnits.map((unit) => UnitClass.fromUnit(unit));

export {
  AllUnits,
  UnitClass,
  getUnitType,
  AllUnitClasses,
  evaluateExpression,
  getTypeOfUnitClass,
};
