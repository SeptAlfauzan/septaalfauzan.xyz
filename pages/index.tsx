import Spline, { SPEObject, SplineEvent } from "@splinetool/react-spline";
import { Application } from "@splinetool/runtime";
import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Navbar from "../components/navbar";
import Sidenav from "../components/sidenav";
import AboutMe from "../features/AboutMe";
import Contact from "../features/Contact";
import Projects, { Block } from "../features/Projects";
import ProjectsServices from "../features/Projects/services/database";
import { Navigation } from "../interfaces/interfaces";

const listNavigation: Navigation[] = [
  { url: "/", text: "Home" },
  { url: "/#about-me", text: "About Me" },
  { url: "/#projects", text: "Projects" },
  { url: "/#contact", text: "Contact" },
];

interface Props {
  projects: Block[];
}

const Home: NextPage<Props> = ({ projects }) => {
  const BlobRef = React.useRef(null);

  const onLoad = (spline: Application) => {
    const obj: SPEObject | undefined = spline.findObjectById(
      "0933f3b1-e19b-42dc-a05f-4b9dd8e9bead"
    );

    obj ? scaleUp(obj, 2.3) : null;
  };

  const scaleUp = (obj: SPEObject, num: number) => {
    obj.scale.x = num;
    obj.scale.y = num;
    obj.scale.z = num;
  };

  return (
    <div className=" bg-zinc-900">
      <Head>
        <title>Septa Alfauzan</title>
        <meta name="description" content="Septa Alfauzan's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidenav items={listNavigation} />
      <main>
        <Navbar items={listNavigation} />
        <div className="w-full h-screen relative flex content-center items-center">
          <div className="absolute left-8 md:left-1/3 right-8 md:right-1/3 md:text-center p-10">
            <h2 className="font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-tr from-pink-500 to-yellow-400 animate-pulse w-full">
              Hello there!
            </h2>
          </div>
          <div className="bottom-20 md:left-1/4 md:right-1/4 absolute text-white rounded-md backdrop-blur-lg backdrop-opacity-10 bg-white/10 px-10 py-4 left-8 right-8">
            <p>
              I&apos;m an Informatics Engineering student from Indonesia,
              pursuing in frontend developer career.
            </p>
            <br />
            <div className="flex justify-center">
              <small className="text-zinc-400 mx-auto">
                scroll for more content
              </small>
            </div>
          </div>
          <Spline
            ref={BlobRef}
            onLoad={onLoad}
            scene="https://prod.spline.design/uyxLWFsBrBaflr2h/scene.splinecode"
          />
        </div>
        <AboutMe />
        <Projects projects={projects} />
        <Contact />
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
