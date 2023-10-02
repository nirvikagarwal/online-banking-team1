import React from "react";
import { render, fireEvent } from "@testing-library/react";
import RegistrationModal from "../components/RegistrationModal.js";

// Mock react-router-dom's useNavigate hook
jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(() => jest.fn()),
}));

describe("RegisterModal Component", () => {
  const handleCloseMock = jest.fn();

  const renderComponent = (show) => {
    return render(<RegistrationModal show={show} handleClose={handleCloseMock} />);
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders modal when show is true", () => {
    const { getByText } = renderComponent(true);

    expect(getByText("Registration Complete")).toBeInTheDocument();
    expect(getByText("Thank You for joining us!")).toBeInTheDocument();
  });

  it("does not render modal when show is false", () => {
    const { queryByText } = renderComponent(false);

    expect(queryByText("Registration Complete")).toBeNull();
    expect(queryByText("Thank You for joining us!")).toBeNull();
  });

  it("calls handleClose when Close button is clicked", () => {
    const { getByText } = renderComponent(true);

    const closeButton = getByText("Close");
    fireEvent.click(closeButton);

    expect(handleCloseMock).toHaveBeenCalled();
  });


});
