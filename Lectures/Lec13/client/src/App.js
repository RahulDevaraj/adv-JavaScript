import logo from "./logo.svg";
import NavBar from "./components/navBar";
import Home from "./components/home";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import axios from "axios";
import UpdateBook from "./components/updateBook";
import AddBook from "./components/addBook";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    //get all books
    const url = `http://localhost:5000/api/getBooks`;
    axios
      .get(url)
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.log("Error in getting Books");
      });
  }, []);

  const handleAdd = async (book) => {
    //add or post request
    const url = `http://localhost:5000/api/addBook`;
    await axios
      .post(url, book)
      .then((res) => {
        const newBooks = [...books, book];
        if (typeof res.data === "object") setBooks(newBooks);
        //navigate to home page
        navigate("/");
      })
      .catch((err) => {
        console.log(`ERROR: ${err}`);
      });
  };

  const handleUpdate = async (book) => {
    // console.log(book);
    const url = `http://localhost:5000/api/updateBook/${book._id}`;
    await axios
      .put(url, book)
      .then((res) => {
        const newBooks = books.map((b) => {
          if (b._id === book._id) return book;
          return b;
        });
        setBooks(newBooks);
        //navigate to home page
        navigate("/");
      })
      .catch((err) => {
        console.log(`Update ERROR: ${err}`);
      });
  };

  const handleDelete = async (id) => {
    console.log(id);
    const url = `http://localhost:5000/api/deleteBook/${id}`;
    const { data } = await axios.delete(url).catch((err) => {
      console.log(`Delete ERROR: ${err}`);
    });

    const newBooks = books.filter((book) => book._id !== id);
    setBooks(newBooks);
  };
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<Home books={books} onDelete={handleDelete} />}
        />
        <Route path="/add" element={<AddBook onAdd={handleAdd} />} />
        <Route
          path="/update/:id"
          element={<UpdateBook onUpdate={handleUpdate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
