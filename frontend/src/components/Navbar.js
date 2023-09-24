import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/images/bank-logo.png";
import { GetUserContext } from "../context/UserContext";
import { Image, Navbar } from "react-bootstrap";
import "./Navbar.css";

const navLinkStyle = {
  color: "purple", // Change link color
  textDecoration: "none !important", // Remove underline
  padding: "10px 20px", // Add padding
  borderRadius: "7px", // Add rounded corners
  transition: "background-color 0.2s ease",
  fontSize: "15px",
  fontFamily: "system-ui",
  fontWeight: "600",
};

const bankNameStyle = {
  color: "#1079c9",
  fontSize: "25px", // Adjust the font size as needed
  fontWeight: "bold",
  marginLeft: "10px", // Add some spacing between the logo and bank name
  marginRight: "10px",
  fontFamily: "'Croissant One', cursive",
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
    <nav className="navbar navbar-expand-lg navb" style={{ height: "8vh" }}>
      <div className="logo d-flex align-items-center">
        <img src={Logo} alt="#" />

        <NavLink
          style={bankNameStyle}
          className="nav-link hov"
          aria-current="page"
          to="/"
          activeClassName="active"
        >
          CashSwift
        </NavLink>
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
          className="nav nav-tabs navbar-nav mb-2 mb-lg-0 custom-class ms-auto"
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
          <li className="nav-item">
            <NavLink
              style={navLinkStyle}
              className="nav-link hov"
              to={`/activateNetBanking/${user.userId}`}
              activeClassName="active"
            >
              Activate Net Banking
            </NavLink>
          </li>
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
      </div>
    </nav>
  );
};

export default NavbarComponent;
