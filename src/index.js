import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { store } from "./Redux/store";
import App from "./App";

import { Provider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";
const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </Provider>
);
