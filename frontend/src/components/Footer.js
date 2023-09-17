import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="footer mt-5 py-3 bg-light ">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Contact Us</h5>
            <div>
              Customer Support: 1-800-123-4567
              <br />
              Email: support@bank.com
              <br />
              Address: Hyderabad, India
            </div>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" style={{ textDecoration: "none", color: "black" }}>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/accounts"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Accounts
                </a>
              </li>
              <li>
                <a
                  href="/transfers"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Transfers
                </a>
              </li>
              <li>
                <a
                  href="/payments"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Payments
                </a>
              </li>
              <li>
                <a
                  href="/statements"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Statements
                </a>
              </li>
              <li>
                <a
                  href="/security"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Security and Privacy
                </a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Legal</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="/terms"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Terms and Conditions
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/cookie"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="/compliance"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Compliance
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="text-center text-muted">
              &copy; {new Date().getFullYear()} All rights reserved.
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
