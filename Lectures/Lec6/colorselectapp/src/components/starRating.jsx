import { useState } from "react";
import { createArray } from "../external/createArray";
import Star from "./star";

const StarRating = ({ totalStars = 5, selectedStars, onRate }) => {
  return (
    <>
      {createArray(totalStars).map((star, index) => {
        return (
          <Star
            key={index}
            selected={selectedStars > index}
            onClick={() => onRate(index + 1)}
          />
        );
      })}
      <p>
        {selectedStars} out of {totalStars}
      </p>
    </>
  );
};

export default StarRating;
