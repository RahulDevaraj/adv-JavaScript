const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const axios = require("axios");
const app = express();

app.use(express.urlencoded({ extended: true }));
const apikey = "24654365-43d3af0888c129eaa80439c84";
//setting up the routes
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/imageGallery2.html");
});
app.post("/", (req, res) => {
  let { input1, inpu2 } = req.body;
  input1 = input1.replace(" ", "+");
  const url = `https://pixabay.com/api/?key=${apikey}&q=${input1}`;
  // https.get(url, (response) => {
  //   console.log(response.statusCode);

  //   let data = "";
  //   response.on("data", (chunk) => {
  //     data += chunk;
  //   })
  //   response.on("end", () => {
  //     data = JSON.parse(data);
  //     console.log(data);
  //     //res.render("imageGallery3.ejs",{data})
  //   })
  // });

  axios.get(url)
    .then((res) => {
      console.log("Resolved: ", res.data);
      
      //data = res.data
      //res.render("imageGallery3.ejs",{data})
    })
    .catch((err) => {
      console.log("ERROR: ", err);
    });
});

app.listen(3000, () => {
  console.log("The server is up and running on port 3000.");
});
