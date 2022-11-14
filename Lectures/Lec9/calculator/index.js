const express = require("express");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  const { num1, num2 } = req.body;
  const result = Number(num1) + Number(num2);

  res.send(`The sum of ${num1} and ${num2} is ${result}`);
});

app.listen(3000, () => {
  console.log("Listen at port 3000");
});
