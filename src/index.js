import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import App from "./App";
import Routess from "./Routess";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <React.StrictMode>
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    </React.StrictMode>
  </>
);
