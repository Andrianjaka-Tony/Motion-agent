import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import ParallaxText3DScene from "./scene";
import "./style.scss";
import Text from "./text";
import { useRef } from "react";

function ParallaxText3D() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    console.log(value);
  });

  return (
    <motion.div ref={ref} className="parallax-text-3d">
      <ParallaxText3DScene scrollYProgress={scrollYProgress} />
      <Text text="Hello world, this is my first project on React JS using Vite" />
    </motion.div>
  );
}

export default ParallaxText3D;
