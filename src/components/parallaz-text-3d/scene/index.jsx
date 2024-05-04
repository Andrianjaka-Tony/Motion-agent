import { Canvas, useFrame } from "@react-three/fiber";
import "./style.scss";
import { motion } from "framer-motion-3d";
import { useRef } from "react";
import { transform } from "framer-motion";

const Box = ({ scrollYProgress }) => {
  const ref = useRef(null);

  useFrame(() => {
    const scaleX = transform(scrollYProgress.get(), [0, 1], [1, 5]);
    const scaleY = transform(scrollYProgress.get(), [0, 1], [1, 5]);
    ref.current.scale.x = scaleX;
    ref.current.scale.y = scaleY;
  });

  return (
    <motion.mesh ref={ref} position={[0, 0, 0]} rotation={[0.7, 0.7, 0.7]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"yellow"} />
    </motion.mesh>
  );
};

function ParallaxText3DScene({ scrollYProgress }) {
  return (
    <div className="parallax-text-3d-scene">
      <Canvas>
        <ambientLight color="white" intensity={1} />
        <Box scrollYProgress={scrollYProgress} />
      </Canvas>
    </div>
  );
}

export default ParallaxText3DScene;
