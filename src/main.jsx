import React from "react";
import { createRoot } from "react-dom/client";
import { JournalApp } from "./JournalApp";
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <JournalApp />
  </React.StrictMode>
);
