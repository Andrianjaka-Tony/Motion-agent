import { motion } from "framer-motion";
import "./style.scss";
import { useState } from "react";
import { useEffect } from "react";

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <motion.div style={{ top: position.y - 20, left: position.x - 20 }} className="cursor" />;
}

export default Cursor;
