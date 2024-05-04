import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { containerVariants, wordVariants } from "./anime";
import "./style.scss";

function TextAnime({
  children,
  text = "",
  duration = 1.2,
  delay = 0,
  stagger = 0.06,
  once = true,
  direction = 1,
}) {
  const ref = useRef(null);

  const inView = useInView(ref, { once });

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      exit="exit"
      custom={{ delayChildren: delay, staggerChildren: stagger, staggerDirection: direction }}
      className="text-anime"
    >
      {children}
      {text.split(" ").map((word, key) => (
        <div key={key} className="text-anime-word">
          <motion.div variants={wordVariants} custom={{ duration }}>
            {word}
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
}

export default TextAnime;
