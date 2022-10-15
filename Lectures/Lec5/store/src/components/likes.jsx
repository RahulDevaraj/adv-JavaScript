import { FaStar } from "react-icons/fa";
const Likes = ({ like }) => {
  return <FaStar color={like ? "green" : "red"} />;
};

export default Likes;
