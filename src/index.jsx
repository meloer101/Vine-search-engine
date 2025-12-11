import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import { ResultContextProvider } from "./contexts/ResultContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <ResultContextProvider>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </ResultContextProvider>
);
