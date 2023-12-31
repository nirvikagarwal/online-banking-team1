import React from "react";
import { render, fireEvent } from "@testing-library/react";
import OpenAccountModal from "../components/OpenAccountModel";
import { useNavigate } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

describe("OpenAccountModal", () => {
  const mockHandleClose = jest.fn();

  test("renders correctly", () => {
    const { getByText } = render(
      <OpenAccountModal show={true} handleClose={mockHandleClose} />
    );

    expect(getByText("Account successfully created")).toBeInTheDocument();
    expect(getByText("Thank You for trusting us!")).toBeInTheDocument();
    expect(getByText("Close")).toBeInTheDocument();
  });
  

  test("calls handleClose when Close button is clicked", () => {
    const { getByText } = render(
      <OpenAccountModal show={true} handleClose={mockHandleClose} />
    );

    fireEvent.click(getByText("Close"));
    expect(mockHandleClose).toHaveBeenCalled();
  });
});
