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
  {
    id: 2,
    image: "/gadgets/2.jpeg",
    name: "Stealth Fire",
    power: 9,
    description: `The Stealth Fire weapon is a cutting-edge tool designed for covert operatives, featuring advanced technology for discreet operations. Its compact design conceals powerful capabilities, enabling operatives to strike swiftly and silently. With precision targeting and stealthy deployment, it ensures maximum effectiveness in clandestine missions, making it an indispensable asset for secret agents worldwide.`,
  },
  {
    id: 3,
    image: "/gadgets/3.jpeg",
    name: "Inviso Glasses",
    power: 2.3,
    description: `The Inviso Glasses are the pinnacle of espionage gear, equipped with state-of-the-art optics and advanced camouflage technology. These sleek and lightweight glasses provide agents with unparalleled visibility in any environment, while their integrated invisibility feature allows for covert reconnaissance and surveillance. With their futuristic design and multifunctional capabilities, the Inviso Glasses are essential for agents navigating the shadows of espionage.`,
  },
  {
    id: 4,
    image: "/gadgets/4.jpeg",
    name: "Silent Detonator",
    power: 7,
    description: `The Silent Detonator is a revolutionary device tailored for covert operations, engineered to trigger precise explosions with minimal sound and visibility. Its compact design and advanced circuitry enable agents to remotely activate explosive charges undetected, ensuring stealthy sabotage and infiltration. With its silent yet devastating capabilities, the Silent Detonator is an indispensable tool for clandestine missions in the world of espionage.`,
  },
  {
    id: 5,
    image: "/gadgets/5.jpeg",
    name: "Stealth Earbud",
    power: 4.9,
    description: `The Stealth Earbud is a discreet communication device tailored for covert operatives, featuring cutting-edge technology for seamless audio transmission. With its sleek design and miniature form factor, it remains virtually undetectable, allowing agents to maintain covert communication in any situation. Whether gathering intelligence or coordinating operations, the Stealth Earbud provides clear and confidential communication, ensuring operatives stay one step ahead in the world of espionage.`,
  },
  {
    id: 6,
    image: "/gadgets/6.jpeg",
    name: "Covert Flame",
    power: 6,
    description: `The Covert Flame is a compact yet powerful tool designed for clandestine operations, offering agents a discreet means of creating controlled fires. Its innovative design conceals advanced ignition mechanisms, enabling operatives to start fires swiftly and silently. Whether for distraction, survival, or sabotage, the Covert Flame provides agents with a versatile tool for manipulating their surroundings with precision and stealth, essential for navigating the shadows of espionage.`,
  },
  {
    id: 7,
    image: "/gadgets/7.jpeg",
    name: "Covert Charm",
    power: 7.8,
    description: `The Covert Charm is an essential asset in the arsenal of any covert operative, offering a subtle yet potent means of influence and manipulation. Disguised as an innocuous accessory, it conceals advanced technology for covert communication and persuasion. With its sleek and inconspicuous design, it allows agents to subtly sway opinions, extract information, and navigate delicate social situations with finesse. The Covert Charm is a cornerstone of espionage, enabling agents to wield influence from the shadows with unparalleled discretion and efficacy.`,
  },
  {
    id: 8,
    image: "/gadgets/8.jpeg",
    name: "Spy Lens",
    power: 5.6,
    description: `The Spy Lens is a revolutionary tool crafted for discreet surveillance and reconnaissance operations. Concealed within a sleek and unassuming design, it features cutting-edge optics that enable agents to observe their surroundings without detection. With its ability to capture images and video from unique angles and distances, the Spy Lens empowers operatives to gather crucial intelligence covertly. Whether monitoring targets, assessing security measures, or documenting evidence, the Spy Lens is an indispensable asset for agents navigating the complexities of espionage with precision and stealth.`,
  },
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
