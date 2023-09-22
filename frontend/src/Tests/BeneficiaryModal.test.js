import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BeneficiaryModal from "../components/BeneficiaryModal";
import { useNavigate } from "react-router-dom";

jest.mock("react-router-dom", () => ({
    useNavigate: jest.fn(),
}));

describe("BeneficiaryModal", () => {
    const mockHandleClose = jest.fn();
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);

    test("renders correctly", () => {
        const { getByText } = render(
            <BeneficiaryModal show={true} handleClose={mockHandleClose} />
        );

        expect(getByText("Beneficiary added successfully!")).toBeInTheDocument();
        // expect(getByText("You can now transfer the funds.")).toBeInTheDocument();
        expect(getByText("Close")).toBeInTheDocument();
        expect(getByText("Fund Transfer")).toBeInTheDocument();
    });

    test("calls handleClose when Close button is clicked", () => {
        const { getByText } = render(
            <BeneficiaryModal show={true} handleClose={mockHandleClose} />
        );

        fireEvent.click(getByText("Close"));
        expect(mockHandleClose).toHaveBeenCalled();
    });

    test("calls navigate when Fund Transfer button is clicked", () => {
        useNavigate.mockReturnValue(mockNavigate);
        const { getByText } = render(
            <BeneficiaryModal show={true} handleClose={mockHandleClose} />
        );

        fireEvent.click(getByText("Fund Transfer"));
        expect(mockNavigate).toHaveBeenCalledWith("/fundTransfer");
    });
});
