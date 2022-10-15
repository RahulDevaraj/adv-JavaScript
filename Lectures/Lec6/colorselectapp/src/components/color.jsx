import { FaTrash } from "react-icons/fa";
import StarRating from "./starRating";
const Color = ({ id, title, color, rating, onRemove, onRate }) => {
  console.log(id, title, color);
  return (
    <section>
      <h1 style={{ padding: "5px" }}>{title}</h1>
      <button onClick={() => onRemove(id)}>
        <FaTrash />
      </button>
      <div style={{ height: 50, backgroundColor: color }}></div>
      <StarRating
        selectedStars={rating}
        onRate={(rating) => onRate(id, rating)}
      />
    </section>
  );
};

export default Color;
