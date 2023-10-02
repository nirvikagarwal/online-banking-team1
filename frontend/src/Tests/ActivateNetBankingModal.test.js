import ActivateNetBankingModal from "../components/ActivateNetBankingModal";
import React from "react";
import { render, fireEvent } from "@testing-library/react";

jest.mock("react-router-dom", () => ({
  useNavigate: jest.fn(),
}));

describe("ActivateNetBankingModal", () => {
  const mockHandleClose = jest.fn();
  const mockNavigate = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    jest.mock("react-router-dom", () => ({
      useNavigate: () => mockNavigate,
    }));
  });

  test("renders correctly", () => {
    const { getByText } = render(
      <ActivateNetBankingModal show={true} handleClose={mockHandleClose} />
    );

    expect(getByText("Net Banking not enabled on this account")).toBeInTheDocument();
    expect(getByText("Please activate netBank on your account!")).toBeInTheDocument();
    expect(getByText("Close")).toBeInTheDocument();
    expect(getByText("Activate")).toBeInTheDocument();
  });

  test("calls handleClose when Close button is clicked", () => {
    const { getByText } = render(
      <ActivateNetBankingModal show={true} handleClose={mockHandleClose} />
    );

    fireEvent.click(getByText("Close"));
    expect(mockHandleClose).toHaveBeenCalled();
  });

//   test("calls navigate when Activate button is clicked", () => {
//     const { getByText } = render(
//       <ActivateNetBankingModal show={true} handleClose={mockHandleClose} />
//     );

//     fireEvent.click(getByText("Activate"));
//     expect(mockNavigate).toHaveBeenCalledWith("/activateNetBanking");
//   });
});
