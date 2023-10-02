import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import UserDashboard from '../pages/UserDashboard';
import { useLoaderData, useNavigate } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
  useLoaderData: jest.fn(),
}));

describe('UserDashboard component', () => {
  const mockUser = {
    userId: '123',
    firstName: 'John',
    lastName: 'Doe',
    middleName: 'M',
    dob: '1990-01-01',
    email: 'john.doe@example.com',
    mobile: '1234567890',
  };

  const mockAccounts = [
    {
      accountNo: '78901234',
      accountType: 'Savings',
      dateOfOpening: '2021-01-01',
      balance: 5000,
      branch: 'Main Branch',
      ifsc: 'IFSC123',
    },
  ];

  beforeEach(() => {
    useLoaderData.mockReturnValue({ user: mockUser, accounts: mockAccounts });
  });

  it('should render UserDashboard component with correct data', () => {
    const { getByText } = render(<UserDashboard />);

    // Check if user information is displayed
    expect(getByText(`Name: ${mockUser.firstName} ${mockUser.middleName} ${mockUser.lastName}`)).toBeInTheDocument();
    expect(getByText(`DOB : ${mockUser.dob.slice(0, 10).split('-').reverse().join('-')}`)).toBeInTheDocument();
    expect(getByText(`Email: ${mockUser.email}`)).toBeInTheDocument();
    expect(getByText(`Phone: ${mockUser.mobile}`)).toBeInTheDocument();

    // Check if account details are displayed
    expect(getByText(`Account Number: ${mockAccounts[0].accountNo}`)).toBeInTheDocument();
    expect(getByText(`Account Type: ${mockAccounts[0].accountType}`)).toBeInTheDocument();
    expect(getByText(`Branch: ${mockAccounts[0].branch}`)).toBeInTheDocument();
    expect(getByText(`IFSC: ${mockAccounts[0].ifsc}`)).toBeInTheDocument();
    expect(getByText(`Date Of Opening : ${mockAccounts[0].dateOfOpening}`)).toBeInTheDocument();
  });

  it('should navigate to correct URL on "View All Transactions" button click', () => {
    const navigateMock = jest.fn();
    useNavigate.mockReturnValue(navigateMock);

    const { getByText } = render(<UserDashboard />);

    const viewTransactionsButton = getByText('View All Transactions');
    fireEvent.click(viewTransactionsButton);

    expect(navigateMock).toHaveBeenCalledWith(`/transactions/${mockUser.userId}`);
  });
});
