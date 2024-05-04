import { CameraControls, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Vector3 } from "three";

export const CameraController = ({ camera }) => {
  const cameraRef = useRef();

  return (
    <>
      <OrbitControls
        args={[camera]}
        enableZoom={false}
        minDistance={2}
        // autoRotate
        ref={cameraRef}
        enablePan={false}
        enableRotate={false}
        // target={[0, 0.35, 0]}
        maxPolarAngle={1.45}
        maxDistance={100}
      />
      <PerspectiveCamera ref={camera} makeDefault fov={100} position={[0, 5, 15]} near={0.5} far={100} />
    </>
  );
};
