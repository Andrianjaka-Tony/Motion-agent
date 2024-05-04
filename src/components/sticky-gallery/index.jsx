import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import styles from "./style.module.scss";
import Image from "./image";

const images = [
  {
    src: "/2.png",
    width: 180,
    x: -255,
    y: -76.5,
  },
  {
    src: "/3.png",
    width: 350,
    x: -255,
    y: 195,
  },
  {
    src: "/4.png",
    width: 300,
    x: 85,
    y: 196,
  },
  {
    src: "/6.png",
    width: 380,
    x: 440,
    y: 215,
  },
  {
    src: "/5.png",
    width: 200,
    x: 265,
    y: -93,
  },
  {
    src: "/7.png",
    width: 200,
    x: -460,
    y: -65,
  },
  {
    src: "/8.png",
    width: 300,
    x: 0,
    y: -250,
  },
  {
    src: "/1.png",
    width: 300,
    x: 0,
    y: 0,
  },
];

export default function StickyGallery() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const scales = [
    useTransform(scrollYProgress, [0, 1], [1, 2]),
    useTransform(scrollYProgress, [0, 1], [1, 2.5]),
    useTransform(scrollYProgress, [0, 1], [1, 8]),
    useTransform(scrollYProgress, [0, 1], [1, 4]),
    useTransform(scrollYProgress, [0, 1], [1, 7]),
    useTransform(scrollYProgress, [0, 1], [1, 3]),
    useTransform(scrollYProgress, [0, 1], [1, 7]),
    useTransform(scrollYProgress, [0, 1], [1, 5]),
  ];

  return (
    <motion.section ref={sectionRef} className={styles.section}>
      <motion.div className={styles.sticky}>
        {images.map((image, index) => (
          <Image scale={scales[index]} {...image} key={index} />
        ))}
      </motion.div>
    </motion.section>
  );
}
