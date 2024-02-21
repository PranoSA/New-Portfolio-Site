"use client";
import { useState } from "react";
import "../styles/globals.css";
// @ts-nocheck

const BackendSkils: string[] = [
  "Nodejs",
  "Express",
  "Python",
  ".NET",
  "C#",
  "ASP.NET",
  "REST",
  "gRPC",
  "SQL",
  "MongoDB",
  "PostgreSQL",
  "Cassandra",
  "Redis",
  "Kafka",
  "RabbitMQ",
];

const DevOpsSkills: string[] = [
  "Docker",
  "Kubernetes",
  "OpenEBS",
  "Helm",
  "Terraform",
  "Ansible",
  "Jenkins",
  "Gitlab",
  "Github",
  "Git",
  "CI/CD",
  "Prometheus",
  "Grafana",
  "Packer",
];

const DevOpsSkillsAbout: { title: string; description: string }[] = [
  {
    title: "Kubernetes",
    description: `Practiced Using kubeadm on a local computer to spin up a Kubernetes Cluster
    On Virtual Machines, and deployed test applications to it. I studied things like Container Attached Storage,
    How Different CNI plugins work, troubleshooting applications, and other aspects of Kubernetes.`,
  },
  {
    title: "Docker",
    description: `I have used Docker for routine development and some small deployments, as well as included it
    in some CI/CD pipelines to build and deploy applications.`,
  },
  {
    title: "CI/CD",
    description: `I have run a CI/CD pipeline on Jenkins and Github Actions to deploy applications to Virtual Machines.`,
  },
  {
    title: "AWS",
    description: `I have used AWS Serverless using AWS SAM with S3, Lambda, DynamoDB, Event Triggers, and API Gateway, 
     and Server solutions for some small projects in the past.`,
  },
  {
    title: "Terraform",
    description: `I have used Terraform to deploy infrastructure to AWS in test CI/CD pipelines, as well
    as developed my own experimental terraform plugin for my Unicode Application.`,
  },
  {
    title: "Ansible",
    description: `I have used Ansible to deploy and configure applications on Docker Containers in a local environment.`,
  },
  {
    title: "Jenkins",
    description: `I have used Jenkins to run CI/CD pipelines to deploy applications to Virtual Machines, using plugins
    to manage credentials (AWS, Docker, etc.), and to run tests and build steps with Packer and Terraform.`,
  },
  {
    title: "Git",
    description: `I have used Git for version control and have experience with Gitlab and Github.`,
  },
  {
    title: "Monitoring",
    description: `I have set up a pipeline to monitor my computer using Prometheus and Grafana, and have used prometheus
    to export custom metrics from my applications. I have also used Grafana to visualize these metrics configured with keycloak
    login .`,
  },
  {
    title: "Packer",
    description: `I have used Packer to create custom images for Virtual Machines 
    to deploy an application to a virtual machine`,
  },
  {
    title: "Helm",
    description: `I have used Helm to deploy applications to Kubernetes.`,
  },
  {
    title: "OpenEBS",
    description: `I have used OpenEBS and CAS on my local kubernetes cluster setup for testing purposes.`,
  },
];

const SysAdminSkills: string[] = [
  "Linux",
  "FreeIPA",
  "LDAP",
  "Kerberos",
  "Samba",
  "NFS",
  "SAMBA",
  "GRUB",
  "KVM",
  "QEMU",
  "VirtualBox",
  "Vagrant",
  "Networking",
];

const FrontendSkills: string[] = [
  "React",
  "Redux",
  "TailwindCSS",
  "Flutter",
  "Dart",
  "NextJS",
  "HTML",
  "CSS",
];

export default function Home() {
  const [openDescr, setOpenDescr] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);

  const [selectedDevOpsSkill, setSelectedDevOpsSkill] = useState<string>("");

  return (
    <div className="w-full flex flex-wrap justify-center">
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
            <div onClick={() => setSelectedDevOpsSkill(skill)}>
              <p className="p-2" title="Hover Over Text">
                {skill}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full  p-4 text-center">
        {DevOpsSkillsAbout.filter((c) => c.title === selectedDevOpsSkill).map(
          (skill) => {
            return (
              <div className="w-full flex flex-wrap justify-center h-24">
                <div className="w-full flex flex-wrap justify-center">
                  <h1 className="w-1/3 md:w-1/5 text-lg font-bold items-center">
                    {" "}
                    {skill.title}{" "}
                  </h1>
                  <button
                    className="font-bold text-xl"
                    onClick={() => setSelectedDevOpsSkill("")}
                  >
                    -
                  </button>
                </div>
                <div className="w-1-2 md:w-1/3 ">
                  <p>{skill.description}</p>
                </div>
              </div>
            );
          }
        )}
      </div>

      <div
        className="w-full flex flex-wrap text-center justify-center"
        onClick={() => setOpenDescr([!openDescr[0], ...openDescr.slice(1)])}
      >
        <h1 className="w-full"> More {openDescr[0] ? "▲" : "▼"} </h1>
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
      </div>

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
            <p className="p-2">{skill}</p>
          ))}
        </div>
      </div>

      <div className="w-full  p-4 text-center">
        <h1 className="w-full text-2xl font-bold"> Frontend Development </h1>
        <div className="w-full flex flex-wrap justify-center">
          {FrontendSkills.map((skill) => (
            <p className="p-2">{skill}</p>
          ))}
        </div>
      </div>

      {
        //Interests
      }

      <div className="w-full p-4 text-center">
        <h1 className="w-full text-4xl font-bold "> Interests</h1>
        <div className="w-full flex flex-wrap justify-center">
          <h2 className="w-full text-lg font-bold"></h2>
        </div>
      </div>
    </div>
  );
}
