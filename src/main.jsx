import React from "react";
import { createRoot } from "react-dom/client";
import { JournalApp } from "./JournalApp";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <JournalApp />
    </Provider>
  </React.StrictMode>
);
