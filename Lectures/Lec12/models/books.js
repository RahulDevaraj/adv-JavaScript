const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  rating: { type: Number, required: [true, "please rate"], min: 1, max: 10 },
  author: String,
  numberInStock: Number,
  like: Boolean,
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
