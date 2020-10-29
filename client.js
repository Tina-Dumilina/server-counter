import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
const ce = React.createElement;

ReactDOM.hydrate(ce(App, {counter: window.INITIAL_STATE}), document.querySelector("#root"));