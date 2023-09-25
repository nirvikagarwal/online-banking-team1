import "./IntersectionObserver";
import React from "react";
import { render, fireEvent, screen} from "@testing-library/react";
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
    fireEvent.change(screen.getByRole('textbox', {
      name: /beneficiary name/i
    }), { target: { value: "John Doe" } });

    fireEvent.change(screen.getByRole('textbox', {
      name: /account number/i
    }), { target: { value: "123456789" } });

    fireEvent.change(screen.getByRole('textbox', {
      name: /bank name/i
    }), {target: {value: "Bank"}});

    fireEvent.change(screen.getByRole('textbox', {
      name: /ifsc code/i
    }), {target: {value: "BARB0VJMNRE" }});

    // Simulate form submission
    await fireEvent.click(screen.getByRole('button', {
      name: /add/i
    }));

    expect(addBeneficiary).toHaveBeenCalled();
  });
});
