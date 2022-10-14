import React from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ selected = false, onClick }) => {
  return <FaStar color={selected ? "red" : "grey"} onClick={onClick} />;
};

export default Star;
