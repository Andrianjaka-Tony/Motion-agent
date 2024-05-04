import { motion, useScroll, useTransform } from "framer-motion";
import "./style.scss";
import { useRef } from "react";
import TestimonialCard from "./card";

function Testimonials() {
  const ref = useRef(null);

  const data = [
    {
      text: "Cette agence de m'a deja sauve plus d'un fois. Malgre cela, ils sont toujours la pour me sauver.",
    },
    {
      text: "Cette agence de m'a deja sauve plus d'un fois. Malgre cela, ils sont toujours la pour me sauver.",
    },
    {
      text: "Cette agence de m'a deja sauve plus d'un fois. Malgre cela, ils sont toujours la pour me sauver.",
    },
    {
      text: "Cette agence de m'a deja sauve plus d'un fois. Malgre cela, ils sont toujours la pour me sauver.",
    },
  ];

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const left = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.section ref={ref} className="testimonials">
      <div className="testimonials-sticky">
        <div className="testimonials-title">Temoignages</div>
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
