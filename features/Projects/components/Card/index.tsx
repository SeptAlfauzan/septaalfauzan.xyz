import React from "react";
import { FastAverageColor } from "fast-average-color";
import Image from "next/image";
import { FiGithub } from "react-icons/fi";
import {
  CreatedTimePropertyItemObjectResponse,
  FilesPropertyItemObjectResponse,
  RichTextPropertyItemObjectResponse,
  TitlePropertyItemObjectResponse,
  UrlPropertyItemObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import Link from "next/link";

interface Block {
  Name: TitlePropertyItemObjectResponse;
  Thumbnail: FilesPropertyItemObjectResponse;
  Description: RichTextPropertyItemObjectResponse;
  Github: UrlPropertyItemObjectResponse;
  Production: UrlPropertyItemObjectResponse;
  Download: UrlPropertyItemObjectResponse;
  Created: CreatedTimePropertyItemObjectResponse;
}

interface Props {
  item: Block | null;
  imageUrl: string;
  alt: string;
}

const Card: React.FC<Props> = ({ item, imageUrl, alt }) => {
  const imageRef = React.useRef<HTMLDivElement>(null);
  const [gradient, setGradient] = React.useState<string>();

  const handleGradient = () => {
    if (imageRef.current) {
      const fac = new FastAverageColor();
      const color = fac.getColor(imageRef.current.querySelector("img"));
      const dominant = fac.getColor(imageRef.current.querySelector("img"), {
        algorithm: "dominant",
      });
      const simple = fac.getColor(imageRef.current.querySelector("img"), {
        algorithm: "simple",
      });
      const sqrt = fac.getColor(imageRef.current.querySelector("img"), {
        algorithm: "sqrt",
      });
      imageRef.current.classList.add(`from-[${sqrt.hex}]`);
      imageRef.current.classList.add(`to-[${dominant.hex}]`);
      setGradient(`from-[${sqrt.hex}] to-[${dominant.hex}]`);
    }
  };

  return (
    <div className="w-full md:w-1/2 p-3">
      <div
        ref={imageRef}
        className={`w-full flex flex-wrap rounded-lg px-3 py-3 relative bg-opacity-0 bg-gradient-to-bl from-[#8052ffa1] via-[#4150fa4f] to-[#111225]  md:h-40  h-80`}
      >
        <div className=" md:w-32 w-full md:h-full h-44 relative rounded overflow-clip">
          <Image
            alt={alt}
            onLoadingComplete={handleGradient}
            src={
              item?.Thumbnail && item.Thumbnail.files[0]?.type == "file"
                ? item.Thumbnail.files[0]?.file.url
                : imageUrl
            }
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col gap-3  grow">
          <h3 className="text-xl text-white ml-5">lorem</h3>
          <h3 className="text-sm text-zinc-500 ml-5">lorem</h3>
          <div className="flex gap-3 mt-auto ml-auto ">
            {item?.Github && item.Github.url && (
              <Link href={item.Github.url}>
                <a
                  className="px-3 py-2 rounded-full bg-slate-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub />
                </a>
              </Link>
            )}
            {item?.Production && item?.Production.url && (
              <Link href={item.Production.url} target="_blank">
                <span className="px-3 py-2 flex items-center rounded-full bg-purple-600 text-white group">
                  <small>Production</small>
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
