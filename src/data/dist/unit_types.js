"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.evaluateExpression = exports.AllUnitClasses = exports.getUnitType = exports.UnitClass = exports.AllUnits = void 0;
//base units, meter, gram, second
var Meter = {
    value: 1,
    Length_Dimension: 1,
    Mass_Dimension: 0,
    Time_Dimension: 0,
    Name: 'Meter',
    Alternative_Names: ['m', 'meter'],
    Description: 'The meter is the base unit of length in the International System of Units (SI). The SI unit symbol is m.'
};
var Gram = {
    value: 0.001,
    Length_Dimension: 0,
    Mass_Dimension: 1,
    Time_Dimension: 0,
    Name: 'Gram',
    Alternative_Names: ['g', 'gram'],
    Description: 'The gram is a metric system unit of mass. Originally   defined as "the absolute weight of a volume of pure water equal to the cube of the hundredth part of a metre, and at the temperature of melting ice" (later at 4 °C, the temperature of maximum density of water).'
};
var Second = {
    value: 1,
    Length_Dimension: 0,
    Mass_Dimension: 0,
    Time_Dimension: 1,
    Name: 'Second',
    Alternative_Names: ['s', 'second'],
    Description: 'A Second is the base unit of time in the International System of Units (SI). It is qualitatively defined as the second division of the hour by sixty, the first division by sixty being the minute. It is quantitatively defined in terms of a certain number of periods of radiation corresponding to a certain transition in the cesium atom.'
};
//now, some common metric base units but derived from the above
var Newton = {
    value: 1,
    Length_Dimension: 1,
    Mass_Dimension: 1,
    Time_Dimension: -2,
    Name: 'Newton',
    Alternative_Names: ['N', 'newton'],
    Description: 'The newton is the International System of Units (SI) derived unit of force. It is named after Isaac Newton in recognition of his work on classical mechanics, specifically Newtons second law of motion.'
};
var Joule = {
    value: 1,
    Length_Dimension: 2,
    Mass_Dimension: 1,
    Time_Dimension: -2,
    Name: 'Joule',
    Alternative_Names: ['J', 'joule'],
    Description: 'The joule is the derived unit of energy in the International System of Units. It is equal to the amount of work done when a force of 1 newton displaces a distance of 1 meter in the direction of the force applied.'
};
//Imperial Units,
//Value is relative to the base unit, meter, gram, second
var Foot = {
    value: 0.3048,
    Length_Dimension: 1,
    Mass_Dimension: 0,
    Time_Dimension: 0,
    Name: 'Foot',
    Alternative_Names: ['ft', 'foot'],
    Description: 'The foot is a unit of length in the imperial and US customary systems of measurement. Since 1959, both units have been defined by international agreement as equivalent to 0.3048 meters exactly.'
};
var Pound = {
    value: 0.453592,
    Length_Dimension: 0,
    Mass_Dimension: 1,
    Time_Dimension: 0,
    Name: 'Pound',
    Alternative_Names: ['lb', 'pound'],
    Description: "\n    The pound or pound-mass is a unit of mass used in the\n    imperial, United States customary and other systems of measurement.\n    It is different than    the pound-force, which is a unit of force.\n  "
};
var PoundForce = {
    value: 4.44822,
    Length_Dimension: 1,
    Mass_Dimension: 1,
    Time_Dimension: -2,
    Name: 'Pound-force',
    Alternative_Names: ['lbf', 'pound-force', 'lb-f'],
    Description: "\n        The pound-force is a unit of force in some systems of measurement including\n        British engineering units and British gravitational units. Pound force is \n        defined as the force exerted by a mass of one avoirdupois pound on the surface of the Earth.\n    "
};
var Horsepower = {
    value: 745.7,
    Length_Dimension: 2,
    Mass_Dimension: 1,
    Time_Dimension: -3,
    Name: 'Horsepower',
    Alternative_Names: ['hp', 'horsepower'],
    Description: "\n    Horsepower is a unit of power. It is a measure of the rate at which work is done.\n    The most common conversion factor, especially for electrical power, is 1 hp = 746 watts.\n  "
};
/**
 *
 * Units of Volume
 */
