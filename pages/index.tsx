import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
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
        <div className="w-full min-h-screen relative pt-[100px]" id="projects">
          <div className="px-8 md:px-80 flex flex-col gap-10">
            <h3 className="text-zinc-300 text-6xl font-bold text-center">
              Projects
            </h3>
            <p className="text-zinc-300 text-center">
              Click button bellow to see my projects.
            </p>
            <Link href={"/projects"}>
              <button className="bg-gradient-to-bl from-[#8052ffa1]  to-[#ff0095] text-white w-fit px-7 py-1 text-xl rounded-full mx-auto z-10">
                see more
              </button>
            </Link>
          </div>
          <div className="w-full h-1/2 absolute bottom-0 after:absolute after:w-full after:h-1/2 after:bg-gradient-to-t from-[#18181b] to-[#11122500] after:bottom-0 after:content-['.']">
            <Image
              src={"/assets/images/Projects Cards.png"}
              objectFit="contain"
              layout="fill"
              alt="projects card"
            />
          </div>
        </div>
        {/* <Projects projects={projects} /> */}
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
