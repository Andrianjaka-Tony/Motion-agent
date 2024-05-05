import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home";
import ClientNav from "./components/navigation/client-navigation";
import ClientNavigation from "./components/navigation/client-navigation";
import Navigation from "./components/navigation";
import Gadgets from "./pages/gadgets";
import Profile from "./pages/profile";
import Archive from "./pages/archive";

function App() {
  const location = useLocation();

  const connected = window.localStorage.getItem("motion-user") ? true : false;
  return (
    <>
      {connected ? <Navigation /> : <ClientNavigation />}

      <AnimatePresence initial={false} mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<Home />} path="/" />
          <Route element={<Gadgets />} path="/gadgets" />
          <Route element={<Profile />} path="/profile" />
          <Route element={<Archive />} path="/archives" />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
