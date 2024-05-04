import { motion } from "framer-motion";
import "./style.scss";
import { textEase } from "../../helpers/ease-helper";
import TextAnime from "../text-anime";

function Hero() {
  const { innerWidth, innerHeight } = window;

  return (
    <section className="hero">
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
    </section>
  );
}

export default Hero;
