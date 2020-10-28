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
    ce("html", { lang: "en" }, null),
    ce("head", null, [
      ce("meta", { charSet: "utf-8" }, null),
      ce(
        "meta",
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        null
      ),
      ce("title", null, "Server counter"),
    ]),
    ce(
      "body",
      null,
      ce("div", { id: "root" }, null, [
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
      ])
    ),
    // ce("script", { src: "./index.js", type: "module" }),
  ]);

module.exports = App;
