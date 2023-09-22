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
    expect(getByText("Explore More")).toBeInTheDocument();
  });

  test("calls navigate when Explore More button is clicked", () => {
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);

    const { getByText } = render(
      <OpenAccountModal show={true} handleClose={mockHandleClose} />
    );

    fireEvent.click(getByText("Explore More"));
    expect(mockNavigate).toHaveBeenCalledWith("/user");
  });

  test("calls handleClose when Close button is clicked", () => {
    const { getByText } = render(
      <OpenAccountModal show={true} handleClose={mockHandleClose} />
    );

    fireEvent.click(getByText("Close"));
    expect(mockHandleClose).toHaveBeenCalled();
  });
});
