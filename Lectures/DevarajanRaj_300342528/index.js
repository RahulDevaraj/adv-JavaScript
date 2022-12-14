const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { log } = require("console");

const https = require("https");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  const { selectlist } = req.body;
  if (!selectlist || selectlist == "")
    return res.send("<h1>No Resource was selected<h1>");
  else {
    const url = `https://swapi.py4e.com/api/${selectlist}/?format=json`;
    console.log(url);

    https.get(url, (response) => {
      let data = "";
      response.on("data", (chunk) => {
        data += chunk;
      });
      response.on("end", () => {
        const dataRet = JSON.parse(data);
        console.log(dataRet);
        if (selectlist == "films") {
          const results = dataRet.results;
          let text = "";
          results.forEach((item) => {
            const { title, opening_crawl, director, producer, release_date } =
              item;
            // res.write(
            //   `<p>${title} ${opening_crawl} ${director} ${producer} ${release_date}</p>`
            // );
            text += `<p>${title} : ${opening_crawl}: ${director} : ${producer} : ${release_date}</p><br>`;
          });
          res.send(text);
        }
        if (selectlist == "starships") {
          const results = dataRet.results;
          let text = "";
          results.forEach((item) => {
            const { name, model } = item;
            //res.write(`<p>${name} ${model} </p>`);
            text += `<p>${name} : ${model}</p><br>`;
          });
          res.send(text);
        } else {
          res.send(
            "<h1>This resource contains too many details. Sorry, we can’t process the data.<h1>"
          );
        }
      });
    });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
