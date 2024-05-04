import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Pistols(props) {
  const { nodes, materials } = useGLTF("/public/models/pistols/scene.gltf");

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials["Scene_-_Root"]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/public/models/pistols/scene.gltf");
