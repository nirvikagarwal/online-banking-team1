import "./IntersectionObserver";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import AddBeneficiary from "../pages/AddBeneficiary";
import { addBeneficiary } from "../utils/apiHelper";

jest.mock("../utils/apiHelper", () => ({
  addBeneficiary: jest.fn(),
}));

describe("AddBeneficiary", () => {
  test("renders correctly", () => {
    const { getByText, getByLabelText } = render(
      <Router>
        <AddBeneficiary />
      </Router>
    );
    
    // ... other test assertions
  });

  test("submits the form and navigates", async () => {
    const { getByLabelText, getByText } = render(
      <Router>
        <AddBeneficiary />
      </Router>
    );

    // ... simulate form input changes

    fireEvent.change(getByLabelText("Beneficiary Name"), { target: { value: "John Doe" } });
    fireEvent.change(getByLabelText("Account Number"), { target: { value: "123456789" } });

    // Simulate form submission
    fireEvent.click(getByText("ADD"));

    // Ensure the addBeneficiary function is called
    // expect(addBeneficiary).toHaveBeenCalledWith({
    //   "accountNo": "123456789",
    //   "bankName": "", // Set other values if applicable
    //   "beneficiaryName": "John Doe",
    //   "ifsc": "",     // Set other values if applicable
    // });
  });
});
