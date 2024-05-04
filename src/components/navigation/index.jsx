import { AnimatePresence } from "framer-motion";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import { useState } from "react";

function Navigation() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Navbar setSidebarOpen={setSidebarOpen} />
      <AnimatePresence mode="wait">
        {isSidebarOpen && <Sidebar setSidebarOpen={setSidebarOpen} />}
      </AnimatePresence>
    </>
  );
}

export default Navigation;
