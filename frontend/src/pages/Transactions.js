import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
import { getTransactions, getAccount } from "../utils/apiHelper";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
//import "./TransactionsPage.css"; // Create a CSS file for custom styles

function TransactionsPage() {
  const [selectedAccount, setSelectedAccount] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const { userId } = useParams();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const func = async (userId) => {
      const response = await getAccount(userId);
      console.log(response);
      if (response) setAccounts(response);
    };
    func(userId);
  }, []);

  useEffect(() => {
    if (selectedAccount) {
      console.log(selectedAccount);
      const func = async (selectedAccount) => {
        const response = await getTransactions(selectedAccount);
        if (response) setTransactions(response);
        console.log(transactions);
      };
      func(selectedAccount);
    }
  }, [selectedAccount]);

  const handleDownloadPDF = () => {
    const capture = document.querySelector("#transactions");
    setLoader(true);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF("l", "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth() - 1;
      let componentHeight = doc.internal.pageSize.getHeight();
      componentHeight -= componentHeight / 1.4;
      console.log(componentWidth + 1, componentHeight + 160);
      doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save("transactions.pdf");
    });
  };

  return (
    <Container style={{ minHeight: "75vh" }}>
      <Row className="mt-4">
        <Col md={6}>
          <h2>Transactions</h2>
          <Form>
            <Form.Group controlId="selectAccount">
              <Form.Label>Select Account Number:</Form.Label>
              <Form.Control
                as="select"
                value={selectedAccount}
                onChange={(e) => {
                  setSelectedAccount(e.target.value);
                }}
              >
                <option value="">Select an Account</option>
                {accounts.map((account, index) => {
                  return (
                    <option key={index} value={account.accountNo}>
                      {account.accountNo}
                    </option>
                  );
                })}
              </Form.Control>
            </Form.Group>
            {loader ? (
              <button className="btn btn-primary mt-4" type="button" disabled>
                <span
                  className="spinner-grow spinner-grow-sm me-2"
                  aria-hidden="true"
                ></span>
                <span role="status">Downloading PDF </span>
              </button>
            ) : (
              <Button
                variant="primary"
                onClick={handleDownloadPDF}
                className="mt-4"
              >
                Download PDF
              </Button>
            )}
          </Form>
        </Col>
      </Row>

      <Row className="mt-4" id="transactions">
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Date</th>
                <th>
                  <span className="text-success">Credit</span>/
                  <span className="text-danger">Debit</span>
                </th>
                <th>To/From</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => {
                const date = new Date(transaction.timestamp);
                const credit = transaction.to.toString() === selectedAccount;
                const balance = credit
                  ? transaction.userStartBalance + transaction.amount
                  : transaction.userStartBalance - transaction.amount;

                return (
                  <tr key={transaction.transactionId}>
                    <td>{date.toLocaleString("en-IN")}</td>
                    {credit ? (
                      <td>
                        <span className="text-success">
                          {transaction.amount}
                        </span>
                      </td>
                    ) : (
                      <td>
                        <span className="text-danger">
                          {transaction.amount}
                        </span>
                      </td>
                    )}
                    <td>{credit ? transaction.from : transaction.to}</td>
                    <td>
                      <span>INR </span>
                      {balance}
                      <span>.00</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default TransactionsPage;
