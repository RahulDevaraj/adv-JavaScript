const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const Book = require("./models/books");

mongoose.set("strictQuery", true);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
//vonnect db
const url = "mongodb://localhost:27017/bookstore";
//create
app.post("/api/postBook", async (req, res) => {
  try {
    await mongoose.connect(url);
    console.log("connected to db for post");
    const book = new Book({
      title: req.body.title,
      rating: req.body.rating,
      author: req.body.author,
      numberInStock: req.body.numberInStock,
      like: req.body.like,
    });
    book.save((err, book) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        res.send(book);
        console.log("book saved");
        mongoose.connection.close();
      }
    });
  } catch (error) {
    console.log(error);
  }
});

//read
app.get("/api/getBooks", async (req, res) => {
  try {
    await mongoose.connect(url);
    console.log("connected to db");
    await Book.find({}, (err, books) => {
      if (err) {
        console.log(err);
      } else {
        res.send(books);
        console.log("books sent");
        mongoose.connection.close();
      }
    });
  } catch (error) {
    console.log(error);
  }
});

//update
app.put("/api/updateBook/:id", async (req, res) => {
  try {
    let id = req.params.id;
    id = mongoose.Types.ObjectId(id);
    const { title, rating, author, numberInStock, like } = req.body;
    await mongoose.connect(url);
    Book.updateOne(
      { _id: id },
      { title, rating, author, numberInStock, like },
      (err, msg) => {
        if (err) {
          console.log(err);
          res.send(err);
        } else {
          if (msg.modifiedCount === 0) {
            console.log(`No matching document found`);
            res.send(`No matching document found`);
          } else {
            res.send(`Updated ${msg.modifiedCount} document`);
            mongoose.connection.close();
          }
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
});
//delete
app.delete("/api/deleteBook/:id", async (req, res) => {
  try {
    let id = req.params.id;
    id = mongoose.Types.ObjectId(id);
    await mongoose.connect(url);
    Book.deleteOne({ _id: id }, (err, msg) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        if (msg.deletedCount === 0) {
          console.log(`No matching document found`);
          res.send(`No matching document found`);
        } else {
          res.send(`Deleted ${msg.deletedCount} document`);
          mongoose.connection.close();
        }
      }
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});

//6. Adding many documents
/* Book.insertMany([book2,book3,book4], (err, docs)=>{
    if (err) console.log("ERROR: ", err)
    else console.log("Successfully saved the documents to the booksDB", docs)
}) */

//7. reading the documents from the db

/* Book.find((err,books)=>{
 if(err) console.log("ERROR: ", err);
 else console.log(`Found ${books.length} documents ${books}`)
}) */

//8. find only one
/* Book.findOne(
    {title: "Eloquent JavaScript"},
    (err,book)=>{
        if(err) console.log("ERROR: ", err);
        else console.log("Found", book)
    }
) */

//9. Update

/* Book.updateOne(
    {title: "Eloquent JavaScript"},
    {title: "Introduction to JavaScript"},
    (err,msg)=>{
        if(err) console.log("ERROR: ", err);
        else console.log("Updated", msg)
    }

) */

//10. deleteMAny

// Book.deleteMany(
//     {title: "Introduction to JavaScript"},
//     (err,msg)=>{
//         if(err) console.log("ERROR: ", err);
//         else console.log("Deleted", msg.deletedCount)
//     }
// )
