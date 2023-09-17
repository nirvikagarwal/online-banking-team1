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
          <li className="nav-item">
            <NavLink
              style={navLinkStyle}
              className="nav-link hov"
              to="/userTable"
              activeClassName="active"
            >
              user table
            </NavLink>
          </li>
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

// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <div className="container-fluid">
//         <Link to="/" className="navbar-brand">
//           Bank Name
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon" />
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <Link className="nav-link active" aria-current="page" to="/">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link active" to="/userRegistration">
//                 Register
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link active" to="/login">
//                 Login
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link active" to="/userTable">
//                 user table
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link active" to="/createAccount">
//                 Open Account
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link active" to="/netBanking">
//                 Net Banking
//               </Link>
//             </li>
//             {/* <li className="nav-item dropdown">
//               <div
//                 className="nav-link dropdown-toggle"
//                 id="navbarDropdown"
//                 role="button"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 Dropdown
//               </div>
//               <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                 <li>
//                   <a className="dropdown-item" href="#">
//                     Action
//                   </a>
//                 </li>
//                 <li>
//                   <a className="dropdown-item" href="#">
//                     Another action
//                   </a>
//                 </li>
//                 <li>
//                   <hr className="dropdown-divider" />
//                 </li>
//                 <li>
//                   <a className="dropdown-item" href="#">
//                     Something else here
//                   </a>
//                 </li>
//               </ul>
//             </li> */}
//           </ul>
//           <form className="d-flex">
//             <input
//               className="form-control me-2"
//               type="search"
//               placeholder="Search"
//               aria-label="Search"
//             />
//             <button className="btn btn-outline-success" type="submit">
//               Search
//             </button>
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
