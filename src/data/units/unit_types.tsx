type UnitType =
  | 'Volume'
  | 'Mass' // M
  | 'Length' // L
  | 'Temperature' // T
  | 'Time' // T
  | 'Area' // L^2
  | 'Velocity' // L/T
  | 'Pressure' // M/LT^2
  | 'Energy or Torque' // M*L^2/T^2
  | 'Power' // M*L^2/T^3
  | 'Force' // M*L/T^2
  | 'Density' // M/L^3
  //Freuqneyc, Angle, etc. are all dimensionless and hence won't work in this app
  | 'Flow Rate'
  | 'Concentration'; // 1/L^3

const Unit_Types: UnitType[] = [
  'Volume',
  'Mass',
  'Length',
  'Temperature',
  'Time',
  'Area',
  'Velocity',
  'Pressure',
  'Energy or Torque',
  'Power',
  'Force',
  'Density',
  'Flow Rate',
  'Concentration',
];
