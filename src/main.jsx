import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { AppProvider } from "./ContextApi.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <AppProvider>
        <App />
      </AppProvider>
    </StrictMode>
  </BrowserRouter>
);
