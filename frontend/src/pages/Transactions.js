
import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import { Container, Row, Col, Form, Button, Table } from "react-bootstrap";
import { getTransactions, getAccount} from "../utils/apiHelper";
//import "./TransactionsPage.css"; // Create a CSS file for custom styles

function TransactionsPage() {
  const [selectedAccount, setSelectedAccount] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [accounts,setAccounts] = useState([]);
  const {userId} = useParams();


  useEffect(()=>{
    
    const func = async(userId) =>{
      const response = await getAccount(userId);
      console.log(response);
      if(response) setAccounts(response)
    }
    func(userId);
   
  },[])

 
  useEffect(() => {
    if (selectedAccount) {
      console.log(selectedAccount)
      const func = async(selectedAccount) =>{
        const response = await getTransactions(selectedAccount);
        if(response) setTransactions(response);
        func();
        console.log(transactions)
      }
      
    }
  }, [selectedAccount]);

  
  const handleDownloadPDF = () => {
   
  };

  return (
    <Container>
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
               
                  setSelectedAccount(e.target.value)
                  
                }}
              >
            <option value ="">Select an Account</option>
                {accounts.map((account,index)=>{
                  return <option  key={index} value={account.accountNo}>{account.accountNo}</option>
                })}
              </Form.Control>
            </Form.Group>
            <Button variant="primary" onClick={handleDownloadPDF} className='mt-4'>
              Download PDF
            </Button>
          </Form>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={transaction.transactionId}>
                 
                  <td>{transaction.amount}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default TransactionsPage;