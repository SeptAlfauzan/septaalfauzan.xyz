import Image from "next/image";
import React from "react";

interface Props {
  imageSrc: string;
}
const Avatar: React.FC<Props> = ({ imageSrc }) => {
  return (
    <div className="relative w-full flex justify-center group">
      <div className="w-32 h-32 rounded-full relative bg-zinc-600 z-20 overflow-clip md:grayscale grayscale-0 group-hover:grayscale-0 transition-all duration-500">
        <Image alt="avatar" src={imageSrc} layout="fill" objectFit="contain" />
      </div>
      <h3 className="absolute top-2 text-6xl uppercase font-extrabold text-zinc-800 group-hover:tracking-[.25em] group-hover:text-zinc-200 group-hover:text-opacity-70 group-hover:z-20 transition-all duration-500">
        Septa Alfauzan
      </h3>
    </div>
  );
};

export default Avatar;
