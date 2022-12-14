const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter a book title"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
  },
  author: {
    type: String,
    required: [true, "Please enter an author"],
  },
  numberInStock: Number,
  liked: Boolean,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
