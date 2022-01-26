import "./styles.css";
import { useState, useEffect } from "react";
import Home from "./pages/home";
import Experiences from "./pages/Experiences";
import Projects from "./pages/Projects";

export default function App() {
  const [xRotation, setXRotation] = useState(0);
  const [yRotation, setYRotation] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scale, setScale] = useState(0);

  const handlerMouseMove = (e) => {
    const middle = {
      width: window.innerWidth / 2,
      height: window.innerHeight / 2,
    }
    setXRotation((e.pageX - middle.width) * 0.001)
    setYRotation((e.pageY - middle.height) * 0.001)
  }

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
    setScale(position / (window.innerHeight + 1))
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div onMouseMove={(e) => handlerMouseMove(e)}>
      <Home xRotation={xRotation} yRotation={yRotation} scale={scale} />
      <Experiences/>
      <Projects/>
    </div>
  );
}
