import { useState } from "react";
import Delete from "./Delete";
import Likes from "./likes";

const TableNew = ({ booklist }) => {
  const [books, changeBooks] = useState(booklist);
  const { length } = books;
  if (length === 0) return <p>No Books Left</p>;
  else
    return (
      <div>
        <h1>Book Store</h1>
        <p>Showing {length} Books</p>
        <table style={{ marginLeft: "150px" }}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>CAtegory</th>
              <th>Author</th>
              <th>Number</th>
              <th>Price</th>
              <th>Year</th>
              <th>Review</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => {
              return (
                <tr key={index}>
                  <td>{book._id}</td>
                  <td>{book.title}</td>
                  <td>{book.category.name}</td>
                  <td>{book.author}</td>
                  <td>{book.numberInStock}</td>
                  <td>{book.price}</td>
                  <td>{book.publishYear}</td>
                  <td>
                    <Likes like={book.liked} />
                  </td>
                  <td>
                    <Delete onClick={() => handleDelete(book._id)} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  function handleDelete(id) {
    const newBooks = books.filter((book) => {
      return book._id !== id;
    });
    changeBooks(newBooks);
  }
};

export default TableNew;
