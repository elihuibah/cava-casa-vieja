import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Self-hosted Crimson Text: only the weights/styles the site uses.
import "@fontsource/crimson-text/400.css";
import "@fontsource/crimson-text/400-italic.css";
import "@fontsource/crimson-text/600.css";
import "@fontsource/crimson-text/700.css";
import "@fontsource/crimson-text/700-italic.css";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