//Metric Units
var Liter = {
    value: 0.001,
    Length_Dimension: 3,
    Mass_Dimension: 0,
    Time_Dimension: 0,
    Name: 'Liter',
    Alternative_Names: ['L', 'liter'],
    Description: "\n    The liter is a metric unit of volume equal to one cubic decimeter, \n    1/1,000 cubic meter, or 1,000 cubic centimeters.\n  "
};
//Imperial Units
var Gallon = {
    value: 0.00378541,
    Length_Dimension: 3,
    Mass_Dimension: 0,
    Time_Dimension: 0,
    Name: 'Gallon',
    Alternative_Names: ['gal', 'gallon', 'g'],
    Description: "\n        The gallon is a unit of volume in the imperial system of units and\n        United States customary units. It is primarily used in the United States\n        and some Caribbean countries.\n    "
};
var Teaspoon = {
    value: 0.00378541 / 768,
    Length_Dimension: 3,
    Mass_Dimension: 0,
    Time_Dimension: 0,
    Name: 'Teaspoon',
    Alternative_Names: ['tsp', 'teaspoon'],
    Description: "\n        The teaspoon is a unit of volume in the imperial system of units and\n        United States customary units. It is primarily used in the United States\n        and some Caribbean countries.\n    "
};
var Cup = {
    value: 0.00378541 / 16,
    Length_Dimension: 3,
    Mass_Dimension: 0,
    Time_Dimension: 0,
    Name: 'Cup',
    Alternative_Names: ['cup'],
    Description: "\n        The cup is a unit of volume in the imperial system of units and\n        United States customary units. It is primarily used in the United States\n        and some Caribbean countries.\n    "
};
var Tablespoon = {
    value: 0.00378541 / 32,
    Length_Dimension: 3,
    Mass_Dimension: 0,
    Time_Dimension: 0,
    Name: 'Tablespoon',
    Alternative_Names: ['tbsp', 'tablespoon'],
    Description: "\n        The tablespoon is a unit of volume in the imperial system of units and\n        United States customary units. It is primarily used in the United States\n        and some Caribbean countries.\n    "
};
var FluidOunce = {
    value: 0.00378541 / 128,
    Length_Dimension: 3,
    Mass_Dimension: 0,
    Time_Dimension: 0,
    Name: 'Fluid Ounce',
    Alternative_Names: ['fl oz', 'fluid ounce'],
    Description: "\n        The fluid ounce is a unit of volume in the imperial system of units and\n        United States customary units. It is primarily used in the United States\n        and some Caribbean countries. It is defined as 1/128 of a gallon.\n        One fluid ounce of water has a mass of about 1.041 ounces.\n    "
};
var Quart = {
    value: 0.00378541 / 4,
    Length_Dimension: 3,
    Mass_Dimension: 0,
    Time_Dimension: 0,
    Name: 'Quart',
    Alternative_Names: ['qt', 'quart'],
    Description: "\n            The quart is a unit of volume in the imperial system of units and\n            United States customary units. It is primarily used in the United States\n            and some Caribbean countries.\n        "
};
var Pint = {
    value: 0.00378541 / 8,
    Length_Dimension: 3,
    Mass_Dimension: 0,
    Time_Dimension: 0,
    Name: 'Pint',
    Alternative_Names: ['pt', 'pint'],
    Description: "\n                The pint is a unit of volume in the imperial system of units and\n                United States customary units. It is primarily used in the United States\n                and some Caribbean countries.\n            "
};
var FluidDram = {
    value: 0.00378541 / 256,
    Length_Dimension: 3,
    Mass_Dimension: 0,
    Time_Dimension: 0,
    Name: 'Fluid Dram',
    Alternative_Names: ['fl dr', 'fluid dram'],
    Description: "\n                The fluid dram is a unit of volume in the imperial system of units and\n                United States customary units. It is primarily used in the United States\n                and some Caribbean countries.\n            "
};
//Units of Power
var Watt = {
    value: 1,
    Length_Dimension: 2,
    Mass_Dimension: 1,
    Time_Dimension: -3,
    Name: 'Watt',
    Alternative_Names: ['W', 'watt'],
    Description: "\n    The watt is a derived unit of power in the International System of Units (SI).\n    It is defined as 1 joule per second and is used to quantify the rate of energy transfer.\n  "
};
var Kilowatt = {
    value: 1000,
    Length_Dimension: 2,
    Mass_Dimension: 1,
    Time_Dimension: -3,
    Name: 'Kilowatt',
    Alternative_Names: ['kW', 'kilowatt'],
    Description: "\n        The kilowatt is a derived unit of power in the International System of Units (SI).\n        It is defined as 1,000 watts and is used to quantify the rate of energy transfer.\n    "
};
var GigaWatt = {
    value: 1e9,
    Length_Dimension: 2,
    Mass_Dimension: 1,
    Time_Dimension: -3,
    Name: 'Gigawatt',
    Alternative_Names: ['GW', 'gigawatt'],
    Description: "\n          The gigawatt is a derived unit of power in the International System of Units (SI).\n          It is defined as 1,000,000,000 watts and is used to quantify the rate of energy transfer.\n      "
};
var MegaWatt = {
    value: 1e6,
    Length_Dimension: 2,
    Mass_Dimension: 1,
    Time_Dimension: -3,
    Name: 'Megawatt',
    Alternative_Names: ['MW', 'megawatt'],
    Description: "\n            The megawatt is a derived unit of power in the International System of Units (SI).\n            It is defined as 1,000,000 watts and is used to quantify the rate of energy transfer.\n        "
};
//now, non-metric?
var HorsepowerMechanical = {
    value: 745.7,
    Length_Dimension: 2,
    Mass_Dimension: 1,
    Time_Dimension: -3,
    Name: 'Horsepower (mechanical)',
    Alternative_Names: ['hp', 'horsepower'],
    Description: "\n    Horsepower is a unit of power. It is a measure of the rate at which work is done.\n    The most common conversion factor, especially for electrical power, is 1 hp = 746 watts.\n  "
};
//Units of Energy
var Calorie = {
    value: 4.184,
    Length_Dimension: 2,
    Mass_Dimension: 1,
    Time_Dimension: -2,
    Name: 'Calorie',
    Alternative_Names: ['cal', 'calorie'],
    Description: "\n    The calorie is a unit of energy. It is defined as the amount of heat required to raise the temperature of one gram of water by one degree Celsius.\n    "
};
//there are many others to add, such as British Thermal Units, etc.
var ElectronVolt = {
    value: 1.60218e-19,
    Length_Dimension: 2,
    Mass_Dimension: 1,
    Time_Dimension: -2,
    Name: 'Electron Volt',
    Alternative_Names: ['eV', 'electron volt'],
    Description: "\n        The electron volt is a unit of energy. It is defined as the amount of energy gained by an electron when it moves through an electric potential difference of one volt.\n        "
};
var BritishThermalUnit = {
    value: 1055.06,
    Length_Dimension: 2,
    Mass_Dimension: 1,
    Time_Dimension: -2,
    Name: 'British Thermal Unit',
    Alternative_Names: ['BTU', 'british thermal unit'],
    Description: "\n                The British thermal unit is a unit of energy. It is defined as the amount of heat required to raise the temperature of one pound of water by one degree Fahrenheit.\n            "
};
//also, --> gigawatt hours, kilowatt hours, etc.
var KiloWattHour = {
    value: 3600000,
    Length_Dimension: 2,
    Mass_Dimension: 1,
    Time_Dimension: -2,
    Name: 'Kilowatt Hour',
    Alternative_Names: ['kWh', 'kilowatt hour'],
    Description: "\n        The kilowatt hour is a unit of energy. It is defined as the amount of energy consumed by a 1 kilowatt appliance in one hour.\n        "
};
var GigaWattHour = {
    value: 3.6e12,
    Length_Dimension: 2,
    Mass_Dimension: 1,
    Time_Dimension: -2,
    Name: 'Gigawatt Hour',
    Alternative_Names: ['GWh', 'gigawatt hour'],
    Description: "\n                The gigawatt hour is a unit of energy. It is defined as the amount of energy consumed by a 1 gigawatt appliance in one hour.\n                "
};
//there has to be other units of energy to add - such as ergs, etc.
//Units of Force
var Dyne = {
    value: 1e-5,
    Length_Dimension: 1,
    Mass_Dimension: 1,
    Time_Dimension: -2,
    Name: 'Dyne',
    Alternative_Names: ['dyn', 'dyne'],
    Description: "\n    The dyne is a unit of force in the centimeter-gram-second (CGS) system of units.\n    It is defined as the force required to accelerate a mass of one gram by one centimeter per second squared.\n    "
};
//we already did newtons, and pounds-force, but what about other units of force?
/**
 *
 * UNITS OF MASS
 * 1. We have already defined the gram, and the pound
 * 2. We can add the kilogram,
 *
 */
