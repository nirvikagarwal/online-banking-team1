// import React from "react";
// import "./Footer.css";
// import Email from "../assets/images/Email.png";
// import contact from "../assets/images/contact.png";

// function Footer() {
//   return (
//     <footer className="footer">
//       <div className="container">
//         <div className="footer-content">
//           <div className="footer-section about">
//             <h2>About Us</h2>
//             <div>
//               The best banking service provider. One place for all your banking
//               essentials.
//             </div>
//           </div>

//           <div className="footer-section contact">
//             <h2 className="mb-2">Contact Us</h2>
//             <h6 className="email">
//               <img src={Email} alt="#" />
//               premierbank@gmail.com
//             </h6>
//             <h5 className="email">
//               <img src={contact} alt="#" />
//               +91 6299674639
//             </h5>
//           </div>
//           <div className="footer-bottom">
//             <h6>
//               &copy; {new Date().getFullYear()} Premier Private Bank,
//               <br /> All rights reserved
//             </h6>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const linkStyle = { textDecoration: "none", color: "purple" };
const Footer = () => {
  return (
    <footer
      className="footer "
      style={{
        backgroundColor: "#A1B7F3",
        paddingTop: "2rem",
        paddingBottom: "1rem",
        color: "purple",
        fontSize: "17px",
      }}
    >
      <Container fluid>
        <Row style={{ paddingLeft: "10rem" }}>
          <Col md={4}>
            <h5>Contact Us</h5>
            <div>
              Customer Support:+1 (800) 123-4567
              <br />
              Email: support@cashswift.com
              <br />
              Address: Hyderabad, India
            </div>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" style={linkStyle}>
                  Home
                </a>
              </li>
              <li>
                <a href="/accounts" style={linkStyle}>
                  Accounts
                </a>
              </li>
              <li>
                <a href="/transfers" style={linkStyle}>
                  Transfers
                </a>
              </li>
              <li>
                <a href="/payments" style={linkStyle}>
                  Payments
                </a>
              </li>
              <li>
                <a href="/statements" style={linkStyle}>
                  Statements
                </a>
              </li>
              <li>
                <a href="/security" style={linkStyle}>
                  Security and Privacy
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Legal</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/terms" style={linkStyle}>
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a href="/privacy" style={linkStyle}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/cookie" style={linkStyle}>
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="/compliance" style={linkStyle}>
                  Compliance
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <div
              className="text-center"
              style={{
                color: "black",
                paddingRight: "4rem",
                paddingLeft: "0rem",
                textAlign: "center",
              }}
            >
              &copy; {new Date().getFullYear()} All rights reserved.
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
