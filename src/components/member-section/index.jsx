import { motion, useScroll } from "framer-motion";
import "./style.scss";
import Item from "./item";
import { useRef } from "react";

const items = [
  {
    name: "CIA",
    post: "Sponsor",
    description: "Hello world, I lovw programming",
    image: "/images/5.jpeg",
    begin: 0,
    end: 0,
    animated: false,
  },
  {
    name: "Mossad",
    post: "Affiliate",
    description: "Hello world, I lovw programming",
    image: "/images/6.jpeg",
    begin: 0,
    end: 0.33,
  },
  {
    name: "Asis",
    post: "Collaborator",
    description: "Hello world, I lovw programming",
    image: "/images/7.jpeg",
    begin: 0.33,
    end: 0.66,
  },
  {
    name: "GCHQ",
    post: "Contributor",
    description: "Hello world, I lovw programming",
    image: "/images/8.jpeg",
    begin: 0.66,
    end: 1,
  },
];

function MemberSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <motion.section ref={ref} className="member-section">
      <div className="member-section-sticky">
        {items.map((item) => (
          <Item key={item.name} {...item} progress={scrollYProgress} />
        ))}
      </div>
    </motion.section>
  );
}

export default MemberSection;
