const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const people = require("./people");

// is req, res middleware or app.use
app.get("/people", (req, res) => res.json(people));

// Static folder / middleware
app.use(express.static(path.join(__dirname, "public")));

// how does '/another.html' work without './public'

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server on ${PORT}`);
});
