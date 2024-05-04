import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import TextAnime from "../text-anime";
import "./style.scss";

function ClipSection() {
  const section = useRef(null);

  const [clipPath, setClipPath] = useState("polygon(100% 0, 100% 0, 100% 100%, 100% 100%)");

  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end end"] });

  const clip = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
  useMotionValueEvent(clip, "change", (latestValue) => {
    setClipPath(`polygon(${latestValue} 0, 100% 0, 100% 100%, ${latestValue} 100%)`);
  });

  return (
    <motion.section ref={section} className="clip-section">
      <div className="clip-section-sticky-container">
        <div className="clip-section-container">
          <img src="/images/1.jpg" className="clip-section-container-image" alt="" />
          <h1 className="clip-section-title">
            <TextAnime text="For a long time, we have dreamed of predicting someone's future just by telling their dream.">
              <span className="clip-section-title-marger"></span>
            </TextAnime>
          </h1>
        </div>
        <motion.div style={{ clipPath }} className="clip-section-container">
          <img src="/images/2.jpg" className="clip-section-container-image" alt="" />
          <h1 className="clip-section-title">
            <span className="clip-section-title-marger"></span>I am Onirix, would you believe me if
            I told you that I could predict your future if you told me your dream?
          </h1>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default ClipSection;
