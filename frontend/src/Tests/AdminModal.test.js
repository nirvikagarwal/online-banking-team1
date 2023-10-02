import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import OpenAccountModal from '../components/AdminModal'; // Adjust the import path accordingly

describe('OpenAccountModal', () => {
  const mockUser = [
    {
      userId: '123',
      firstName: 'John',
      middleName: 'Doe',
      lastName: 'Smith',
      email: 'john.doe@example.com',
      mobile: '1234567890',
      pan: 'ABCP1234',
      dob: '1990-01-01',
      address: '1234 Elm St, Springfield, IL',
    },
  ];

  it('renders the modal with correct user details', () => {
    render(<OpenAccountModal show={true} handleClose={jest.fn()} user={mockUser} />);
    
    expect(screen.getByText('USER PROFILE')).toBeInTheDocument();
    expect(screen.getByText(`User ID: ${mockUser[0].userId}`)).toBeInTheDocument();
    expect(screen.getByText(`Name: ${mockUser[0].firstName} ${mockUser[0].middleName} ${mockUser[0].lastName}`)).toBeInTheDocument();
    expect(screen.getByText(`Email: ${mockUser[0].email}`)).toBeInTheDocument();
    expect(screen.getByText(`PAN: ${mockUser[0].pan}`)).toBeInTheDocument();
    expect(screen.getByText(`DOB: ${mockUser[0].dob}`)).toBeInTheDocument();
    expect(screen.getByText(`Address: ${mockUser[0].address}`)).toBeInTheDocument();
  });

  it('calls handleClose when Close button is clicked', () => {
    const handleCloseMock = jest.fn();
    render(<OpenAccountModal show={true} handleClose={handleCloseMock} user={mockUser} />);
    
    fireEvent.click(screen.getByText('Close'));

    expect(handleCloseMock).toHaveBeenCalled();
  });
});
