import React from "react";
import { motion } from "framer-motion";

import styles from "./style.module.scss";

export default function Image({ src, width, x, y, scale }) {
  return (
    <motion.div style={{ scale }} className={styles.image}>
      <motion.img style={{ width, x, y }} src={src} />
    </motion.div>
  );
}
