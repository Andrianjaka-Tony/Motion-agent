/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 scene.gltf 
Author: tadleaf (https://sketchfab.com/tadleaf)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/lighter-b0fa9ba34aa74d389aa26344711719bc
Title: Lighter
*/

import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Lighter(props) {
  const { nodes, materials } = useGLTF("/models/lighter/scene.gltf");

  return (
    <group {...props} scale={[0.1, 0.1, 0.1]} dispose={null}>
      <group position={[6, 14, -3]}>
        <group position={[-6, -1, 3]}>
          <mesh geometry={nodes.Object_26.geometry} material={materials["lighter_textures.png"]} />
          <mesh geometry={nodes.Object_27.geometry} material={materials["lighter_textures.png"]} />
          <mesh geometry={nodes.Object_28.geometry} material={materials["lighter_textures.png"]} />
          <mesh geometry={nodes.Object_29.geometry} material={materials["lighter_textures.png"]} />
          <mesh geometry={nodes.Object_30.geometry} material={materials["lighter_textures.png"]} />
        </group>
        <group position={[0, 0, 3]}>
          <group position={[-5, 0, 0]}>
            <mesh
              geometry={nodes.Object_35.geometry}
              material={materials["lighter_textures.png"]}
            />
            <mesh
              geometry={nodes.Object_36.geometry}
              material={materials["lighter_textures.png"]}
            />
            <mesh
              geometry={nodes.Object_37.geometry}
              material={materials["lighter_textures.png"]}
            />
            <mesh
              geometry={nodes.Object_38.geometry}
              material={materials["lighter_textures.png"]}
            />
            <mesh
              geometry={nodes.Object_39.geometry}
              material={materials["lighter_textures.png"]}
            />
          </group>
          <group position={[0, 0, -3]}>
            <mesh
              geometry={nodes.Object_51.geometry}
              material={materials["lighter_textures.png"]}
            />
            <mesh
              geometry={nodes.Object_52.geometry}
              material={materials["lighter_textures.png"]}
            />
            <mesh
              geometry={nodes.Object_53.geometry}
              material={materials["lighter_textures.png"]}
            />
          </group>
          <mesh geometry={nodes.Object_41.geometry} material={materials["lighter_textures.png"]} />
          <mesh geometry={nodes.Object_42.geometry} material={materials["lighter_textures.png"]} />
          <mesh geometry={nodes.Object_43.geometry} material={materials["lighter_textures.png"]} />
          <mesh geometry={nodes.Object_44.geometry} material={materials["lighter_textures.png"]} />
          <mesh geometry={nodes.Object_45.geometry} material={materials["lighter_textures.png"]} />
          <mesh geometry={nodes.Object_47.geometry} material={materials["lighter_textures.png"]} />
          <mesh geometry={nodes.Object_48.geometry} material={materials["lighter_textures.png"]} />
          <mesh geometry={nodes.Object_49.geometry} material={materials["lighter_textures.png"]} />
        </group>
        <group position={[-4, 4, 4]}>
          <mesh
            geometry={nodes.Object_56.geometry}
            material={materials["lighter_textures.png"]}
            position={[1.5, -1.5, -1]}
            rotation={[0, 0, Math.PI / 4]}
          />
          <group position={[0, 0, -2]}>
            <mesh
              geometry={nodes.Object_62.geometry}
              material={materials["lighter_textures.png"]}
            />
            <mesh
              geometry={nodes.Object_63.geometry}
              material={materials["lighter_textures.png"]}
            />
          </group>
          <mesh geometry={nodes.Object_59.geometry} material={materials["lighter_textures.png"]} />
          <mesh geometry={nodes.Object_60.geometry} material={materials["lighter_textures.png"]} />
        </group>
        <group position={[-12, 2, 3]}>
          <group position={[0, -2, -2]}>
            <group position={[0, 0, 2]}>
              <mesh
                geometry={nodes.Object_69.geometry}
                material={materials["lighter_textures.png"]}
              />
              <mesh
                geometry={nodes.Object_70.geometry}
                material={materials["lighter_textures.png"]}
              />
            </group>
            <mesh
              geometry={nodes.Object_72.geometry}
              material={materials["lighter_textures.png"]}
            />
            <mesh
              geometry={nodes.Object_73.geometry}
              material={materials["lighter_textures.png"]}
            />
          </group>
          <mesh
            geometry={nodes.Object_66.geometry}
            material={materials["lighter_textures.png"]}
            rotation={[0, 0, Math.PI / 6]}
          />
        </group>
        <mesh
          geometry={nodes.Object_32.geometry}
          material={materials["lighter_textures.png"]}
          position={[-3, 0, 3]}
        />
      </group>
      <group position={[-7, 13, -7]}>
        <group position={[0, 0, 1]} rotation={[0, 0, 2.574]}>
          <mesh geometry={nodes.Object_12.geometry} material={materials["lighter_textures.png"]} />
          <mesh geometry={nodes.Object_13.geometry} material={materials["lighter_textures.png"]} />
          <mesh geometry={nodes.Object_14.geometry} material={materials["lighter_textures.png"]} />
          <mesh geometry={nodes.Object_15.geometry} material={materials["lighter_textures.png"]} />
        </group>
        <group position={[0, 0, 6]} rotation={[0, 0, 2.574]}>
          <mesh geometry={nodes.Object_17.geometry} material={materials["lighter_textures.png"]} />
          <mesh geometry={nodes.Object_18.geometry} material={materials["lighter_textures.png"]} />
          <mesh geometry={nodes.Object_19.geometry} material={materials["lighter_textures.png"]} />
          <mesh geometry={nodes.Object_20.geometry} material={materials["lighter_textures.png"]} />
        </group>
        <group position={[0, 0, 7]} rotation={[0, 0, 2.574]}>
          <mesh geometry={nodes.Object_22.geometry} material={materials["lighter_textures.png"]} />
          <mesh geometry={nodes.Object_23.geometry} material={materials["lighter_textures.png"]} />
        </group>
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials["lighter_textures.png"]}
          position={[0, 0, 7]}
          rotation={[0, 0, 2.574]}
        />
        <mesh
          geometry={nodes.Object_10.geometry}
          material={materials["lighter_textures.png"]}
          rotation={[0, 0, 2.574]}
        />
      </group>
      <mesh geometry={nodes.Object_5.geometry} material={materials["lighter_textures.png"]} />
    </group>
  );
}

useGLTF.preload("/models/lighter/scene.gltf");
