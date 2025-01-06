import { FaGithub, FaArrowAltCircleRight } from 'react-icons/fa';
import { ReactNode } from 'react';

type OtherProject = {
  Name: string;
  Description: string;
  Links: {
    URL: string;
    Title: string;
    Icon: ReactNode;
  }[];
};

const VaultProject: OtherProject = {
  Name: 'Vault Plugin',
  Description: `Vault Plugin That Creates Sample Per JWTs that have an audience
  attribute mapped to the particular Engine and Per Engine Configuration
  (Engine Represents Paticular Configuration Objects)`,
  Links: [
    {
      URL: 'https://github.com/PranoSA/VaultJWTPlugin',
      Title: 'View on Github',
      Icon: <FaGithub size={30} className="text-white" />,
    },
  ],
};

const SambaProject: OtherProject = {
  Name: 'Samba Project',
  Description: `Uses OIDC authentication, MongoDB, Postgres, and gRPC in GoLang to
  dynamically allocate Samba Shares. Consists of 2 Different Tiers - 1.
  Frontend Servers that handle and route requetsts, and 2. Backend Samba
  Share Servers That Mount Shares and Make Them Publically Available`,
  Links: [
    {
      URL: 'https://github.com?PranoSA/Samba_Project_Backends',
      Title: 'View on Github',
      Icon: <FaGithub size={30} className="text-white" />,
    },
  ],
};

const CompresibleFlowCalculator: OtherProject = {
  Name: 'Compresible Flow Calculator',
  Description: `Application That Lets you Examine Isentropic and Static Properties of
  Flows, Make comparisons between Flows, see the effects of adjusting
  parameters like effeciency ratings, pressure ratios, etc. of things
  like Turbines, Compressors, Diffuzers, and Nozzles, and analyze the
  relationships between properties like usable work, entropy, pressure,
  and enthalpy.`,
  Links: [
    {
      URL: 'https://github.com/PhilDeveloperCA/Compressible-Flows-App',
      Title: 'View on Github',
      Icon: <FaGithub size={30} className="text-white" />,
    },
    {
      URL: 'https://github.com/PranoSA/New-Compressible-Flow-Calculator',
      Title: 'View on Github',
      Icon: <FaGithub size={30} className="text-white" />,
    },
    {
      URL: 'www.compressibleflowcalculator.com',
      Title: 'View on Web',
      Icon: <FaArrowAltCircleRight size={30} className="text-white" />,
    },
  ],
};

const PythonUnitsConverterCalculator: OtherProject = {
  Name: 'Python Units Converter Calculator',
  Description: `A Python Bot that Converts Units`,
  Links: [
    {
      URL: 'https://github.com/PhilDeveloperCA/Units_Bot_Python',
      Title: 'View on Github',
      Icon: <FaGithub size={30} className="text-white" />,
    },
  ],
};

const otherProjects: OtherProject[] = [
  VaultProject,
  SambaProject,
  CompresibleFlowCalculator,
  PythonUnitsConverterCalculator,
];

export default otherProjects;
