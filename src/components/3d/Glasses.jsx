import React from "react";
import { useGLTF } from "@react-three/drei";

export function Glasses(props) {
  const { nodes, materials } = useGLTF("/models/glasses/glasses.gltf");

  return (
    <group {...props} scale={[0.2, 0.2, 0.2]} position={[0, -0.7, 0]} dispose={null}>
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.main_plastik_0.geometry} material={materials.plastik} />
          <mesh geometry={nodes.dushka_1_plastik_0.geometry} material={materials.plastik} />
          <mesh geometry={nodes.dushka_1_kr_2_metal_0.geometry} material={materials.metal} />
          <mesh geometry={nodes.dushka_1_kr_1_metal_0.geometry} material={materials.metal} />
          <mesh geometry={nodes.dushka_1_kr_4_metal_0.geometry} material={materials.metal} />
          <mesh geometry={nodes.dushka_1_kr_3_metal_0.geometry} material={materials.metal} />
          <mesh geometry={nodes.dushka_1vint_metal_2_0.geometry} material={materials.metal_2} />
          <mesh geometry={nodes.hrom_1_hrom_0.geometry} material={materials.hrom} />
          <mesh geometry={nodes.glass_glass_0.geometry} material={materials.glass} />
          <mesh geometry={nodes.dushka_2_plastik_0.geometry} material={materials.plastik} />
          <mesh geometry={nodes.dushka_2_kr_2_metal_0.geometry} material={materials.metal} />
          <mesh geometry={nodes.dushka_2_kr_1_metal_0.geometry} material={materials.metal} />
          <mesh geometry={nodes.dushka_2_kr_4_metal_0.geometry} material={materials.metal} />
          <mesh geometry={nodes.dushka_2_kr_3_metal_0.geometry} material={materials.metal} />
          <mesh geometry={nodes.dushka_2_vint_metal_2_0.geometry} material={materials.metal_2} />
          <mesh geometry={nodes.hrom_2__0.geometry} material={materials.hrom_2__0} />
          <mesh geometry={nodes.Text__0.geometry} material={materials.hrom_2__0} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/glasses/glasses.gltf");
