import React from 'react';
import { render, fireEvent, waitFor, screen, within } from '@testing-library/react';
import AdminDashboard from '../pages/AdminDashboard';
import { getAccounts, getUsers, toggleUser } from '../utils/apiHelper';
import user from '@testing-library/user-event';

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
    });
  });

  it('should handle account status toggling', async () => {
    toggleUser.mockResolvedValueOnce({ success: true });

    const { getByText } = render(<AdminDashboard />);
    await waitFor(() => {
      fireEvent.click(getByText('DISABLE'));
    });

    expect(toggleUser).toHaveBeenCalledWith('123456');
  });
});

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
      {
        accountNo: '654321',
        user: 'testuser1',
        accountType: 'Savings',
        ifsc: 'ABCD1234',
        balance: 2000,
        branch: 'Test Branch',
        dateOfOpening: '2023-09-27',
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

  it('should check sorting', async () => {
    toggleUser.mockResolvedValueOnce({ success: true });
    const { getByText } = render(<AdminDashboard />);
    await waitFor(() => {
      expect(getByText('testuser')).toBeInTheDocument();
      expect(getByText('123456')).toBeInTheDocument();
    });
    const balance = screen.getByRole('combobox');
    user.selectOptions(balance, within(balance).getByRole('option', {name: 'Balance'}));

    const doj = screen.getByRole('combobox');
    user.selectOptions(doj, within(doj).getByRole('option', {name: 'Date of Opening'}));

    const username = screen.getByRole('combobox');
    user.selectOptions(username, within(username).getByRole('option', {name: 'Username'}));

    const Acctype = screen.getByRole('combobox');
    user.selectOptions(Acctype, within(Acctype).getByRole('option', {name: 'Account Type'}));

    const ifsc = screen.getByRole('combobox');
    user.selectOptions(ifsc, within(ifsc).getByRole('option', {name: 'IFSC Code'}));

    const branch = screen.getByRole('combobox');
    user.selectOptions(branch, within(branch).getByRole('option', {name: 'Branch'}));
  });
});

