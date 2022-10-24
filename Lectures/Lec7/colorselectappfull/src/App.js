//npm install uuid for v4
import logo from "./logo.svg";
import "./App.css";
import { v4 } from "uuid";
import Star from "./components/star";
import StarRating from "./components/starRating";
import { useState } from "react";
import colorsList from "./external/color-data.json";
import ColorList from "./components/colorList";
import AddColorForm from "./components/addColorForm";

function App() {
  const [colors, setColors] = useState(colorsList);
  console.log(colorsList);
  return (
    <div>
      <AddColorForm
        onNewColor={(title, color) => {
          const newColors = [
            ...colors,
            {
              id: v4(),
              rating: 0,
              title,
              color,
            },
          ];

          setColors(newColors);
        }}
      />
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
    </div>
  );
}

export default App;
