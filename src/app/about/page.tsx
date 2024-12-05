'use client';
import { useState } from 'react';
import '../styles/globals.css';
import Link from 'next/link';
// @ts-nocheck

//import close icon from react-icons/fa
import { FaArrowUp, FaTimes } from 'react-icons/fa';

const BackendSkils: string[] = [
  'Nodejs',
  'Express',
  'Go',
  'Python',
  '.NET',
  'Spring Boot',
  'C#',
  'ASP.NET',
  'REST',
  'gRPC',
  'SQL',
  'MongoDB',
  'PostgreSQL',
  'Cassandra',
  'Redis',
  'Kafka',
  'RabbitMQ',
];

const backendSkillsAbout: { title: string; description: string }[] = [
  {
    title: 'Nodejs',
    description: `I have used Nodejs to build RESTful APIs and frontend builds. I&apos;ve ualso used node.js to build applications
    for SFU Media Rooms (Selective Forwarding Unit for WebRTC) and Websocket Applications for live update.`,
  },
  {
    title: 'Python',
    description: `I have used python for small small data-science scripts using numpy, pandas, pytorch and xgboost, and have also used python
    with AWS Lambda and AWS SAM to build serverless applications.`,
  },
  {
    title: 'Go',
    description: `I have used to Go to build some web servers as well as some small projects such as a Vault Secrets Engine
    and a terraform plugin.`,
  },
  {
    title: '.NET',
    description: ` I am never to ASP.NET, but am enjoying learning how to use the ecosystem and the C# Language / ASP.NET, and becoming 
    more familiar with it.`,
  },
  {
    title: 'Spring Boot',
    description: `I have used Spring Boot to build a RESTful API and had a headache with creating a live chat application, but I integrated
    my backend with various technologies including STOMP, Kafka, Cacheing with Redis, And Multiple Databases.`,
  },
];

const DevOpsSkills: string[] = [
  'Docker',
  'Kubernetes',
  'OpenEBS',
  'Helm',
  'Terraform',
  'Ansible',
  'Jenkins',
  'Gitlab',
  'Github',
  'Git',
  'CI/CD',
  'Prometheus',
  'Grafana',
  'Keycloak',
  'AWS',
  'Packer',
];

const DevOpsSkillsAbout: { title: string; description: string }[] = [
  {
    title: 'Kubernetes',
    description: `Practiced Using kubeadm on a local computer to spin up a Kubernetes Cluster
    On Virtual Machines, and deployed test applications to it. I studied things like Container Attached Storage,
    How Different CNI plugins work, troubleshooting applications, and other aspects of Kubernetes.`,
  },
  {
    title: 'Docker',
    description: `I have used Docker for routine development and some small deployments, as well as included it
    in some CI/CD pipelines to build and deploy applications.`,
  },
  {
    title: 'CI/CD',
    description: `I have run a CI/CD pipeline on Jenkins and Github Actions to deploy applications to Virtual Machines.`,
  },
  {
    title: 'AWS',
    description: `I have used AWS Serverless using AWS SAM with S3, Lambda, DynamoDB, Event Triggers, and API Gateway, 
     and Server solutions for some small projects in the past.`,
  },
  {
    title: 'Terraform',
    description: `I have used Terraform to deploy infrastructure to AWS in test CI/CD pipelines, as well
    as developed my own experimental terraform plugin for my Unicode Application.`,
  },
  {
    title: 'Ansible',
    description: `I have used Ansible to deploy and configure applications on Docker Containers in a local environment.`,
  },
  {
    title: 'Jenkins',
    description: `I have used Jenkins to run CI/CD pipelines to deploy applications to Virtual Machines, using plugins
    to manage credentials (AWS, Docker, etc.), and to run tests and build steps with Packer and Terraform.`,
  },
  {
    title: 'Git',
    description: `I have used Git for version control and have experience with Gitlab and Github.`,
  },
  {
    title: 'Prometheus',
    description: `I have set up a pipeline to monitor my computer using Prometheus and Grafana, and have used prometheus
    to export custom metrics from my applications. I have also used Grafana to visualize these metrics configured with keycloak
    login .`,
  },
  {
    title: 'Grafana',
    description:
      'I have used Grafana to visualize metrics from Prometheus, and have configured it to use keycloak OIDC login.',
  },
  {
    title: 'Packer',
    description: `I have used Packer to create custom images for Virtual Machines 
    to deploy an application to a virtual machine`,
  },
  {
    title: 'Helm',
    description: `I have used Helm to deploy applications to Kubernetes.`,
  },
  {
    title: 'OpenEBS',
    description: `I have used OpenEBS and CAS on my local kubernetes cluster setup for testing purposes.`,
  },
  {
    title: 'Gitlab',
    description:
      'I have administered a Gitlab Server and dealt with small ammounts of general maintenance.',
  },
  {
    title: 'Keycloak',
    description:
      'I have used and managed Keycloak to secure applications with OIDC.',
  },
  {
    title: 'Github',
    description:
      'I have used Github as my primary source control for my personal projects and a few small group projects.',
  },
];

