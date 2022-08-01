import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Navbar from "../components/navbar";
import Sidenav from "../components/sidenav";
import AboutMe from "../features/AboutMe";
import Contact from "../features/Contact";
import Landing from "../features/Landing";
import Projects, { Block } from "../features/Projects";
import ProjectsServices from "../features/Projects/services/database";
import { Navigation } from "../interfaces/interfaces";

const listNavigation: Navigation[] = [
  { url: "/#about-me", text: "About Me" },
  { url: "/#projects", text: "Projects" },
  { url: "/#contact", text: "Contact" },
];

interface Props {
  projects: Block[];
}

const Home: NextPage<Props> = ({ projects }) => {
  return (
    <div className=" bg-zinc-900">
      <Head>
        <title>Septa Alfauzan</title>
        <meta name="description" content="Septa Alfauzan's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidenav items={listNavigation} />
      <Navbar items={listNavigation} />
      <main>
        <Landing />
        <AboutMe />
        <Projects projects={projects} />
        <Contact />
        <></>
      </main>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const response = await ProjectsServices.getAll();
  const projects: Block[] = response.results.map(
    (result: any) => result.properties
  );
  return {
    props: {
      projects,
    },
    revalidate: 30,
  };
}
