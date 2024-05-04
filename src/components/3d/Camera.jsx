import React from "react";
import { useGLTF } from "@react-three/drei";

export function Camera(props) {
  const { nodes, materials } = useGLTF("/models/camera/camera.gltf");

  return (
    <group {...props} scale={[0.5, 0.5, 0.5]} position={[0, -0.7, 0]} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.blinn1SG} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.blinn1SG} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.blinn2SG} />
      </group>
    </group>
  );
}

useGLTF.preload("/models/camera/camera.gltf");
