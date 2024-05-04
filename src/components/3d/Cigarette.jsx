import React from "react";
import { useGLTF } from "@react-three/drei";

export function Cigarette(props) {
  const { nodes, materials } = useGLTF("/models/cigarette/cigarette.gltf");

  return (
    <group
      {...props}
      scale={[0.3, 0.3, 0.3]}
      rotation={[Math.PI / 2, Math.PI / 6, 0]}
      dispose={null}
    >
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.063}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes["Cylinder001_Material_#106_0"].geometry}
            material={materials.Material_106}
            position={[10.499, -10.506, -41.498]}
            rotation={[0, 0, Math.PI / 4]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/cigarette/cigarette.gltf");
