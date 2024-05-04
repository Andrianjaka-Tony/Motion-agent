import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import styles from "./style.module.scss";
import { curtainVariants } from "./anime";

export default function Image({ src }) {
  const imageRef = useRef(null);

  const isInView = useInView(imageRef, { once: true });

  return (
    <motion.div ref={imageRef} initial="initial" animate={isInView ? "animate" : "initial"} className={styles.image}>
      <img src={src} alt={src} />
      <motion.span variants={curtainVariants} className={styles.curtain}></motion.span>
    </motion.div>
  );
}
