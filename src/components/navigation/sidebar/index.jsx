import { AiOutlineClose } from "react-icons/ai";
import "./style.scss";
import SidebarItem from "./item";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { itemsVariants, linkVariants, linksVariants, sidebarVariants } from "./anime";

const items = [
  {
    name: "Gadgets",
    link: "/gadgets",
  },
  {
    name: "Expertise",
    link: "/expertise",
  },
  {
    name: "Agency",
    link: "/agency",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

function Sidebar({ setSidebarOpen }) {
  return (
    <motion.aside
      variants={sidebarVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="sidebar"
    >
      <div onClick={() => setSidebarOpen(false)} className="sidebar-close-btn">
        <AiOutlineClose />
      </div>
      <div className="sidebar-content">
        <motion.div variants={itemsVariants} className="sidebar-items">
          {items.map((item) => (
            <SidebarItem setSidebarOpen={setSidebarOpen} {...item} key={item.link} />
          ))}
        </motion.div>
        <motion.div variants={linksVariants} className="sidebar-links">
          <motion.div variants={linkVariants}>
            <Link className="sidebar-links-link">Github</Link>
          </motion.div>
          <motion.div variants={linkVariants}>
            <Link className="sidebar-links-link">Snapchat</Link>
          </motion.div>
          <motion.div variants={linkVariants}>
            <Link className="sidebar-links-link">WhatsApp</Link>
          </motion.div>
          <motion.div variants={linkVariants}>
            <Link className="sidebar-links-link">Instagram</Link>
          </motion.div>
        </motion.div>
        <motion.div variants={linksVariants} className="sidebar-links">
          <motion.div variants={linkVariants}>
            <Link className="sidebar-links-link">Adobe fonts</Link>
          </motion.div>
          <motion.div variants={linkVariants}>
            <Link className="sidebar-links-link">Dribbble</Link>
          </motion.div>
          <motion.div variants={linkVariants}>
            <Link className="sidebar-links-link">Awwwards</Link>
          </motion.div>
        </motion.div>
      </div>
      <div className="sidebar-bottom">
        <img src="/images/8.jpeg" className="sidebar-bottom-image" />
        <div className="sidebar-bottom-content">Motion</div>
        <div className="sidebar-bottom-content">2024</div>
      </div>
    </motion.aside>
  );
}

export default Sidebar;
