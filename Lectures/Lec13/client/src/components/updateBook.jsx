import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const UpdateBook = ({ onUpdate }) => {
  const { id } = useParams();
  const url = `http://localhost:5000/api/getBook/${id}`;

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState("");
  const [numberInStock, setNumberInStock] = useState("");
  const [liked, setLiked] = useState("");
  const [_id, setId] = useState("");

  const getABook = async () => {
    await axios.get(url).then((res) => {
      setTitle(res.data.title);
      setAuthor(res.data.author);
      setRating(res.data.rating);
      setNumberInStock(res.data.numberInStock);
      setLiked(res.data.liked);
      setId(res.data._id);
    });
  };

  useEffect(() => {
    getABook();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { _id, title, author, rating, numberInStock, liked };
    onUpdate(book);
    // setTitle("");
    // setAuthor("");
    // setRating("");
    // setNumberInStock("");
    // setLiked("");

    // document.getElementById("title").value = "";
    // document.getElementById("author").value = "";
    // document.getElementById("rating").value = "";
    // document.getElementById("numberInStock").value = "";
    // document.getElementById("liked").value = "";
  };

  return (
    <div>
      <h1>Update Book {title}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="rating">Rating</label>
          <input
            type="text"
            name="rating"
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            name="author"
            id="author"
            value={author}
            readOnly={true}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="numberInStock">NIS</label>
          <input
            type="text"
            name="numberInStock"
            id="numberInStock"
            value={numberInStock}
            onChange={(e) => setNumberInStock(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="liked">Liked</label>
          <input
            type="text"
            name="liked"
            id="liked"
            value={liked}
            onChange={(e) => setLiked(e.target.value)}
          />
        </div>
        <button type="submit">Update Book</button>
      </form>
    </div>
  );
};

export default UpdateBook;
