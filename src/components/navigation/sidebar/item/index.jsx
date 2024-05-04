import "./style.scss";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const variants = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

function SidebarItem({ name, link, setSidebarOpen }) {
  return (
    <motion.div onClick={() => setSidebarOpen(false)} variants={variants} className="sidebar-item">
      <NavLink to={link}>{name}</NavLink>
    </motion.div>
  );
}

export default SidebarItem;
