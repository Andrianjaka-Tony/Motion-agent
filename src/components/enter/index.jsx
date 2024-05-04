import { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Column from "./column";
import "./style.scss";

function Enter({ setEnter }) {
  const sources = [
    "/images/1.jpeg",
    "/images/2.jpeg",
    "/images/3.jpeg",
    "/images/4.jpeg",
    "/images/5.jpeg",
    "/images/6.jpeg",
    "/images/7.jpeg",
    "/images/8.jpeg",
    "/images/9.jpeg",
    "/images/10.jpeg",
    "/images/11.jpeg",
    "/images/12.jpeg",
    "/images/13.jpeg",
    "/images/14.jpeg",
    "/images/15.jpeg",
    "/images/16.jpeg",
    "/partners/1.webp",
    "/partners/2.webp",
    "/partners/3.webp",
    "/partners/4.webp",
    "/partners/5.webp",
    "/partners/6.webp",
    "/partners/7.webp",
    "/partners/8.webp",
    "/partners/9.png",
    "/partners/10.webp",
    "/partners/11.png",
    "/gadgets/1.jpeg",
    "/gadgets/2.jpeg",
    "/gadgets/3.jpeg",
    "/gadgets/4.jpeg",
    "/gadgets/5.jpeg",
    "/gadgets/6.jpeg",
    "/gadgets/7.jpeg",
    "/gadgets/8.jpeg",
  ];

  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    sources.forEach((source) => {
      const image = new Image();
      image.src = source;
      image.addEventListener("load", () => {
        setLoadingProgress((previous) => previous + 1);
      });
    });
  }, []);

  useEffect(() => {
    if (loadingProgress === sources.length) {
      setTimeout(() => {
        setEnter(false);
      }, 3000);
    }
  }, [loadingProgress]);

  return (
    <motion.div className={`enter`}>
      <motion.div
        transition={{ duration: 0.4, delay: 0.3 }}
        exit={{ opacity: 0 }}
        className="enter-background"
      ></motion.div>
      <div className="enter-loader">{Math.round((loadingProgress * 100) / sources.length)}%</div>
      {loadingProgress !== sources.length ? (
        <></>
      ) : (
        <div className="enter-column-container">
          <Column
            images={[
              "/images/2.jpeg",
              "/images/3.jpeg",
              "/images/4.jpeg",
              "/images/5.jpeg",
              "/images/6.jpeg",
              "/images/7.jpeg",
            ]}
            className="left"
          />
          <Column
            images={[
              "/images/8.jpeg",
              "/images/9.jpeg",
              "/images/1.jpeg",
              "/images/10.jpeg",
              "/images/11.jpeg",
            ]}
            className="middle"
          />
          <Column
            images={[
              "/images/12.jpeg",
              "/images/13.jpeg",
              "/images/14.jpeg",
              "/images/15.jpeg",
              "/images/16.jpeg",
            ]}
            className="right"
          />
        </div>
      )}
    </motion.div>
  );
}

export default Enter;
