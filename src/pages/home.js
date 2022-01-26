import React from "react";
import Background3D from "../components/Background3D";

const Home = ({ xRotation, yRotation, scale }) => {


    return (
        <>
            <Background3D yRotation={yRotation} xRotation={xRotation} scale={scale} />
            <div className="h-screen w-full flex justify-center" style={{ backgroundColor: 'black' }}>
                <div className="flex items-center px-7 h-full absolute">
                    <div className="">
                        <h3 className="text-5xl md:text-8xl z-100 border-4 border-purple-500 md:w-64 w-1/2 py-5 pl-2 hover:bg-purple-500 hover:md:w-96 hover:md:text-white transition-all duration-100">Septa Alfauzan</h3>
                        <h3 className="text-2xl  z-100 mt-4">Im junior frontend web developer based on Indonesia</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;