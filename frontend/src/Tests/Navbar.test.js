import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NavbarComponent from "../components/Navbar";
import { BrowserRouter as Router} from 'react-router-dom';
import { GetUserContext } from "../context/UserContext";

jest.mock('../context/UserContext', () => ({
  GetUserContext: () => ({ user: { isLoggedIn: false }, setUser: jest.fn() }),
}));

describe('NavbarComponent', () => {
  it('renders navbar with correct links when user is not logged in', () => {
    const { getByText } = render(<Router><NavbarComponent /></Router>);

    // Check if Home, Register, and Login links are rendered
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Register')).toBeInTheDocument();
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('renders navbar with correct links when user is logged in', () => {
    // Mock user being logged in
    jest.mock('../context/UserContext', () => ({
      GetUserContext: () => ({ user: { isLoggedIn: true }, setUser: jest.fn() }),
    }));

    const { getByText } = render(<Router><NavbarComponent /></Router>);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Open Account')).toBeInTheDocument();
    expect(screen.getByText('Net Banking')).toBeInTheDocument();
    expect(screen.getByText('Activate Net Banking')).toBeInTheDocument();
  });
});

