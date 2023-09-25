import './IntersectionObserver';
import React from 'react';
import { render, screen, fireEvent, getByRole } from '@testing-library/react';
import { BrowserRouter as Router } from "react-router-dom";
import CreateAccount from '../pages/CreateAccountPage';
import { GetUserContext } from "../context/UserContext";

jest.mock('../context/UserContext', () => ({
  GetUserContext: () => ({ user: { isLoggedIn: false }, setUser: jest.fn() }),
}));

jest.mock("../utils/apiHelper", () => ({
    openAccount: jest.fn(),
  }));
  
  describe("CreateAccount", () => {
    test("renders correctly", () => {
      const { getByText } = render(
        <Router>
        <CreateAccount />
        </Router>);
      
      expect(screen.getByRole('button', { name: 'CREATE ACCOUNT' })).toBeInTheDocument();
      expect(getByText("Account Type")).toBeInTheDocument();
      expect(getByText("Select Branch")).toBeInTheDocument();
      // ... add more assertions for other form elements
    });
  
    test("submits the form and opens the modal", async () => {
      const { getByLabelText, getByText } = render(<Router>
        <CreateAccount />
        </Router>);
      
      fireEvent.change(getByText("Account Type"), { target: { value: "savings" } });
      fireEvent.change(getByText("Select Branch"), { target: { value: "gachibowli" } });
      fireEvent.change(getByLabelText("Occupation"), { target: { value: "Engineer" } });
      fireEvent.change(getByLabelText("Gross Annual Income"), { target: { value: "50000" } });
  
      fireEvent.click(screen.getByRole('button', { name: 'CREATE ACCOUNT' }));
  
    });
  });
  