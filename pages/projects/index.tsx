import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navbar from "../../components/navbar";
import Sidenav from "../../components/sidenav";
import Projects, { Block } from "../../features/Projects";
import ProjectsServices from "../../features/Projects/services/database";
import { Navigation } from "../../interfaces/interfaces";

const listNavigation: Navigation[] = [
  { url: "/#about-me", text: "About Me" },
  { url: "/#projects", text: "Projects" },
  { url: "/#contact", text: "Contact" },
];

interface Props {
  projectsData: Block[];
}

const ProjectsPage: NextPage<Props> = ({ projectsData }) => {
  return (
    <div className=" bg-zinc-900">
      <Head>
        <title>Septa Alfauzan | Projects</title>
        <meta
          name="Septa's Projects"
          content="Septa Alfauzan's personal website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidenav items={listNavigation} />
      <Navbar items={listNavigation} />
      <main className="bg-zinc-900 min-h-screen">
        <Projects projects={projectsData} />
      </main>
    </div>
  );
};

export default ProjectsPage;

export async function getStaticProps() {
  const response = await ProjectsServices.getAll();
  const projects: Block[] = response.results.map(
    (result: any) => result.properties
  );
  return {
    props: {
      projectsData: projects,
    },
    revalidate: 10,
  };
}