const SysAdminSkills: string[] = [
  'Linux',
  'FreeIPA',
  'LDAP',
  'Kerberos',
  'Samba',
  'NFS',
  'SAMBA',
  'GRUB',
  'KVM',
  'QEMU',
  'VirtualBox',
  'Vagrant',
  'Networking',
];

const FrontendSkills: string[] = [
  'React',
  'Redux',
  'TailwindCSS',
  'Flutter',
  'Dart',
  'NextJS',
  'HTML',
  'CSS',
];

export default function Home() {
  const [openDescr, setOpenDescr] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);

  const [selectedDevOpsSkill, setSelectedDevOpsSkill] = useState<string>('');
  const [selectedBackendSkill, setSelectedBackendSkill] = useState<string>('');
  const [selectedSysAdminSkill, setSelectedSysAdminSkill] =
    useState<string>('');
  const [selectedFrontendSkill, setSelectedFrontendSkill] =
    useState<string>('');

  return (
    <div className="w-full flex flex-wrap justify-center bg-gradient-to-r from-gray-400 to-pink-300 min-h-screen min-w-screen">
      <div className="fixed top-0 left-0 p-4">
        <Link
          href="/"
          className="text-blue-900 font-bold text-bold hover:underline text-3xl"
        >
          ← Home
        </Link>
      </div>

      <div className="w-full  p-4 text-center">
        <h1 className="w-full text-5xl font-bold text-center"> About Me </h1>
      </div>

      <div className=" w-1/2 md:w-1/3 text-center">
        <p>
          I am an Aspiring Software Developer and Developer Operations Engineer
          whos interests span Backend Development, Database Management, DevOps,
          and System Administration. I have broad experience using relevant
          technologies and tools in a home Lab environment. I also, albeit being
          less focued on it, have experience in Frontend Development, and have
          used Flutter in the past to build a mobile frontend, and React
          recently to build web applications.
        </p>
      </div>

      <div className="w-full  p-4 text-center">
        <h1 className="w-full text-3xl font-bold text-center"> Skills </h1>
        {}
      </div>

      <div className="w-full  pt-4 text-center">
        <h1 className="w-full text-2xl font-bold"> DevOps </h1>
        <div
          className="w-full flex flex-wrap justify-center"
          title="Hover Over Div"
        >
          {DevOpsSkills.map((skill) => (
            <div
              onClick={() =>
                setSelectedDevOpsSkill(
                  skill != selectedDevOpsSkill ? skill : ''
                )
              }
              key={skill}
            >
              <p
                className="p-2  hover:text-bold hover:text-xl hover:bg-gray-200"
                title="Hover Over Text"
              >
                {skill} {skill === selectedDevOpsSkill ? '▲' : '▼'}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full  p-4 text-center">
        {DevOpsSkillsAbout.filter(
          (c, i) => c.title === selectedDevOpsSkill
        ).map((skill, i) => {
          return (
            <div
              className="w-full flex flex-wrap justify-center h-min-24"
              key={i}
            >
              <div className="relative w-full flex flex-wrap justify-center">
                <h1 className="relative w-1/3 md:w-1/5 text-lg font-bold items-center">
                  {' '}
                  {skill.title}{' '}
                  <FaArrowUp
                    size={20}
                    onClick={() => setSelectedDevOpsSkill('')}
                    className="absolute w-1/3 md:w-1/5 text-lg font-bold 
                  hover:text-bold hover:text-xl 
                  hover:text-white
                  top-0 right-0                  "
                  />
                </h1>
              </div>
              <div className="w-1-2 md:w-1/3 ">
                <p>{skill.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/*<div
        className="w-full flex flex-wrap text-center justify-center"
        onClick={() => setOpenDescr([!openDescr[0], ...openDescr.slice(1)])}
      >
        <h1 className="w-full"> More {openDescr[0] ? '▲' : '▼'} </h1>
        {openDescr[0] && (
          <div className="w-1/2 md:w-1/3 text-center ">
            <p>
              My Experience With Developer operations includes Passing the CKA
              (Certified Kubernetes Administrator) and CKAD (Certified
              Kubernetes Application Developer) exams, spinning up a Kubernetes
              Cluster using Kubeadm on virtual machines, and deploying test
              applications to it, using Docker for routine development and some
              small deployments, running a CI/CD pipeline on Jenkins to deploy
              applications to AWS, and using AWS Serverless and Server solutions
              for some small projects in the past.
            </p>
          </div>
        )}
              </div>*/}

      <div className="w-full  p-4 text-center">
        <h1 className="w-full text-2xl font-bold"> Backend Development </h1>
        <div className="w-full flex flex-wrap justify-center">
          {BackendSkils.map((skill) => (
            <p className="p-2" key={skill}>
              {skill}
            </p>
          ))}
        </div>
      </div>

      <div className="w-full  p-4 text-center">
        <h1 className="w-full text-2xl font-bold"> Systems Administration </h1>
        <div className="w-full flex flex-wrap justify-center">
          {SysAdminSkills.map((skill) => (
            <p className="p-2" key={skill}>
              {skill}
            </p>
          ))}
        </div>
      </div>

      <div className="w-full  p-4 text-center">
        <h1 className="w-full text-2xl font-bold"> Frontend Development </h1>
        <div className="w-full flex flex-wrap justify-center">
          {FrontendSkills.map((skill) => (
            <p className="p-2" key={skill}>
              {skill}
            </p>
          ))}
        </div>
      </div>

      {
        //Interests
      }

      <div className="w-full p-4 text-center">
        <h1 className="w-full text-4xl font-bold "> Interests</h1>
        <div className="w-full flex flex-wrap flex-col justify-center items-center pt-10">
          <p className="w-full p-4 text-lg font-bold text-center">
            I am interested in how objects are stored, represented, transmitted,
            and secured across networks, databases, and web applications. My
            favorite subject in school was Databases, where we learned about how
            Databases deal with Concurrency, Transactional Integrity, Index Data
            Structures For Queries For varying query manners, such as
            Geospatial, General, Full-Text Search, and Approximate Nearest
            Neighbor Searches. For Personal Projects I have used Databases for
            each of these purposes and have spent a lot of effort to understand
            best case use scenarios, tradeoffs, and general manners of how each
            type of database engine deals with certain queries.
          </p>
          <p className="w-full text-lg font-bold text-center p-10 m-8 ">
            I also found network interesting, and in particular learning about
            BGP was transformative to my idea of what truly makes a network and
            a networking device. I have also ventured into experimentations in
            VM / Container Setups to understand how different drivers deal with
            traffic routing. For example, how does the default Docker Bridge
            Engine route traffic to your containers? This would be based on the
            fact that Docker spins up a bridge network on your host machine,
            spins up a network namespace for each container, and then uses a
            veth peer to set up a connection between the bridge network and the
            containers network namespace, and adds routes to your host machine
            to the bridge. Then when you move to networking drivers that
            implement the CNI specification, and needs to manage routes accross
            multiple nodes, you deal with an extended problem set.
          </p>
        </div>
      </div>
    </div>
  );
}
