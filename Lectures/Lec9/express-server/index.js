const express = require("express");

const app = express();

app.get("/", (req, res) => {
  // console.log(req);
  res.send("<h1>Hello World</h1>");
});

app.get("/contact", (req, res) => {
  // console.log(req);
  res.send("<h1>Contact Us at douglascollege.ca</h1>");
});
app.get("/about", (req, res) => {
  // console.log(req);
  res.send({ couse: "CSIS3380", day: "Wednesday" });
});
app.get("*", (req, res) => {
  // console.log(req);
  res.send("Not a valid route");
});

app.post("/", (req, res) => {
  res.send("post request handled");
});
app.listen(3000, () => {
  console.log("listening on port 3000");
});
