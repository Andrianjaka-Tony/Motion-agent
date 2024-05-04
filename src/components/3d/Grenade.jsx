import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Grenade(props) {
  const { nodes, materials } = useGLTF("/models/grenade/scene.gltf");

  return (
    <group {...props} scale={[0.1, 0.1, 0.1]} dispose={null}>
      <mesh geometry={nodes.grenade_1__0.geometry} material={materials["Scene_-_Root"]} />
      <mesh
        geometry={nodes.ring__0.geometry}
        material={materials["Scene_-_Root"]}
        position={[3.056, 9.279, 1.691]}
        rotation={[-0.205, 0.202, -0.069]}
      />
    </group>
  );
}

useGLTF.preload("/models/grenade/scene.gltf");
