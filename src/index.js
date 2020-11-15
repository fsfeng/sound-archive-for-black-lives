import React from "react";
import ReactDOM from "react-dom";
import App from "./MN4BL-dev";
require("dotenv").config();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
