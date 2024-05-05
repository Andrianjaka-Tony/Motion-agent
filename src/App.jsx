import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home";
import ClientNav from "./components/navigation/client-navigation";
import ClientNavigation from "./components/navigation/client-navigation";

function App() {
  const location = useLocation();

  return (
    <>
      <ClientNavigation />

      <AnimatePresence initial={false} mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<Home />} path="/" />
          <Route element={<></>} path="/agent" />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
