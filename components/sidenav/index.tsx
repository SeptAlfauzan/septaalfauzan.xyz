import Link from "next/link";
import { NextRouter, useRouter } from "next/router";
import React from "react";
import { Navigation } from "../../interfaces/interfaces";

interface Props {
  items: Navigation[];
}
const Sidenav: React.FC<Props> = ({ items }) => {
  const [activeSection, setActiveSection] = React.useState<string>("");
  const router: NextRouter = useRouter();
  const currentSection: string = router.asPath;

  React.useEffect(() => {
    setActiveSection(currentSection);
  }, [currentSection]);

  return (
    <ul
      id="sidenav"
      className="md:flex hidden border-r-2 text-right flex-col gap-24 ml-auto right-24 text-white px-3 top-44  w-80 fixed z-20"
    >
      {items.map((item: Navigation, i: number) => (
        <li
          key={i}
          className={`group hover:text-pink-500 hover:font-bold duration-150 relative ${
            activeSection === item.url ? "text-pink-500 font-bold" : null
          }`}
        >
          <Link href={item.url}>{item.text}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Sidenav;
