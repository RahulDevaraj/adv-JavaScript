import { useState } from "react";
const AddColorForm = ({ onNewColor }) => {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#000000");

  const submitForm = (event) => {
    event.preventDefault();
    onNewColor(title, color);
    setTitle("");
    setColor("#000000");
  };
  return (
    <form onSubmit={submitForm}>
      <input
        type="text"
        value={title}
        placeholder="add a title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />

      <button>Add</button>
    </form>
  );
};

export default AddColorForm;
