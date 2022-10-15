import logo from "./logo.svg";
import "./App.css";
import Delete from "./components/Delete";
import { getBooks } from "./external/bookService";
import TableNew from "./components/table";

function App() {
  const books = getBooks();

  return (
    <div className="App">
      <TableNew booklist={books} />
    </div>
  );
}

export default App;
