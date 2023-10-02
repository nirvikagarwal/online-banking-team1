import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import ForgotPasswordModal from '../components/ForgotPasswordModal'
import { useNavigate } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('ForgotPasswordModal component', () => {
  const mockHandleClose = jest.fn();

  beforeEach(() => {
    useNavigate.mockClear();
  });

  it('should render ForgotPasswordModal component with correct content', () => {
    const { getByText } = render(<ForgotPasswordModal show={true} handleClose={mockHandleClose} />);

    // Check if modal title and body are displayed
    expect(getByText('Password changed successfully!')).toBeInTheDocument();
    expect(getByText('You can now login with your new password.')).toBeInTheDocument();

    // Check if Close and Login buttons are displayed
    expect(getByText('Close')).toBeInTheDocument();
    expect(getByText('Login')).toBeInTheDocument();
  });

  it('should call handleClose when Close button is clicked', () => {
    const { getByText } = render(<ForgotPasswordModal show={true} handleClose={mockHandleClose} />);

    const closeButton = getByText('Close');
    fireEvent.click(closeButton);

    expect(mockHandleClose).toHaveBeenCalledTimes(1);
  });
});
