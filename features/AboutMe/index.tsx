import React from "react";
import Avatar from "./components/Avatar";
import Bio from "./components/Bio";
import Experiences from "./components/Experience";
import ProfilePic from "../../public/assets/images/Inkedprofile coursera edit.jpg";

const experiences = [
  {
    date: "Feb 2023 - Jul 2023",
    job: "Android Developer - Internship",
    company: "Bangkit Academy",
    address: "-",
    description: `
      \n Learn about native Android development using Kotlin.
      \n Build interactive UI using XML and Jetpack Compose.
      \n Create unit testing JUnit and UI testing using expresso. 
      `,
  },
  {
    date: "Jan 2019 - Mar 2019",
    job: "Web Content Writer - Internship",
    company: "Yoisoweb",
    address: "Kediri, East Java, Indonesia",
    description: `\n Responsible for writing content of client website. \n Learn about SEO, digital marketing, and web development using Wordpress.`,
  },
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
];

const AboutMe: React.FC = () => {
  return (
    <div
      id="about-me"
      className="text-zinc-300 w-full px-8 md:px-80 flex flex-col gap-5 items-center overflow-x-clip py-20"
    >
      <Avatar imageSrc={ProfilePic} />
      {/* short bio */}
      <Bio bio="&emsp;Hello, I'm Septa Alfauzan, passionate software engineering enthusiast, who currently studying computer science at State University of Malang. Have a strong background in Frontend Web Development, especially ReactJS and NextJS. Right now have an interest in Game and Mobile Development." />
      <Experiences experiences={experiences} />
    </div>
  );
};
export default AboutMe;
