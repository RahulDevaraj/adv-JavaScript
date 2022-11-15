const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  const { city } = req.body;
  console.log(city);
  const apiKey = "2f696fcdf9f02b7934406ca02c5c0bb4";
  const units = "metric";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

  axios
    .get(url)
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log("Error :" + err);
    });
});

app.listen(3000, () => {
  console.log("Listening at 3000");
});
