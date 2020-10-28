const express = require("express");
const path = require("path");
const fs = require("fs");
const React = require("react");
const ce = React.createElement;
const ReactDOMServer = require("react-dom/server");
const app = express();

let counter = 0;

const App = ce("div", null, [
  ce("h1", null, ["Counter: ", ce("span", { className: "counter" }, '')]),
  ce("button", { className: "increment-button" }, "Increment"),
  ce("button", { className: "reset-button" }, "Reset"),
]);

app.get("/", (req, res) => {
  fs.readFile(path.join(__dirname, "public", "index.html"), (err, data) => {
    res.send(
      data.toString().replace(
        '<div id="root"></div>',
        `<div id="root">${ReactDOMServer.renderToStaticMarkup(App)}</div>`
      )
    );
  });
});

app.use("/", express.static("public"));

app.use(express.static("public"));

app.get("/api/counter", (req, res) => {
  res.json({ counter });
});

app.post("/api/counter", (req, res) => {
  counter++;
  res.json({ counter });
});

app.delete("/api/counter", (req, res) => {
  counter = 0;
  res.json({ counter });
});

app.get("*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "public", "error.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
