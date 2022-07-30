import React from "react";
import { GrGithub, GrLinkedin, GrMail } from "react-icons/gr";

const SocialMedia: React.FC = () => {
  return (
    <div className="py-10 w-full flex flex-wrap gap-5 justify-center">
      <span className="w-full text-zinc-400 text-center px-8">
        Or you can connect with me through those social media in down below
      </span>
      <div className=" text-zinc-400 hover:text-zinc-300 duration-100 transition-all text-3xl ">
        <a
          href="https://github.com/septalfauzan"
          target={"_blank"}
          rel="noreferrer"
        >
          <GrGithub />
        </a>
      </div>
      <div className=" text-zinc-400 hover:text-zinc-300 duration-100 transition-all text-3xl ">
        <a
          href="https://www.linkedin.com/in/septa-alfauzan-a11a891b0?"
          target={"_blank"}
          rel="noreferrer"
        >
          <GrLinkedin />
        </a>
      </div>
      <div className=" text-zinc-400 hover:text-zinc-300 duration-100 transition-all text-3xl ">
        <a
          href="mailto:alfauzansepta@gmail.com"
          target={"_blank"}
          rel="noreferrer"
        >
          <GrMail />
        </a>
      </div>
    </div>
  );
};
export default SocialMedia;
