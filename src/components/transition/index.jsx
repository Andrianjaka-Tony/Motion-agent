import { motion } from "framer-motion";
import styles from "./style.module.scss";
import { cellVariants, transitionVariants } from "./anime";

export default function Transition() {
  const rows = () => {
    const { innerWidth, innerHeight } = window;
    const rowWidth = innerWidth / 20;
    const size = Math.ceil(innerHeight / rowWidth);
    return Array.from(new Array(size));
  };

  return (
    <motion.div variants={transitionVariants} initial="initial" animate="animate" exit="exit" data-classname="transition" className={styles.transition}>
      {Array.from(new Array(20)).map((el, colIndex) => (
        <motion.div key={colIndex} className={styles.column}>
          {rows().map((el, rowIndex) => (
            <motion.div variants={cellVariants()} custom={colIndex} key={rowIndex} className={styles.row}></motion.div>
          ))}
        </motion.div>
      ))}
    </motion.div>
  );
}
