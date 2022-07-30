import React from "react";
import Avatar from "./components/Avatar";
import Bio from "./components/Bio";
import Experiences from "./components/Experience";

const experiences = [
  {
    date: "2020-20-20",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ratione magni nulla sit totam sequi eos blanditiis, accusantium tempore vitae velit harum fuga iusto beatae non aliquid nostrum numquam quasi!",
  },
  {
    date: "2020-20-20",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ratione magni nulla sit totam sequi eos blanditiis, accusantium tempore vitae velit harum fuga iusto beatae non aliquid nostrum numquam quasi!",
  },
];

const AboutMe: React.FC = () => {
  return (
    <div
      id="about-me"
      className="text-zinc-300 w-full px-8 md:px-80 flex flex-col gap-5 items-center overflow-x-clip py-20"
    >
      <Avatar imageSrc="https://avatars.githubusercontent.com/u/48860168?s=400&u=2508aff8532a41e614d4e10277dae5cb7cd1831f&v=4" />
      {/* short bio */}
      <Bio bio="Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ratione magni nulla sit totam sequi eos blanditiis, accusantium tempore vitae velit harum fuga iusto beatae non aliquid nostrum numquam quasi!" />
      <Experiences experiences={experiences} />
    </div>
  );
};
export default AboutMe;
