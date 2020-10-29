const express = require("express");
const path = require("path");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const Component = require("./app");

const ce = React.createElement;
const app = express();

let counter = 0;

app.get("/", (req, res) => {
  res.send(
    `<!doctype html>\n${ReactDOMServer.renderToStaticMarkup(
      ce("html", { lang: "en" }, [
        ce("head", null, [
          ce("meta", { charSet: "utf-8" }, null),
          ce(
            "meta",
            {
              name: "viewport",
              content: "width=device-width, initial-scale=1.0",
            },
            null
          ),
          ce("title", null, "Server counter"),
          ce("script", { defer: true, src: "./main.js" }),
          ce("script", {
            dangerouslySetInnerHTML: {
              __html: `window.INITIAL_STATE = ${JSON.stringify(counter)}`,
            },
          }),
        ]),
        ce("body", null, ce("div", { id: "root" }, ce(Component, { counter }))),
      ])
    )}`
  );
});

app.use("/", express.static("public"));

// app.use(express.static("public"));

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
