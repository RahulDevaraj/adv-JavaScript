import "bootstrap/dist/css/bootstrap.css";
const Delete = ({ onClick }) => {
  return (
    <button className="btn btn-danger" onClick={onClick}>
      Delete
    </button>
  );
};

export default Delete;
