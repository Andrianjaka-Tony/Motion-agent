import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

export function Book({ cameraControlRef, targetPage, setTargetPage, setPlaying, countPage }) {
  const { nodes, materials } = useGLTF("./models/Livre/book.gltf");
  const book = useRef(null);
  const [play, setPlay] = useState(false);
  const [direction, setDirection] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const next = () => {
    setDirection("next");
    setPlay(true);
    setPlaying(true);
  };

  const previous = () => {
    setDirection("previous");
    setPlay(true);
    setPlaying(true);
  };

  useEffect(() => {
    if (direction) {
      setPlay(true);
      setPlaying(true);
    }
  }, [direction]);

  useEffect(() => {
    if (currentPage < targetPage) next();
    else if (currentPage > targetPage) previous();
  }, [targetPage]);

  useFrame((c, delta) => {
    if (play) {
      const book_current = book.current;
      if (cameraControlRef) {
        const targetCameraRailPosition = new Vector3(0, 5, 1);
        cameraControlRef.current.position.lerp(targetCameraRailPosition, delta);
      }
      let current_mesh = book_current.children[currentPage];
      if (direction === "next") nextPage(current_mesh, 1.5 * delta, Math.PI + current_mesh.position.y, currentPage);
      else if (direction === "previous") previousPage(current_mesh, 1.5 * delta, current_mesh.position.y, currentPage);
      //
      //
    } else {
      if (cameraControlRef) {
        const width = window.innerWidth;
        if (width > 650) {
          const targetCameraRailPosition = new Vector3(-0, 3.5, 0);
          cameraControlRef.current.position.lerp(targetCameraRailPosition, delta);
        } else {
          const targetCameraRailPosition = new Vector3(-0, 4.5, 0);
          cameraControlRef.current.position.lerp(targetCameraRailPosition, delta);
        }
      }
    }
  });

  const nextPage = (page, incrementation, limit, index) => {
    if (page.rotation.z < limit) {
      page.rotation.z += incrementation;
    } else {
      setPlay(false);
      setPlaying(false);
      if (targetPage !== book.current.children.length) {
        let c_page = currentPage + 1;
        setCurrentPage(c_page);
      }
    }
  };

  const previousPage = (page, incrementation, limit, index) => {
    if (page.rotation.z > limit) {
      page.rotation.z -= incrementation;
    } else {
      setPlay(false);
      setPlaying(false);

      if (targetPage !== book.current.children.length) {
        let c_page = currentPage - 1;
        setCurrentPage(c_page);
      }
    }
  };

  return (
    <group dispose={null} ref={book} position={[0, 2, 0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.couverture_front.geometry}
        material={nodes.couverture_front.material}
        position={[0, -0.1, 0]}
        rotation={[0, 0, 3.4]}
      />
      <mesh castShadow receiveShadow geometry={nodes.page1.geometry} material={nodes.page1.material} position={[0, 0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.page2.geometry} material={nodes.page2.material} position={[0, 0.0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.page3.geometry} material={nodes.page3.material} position={[0, 0.0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.page4.geometry} material={nodes.page4.material} position={[0, 0.0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.page5.geometry} material={nodes.page5.material} position={[0, 0.0, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.couverture_back.geometry} material={nodes.couverture_back.material} />
    </group>
  );
}

useGLTF.preload("./models/Livre/book.gltf");
