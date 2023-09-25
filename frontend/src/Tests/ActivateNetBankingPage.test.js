import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ActivateNetBanking from '../pages/ActivateNetBankingPage';// Adjust the import path accordingly
import { activateNetBanking } from '../utils/apiHelper';
import { Router, useLoaderData } from "react-router-dom";

jest.mock('../utils/apiHelper', () => ({
  activateNetBanking: jest.fn(),
}));

const mockAccounts = [
  { accountNo: '12345678' },
  { accountNo: '87654321' },
  // ... add more mock accounts if needed
];

jest.mock("react-router-dom", () => ({
  useLoaderData: jest.fn(() => { accounts: mockAccounts }),
}));

describe('ActivateNetBanking', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the component', () => {
    const { getByText } = <Router>render(<ActivateNetBanking />)</Router>;
    // expect(screen.getByRole('heading', { level: 5})).toBeInTheDocument();
  });

  // it('handles activation correctly', async () => {
  //   const mockResponse = { success: true };
  //   activateNetBanking.mockResolvedValue(mockResponse);

  //   const { getByText } = <Router>render(<ActivateNetBanking />)</Router>;
  //   fireEvent.change(screen.getByLabelText('Set Transaction Password'), {
  //     target: { value: 'password123' },
  //   });
  //   fireEvent.change(screen.getByLabelText('Select Account Number:'), {
  //     target: { value: '12345678' },
  //   });
  //   fireEvent.click(screen.getByText('Activate Net Banking'));

  //   await waitFor(() => {
  //     expect(activateNetBanking).toHaveBeenCalledWith({
  //       transactionPassword: 'password123',
  //       accountNo: '12345678',
  //     });
  //     expect(screen.getByText('Net Banking activated successfully!')).toBeInTheDocument();
  //   });
  // });
});

