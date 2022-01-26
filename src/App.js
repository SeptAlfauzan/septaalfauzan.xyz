import "./styles.css";
import { useState, useEffect } from "react";
import Home from "./pages/home";
import Experiences from "./pages/Experiences";
import Projects from "./pages/Projects";
import { DeviceChecker } from "./lib/DeviceChecker";
import { Movement } from "./lib/Movement";

export default function App() {
  const [xRotation, setXRotation] = useState(0);
  const [yRotation, setYRotation] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scale, setScale] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // const handlerMouseMove = (e) => {
  //   const middle = {
  //     width: window.innerWidth / 2,
  //     height: window.innerHeight / 2,
  //   }
  //   setXRotation((e.pageX - middle.width) * 0.001)
  //   setYRotation((e.pageY - middle.height) * 0.001)
  // }
  const handlerMouseMove = (e) => {
    const rotation = new Movement().getRotation(e)
    setXRotation(rotation.xAxis)
    setYRotation(rotation.yAxis)
  }

  // const handleScroll = () => {
  //   const position = window.pageYOffset;
  //   setScrollPosition(position);
  //   setScale(position / (window.innerHeight + 1))
  // };
  const handleScroll = () => {
    setScrollPosition(Movement.getScrollPos());
    setScale(Movement.getScale())
  };

  useEffect(() => {
    console.log(Movement.getScale())

    setIsMobile(DeviceChecker.isMobile())
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div onMouseMove={(e) => handlerMouseMove(e)} className="w-full flex flex-col" >
      <Home isMobile={isMobile} xRotation={xRotation} yRotation={yRotation} scale={scale} />
      <Experiences/>
      <Projects/>
    </div>
  );
}
