import logo from "./logo.svg";
import "./App.css";
import Star from "./components/star";
import StarRating from "./components/starRating";
import { useState } from "react";
import colorsList from "./external/color-data.json";
import ColorList from "./components/colorList";

function App() {
  const [colors, setColors] = useState(colorsList);
  console.log(colorsList);
  return (
    <ColorList
      colors={colors}
      onRemoveColor={(id) => {
        const newColors = colors.filter((color) => id !== color.id);
        setColors(newColors);
      }}
      onRateStars={(id, rating) => {
        const newColors = colors.map((color) =>
          color.id === id ? { ...color, rating } : { ...color }
        );
        setColors(newColors);
      }}
    />
  );
}

export default App;
