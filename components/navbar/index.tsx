import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import React from "react";
import { GrGithub } from "react-icons/gr";
import { Navigation } from "../../interfaces/interfaces";

interface Props {
  items: Navigation[];
}
const Navbar: React.FC<Props> = ({ items }) => {
  const [minimize, setMinimize] = React.useState<boolean>(true);
  const [activeSection, setActiveSection] = React.useState<string>("");
  const router: NextRouter = useRouter();
  const currentSection: string = router.asPath;

  React.useEffect(() => {
    setActiveSection(currentSection);
  }, [currentSection]);

  return (
    <div
      className={`fixed z-30 w-full ${
        minimize ? "h-auto" : "h-full"
      } md:h-auto`}
    >
      <button
        onClick={() => setMinimize((prev) => !prev)}
        className="fixed top-8 right-8 text-white hover:text-pink-500 duration-150 transition-all text-3xl z-50 select-none md:hidden"
      >
        =
      </button>
      <ul
        className={`text-white flex md:flex-row  flex-col gap-3 items-center justify-center w-full px-10 py-4 md:text-lg text-2xl bg-zinc-900 bg-opacity-95 md:h-auto md:translate-y-0 md:opacity-100 h-screen ${
          minimize
            ? "-translate-y-full opacity-0 overscroll-y-contain"
            : "translate-y-0 opacity-100"
        } md:sticky absolute transition-all duration-700 z-20`}
      >
        {items.map((item: Navigation, i: number) => (
          <li
            onClick={() => setMinimize(true)}
            key={i}
            className={`hover:text-pink-500 hover:font-bold transition-all duration-150 cursor-pointer ${
              activeSection == item.url ? "text-pink-500 font-bold" : null
            }`}
          >
            <Link href={item.url}>
              <p>{item.text}</p>
            </Link>
          </li>
        ))}
        <li className="absolute right-24 cursor-pointer bottom-10 md:bottom-auto text-zinc-400">
          <Link href="https://github.com/SeptAlfauzan/septaalfauzan.xyz">
            <span className="flex flex-row items-center gap-3">
              Source code
              <GrGithub />
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
