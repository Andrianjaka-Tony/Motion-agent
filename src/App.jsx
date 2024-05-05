import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home";
import ClientNav from "./components/navigation/client-nav";
import ClientNavigation from "./components/navigation/client-navigation";

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
          <Route element={<></>} path="/agent" />
>>>>>>> 985787d (Hello world)
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
