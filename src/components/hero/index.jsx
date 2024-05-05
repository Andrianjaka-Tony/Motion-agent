import { motion } from "framer-motion";
import "./style.scss";
import { textEase } from "../../helpers/ease-helper";
import TextAnime from "../text-anime";
import { useRef } from "react";

function Hero() {
  const { innerWidth, innerHeight } = window;

  const ref = useRef(null);

  return (
    <motion.section ref={ref} className="hero">
      <h1 className="hero-title">
        <div className="hero-title-content">
          <TextAnime duration={2} text="outlast" delay={0.6} />
        </div>
        <div className="hero-title-content middle">
          <TextAnime duration={2} text="unmask" delay={0.8} />
        </div>
        <div className="hero-title-content bottom">
          <TextAnime duration={2} text="outspy" delay={1} />
        </div>
      </h1>
      <div className="hero-text">
        <TextAnime
          text="World-class covert ops: Outmaneuvering adversaries, safeguarding peace, and mastering the shadows with finesse."
          delay={1}
        />
      </div>
      <motion.img
        transition={{
          duration: 2,
          ease: textEase,
        }}
        layoutId="enter-image"
        src="/images/1.jpeg"
        className="hero-image"
        style={{ aspectRatio: `${innerWidth} / ${innerHeight}` }}
        alt=""
      />
      <p className="hero-about">
        Welcome to our platform, where innovation and secrecy converge on a{" "}
        <span>global scale</span>. With our presence extending across all continents, we offer
        discreet access to agents worldwide. From the bustling <span>metropolises</span> to the
        remote corners of the earth, our reach knows no bounds. Powered by cutting-edge technology
        and a dedication <span>to confidentiality</span>, we provide a seamless experience for
        operatives navigating the complexities of espionage.
      </p>
    </motion.section>
  );
}

export default Hero;
