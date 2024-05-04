import { useGLTF } from "@react-three/drei";

export function Headphones(props) {
  const { nodes, materials } = useGLTF("/models/headphone/scene.gltf");

  return (
    <group {...props} position={[0, -500, 0]} scale={[3, 3, 3]} dispose={null}>
      <group position={[0, 159.124, -0.306]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <mesh geometry={nodes.Headphone_Characters_0.geometry} material={materials.Characters} />
        <mesh
          geometry={nodes.Headphone_Dynamic_Characters_0.geometry}
          material={materials.Characters}
        />
        <mesh
          geometry={nodes.Headphone_Header_Characters_0.geometry}
          material={materials.Characters}
        />
        <mesh
          geometry={nodes.Headphone_Micro_Characters_0.geometry}
          material={materials.Characters}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/headphone/scene.gltf");
