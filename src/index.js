import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { SideContextProvider } from "./context/sidebar-context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SideContextProvider>
      <App />
    </SideContextProvider>
  </React.StrictMode>
);
