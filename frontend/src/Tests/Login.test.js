import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';

jest.mock('../utils/apiHelper', () => ({
  login: jest.fn(() => Promise.resolve({})),
  getCurrentUser: jest.fn(() => Promise.resolve({ data: { userId: '123' } })),
}));

const mockSetUser = jest.fn();

jest.mock('../context/UserContext', () => ({
  GetUserContext: jest.fn(() => ({ setUser: mockSetUser })),
}));

describe('LoginPage component', () => {
  test('renders LoginPage component', () => {
    render(
      <Router>
        <LoginPage />
      </Router>
    );

    // Check that the component renders without crashing
    expect(screen.getByText('Welcome!')).toBeInTheDocument();
  });

  test('handles form submission', async () => {
    render(
      <Router>
        <LoginPage />
      </Router>
    );

    // Fill in the form fields
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText('Password'), { target: { value: 'password123' } });

    // Submit the form
    fireEvent.click(screen.getByText('Logging in'));

    // Wait for the asynchronous actions to complete
    await screen.findByText('Fund Transfer Modal');

    // Check that the form submitted successfully
    expect(mockSetUser).toHaveBeenCalledWith({ userId: '123' });
  });

  // ... other tests ...
});
