import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./main.scss";
import { BrowserRouter } from "react-router-dom";
import ReactLenis from "lenis/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ReactLenis root options={{ duration: 2.4 }}>
      <App />
    </ReactLenis>
  </BrowserRouter>
);
