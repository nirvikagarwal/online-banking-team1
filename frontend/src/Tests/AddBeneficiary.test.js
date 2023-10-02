import "./IntersectionObserver";
import React from "react";
import { render, fireEvent, screen} from "@testing-library/react";
import AddBeneficiary from "../pages/AddBeneficiary";

jest.mock("../utils/apiHelper", () => ({
  addBeneficiary: () => {{
    'Added successfully'
  }}
}));

jest.mock("../components/BeneficiaryModal", () => ({ show, handleClose }) => {
  return (
    <div data-testid="mocked-beneficiary-modal">
      {/* You can simulate the behavior of the component */}
      <button onClick={handleClose} data-testid="close-button">Close</button>
    </div>
  );
})

describe("AddBeneficiary", () => {
  test("renders correctly", () => {
    render(<AddBeneficiary />);
  });

  test("submits the form and navigates", async () => {
    render(<AddBeneficiary />);
      fireEvent.change(screen.getByRole('textbox', {
        name: /beneficiary name/i
      }), { target: { value: "John Doe" } });

      fireEvent.change(screen.getByRole('textbox', {
        name: /account number/i
      }), { target: { value: "123456789" } });

      fireEvent.change(screen.getByRole('textbox', {
        name: /bank name/i
      }), { target: { value: "Bank" } })

      fireEvent.change(screen.getByRole('textbox', {
        name: /ifsc code/i
      }), { target: { value: "BARB0VJMNRE" } });

    // Simulate form submission
    const button = screen.getByRole('button', {
      name: /add/i
    });
    await fireEvent.submit(button);

    expect(screen.getByRole('button', {
      name: /add/i
    })).toBeInTheDocument();
  });
});
