import React from "react";
import { FastAverageColor } from "fast-average-color";
import Image from "next/image";
import { FiGithub } from "react-icons/fi";
import {
  CreatedTimePropertyItemObjectResponse,
  DatabaseObjectResponse,
  FilesPropertyItemObjectResponse,
  ParagraphBlockObjectResponse,
  RichTextItemResponse,
  RichTextPropertyItemObjectResponse,
  TitlePropertyItemObjectResponse,
  UrlPropertyItemObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import Link from "next/link";

interface Block {
  Name: DatabaseObjectResponse;
  Thumbnail: FilesPropertyItemObjectResponse;
  Description: any;
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
  console.log(
    item?.Description.rich_text[0]
      ? item.Description.rich_text[0].plain_text
      : ""
  );
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
    <div className="w-full p-3">
      <div
        ref={imageRef}
        className={`group hover:scale-105 duration-100 w-full flex flex-row rounded-lg px-3 py-3 relative bg-opacity-0 border border-zinc-600 min-h-[200px]`}
      >
        <div className="md:w-[40%] w-full h-44 relative rounded overflow-clip">
          <Image
            alt={alt}
            onLoadingComplete={handleGradient}
            className="grayscale group-hover:grayscale-0"
            src={
              item?.Thumbnail && item.Thumbnail.files[0]?.type == "file"
                ? item.Thumbnail.files[0]?.file.url
                : imageUrl
            }
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col gap-3 md:w-[60%]">
          <h3 className="text-xl text-white ml-5">
            {item?.Name ? item.Name.title[0].plain_text : ""}
          </h3>
          <h3 className="text-sm text-zinc-500 ml-5">
            {item?.Description.rich_text[0]
              ? item.Description.rich_text[0].plain_text
              : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore amet unde, obcaecati exercitationem soluta esse, animi porro asperiores inventore culpa ipsam fuga pariatur voluptatum deleniti ducimus aliquam officiis mollitia hic!"}
          </h3>
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
              <Link href={item.Production.url}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 flex items-center rounded-full bg-purple-600 text-white group hover:cursor-pointer"
                >
                  <small>Production</small>
                </a>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
