import React from "react";

interface Experience {
  date: string;
  job: string;
  company: string;
  address: string;
  description: string;
}
interface Props {
  experiences: Experience[];
}
const Experiences: React.FC<Props> = ({ experiences }) => {
  return (
    <div className="text-zinc-300 px-8">
      <h3 className="font-bold text-lg mb-3">Experiences</h3>
      <ul className=" gap-5 ">
        {experiences.map((experience: Experience, i: number) => (
          <li key={i} className="mb-8 relative">
            <div
              className={`absolute -left-5 top-4 -bottom-12 ${
                i + 1 < experiences.length ? "border-l-2 border-zinc-500" : null
              }`}
            />
            <div className="w-3 h-3 rounded-full bg-zinc-500 absolute -left-6 top-2" />
            <p className="font-bold mb-2">{experience.date}</p>
            <p>{experience.job}</p>
            <p>{experience.company}</p>
            <p>{experience.address}</p>
            <div>{experience.description}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experiences;
