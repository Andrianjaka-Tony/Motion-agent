import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home";
import Gadgets from "./pages/gadgets";
import ClientNav from "./components/navigation/client-nav";
import ClientNavigation from "./components/navigation/client-navigation";
import Navigation from "./components/navigation/";

function App() {
  const location = useLocation();

  return (
    <>
      <Navigation />
      {/* <SOS /> */}
      {/* <Cursor /> */}
      {/* <ClientNav /> */}
      {/* <ClientNavigation /> */}
      <AnimatePresence initial={false} mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<Home />} path="/" />
          <Route element={<Gadgets />} path="/gadgets" />
          <Route element={<></>} path="/agent" />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
