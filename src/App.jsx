import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home";
import ClientNav from "./components/navigation/client-navigation";
import ClientNavigation from "./components/navigation/client-navigation";
import Gadgets from "./pages/gadgets";
import ReactLenis from "lenis/react";

function App() {
  const location = useLocation();

  return (
    <>
      <ClientNavigation />

      <ClientNavigation />
      {/* <ReactLenis root options={{ duration: 2.4 }}> */}
      <AnimatePresence initial={true} mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<Home />} path="/" />
          <Route element={<Gadgets />} path="/gadgets" />
          {/* <Route element={<></>} path="/agent" /> */}
        </Routes>
      </AnimatePresence>
      {/* </ReactLenis> */}
    </>
  );
}

export default App;
