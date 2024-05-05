import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ReactLenis from "lenis/react";
import { PlayProvider } from "./components/PlaneViewer/contexts/Play";
import "./main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    {/* <ReactLenis root options={{ duration: 2.4 }}> */}
    <PlayProvider>
      <App />
    </PlayProvider>
    {/* </ReactLenis> */}
  </BrowserRouter>
);
