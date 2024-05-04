import { motion } from "framer-motion";
import "./style.scss";
import { textEase } from "../../../helpers/ease-helper";

const mainImage = "/images/1.jpeg";

function Image({ image }) {
  const { innerWidth, innerHeight } = window;

  return (
    <>
      {image === mainImage && (
        <motion.img
          layoutId="enter-image"
          style={{ aspectRatio: `${innerWidth} / ${innerHeight}` }}
          src={image}
          transition={{
            duration: 1.5,
            ease: textEase,
          }}
        />
      )}
      {image !== mainImage && (
        <motion.img
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          style={{ aspectRatio: `${innerWidth} / ${innerHeight}` }}
          src={image}
        />
      )}
    </>
  );
}

function Column({ images = [], className = "" }) {
  return (
    <div className={"column " + className}>
      {images.map((image, key) => (
        <Image image={image} key={key} />
      ))}
    </div>
  );
}

export default Column;
