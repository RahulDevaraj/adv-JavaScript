const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("public"));
mongoose.set("strictQuery", true);

const url = "mongodb://localhost:27017/finalexamDB";
//add data
const Recipe = require("./models/recipes");
app.post("/addAll", (req, res) => {
  const data = req.body;
  // console.log(data);
  mongoose.connect(url);
  //   Recipe.insertMany(data)
  //     .then((result) => {
  //       res.send(result);
  //       console.log("data added to db");
  //       mongoose.connection.close();
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       mongoose.connection.close();
  //     });
  Recipe.insertMany(data, (error, docs) => {
    if (error) {
      console.log(error);
    } else {
      console.log("docs added to db");
      res.send(docs);
      mongoose.connection.close();
    }
  });
});
//deleteAll
app.delete("/deleteAll", (req, res) => {
  mongoose.connect(url);
  Recipe.deleteMany({})
    .then((result) => {
      res.send("deleted all data");
      mongoose.connection.close();
    })
    .catch((err) => {
      console.log(err);
      mongoose.connection.close();
    });
});

app.delete("/api/deleteOne/:id", async (req, res) => {
  try {
    let id = req.params.id;
    id = mongoose.Types.ObjectId(id);

    await mongoose.connect(url);
    await Recipe.deleteOne({ _id: id }, (err, msg) => {
      if (err) {
        res.status(500).send(err);
      } else if (msg.deletedCount == 0) {
        res.status(404).send("No such product");
      } else {
        res.status(200).send(msg.deletedCount + "Products deleted");
        mongoose.connection.close();
      }
    });
  } catch (err) {
    console.log("Delete Outer Catch" + err);
  }
});

app.get("/api/getOne/:id", async (req, res) => {
  try {
    let id = req.params.id;
    id = mongoose.Types.ObjectId(id);

    await mongoose.connect(url);
    await Recipe.findOne({ _id: id }, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else if (result == null) {
        res.status(404).send("No such RecipesRecipes");
      } else {
        res.status(200).send(result);
        mongoose.connection.close();
      }
    });
  } catch (err) {
    console.log("Read One Outer Catch" + err);
  }
});

app.put("/api/updateRecipe/:id", async (req, res) => {
  try {
    let id = req.params.id;
    id = mongoose.Types.ObjectId(id);

    let product = req.body;
    await mongoose.connect(url);
    await Recipe.updateOne({ _id: id }, product, (err, msg) => {
      if (err) {
        res.status(500).send(err);
      } else if (msg.modifiedCount == 0) {
        res.status(404).send("No such Recipes");
      } else {
        res.status(200).send(msg.modifiedCount + "Recipes updated");
        mongoose.connection.close();
      }
    });
  } catch (err) {
    console.log("Update Outer Catch" + err);
  }
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
