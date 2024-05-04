import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import Footer from "../../components/footer";
import GadgetCard from "../../components/gadget-card";
import Transition from "../../components/transition";
import "./style.scss";
import { useRef, useState } from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import GadgetVisualizer from "../../components/gadget-visualizer";

const gadgets = [
  {
    id: 1,
    image: "/gadgets/1.jpeg",
    name: "Smoke Cam",
    power: 2,
    description: `The "Smoke Cam" is a discreet espionage gadget concealed within a cigarette. It features a high-resolution camera and built-in microphone to capture videos and secret conversations. Its clever design allows for covert and effective use during espionage operations.`,
  },
  { id: 2, image: "/gadgets/2.jpeg", name: "Stealth Fire", power: 9 },
  { id: 3, image: "/gadgets/3.jpeg", name: "Inviso Glasses", power: 2.3 },
  { id: 4, image: "/gadgets/4.jpeg", name: "Silent Detonator", power: 7 },
  { id: 5, image: "/gadgets/5.jpeg", name: "Stealth Earbud", power: 4.9 },
  { id: 6, image: "/gadgets/6.jpeg", name: "Covert Flame", power: 6 },
  { id: 7, image: "/gadgets/7.jpeg", name: "Covert Charm", power: 7.8 },
  { id: 8, image: "/gadgets/8.jpeg", name: "Spy Lens", power: 5.6 },
];

function Gadgets() {
  const [id, setId] = useState(0);
  const [isVisualizer, setVisualizer] = useState(false);
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [power, setPower] = useState(0);

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const left = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const objectPosition = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useScrollToTop();

  return (
    <>
      <Transition />
      <motion.div ref={ref} className="gadget">
        <div className="gadget-sticky">
          <h1 className="gadget-title">Gadgets</h1>
          <motion.div style={{ x, left }} className="gadgets-container">
            {gadgets.map((gadget, key) => (
              <GadgetCard
                setId={setId}
                setVisualizer={setVisualizer}
                objectPosition={objectPosition}
                setDescription={setDescription}
                setName={setName}
                setPower={setPower}
                {...gadget}
                key={key}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
      <AnimatePresence mode="wait">
        {isVisualizer && (
          <GadgetVisualizer
            id={id}
            setId={setId}
            setDescription={setDescription}
            setVisualizer={setVisualizer}
            setName={setName}
            setPower={setPower}
            name={name}
            power={power}
            description={description}
          />
        )}
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default Gadgets;
