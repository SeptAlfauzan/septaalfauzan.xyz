import Spline, { SPEObject, SplineEvent } from "@splinetool/react-spline";
import { Application } from "@splinetool/runtime";
import React from "react";

const Landing: React.FC = () => {
  const BlobRef = React.useRef(null);

  const onLoad = (spline: Application) => {
    const obj: SPEObject | undefined = spline.findObjectById(
      "0933f3b1-e19b-42dc-a05f-4b9dd8e9bead"
    );

    obj ? scaleUp(obj, 2) : null;
  };

  const scaleUp = (obj: SPEObject, num: number) => {
    obj.scale.x = num;
    obj.scale.y = num;
    obj.scale.z = num;
  };

  return (
    <div className="w-full h-screen relative flex content-center items-center">
      <div className="absolute left-8 md:left-1/3 right-8 md:right-1/3 md:text-center p-10">
        <h2 className="font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-tr from-pink-500 to-yellow-400 animate-pulse w-full">
          Hello there!
        </h2>
      </div>
      <div className="bottom-20 md:left-1/4 md:right-1/4 absolute text-white rounded-md backdrop-blur-lg backdrop-opacity-10 bg-white/10 px-10 py-4 left-8 right-8 text-center">
        <p>I&apos;m an Informatics Engineering student from Indonesia.</p>
        <br />
        <div className="flex justify-center">
          <small className="text-zinc-400 mx-auto">
            scroll for more content
          </small>
        </div>
      </div>
      <Spline
        ref={BlobRef}
        onLoad={onLoad}
        scene="https://prod.spline.design/uyxLWFsBrBaflr2h/scene.splinecode"
      />
    </div>
  );
};

export default Landing;
