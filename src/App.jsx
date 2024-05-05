import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home";
<<<<<<< HEAD
import Navigation from "./components/navigation";
import SOS from "./components/sos";
import Gadgets from "./pages/gadgets";
import Sign from "./components/Sign/Sign";
import Archive from "./pages/archive";
import Profile from "./pages/profile";
// import Cursor from "./components/cursor";
=======
import Gadgets from "./pages/gadgets";
import ClientNav from "./components/navigation/client-nav";
import ClientNavigation from "./components/navigation/client-navigation";
import Navigation from "./components/navigation/";
>>>>>>> 985787d (Hello world)

function App() {
  const location = useLocation();

  return (
    <>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      {/* <Navigation /> */}
=======
      <Navigation />
>>>>>>> b8e32c2 (mety)
      {/* <SOS /> */}
      {/* <Cursor /> */}
      {/* <ClientNav /> */}
      <ClientNavigation />

      {/* <Sign /> */}
=======
      <Navigation />
      {/* <SOS /> */}
      {/* <Cursor /> */}
      {/* <ClientNav /> */}
      {/* <ClientNavigation /> */}
>>>>>>> 985787d (Hello world)
=======
      {/* <Navigation /> */}
      {/* <SOS /> */}
      {/* <Cursor /> */}
      {/* <ClientNav /> */}
      <ClientNavigation />
>>>>>>> ebda72d (Hello)
      <AnimatePresence initial={false} mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<Home />} path="/" />
          <Route element={<Gadgets />} path="/gadgets" />
<<<<<<< HEAD
          <Route element={<Archive />} path="/archives" />
          <Route element={<Profile />} path="/profile" />
=======
          <Route element={<></>} path="/agent" />
>>>>>>> 985787d (Hello world)
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
