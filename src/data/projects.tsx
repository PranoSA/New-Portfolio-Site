/*

    A Project should have 
    1. Name
    2. Description
    3. A List of Links to Pages with their name
*/

import Link from 'next/link';
import { useState } from 'react';

//fa-icons, down arrow, visit page, up arrow
import { FaArrowDown, FaArrowUp, FaExternalLinkAlt } from 'react-icons/fa';

type PortfolioProject = {
  Name: string;
  Description: string;
  Links: LinkToPage[];
};

type LinkToPage = {
  URL: string;
  Title: string;
};

const CompilerProject: PortfolioProject = {
  Name: 'Expression Parser and Compiler',
  Description: `Expression Parser and Compiler That Builds a Stack
                  representation, and Abstract Syntax Tree (AST) and a Parse
                  Tree using Generated Grammar Rules. This user is allowed to
                  generate their own grammar rules by specifying the precendence
                  of operators and the associativity of operators.`,
  Links: [
    {
      URL: '/compilers',
      Title: 'View Compiler App',
    },
  ],
};

const CORSProject: PortfolioProject = {
  Name: 'Mini-CORS Tester',
  Description: `Run Pre-Configured Integration Tests against a Certain HTTP(S)
                Path Using a Certain Origin and Method, and Headers. This will
                allow you to tell if the server is configured properly or not
                for your frontend application running in a different origin to
                make requests to.`,
  Links: [
    {
      URL: '/cors',
      Title: 'View Mini-CORS Tester',
    },
  ],
};

const ElevationProject: PortfolioProject = {
  Name: 'Elevation Chart',
  Description: `Create and View Elevation Charts for a Route. This will allow you to
                see the elevation of a route and see the elevation gain and loss of a route.`,
  Links: [
    {
      URL: '/elevation/view',
      Title: 'View Elevation Charts',
    },
    {
      URL: '/elevation',
      Title: 'Create Elevation Chart',
    },
  ],
};

const OtherProjects: PortfolioProject = {
  Name: 'Miscellaneous Other Projects',
  Description: `Miscellaneous Other Projects that I have worked on.`,
  Links: [
    {
      URL: '/otherprojects',
      Title: 'View Other Projects',
    },
  ],
};

const MediaServer: PortfolioProject = {
  //just use link to github for now
  Name: 'Media Server',
  Description: `A Media Server that allows you to upload and download media files.
                    This is a work in progress.`,
  Links: [
    {
      URL: 'github.com/PranSA/MediaServer',
      Title: 'View Media Server on Github',
    },
  ],
};

//this is also just a link github for now
const ShoppingListApp: PortfolioProject = {
  Name: 'Shopping List App',
  Description: `This is my Portfolio Website. It is a work in progress.`,
  Links: [
    {
      URL: 'https://github.com/PranoSA/Portfolio',
      Title: 'View Portfolio on Github',
    },
  ],
};

const ImageApp: PortfolioProject = {
  Name: 'Image Mapper',
  Description: `This Application Allows users to create trips, upload images to them, categorize them, edit them, and view them on a map`,
  Links: [
    {
      URL: 'https://images.compressibleflowcalculator.com',
      Title: 'View Image Mapper',
    },
  ],
};

const UnicodeProject: PortfolioProject = {
  Name: 'Unicode Mini-App',
  Description: `Learn About the Binary Representation of Textual Objects in
                    Unicode. This project demonstrate the use of Unicode Character
                    Standards, Unicode Character Information, and Encoding of
                    Characters using UTF-8, UTF-16, and UTF-32. Also Creates a
                    Link Based on the Character Form to my Full-Fledged Unicode
                    Inspection Application.`,
  Links: [
    {
      URL: '/unicode',
      Title: 'View Unicode Mini-App',
    },
    {
      URL: 'https://unicode.compressibleflowcalculator.com',
      Title: 'View Full Unicode Inspection Application',
    },
  ],
};

export const Projects: PortfolioProject[] = [
  CompilerProject,
  CORSProject,
  ElevationProject,
  OtherProjects,
  MediaServer,
  ShoppingListApp,
  ImageApp,
  UnicodeProject,
];

type ProjectModalProps = {
  setLoading: (loading: boolean) => void;
};

const ProjectModal: React.FC<ProjectModalProps> = ({ setLoading }) => {
  //should be a mapping that for each proejct shows something like above comment

  const [openPanels, setPanels] = useState<boolean[]>(
    Projects.map(() => false)
  );

  const onClose = (index: number) => {
    //toggle the panel
    setPanels([
      ...openPanels.slice(0, index),
      !openPanels[index],
      ...openPanels.slice(index + 1),
    ]);
  };

  return (
    <div className="w-full flex-wrap flex pt-10 ">
      {Projects.map((project, index) => {
        return (
          <div
            key={project.Name}
            onClick={() => onClose(index)}
            className="w-full md:w-1/2 
            hover:text-black hover:font-bold
            pt-50 flex flex-wrap  text-center min-h-20 cursor-pointer hover:bg-blue-300 hover:shadow-lg transform hover:scale-100 transition-all duration-200 ease-in-out"
          >
            <div className=" relative w-full border-black border-2">
              <h1 className="w-full text-3xl font-bold">{project.Name}</h1>
              <div className="absolute right-10 top-10">
                {openPanels[index] ? (
                  <FaArrowUp size={20} />
                ) : (
                  <FaArrowDown size={20} />
                )}
              </div>
              <div className="w-full p-2 text-center flex-center ">
                {openPanels[index] ? (
                  <div className="w-full flex flex-wrap p-2 text-center justify-center">
                    <div className="p-2  text-center">
                      {project.Description}
                    </div>
                    <div className="w-full flex flex-wrap flex-col p-2 text-center">
                      {project.Links.map((link, index) => {
                        return (
                          <Link
                            href={link.URL}
                            //make lionk absolute path
                            key={index}
                          >
                            <button
                              className="p-5 m-5 text-center bg-blue-200 rounded  hover:shadow-lg transform hover:scale-110 
                              
                              hover:font-bold hover:border-4 hover:border-black
                              transition-all duration-200 ease-in-out"
                              onClick={() => setLoading(true)}
                              //re
                            >
                              {link.Title}
                            </button>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectModal;
