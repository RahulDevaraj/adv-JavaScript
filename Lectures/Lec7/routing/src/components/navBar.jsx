import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          {/*   <li className="nav-item active">
                    <Link className="nav-link" to="about">About </Link>
                </li> */}
          <Link className="navbar-brand" to="#">
            MyApp
          </Link>

          <li className="nav-item dropdown">
            <Link
              className="nav-link dropdown-toggle"
              to="about"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              About
            </Link>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <Link className="dropdown-item" to="about">
                Company
              </Link>
              <Link className="dropdown-item" to="/about/services">
                Services
              </Link>
              <Link className="dropdown-item" to="/about/history">
                History
              </Link>
              <Link className="dropdown-item" to="/about/location">
                Location
              </Link>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="events">
              Events
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="products">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to="contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
