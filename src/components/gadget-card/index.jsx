import { motion } from "framer-motion";
import "./style.scss";

function GadgetCard({
  id,
  name,
  power,
  image,
  objectPosition,
  setId,
  setVisualizer,
  description,
  setDescription,
  setName,
  setPower,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      onClick={() => {
        setId(id);
        setDescription(description);
        setName(name);
        setPower(power);
        setVisualizer(true);
      }}
      className="gadget-card"
    >
      <motion.img style={{ objectPosition }} src={image} draggable={false} />
      <div className="gadget-card-details">
        <div className="gadget-card-name">{name}</div>
        <div className="gadget-card-power">{power}</div>
      </div>
    </motion.div>
  );
}

export default GadgetCard;
