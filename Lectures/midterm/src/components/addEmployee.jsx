import { useState } from "react";
const AddEmployee = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    onAdd(name, title, city);
    setName("");
    setTitle("");
    setCity("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        placeholder="Name here"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        value={title}
        placeholder="Title here"
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        value={city}
        placeholder="City here"
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddEmployee;
