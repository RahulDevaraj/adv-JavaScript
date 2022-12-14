import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/features">Features</Link>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
