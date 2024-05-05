import { motion, useScroll, useTransform } from "framer-motion";
import "./style.scss";
import { useRef } from "react";
import TestimonialCard from "./card";

function Testimonials() {
  const ref = useRef(null);

  const data = [
    {
      text: "This platform revolutionized my operations. Seamless and global.",
    },
    {
      text: "Access to intel worldwide. Essential for covert missions.",
    },
    {
      text: "Invaluable tool for navigating the shadows. Highly recommended.",
    },
    {
      text: "Efficient, discreet, and indispensable for every agent",
    },
  ];

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const left = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.section ref={ref} className="testimonials">
      <div className="testimonials-sticky">
        <div className="testimonials-title">Testimonials</div>
        <motion.div style={{ x, left }} className="testimonials-container">
          {data.map((item, index) => (
            <TestimonialCard key={index} {...item} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Testimonials;
