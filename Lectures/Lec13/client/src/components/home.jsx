import { FaHeart, FaTrash, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
const Home = ({ books, onDelete }) => {
  return (
    <div>
      <h1>Home</h1>
      <table>
        <thead>
          <tr>
            <td>Title</td>
            <td>Rating</td>
            <td>Author</td>
            <td>NIS</td>
            <td>Status</td>
            <td colSpan={2}>Action</td>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td>{book.title}</td>
              <td>{book.rating}</td>
              <td>{book.author}</td>
              <td>{book.numberInStock}</td>
              <td>
                <FaHeart color={book.liked ? "red" : "grey"} />
              </td>
              <td>
                <Link to={`/update/${book._id}`}>
                  <FaEdit />
                </Link>
              </td>
              <td>
                <FaTrash onClick={() => onDelete(book._id)}></FaTrash>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
