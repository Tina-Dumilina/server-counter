const React = require("react");
const ce = React.createElement;

async function changeCounter(method) {
  await fetch("http://localhost:3000/api/counter", { method: method })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((response) => (props.counter = response.counter));
  // counterElement.textContent = counter;
}

const App = (props) =>
  ce(React.Fragment, null, [
    ce("h1", null, [
      "Counter: ",
      ce("span", { className: "counter" }, props.counter),
    ]),
    ce(
      "button",
      {
        className: "increment-button",
        // onClick: changeCounter("POST"),
        onClick: () => console.log("clicked"),
      },
      "Increment"
    ),
    ce(
      "button",
      { className: "reset-button", onClick: () => console.log("clicked") },
      "Reset"
    ),
  ]);

module.exports = App;
