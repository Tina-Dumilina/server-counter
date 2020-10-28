const express = require("express");
const path = require("path");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const Component = require("./src/app");

const ce = React.createElement;
const app = express();

let counter = 0;

app.get("/", (req, res) => {
  res.send(
    `<!doctype html>\n${ReactDOMServer.renderToStaticMarkup(
      ce(Component, {counter})
    )}`
  );
});

app.use("/", express.static("src"));

app.use(express.static("src"));

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
  res.status(404).sendFile(path.join(__dirname, "src", "error.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
);
