import { Unit } from './type_definitions';

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

const Newton = {
  value: 1,
  Length_Dimension: 1,
  Mass_Dimension: 1,
  Time_Dimension: -2,
  Name: 'Newton',
  Alternative_Names: ['N', 'newton'],
  Description: `
          The newton is the International System of Units (SI) derived unit of force.
          It is named after Isaac Newton in recognition of his work on classical mechanics.
          `,
};

const Dyne = {
  value: 1e-5,
  Length_Dimension: 1,
  Mass_Dimension: 1,
  Time_Dimension: -2,
  Name: 'Dyne',
  Alternative_Names: ['dyn', 'dyne'],
  Description: `
            The dyne is a centimeter-gram-second (CGS) unit of force.
            It is defined as the force required to accelerate a mass of one gram by one centimeter per second squared.
            `,
};

const kiloNewton = {
  value: 1000,
  Length_Dimension: 1,
  Mass_Dimension: 1,
  Time_Dimension: -2,
  Name: 'Kilonewton',
  Alternative_Names: ['kN', 'kilonewton'],
  Description: `
            The kilonewton is a unit of force in the International System of Units (SI).
            It is equal to one thousand newtons.
            `,
};

const ForceUnits: Unit[] = [PoundForce, Newton, Dyne, kiloNewton];

export default ForceUnits;
