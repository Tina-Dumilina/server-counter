const React = require("react");
const ce = React.createElement;

const App = (props) =>
  ce(React.Fragment, null, [
    ce("html", { lang: "en" }, null),
    ce("head", null, [
      ce("meta", { charset: "utf-8" }, null),
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
        ce("h1", null, ["Counter: ", ce("span", { className: "counter" }, props.counter)]),
        ce("button", { className: "increment-button" }, "Increment"),
        ce("button", { className: "reset-button" }, "Reset"),
      ])
    ),
    ce("script", {src: './index.js'})
  ]);

module.exports = App