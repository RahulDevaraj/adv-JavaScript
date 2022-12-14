import { useState } from "react";
const AddBook = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState("");
  const [numberInStock, setNumberInStock] = useState("");
  const [liked, setLiked] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { title, author, rating, numberInStock, liked };
    onAdd(book);
    setTitle("");
    setAuthor("");
    setRating("");
    setNumberInStock("");
    setLiked("");
    //clear the form

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("rating").value = "";
    document.getElementById("numberInStock").value = "";
    document.getElementById("liked").value = "";
  };
  return (
    <div>
      <h1>Add Book Here</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="rating">Rating</label>
          <input
            type="text"
            name="rating"
            id="rating"
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            name="author"
            id="author"
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="numberInStock">NIS</label>
          <input
            type="text"
            name="numberInStock"
            id="numberInStock"
            onChange={(e) => setNumberInStock(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="liked">Like</label>
          <input
            type="text"
            name="liked"
            id="liked"
            onChange={(e) => setLiked(e.target.value)}
          />
        </div>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
