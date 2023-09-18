import { NavLink } from "react-router-dom";
import Logo from "../assets/images/Logo.jpg";
import "./Navbar.css";

const navLinkStyle = {
  color: "black", // Change link color
  textDecoration: "none", // Remove underline
  padding: "10px 20px", // Add padding
  borderRadius: "5px", // Add rounded corners
  transition: "background-color 0.2s ease",
};

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navb">
      <div className="logo">
        <img src={Logo} alt="#" />
      </div>
      <div className="container-fluid">
        <ul className="nav nav-tabs navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink
              style={navLinkStyle}
              className="nav-link hov"
              aria-current="page"
              to="/"
              activeClassName="active"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              style={navLinkStyle}
              className="nav-link hov"
              to="/userRegistration"
              activeClassName="active"
            >
              Register
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              style={navLinkStyle}
              className="nav-link hov"
              to="/login"
              activeClassName="active"
            >
              Login
            </NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink
              style={navLinkStyle}
              className="nav-link hov"
              to="/userTable"
              activeClassName="active"
            >
              user table
            </NavLink>
          </li> */}
          <li className="nav-item">
            <NavLink
              style={navLinkStyle}
              className="nav-link hov"
              to="/createAccount"
              activeClassName="active"
            >
              Open Account
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              style={navLinkStyle}
              className="nav-link hov"
              to="/netBanking"
              activeClassName="active"
            >
              Net Banking
            </NavLink>
          </li>
        </ul>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success but" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;