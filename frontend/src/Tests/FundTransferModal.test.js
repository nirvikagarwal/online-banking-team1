import React from "react";
import { render, fireEvent } from "@testing-library/react";
import FundTransferModal from "../components/FundTransferModal";
import { useNavigate } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

describe("FundTransferModal", () => {
  const mockHandleClose = jest.fn();

  test("renders correctly", () => {
    const { getByText } = render(
      <FundTransferModal show={true} handleClose={mockHandleClose} />
    );

    expect(getByText("Fund Transfer was successful!")).toBeInTheDocument();
    expect(getByText("Close")).toBeInTheDocument();
    expect(getByText("View Transactions")).toBeInTheDocument();
  });

  test("calls navigate when View Transactions button is clicked", () => {
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);

    const { getByText } = render(
      <FundTransferModal show={true} handleClose={mockHandleClose} />
    );

    fireEvent.click(getByText("View Transactions"));
    expect(mockNavigate).toHaveBeenCalledWith("/transactions/undefined");
  });

  test("calls handleClose when Close button is clicked", () => {
    const { getByText } = render(
      <FundTransferModal show={true} handleClose={mockHandleClose} />
    );

    fireEvent.click(getByText("Close"));
    expect(mockHandleClose).toHaveBeenCalled();
  });
});
