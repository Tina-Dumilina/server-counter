// const incrementButton = document.querySelector(".increment-button");
// const resetButton = document.querySelector(".reset-button");
// const counterElement = document.querySelector(".counter");
// let counter;

// async function changeCounter(method) {
//   await fetch("http://localhost:3000/api/counter", { method: method })
//     .then((response) => {
//       if (response.ok) {
//         return response.json();
//       }
//     })
//     .then((response) => (counter = response.counter));
//   counterElement.textContent = counter;
// }

// changeCounter("GET");
// incrementButton.addEventListener("click", () => changeCounter("POST"));
// resetButton.addEventListener("click", () => {
//   if (counter !== 0) {
//     changeCounter("DELETE");
//   }
// });



// const React = require("react");
// const ReactDOM = require("react-dom");
// const App = require("./app");
// const ce = React.createElement;
// ReactDOM.hydrate(ce(App), document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
const ce = React.createElement;

ReactDOM.hydrate(ce(App), document.querySelector("#root"));