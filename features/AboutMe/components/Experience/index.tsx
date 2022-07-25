import React from "react";

interface Experience {
  date: string;
  description: string;
}
interface Props {
  experiences: Experience[];
}
const Experiences: React.FC<Props> = ({ experiences }) => {
  return (
    <ul className=" gap-5 px-8 text-zinc-300">
      {experiences.map((experience: Experience, i: number) => (
        <li key={i} className="mb-8 relative">
          <div
            className={`absolute -left-5 top-4 -bottom-12 ${
              i + 1 < experiences.length ? "border-l-2 border-zinc-500" : null
            }`}
          />
          <div className="w-3 h-3 rounded-full bg-zinc-500 absolute -left-6 top-2" />
          <p className="font-bold mb-2">{experience.date}</p>
          <p>{experience.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experiences;
