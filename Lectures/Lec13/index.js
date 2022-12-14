const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
mongoose.set("strictQuery", false);
app.use(bodyParser.json());
app.use(cors());
url = "mongodb://localhost:27017/booksDB";

const Book = require("./models/books");

//add a book
app.post("/api/addBook", async (req, res) => {
  try {
    const { title, rating, author, numberInStock, liked } = req.body;
    //console.log(title, rating, author, numberInStock, liked);
    const book = new Book({
      title,
      rating,
      author,
      numberInStock,
      liked,
    });
    //connect to db

    await mongoose.connect(url);

    await book.save((err, book) => {
      if (err) {
        res.status(500).send(err);
      } else {
        console.log(" added to database");
        res.status(200).send(book);
        mongoose.connection.close();
      }
    });
  } catch (err) {
    console.log("Error in adding Book" + err);
  }
});

//get all books
app.get("/api/getBooks", async (req, res) => {
  try {
    await mongoose.connect(url);
    await Book.find({}, (err, books) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(books);
        mongoose.connection.close();
      }
    });
  } catch (err) {
    console.log("Error in getting all Books" + err);
  }
});
//get a book
app.get("/api/getBook/:id", async (req, res) => {
  try {
    let id = req.params.id;
    id = mongoose.Types.ObjectId(id);

    await mongoose.connect(url);
    await Book.findOne({ _id: id }, (err, book) => {
      if (err) {
        res.status(500).send(err);
      } else if (book === null) {
        res.status(404).send("Book not found");
      } else {
        res.status(200).send(book);
        mongoose.connection.close();
      }
    });
  } catch (err) {
    console.log("Error in getting Book" + err);
  }
});

app.delete("/api/deleteBook/:id", async (req, res) => {
  try {
    let id = req.params.id;
    id = mongoose.Types.ObjectId(id);
    await mongoose.connect(url);
    await Book.findByIdAndDelete(id, (err, book) => {
      if (err) {
        res.status(500).send("Deletion error" + err);
      } else if (book == null) {
        res.status(404).send("Book not found");
      } else {
        res.status(200).send("Book deleted");
        mongoose.connection.close();
      }
    });
  } catch (err) {
    console.log("Error in deleting Book" + err);
  }
});

app.put("/api/updateBook/:id", async (req, res) => {
  try {
    let id = req.params.id;
    id = mongoose.Types.ObjectId(id);
    const { title, rating, author, numberInStock, liked } = req.body;
    const updateBook = { title, rating, author, numberInStock, liked };
    await mongoose.connect(url);
    await Book.updateOne({ _id: id }, updateBook, (err, msg) => {
      if (err) {
        res.status(500).send("Update error" + err);
      } else {
        if (msg.modifiedCount === 0) {
          console.log(`No matching document found`);
          res.send(`No matching document found`);
        } else {
          console.log(`Updated ${msg.modifiedCount} document`);
          res.send(`Updated ${msg.modifiedCount} document`);
          mongoose.connection.close();
        }
      }
    });
  } catch (err) {
    console.log("Error in updating Book" + err);
  }
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
