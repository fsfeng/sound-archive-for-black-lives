import React from "react";
import ReactDOM from "react-dom";
require("dotenv").config();

// import App from "./App";
// import ChakraApp from "./ChakraApp";
import App from "./MN4BL-dev";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ChakraApp /> */}
    <App />
  </React.StrictMode>,
  rootElement
);
