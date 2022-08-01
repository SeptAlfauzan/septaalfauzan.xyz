import React from "react";
import Avatar from "./components/Avatar";
import Bio from "./components/Bio";
import Experiences from "./components/Experience";

const experiences = [
  {
    date: "Nov 2018 - Jan 2019",
    job: "Fullstack Web Developer - Internship",
    company: "CV. DJunsoft",
    address: "Tulungagung, East Java, Indonesia",
    description: `
      \n Learn about responsive design in web development.
      \n Learn how to make an interactive website using javascript.
      \n Learn and develop full stack web apps using PHP, especially CodeIgniter framework, CSS, JavaScript, and MySQL. 
      `,
  },
  {
    date: "Jan 2019 - Mar 2019",
    job: "Web Content Writer - Internship",
    company: "Yoisoweb",
    address: "Kediri, East Java, Indonesia",
    description: `\n Responsible for writing content of client website. \n Learn about SEO, digital marketing, and web development using Wordpress.`,
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
      <Bio bio="&emsp;Septa is a college student from Indonesia with passion in frontend development. He start doing programming since highschool, he spend most of his freetime to build side projects. Although he already knows most of stuff needed to build beutifull website, he still eager to learn new technologies and current hot topics in programming field in order to level up his skills. Currently he pursuing career in frontend development." />
      <Experiences experiences={experiences} />
    </div>
  );
};
export default AboutMe;