var MetricTon = {
    value: 1000,
    Length_Dimension: 0,
    Mass_Dimension: 1,
    Time_Dimension: 0,
    Name: 'Metric Ton',
    Alternative_Names: ['t', 'metric ton'],
    Description: "\n        The metric ton is a unit of mass in the metric system. It is equal to 1,000 kilograms.\n        "
};
var ImperialTon = {
    value: 2240 * 0.453592,
    Length_Dimension: 0,
    Mass_Dimension: 1,
    Time_Dimension: 0,
    Name: 'Imperial Ton',
    Alternative_Names: ['ton', 'imperial ton'],
    Description: "\n            The imperial ton is a unit of mass in the imperial system of units.\n            It is equal to 2,240 pounds.\n            "
};
var AmericanTon = {
    value: 2000 * 0.453592,
    Length_Dimension: 0,
    Mass_Dimension: 1,
    Time_Dimension: 0,
    Name: 'American Ton',
    Alternative_Names: ['ton', 'American ton'],
    Description: "\n                The American ton is a unit of mass in the United States customary units.\n                It is equal to 2,000 pounds.\n                "
};
//units of length
var Inch = {
    value: 0.0254,
    Length_Dimension: 1,
    Mass_Dimension: 0,
    Time_Dimension: 0,
    Name: 'Inch',
    Alternative_Names: ['in', 'inch'],
    Description: "\n    The inch is a unit of length in the imperial and US customary systems of measurement.\n    "
};
var Mile = {
    value: 1609.34,
    Length_Dimension: 1,
    Mass_Dimension: 0,
    Time_Dimension: 0,
    Name: 'Mile',
    Alternative_Names: ['mi', 'mile'],
    Description: "\n        The mile is a unit of length in the imperial and US customary systems of measurement.\n        "
};
var Yard = {
    value: 0.9144,
    Length_Dimension: 1,
    Mass_Dimension: 0,
    Time_Dimension: 0,
    Name: 'Yard',
    Alternative_Names: ['yd', 'yard'],
    Description: "\n            The yard is a unit of length in the imperial and US customary systems of measurement.\n            "
};
var Kilometer = {
    value: 1000,
    Length_Dimension: 1,
    Mass_Dimension: 0,
    Time_Dimension: 0,
    Name: 'Kilometer',
    Alternative_Names: ['km', 'kilometer'],
    Description: "\n        The kilometer is a unit of length in the metric system of units. It is equal to 1,000 meters.\n        "
};
//other bizarre stuff, like light years, angstroms, etc.
var LightYear = {
    value: 9.461e15,
    Length_Dimension: 1,
    Mass_Dimension: 0,
    Time_Dimension: 0,
    Name: 'Light Year',
    Alternative_Names: ['ly', 'light year'],
    Description: "\n    The light year is a unit of length used in astronomy. It is the distance that light travels in one year.\n    "
};
var Angstrom = {
    value: 1e-10,
    Length_Dimension: 1,
    Mass_Dimension: 0,
    Time_Dimension: 0,
    Name: 'Angstrom',
    Alternative_Names: ['Å', 'angstrom'],
    Description: "\n        The angstrom is a unit of length equal to 10^-10 meters. It is used to measure atomic distances.\n        "
};
//units of time
var Minute = {
    value: 60,
    Length_Dimension: 0,
    Mass_Dimension: 0,
    Time_Dimension: 1,
    Name: 'Minute',
    Alternative_Names: ['min', 'minute'],
    Description: "\n    The minute is a unit of time equal to 60 seconds.\n    "
};
var Hour = {
    value: 3600,
    Length_Dimension: 0,
    Mass_Dimension: 0,
    Time_Dimension: 1,
    Name: 'Hour',
    Alternative_Names: ['h', 'hour'],
    Description: "\n        The hour is a unit of time equal to 60 minutes.\n        "
};
var Day = {
    value: 86400,
    Length_Dimension: 0,
    Mass_Dimension: 0,
    Time_Dimension: 1,
    Name: 'Day',
    Alternative_Names: ['d', 'day'],
    Description: "\n            The day is a unit of time equal to 24 hours.\n            "
};
var Week = {
    value: 604800,
    Length_Dimension: 0,
    Mass_Dimension: 0,
    Time_Dimension: 1,
    Name: 'Week',
    Alternative_Names: ['wk', 'week'],
    Description: "\n                The week is a unit of time equal to 7 days.\n                "
};
//mass
var Slug = {
    value: 14.5939,
    Length_Dimension: 0,
    Mass_Dimension: 1,
    Time_Dimension: 0,
    Name: 'Slug',
    Alternative_Names: ['slug'],
    Description: "\n        The slug is a unit of mass in the US customary and British imperial systems of units.\n        The slug is defined as the mass that is accelerated by 1 foot per second squared when a force of one pound (lbf) is exerted on it.\n        This makes it equal to 32.17405 pounds (14.59390 kg) because 1 lbf is equal to 32.17405 pounds.\n        It is used in American engineering and aviation.\n        "
};
/**
 *
 * Units of Area
 */
