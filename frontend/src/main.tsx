import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Login from "./Login";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);
