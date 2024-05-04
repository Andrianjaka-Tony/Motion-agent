import { motion } from "framer-motion";
import GadgetScene from "../gadget-scene";
import { Cigarette } from "../3d/Cigarette";
import { Pistols } from "../3d/Pistols";
import { Glasses } from "../3d/Glasses";
import { Grenade } from "../3d/Grenade";
import { Headphones } from "../3d/Headphones";
import { Lighter } from "../3d/Lighter";
import { Lipstick } from "../3d/Lipstick";
import { Camera } from "../3d/Camera";
import "./style.scss";
import { AiOutlineClose } from "react-icons/ai";
import TextAnime from "../text-anime";

function GadgetVisualizer({
  id,
  setId,
  description,
  name,
  power,
  setVisualizer,
  setDescription,
  setName,
  setPower,
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="gadget-visualizer"
    >
      <GadgetScene>
        {id == 1 && <Cigarette />}
        {id == 2 && <Pistols />}
        {id == 3 && <Glasses />}
        {id == 4 && <Grenade />}
        {id == 5 && <Headphones />}
        {id == 6 && <Lighter />}
        {id == 7 && <Lipstick />}
        {id == 8 && <Camera />}
      </GadgetScene>
      <div
        onClick={() => {
          setId(0);
          setVisualizer(false);
          setDescription("");
          setName("");
          setPower("");
        }}
        className="gadget-visualizer-closer"
      >
        <AiOutlineClose />
      </div>
      <div className="gadget-visualizer-description">
        <TextAnime delay={1} stagger={0.01} text={description} />
      </div>
      <div className="gadget-visualizer-details">
        <p className="gadget-visualizer-details-text">{name}</p>
        <p className="gadget-visualizer-details-text">{power}</p>
      </div>
    </motion.div>
  );
}

export default GadgetVisualizer;
