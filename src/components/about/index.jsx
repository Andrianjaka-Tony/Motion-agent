import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import "./style.scss";

function About() {
  const ref = useRef(null);

  const [p1, setP1] = useState("40%");
  const [p2, setP2] = useState("60%");

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const axis1 = useTransform(scrollYProgress, [0, 1], ["40%", "0%"]);
  const axis2 = useTransform(scrollYProgress, [0, 1], ["60%", "100%"]);

  useMotionValueEvent(axis1, "change", (value) => {
    setP1(value);
  });
  useMotionValueEvent(axis2, "change", (value) => {
    setP2(value);
  });

  return (
    <motion.section ref={ref} className="about">
      <div className="about-sticky">
        <motion.div
          style={{
            clipPath: `polygon(${p1} ${p1}, ${p2} ${p1}, ${p2} ${p2}, ${p1} ${p2})`,
          }}
          className="about-sticky-clip"
        >
          <div className="about-sticky-image">
            <img src="/images/map.png" alt="" />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default About;