var SquareMeter = {
    value: 1,
    Length_Dimension: 2,
    Mass_Dimension: 0,
    Time_Dimension: 0,
    Name: 'Square Meter',
    Alternative_Names: ['m^2', 'square meter'],
    Description: "\n        The square meter is a unit of area in the International System of Units (SI).\n        It is defined as the area of a square with sides of one meter.\n        "
};
var SquareKilometer = {
    value: 1e6,
    Length_Dimension: 2,
    Mass_Dimension: 0,
    Time_Dimension: 0,
    Name: 'Square Kilometer',
    Alternative_Names: ['km^2', 'square kilometer'],
    Description: "\n        The square kilometer is a unit of area in the International System of Units (SI).\n        It is defined as the area of a square with sides of one kilometer.\n        "
};
var SquareMile = {
    value: 2.59e6,
    Length_Dimension: 2,
    Mass_Dimension: 0,
    Time_Dimension: 0,
    Name: 'Square Mile',
    Alternative_Names: ['mi^2', 'square mile'],
    Description: "\n            The square mile is a unit of area in the imperial and US customary systems of measurement.\n            It is defined as the area of a square with sides of one mile.\n            "
};
var SquareFoot = {
    value: 0.092903,
    Length_Dimension: 2,
    Mass_Dimension: 0,
    Time_Dimension: 0,
    Name: 'Square Foot',
    Alternative_Names: ['ft^2', 'square foot'],
    Description: "\n                    The square foot is a unit of area in the imperial and US customary systems of measurement.\n                    It is defined as the area of a square with sides of one foot.\n                    "
};
var Acre = {
    value: 4046.86,
    Length_Dimension: 2,
    Mass_Dimension: 0,
    Time_Dimension: 0,
    Name: 'Acre',
    Alternative_Names: ['acre'],
    Description: "\n                The acre is a unit of area in the imperial and US customary systems of measurement.\n                It is defined as the area of a rectangle with sides of one chain and one furlong.\n                "
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
var getUnitType = function (unit) {
    var Length_Dimension = unit.Length_Dimension, Mass_Dimension = unit.Mass_Dimension, Time_Dimension = unit.Time_Dimension;
    if (Length_Dimension === 1 && Mass_Dimension === 0 && Time_Dimension === 0) {
        return 'Length';
    }
    else if (Length_Dimension === 0 &&
        Mass_Dimension === 1 &&
        Time_Dimension === 0) {
        return 'Mass';
    }
    else if (Length_Dimension === 0 &&
        Mass_Dimension === 0 &&
        Time_Dimension === 1) {
        return 'Time';
    }
    else if (Length_Dimension === 1 &&
        Mass_Dimension === 1 &&
        Time_Dimension === -2) {
        return 'Force';
    }
    else if (Length_Dimension === 2 &&
        Mass_Dimension === 1 &&
        Time_Dimension === -2) {
        return 'Energy or Torque';
    }
    else if (Length_Dimension === 2 &&
        Mass_Dimension === 1 &&
        Time_Dimension === -3) {
        return 'Power';
    }
    else if (Length_Dimension === 3 &&
        Mass_Dimension === 0 &&
        Time_Dimension === 0) {
        return 'Volume';
    }
    //area
    else if (Length_Dimension === 2 &&
        Mass_Dimension === 0 &&
        Time_Dimension === 0) {
        return 'Area';
    }
    //velocity
    else if (Length_Dimension === 1 &&
        Mass_Dimension === 0 &&
        Time_Dimension === -1) {
        return 'Velocity';
    }
    //Acceleration
    else if (Length_Dimension === 1 &&
        Mass_Dimension === 0 &&
        Time_Dimension === -2) {
        return 'Acceleration';
    }
    //Density
    else if (Length_Dimension === -3 &&
        Mass_Dimension === 1 &&
        Time_Dimension === 0) {
        return 'Density';
    }
    else {
        return 'Other';
    }
};
exports.getUnitType = getUnitType;
var UnitsOfVolume = [
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
var UnitsOfPower = [Watt, Kilowatt, MegaWatt, GigaWatt];
var UnitsOfEnergy = [Calorie, ElectronVolt, BritishThermalUnit];
var UnitsOfForce = [Newton, Dyne, PoundForce];
var UnitsOfMass = [
    Gram,
    Pound,
    MetricTon,
    ImperialTon,
    AmericanTon,
    Slug,
];
var UnitsOfLength = [
    Meter,
    Foot,
    Inch,
    Mile,
    Yard,
    Kilometer,
    LightYear,
    Angstrom,
];
var UnitsOfTime = [Second, Minute, Hour, Day, Week];
var UnitsOfArea = [
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
var UnitClass = /** @class */ (function () {
    //override operators
    //override multiplication operator
    //defining a function called multiply is NOT overriding the multiplication operator
    function UnitClass(value, Length_Dimension, Mass_Dimension, Time_Dimension, Name) {
        if (Name === void 0) { Name = ''; }
        this.value = value;
        this.Length_Dimension = Length_Dimension;
        this.Mass_Dimension = Mass_Dimension;
        this.Time_Dimension = Time_Dimension;
        this.Name = Name;
    }
    //static method to create a UnitClass from a Unit
    UnitClass.fromUnit = function (unit) {
        return new UnitClass(unit.value, unit.Length_Dimension, unit.Mass_Dimension, unit.Time_Dimension, unit.Name);
    };
    // Method to multiply two UnitClass instances
    UnitClass.prototype.multiply = function (other) {
        //if is number, then convert to UnitClass
        if (typeof other === 'number') {
            return new UnitClass(this.value * other, this.Length_Dimension, this.Mass_Dimension, this.Time_Dimension);
        }
        return new UnitClass(this.value * other.value, this.Length_Dimension + other.Length_Dimension, this.Mass_Dimension + other.Mass_Dimension, this.Time_Dimension + other.Time_Dimension);
    };
    // Method to divide two UnitClass instances
    UnitClass.prototype.divide = function (other) {
        //if is number, then convert to UnitClass
        if (typeof other === 'number') {
            return new UnitClass(this.value / other, this.Length_Dimension, this.Mass_Dimension, this.Time_Dimension);
        }
        return new UnitClass(this.value / other.value, this.Length_Dimension - other.Length_Dimension, this.Mass_Dimension - other.Mass_Dimension, this.Time_Dimension - other.Time_Dimension);
    };
    UnitClass.prototype.multiplyByScalar = function (scalar) {
        return new UnitClass(this.value * scalar, this.Length_Dimension, this.Mass_Dimension, this.Time_Dimension);
    };
    // Method to add two UnitClass instances
    UnitClass.prototype.add = function (other) {
        if (this.Length_Dimension !== other.Length_Dimension ||
            this.Mass_Dimension !== other.Mass_Dimension ||
            this.Time_Dimension !== other.Time_Dimension) {
            throw new Error('Units are not compatible for addition');
        }
        return new UnitClass(this.value + other.value, this.Length_Dimension, this.Mass_Dimension, this.Time_Dimension);
    };
    UnitClass.prototype.hasSameDimensions = function (other) {
        return (this.Length_Dimension === other.Length_Dimension &&
            this.Mass_Dimension === other.Mass_Dimension &&
            this.Time_Dimension === other.Time_Dimension);
    };
    //show the VALUE Of the missing dimensions
    UnitClass.prototype.missingDimensions = function (other) {
        var missingDimensions = '';
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
    };
    // Method to subtract two UnitClass instances
    UnitClass.prototype.subtract = function (other) {
        if (this.Length_Dimension !== other.Length_Dimension ||
            this.Mass_Dimension !== other.Mass_Dimension ||
            this.Time_Dimension !== other.Time_Dimension) {
            throw new Error('Units are not compatible for subtraction');
        }
        return new UnitClass(this.value - other.value, this.Length_Dimension, this.Mass_Dimension, this.Time_Dimension);
    };
    return UnitClass;
}());
exports.UnitClass = UnitClass;
function evaluateExpression(expression, units) {
    var operators = {
        '+': { precedence: 1, associativity: 'L' },
        '-': { precedence: 1, associativity: 'L' },
        '*': { precedence: 2, associativity: 'L' },
        '/': { precedence: 2, associativity: 'L' }
    };
    var outputQueue = [];
    var operatorStack = [];
    var tokens = expression.split(' ');
    tokens.forEach(function (token) {
        if (units[token]) {
            outputQueue.push(units[token]);
        }
        else if (operators[token]) {
            while (operatorStack.length &&
                operators[operatorStack[operatorStack.length - 1]] &&
                ((operators[token].associativity === 'L' &&
                    operators[token].precedence <=
                        operators[operatorStack[operatorStack.length - 1]].precedence) ||
                    (operators[token].associativity === 'R' &&
                        operators[token].precedence <
                            operators[operatorStack[operatorStack.length - 1]].precedence))) {
                outputQueue.push(operatorStack.pop());
            }
            operatorStack.push(token);
        }
        else if (token === '(') {
            operatorStack.push(token);
        }
        else if (token === ')') {
            while (operatorStack.length &&
                operatorStack[operatorStack.length - 1] !==
                    '(') {
                outputQueue.push(operatorStack.pop());
            }
            operatorStack.pop();
        }
    });
    while (operatorStack.length) {
        outputQueue.push(operatorStack.pop());
    }
    var evaluationStack = [];
    outputQueue.forEach(function (token) {
        if (typeof token === 'string' &&
            operators[token]) {
            var b = evaluationStack.pop();
            var a = evaluationStack.pop();
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
        }
        else {
            evaluationStack.push(token);
        }
    });
    return evaluationStack[0];
}
exports.evaluateExpression = evaluateExpression;
var NewtonUnit = UnitClass.fromUnit(Newton);
var DyneUnit = UnitClass.fromUnit(Dyne);
var AllUnits = __spreadArrays(UnitsOfVolume, UnitsOfPower, UnitsOfEnergy, UnitsOfForce, UnitsOfMass, UnitsOfLength, UnitsOfTime, UnitsOfArea);
exports.AllUnits = AllUnits;
var AllUnitClasses = AllUnits.map(function (unit) { return UnitClass.fromUnit(unit); });
exports.AllUnitClasses = AllUnitClasses;
