import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import AdminDashboard from '../pages/AdminDashboard';
import { getAccounts, getUsers, toggleUser } from '../utils/apiHelper';

jest.mock('../utils/apiHelper', () => ({
  getAccounts: jest.fn(),
  getUsers: jest.fn(),
  toggleUser: jest.fn(),
}));

describe('AdminDashboard component', () => {
  beforeEach(() => {
    // Mock data for accounts and users
    getAccounts.mockResolvedValue([
      {
        accountNo: '123456',
        user: 'testuser',
        accountType: 'Savings',
        ifsc: 'ABCD1234',
        balance: 1000,
        branch: 'Test Branch',
        dateOfOpening: '2023-09-28',
      },
    ]);

    getUsers.mockResolvedValue([
      {
        userId: 1,
        firstName: 'John',
        lastName: 'Doe',
        middleName: '',
        dob: '1990-01-01',
        email: 'john.doe@example.com',
        pan: 'ABCDE1234F',
        mobile: '1234567890',
        address: '123 Street, City',
      },
    ]);
  });

  it('should render with initial state', async () => {
    const { getByText } = render(<AdminDashboard />);
    await waitFor(() => {
      expect(getByText('testuser')).toBeInTheDocument();
      expect(getByText('123456')).toBeInTheDocument();
      // Add more assertions based on your UI
    });
  });

  it('should handle account status toggling', async () => {
    toggleUser.mockResolvedValueOnce({ success: true });

    const { getByText } = render(<AdminDashboard />);
    await waitFor(() => {
      fireEvent.click(getByText('ENABLE'));
    });

    expect(toggleUser).toHaveBeenCalledWith('123456');
    // Add more expectations based on your UI and state changes
  });

  it('should handle searching', async () => {
    const { getByPlaceholderText, getByText } = render(<AdminDashboard />);
    await waitFor(() => {
      fireEvent.change(getByPlaceholderText('Search'), { target: { value: 'test' } });
    });

    expect(getByText('testuser')).toBeInTheDocument();
    // Add more expectations based on your UI and state changes
  });

  // Add more tests for sorting, handleDetails, handleClose, etc.
});
