import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import "./ActivateNetBanking.css"; // Create a CSS file for custom styles
import { GetUserContext } from "../context/UserContext";
import {
  getCurrentUser,
  getAccount,
  activateNetBanking,
} from "../utils/apiHelper";

function ActivateNetBanking() {
  const [transactionPassword, setTransactionPassword] = useState("");
  const [accountNo, setAccountNo] = useState();
  const [message, setMessage] = useState("");

  const handleActivation = async (e) => {
    e.preventDefault();
    const response = await activateNetBanking({
      transactionPassword,
      accountNo,
    });
    if (response) {
      setAccountNo("");
      setTransactionPassword("");
      console.log(response);

      setMessage("Net Banking activated successfully!");
    }
  };

  return (
    <Container fluid style={{ height: "60vh", marginBottom: "100px" }}>
      <Row className="justify-content-center mt-4">
        <Col md={6}>
          <Card className="mt-4 shadow-lg rounded" bg="light">
            <Card.Body>
              <h5 className="card-title">Activate Net Banking</h5>
              <p className="card-text text-reset">
                Enjoy the benefits of Net Banking:
              </p>
              <ul>
                <li>Convenient fund transfers</li>
                <li>Access to transaction history</li>
                <li>24/7 account management</li>
              </ul>
              <Form onSubmit={handleActivation}>
                <Form.Group controlId="transactionPassword">
                  <Form.Label>Set Transaction Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your transaction password"
                    value={transactionPassword}
                    onChange={(e) => setTransactionPassword(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="accountNo" className="mt-2">
                  <Form.Label>Fill Account Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter account number"
                    value={accountNo}
                    onChange={(e) => setAccountNo(e.target.value)}
                    required
                  />
                </Form.Group>
                <Button variant="secondary" type="submit" className="mt-4">
                  Activate Net Banking
                </Button>
              </Form>
              {message && <p className="mt-3 text-success">{message}</p>}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ActivateNetBanking;
