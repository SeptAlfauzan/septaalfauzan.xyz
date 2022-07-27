import React from "react";
import Card from "./components/Card";

import {
  CreatedTimePropertyItemObjectResponse,
  FilesPropertyItemObjectResponse,
  RichTextPropertyItemObjectResponse,
  TitlePropertyItemObjectResponse,
  UrlPropertyItemObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import axios from "axios";

interface Block {
  Name: TitlePropertyItemObjectResponse;
  Thumbnail: FilesPropertyItemObjectResponse;
  Description: RichTextPropertyItemObjectResponse;
  Github: UrlPropertyItemObjectResponse;
  Production: UrlPropertyItemObjectResponse;
  Download: UrlPropertyItemObjectResponse;
  Created: CreatedTimePropertyItemObjectResponse;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = React.useState<Block[]>();

  const getProjects = async () => await axios.get("/api/projects");

  React.useEffect(() => {
    const init = async () => {
      const response = await (await getProjects()).data;
      setProjects(response);
    };
    init();
  }, []);

  return (
    <div id="projects" className="px-8 md:px-80 relative py-36">
      <h3 className="absolute top-20 text-zinc-700 md:text-7xl text-5xl uppercase font-bold tracking-[.25em]">
        Projects
      </h3>
      <div className="flex flex-wrap">
        {projects?.map((project: Block, index: number) => (
          <Card
            key={index}
            item={project}
            alt="aaa"
            imageUrl="https://images.unsplash.com/photo-1644982647869-e1337f992828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80"
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
