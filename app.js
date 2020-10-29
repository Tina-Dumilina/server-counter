const React = require("react");
const ce = React.createElement;

function fetchCounter(method) {
  return fetch("http://localhost:3000/api/counter", { method }).then((response) => {
    if (response.ok) {
      return response.json();
    }
  });
}

const App = (props) => {
  const [counter, setCounter] = React.useState(props.counter);

  return ce(React.Fragment, null, [
    ce("h1", null, [
      "Counter: ",
      ce("span", { className: "counter" }, counter),
    ]),
    ce(
      "button",
      {
        className: "increment-button",
        onClick: () => fetchCounter("POST").then(response => setCounter(response.counter)),
      },
      "Increment"
    ),
    ce(
      "button",
      {
        className: "reset-button",
        onClick: () => fetchCounter("DELETE").then(response => setCounter(response.counter)),
      },
      "Reset"
    ),
  ]);
};
module.exports = App;
