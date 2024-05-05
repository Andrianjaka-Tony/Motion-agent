import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Enter from "../../components/enter";
import Hero from "../../components/hero";
import Footer from "../../components/footer";
import Transition from "../../components/transition";
import useScrollToTop from "../../hooks/useScrollToTop";
import MemberSection from "../../components/member-section";
import Testimonials from "../../components/testimonials";
import About from "../../components/about";
import ReactLenis from "lenis/react";

function Home() {
  const [isEnter, setEnter] = useState(true);

  useScrollToTop();

  return (
    <>
      <ReactLenis root options={{ duration: 2.4 }}>
        <Transition />
        <AnimatePresence mode="wait">
          {isEnter && (
            <>
              <Enter key="enter" setEnter={setEnter} />
              <div style={{ height: "100vh" }}></div>
            </>
          )}
          {!isEnter && <Hero key="hero" />}
        </AnimatePresence>
        <About />
        <Testimonials />
        <MemberSection />
        <Footer />
      </ReactLenis>
    </>
  );
}

export default Home;
