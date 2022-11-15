const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");

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

  https.get(url, (response) => {
    response.on("data", (data) => {
      //console.log(data);
      const weatherData = JSON.parse(data);
      const country = weatherData.sys.country;
      const temp = weatherData.main.temp;
      const description = weatherData.weather[0].description;
      const imageURL = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
      res.write(
        `<h1>The current temperature in ${city} of ${country} is ${temp}degrees Celcius.</h1>`
      );
      res.write(`<h2>It is ${description}</h2>`);
      res.write(`<img src=${imageURL} alt="weather image">`);
      res.send();
    });
  });
});

app.listen(3000, () => {
  console.log("Listening at 3000");
});
