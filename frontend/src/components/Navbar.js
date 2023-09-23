import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/images/bank-logo.png";
import { GetUserContext } from "../context/UserContext";
import { Image, Navbar } from "react-bootstrap";
import "./Navbar.css";

const navLinkStyle = {
  color: "black", // Change link color
  // backgroundColor: "black",
  textDecoration: "none !important", // Remove underline
  padding: "10px 20px", // Add padding
  borderRadius: "5px", // Add rounded corners
  transition: "background-color 0.2s ease",
};

const NavbarComponent = () => {
  const navigate = useNavigate();
  const { user, setUser } = GetUserContext();

  const handleClick = () => {
    localStorage.removeItem("token");
    setUser({ isLoggedIn: false });
    navigate("/");
  };
  return (
    <nav className="navbar navbar-expand-lg navb">
      <div className="logo">
        <img src={Logo} alt="#" />
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div className="container-fluid" style={{ textDecoration: "none" }}>
        <ul
          className="nav nav-tabs navbar-nav me-auto mb-2 mb-lg-0"
          style={{ textDecoration: "none" }}
        >
          <li className="nav-item hov">
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
          {!user.isLoggedIn && (
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
          )}
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
          {user.isLoggedIn && (
            <li className="nav-item">
              <NavLink
                style={navLinkStyle}
                className="nav-link hov"
                to="/activateNetBanking"
                activeClassName="active"
              >
                Activate Net Banking
              </NavLink>
            </li>
          )}
          {user.isLoggedIn && (
            <li className="nav-item">
              <button
                className="btn btn-outline-light btn-sm"
                style={navLinkStyle}
                type="button"
                onClick={handleClick}
              >
                Logout
              </button>
            </li>
          )}
        </ul>
        {/* <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-primary but" type="submit">
            Search
          </button>
        </form> */}
        {user.isLoggedIn && (
          <Image
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            roundedCircle
            className="float-end"
            style={{ width: "40px", height: "40px" }}
            alt="Avatar"
          />
        )}
      </div>
    </nav>
  );
};

export default NavbarComponent;
