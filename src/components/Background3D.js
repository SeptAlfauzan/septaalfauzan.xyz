import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { useRef } from "react";

const Model = ({ yRotation, xRotation, scale, isMobile }) => {
  const geometry = useRef()

  useFrame(({clock})=>{
    if(isMobile) {
      geometry.current.rotation.x = clock.getElapsedTime() * 0.1
      geometry.current.rotation.y = clock.getElapsedTime() * 0.1
    }
  })
  return (
    <points ref={geometry} rotation-x={yRotation} rotation-y={xRotation} scale={scale*0.1 + 0.1}>
      <torusKnotBufferGeometry args={[10, 3, 100, 16]} />
      <pointLight color='red' intensity={5} position={[0, 1000, 100]} />
      <pointLight color='blue' intensity={1} position={[0, 100, 100]} />
      <pointsMaterial color="#8985ff" size={0.03} />
    </points>
  )
}

const Background3D = ({yRotation, xRotation, scale, isMobile}) => {
    return (
        <div className="bg-white h-screen fixed w-full">
            <Canvas {...(!isMobile && {frameloop: "demmand"})} className="ml-auto">
            <Suspense fal7lback={null}>
                <Model  isMobile={isMobile} yRotation={yRotation} xRotation={xRotation} scale={scale}/>
                {/* <OrbitControls/> */}
            </Suspense>
            </Canvas>
        </div>
    )
}

export default Background3D;