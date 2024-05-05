import React from "react";

import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./style.module.scss";
import { useRef } from "react";
import Image from "./image";

const images = [
  {
    src: "/images/1.jpeg",
  },
  {
    src: "/images/3.jpeg",
  },
  {
    src: "/images/4.jpeg",
  },
  {
    src: "/images/6.jpeg",
  },
  {
    src: "/images/5.jpeg",
  },
  {
    src: "/images/7.jpeg",
  },
  {
    src: "/images/8.jpeg",
  },
  {
    src: "/images/1.jpeg",
  },
];

export default function XGallery() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const left = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <motion.section className={styles.gallery} ref={sectionRef}>
      <motion.div className={styles.sticky}>
        <h1 className={styles.title}>Hello From X Gallery</h1>
        <div className={styles.text}>
          As you can see, you should scroll Y to see the progession of X.
        </div>
        <motion.div style={{ x, left }} className={styles.container}>
          {images.map(({ src }, index) => (
            <Image src={src} key={index} />
          ))}
        </motion.div>
        <motion.div className={styles.footer}>
          <p className={styles.email}>andrianjaka.tony@gmail.com</p>
          <p className={styles.project}>Projects</p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
