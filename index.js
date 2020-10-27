const express = require("express");
const path = require("path");
const app = express();

app.use("/", express.static("public"));

let counter = 0;

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
