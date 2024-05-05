import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home";
import Navigation from "./components/navigation";
import SOS from "./components/sos";
import Gadgets from "./pages/gadgets";
import Sign from "./components/Sign/Sign";
import Archive from "./pages/archive";
import Profile from "./pages/profile";
import PlaneViewer from "./components/PlaneViewer";
// import Cursor from "./components/cursor";

function App() {
  const location = useLocation();

  return (
    <>
      <PlaneViewer />

      <Navigation />
      {/* <SOS /> */}
      {/* <Cursor /> */}
      {/* <Sign /> */}
      <AnimatePresence initial={false} mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<Home />} path="/" />
          <Route element={<Gadgets />} path="/gadgets" />
          <Route element={<Archive />} path="/archives" />
          <Route element={<Profile />} path="/profile" />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
