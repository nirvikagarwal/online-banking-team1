import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Root from '../pages/Root';

// Mock the Navbar and Footer components
jest.mock('../components', () => ({
  Navbar: () => <div data-testid="navbar">Mock Navbar</div>,
  Footer: () => <div data-testid="footer">Mock Footer</div>,
}));

describe('Root component', () => {
  it('should render Navbar, Outlet, and Footer', () => {
    const { getByTestId, getByText } = render(
      <Router>
        <Root />
      </Router>
    );

    // Check if Navbar is present
    const navbar = getByTestId('navbar');
    expect(navbar).toBeInTheDocument();
    expect(navbar).toHaveTextContent('Mock Navbar');

    // Check if Footer is present
    const footer = getByTestId('footer');
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveTextContent('Mock Footer');
  });
});
