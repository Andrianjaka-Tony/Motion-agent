import { motion, useMotionValueEvent, useTransform } from "framer-motion";
import "./style.scss";
import { useState } from "react";

function Item({ name, post, image, progress, begin, end, animated = true }) {
  const [clips, setClips] = useState(["50%", "50%", "100%"]);

  const x1 = useTransform(progress, [begin, end], ["20%", "0%"]);
  const x2 = useTransform(progress, [begin, end], ["80%", "100%"]);
  const y = useTransform(progress, [begin, end], ["100%", "0%"]);

  useMotionValueEvent(x1, "change", (value) => {
    setClips((previous) => [value, previous[1], previous[2]]);
  });
  useMotionValueEvent(x2, "change", (value) => {
    setClips((previous) => [previous[0], value, previous[2]]);
  });
  useMotionValueEvent(y, "change", (value) => {
    setClips((previous) => [previous[0], previous[1], value]);
  });

  return (
    <motion.div
      style={{
        clipPath: animated
          ? `polygon(0% ${clips[2]}, 100% ${clips[2]}, 100% 100%, 0% 100%)`
          : "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      }}
      className="member-section-item"
    >
      <div className="member-section-item-name">Membre</div>
      <div className="member-section-item-bottom">
        <div className="post">{name}</div>
        <img
          style={{
            clipPath: animated
              ? `polygon(${clips[0]} ${clips[2]}, ${clips[1]} ${clips[2]}, ${clips[1]} 100%, ${clips[0]} 100%)`
              : "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
          src={image}
          alt=""
          className="image"
        />
        <div className="description">{post}</div>
      </div>
    </motion.div>
  );
}

export default Item;
