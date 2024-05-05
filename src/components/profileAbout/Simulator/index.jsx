import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { JailHouse } from "../../JailHouse";

const Simulator = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", background: "#000" }}>
      <Canvas camera={[5, 10, 0]}>
        <OrbitControls maxPolarAngle={1.9} />
        <ambientLight color={"white"} intensity={5} />
        <spotLight position={[0, 3, 0]} intensity={50} color={"white"} />
        <axesHelper args={[5]} />
        <JailHouse position={[70, -10, -15]} />
      </Canvas>
    </div>
  );
};

export default Simulator;
