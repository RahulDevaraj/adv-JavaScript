import React, { useState } from "react";
import { createArray } from "../services/createArray";
import Star from "./star";
const StarRating = ({ totalStars = 5 }) => {
  const [selectedStars, setStars] = useState(4);
  return (
    <div>
      {createArray(totalStars).map((star, index) => {
        return (
          <Star
            key={index}
            selected={selectedStars > index}
            onClick={() => {
              setStars(index + 1);
            }}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
