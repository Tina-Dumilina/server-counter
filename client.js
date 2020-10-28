import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
const ce = React.createElement;

ReactDOM.hydrate(ce(App), document.querySelector("#root"));