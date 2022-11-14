const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", (req, res) => {
  //const { weight, height } = req.body;
  const w = req.body.weight;
  const h = req.body.height;

  const weight = parseFloat(w);
  const height = parseFloat(h);

  const bmi = weight / (height * height);

  res.send(`Your  BMI is ${bmi.toFixed(3)}`);
});

app.listen(3000, () => {
  console.log("listening on 3000");
});
