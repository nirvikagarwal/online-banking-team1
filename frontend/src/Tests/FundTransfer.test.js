import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import FundTransfer from '../pages/FundTransfer';

jest.mock('../utils/apiHelper', () => ({
    getAccount: jest.fn(() => Promise.resolve([])),
    fundTransfer: jest.fn(() => Promise.resolve({})),
  }));
  
  // Mock the GetUserContext to return a user object
  jest.mock('../context/UserContext', () => ({
    GetUserContext: jest.fn(() => ({ user: { userId: '123' } })),
  }));
  
  describe('FundTransfer component', () => {
    // ... existing tests ...
  
    test('handles form submission', async () => {
      render(<FundTransfer />);
  
      // ... existing test logic ...

    // Fill in the form fields
    fireEvent.change(screen.getByLabelText('Amount'), { target: { value: '100' } });
    fireEvent.change(screen.getByLabelText('Beneficiary Account Number'), { target: { value: '123456789' } });
    fireEvent.change(screen.getByLabelText('User Account Number'), { target: { value: '987654321' } });
    fireEvent.change(screen.getByLabelText('Transaction Password'), { target: { value: 'Password1!' } });
    fireEvent.change(screen.getByLabelText('Transaction Type'), { target: { value: 'neft' } });
  
      // Submit the form
      fireEvent.click(screen.getByText('SEND'));
  
      // Wait for the asynchronous actions to complete
      await screen.findByRole('alert');
  
      // Check that the form submitted successfully
      expect(screen.getByText('Fund Transfer Modal')).toBeInTheDocument();
    });

  test('displays error messages for invalid form input', async () => {
    render(<FundTransfer />);

    fireEvent.click(screen.getByText('SEND')); // Submit the form without filling fields

    // Wait for the asynchronous actions to complete
    await screen.findAllByRole('alert');

    // Check for the error messages
    expect(screen.getByText('Amount is required')).toBeInTheDocument();
    expect(screen.getByText('Beneficiary Account Number is required')).toBeInTheDocument();
    expect(screen.getByText('To Account number is required')).toBeInTheDocument();
    expect(screen.getByText('Please enter your password')).toBeInTheDocument();
  });
});
