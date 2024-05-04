import { motion } from "framer-motion";
import "./style.scss";

function SOS() {
  return (
    <motion.div initial={{ x: "-50%", y: "-50%" }} className="sos">
      <label htmlFor="sos-text-area">Describe your problem</label>
      <textarea rows={5} id="sos-text-area" placeholder="Someone is attacking me" />
      <button className="sos-btn">Send</button>
    </motion.div>
  );
}

export default SOS;
