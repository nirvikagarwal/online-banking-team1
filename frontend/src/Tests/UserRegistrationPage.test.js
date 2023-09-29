import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Form from '../pages/UserRegistrationPage';
import MockIntersectionObserver from './IntersectionObserver';

jest.mock('../utils/apiHelper', () => ({
  registorUser: jest.fn((details)=> true),
}));

jest.mock('../components/RegistrationModal', () => jest.fn(() => null));

describe('Form component', () => {
  it('renders form correctly', () => {
    render(<Form />)
    
    expect(screen.getByRole('textbox', {  name: /first name/i})).toBeInTheDocument();
    expect(screen.getByRole('textbox', {  name: /last name/i})).toBeInTheDocument();
    expect(screen.getByRole('textbox', {  name: /email/i})).toBeInTheDocument();

    // Check if the register button is rendered
    expect(screen.getByRole('heading', {  name: /register your account/i})).toBeInTheDocument();
  });

  it('handles form submission', async() => {
    render(<Form />);
    
    const firstNameInput = screen.getByRole('textbox', {  name: /first name/i})
    const lastNameInput = screen.getByRole('textbox', {  name: /last name/i});
    const emailInput = screen.getByRole('textbox', {  name: /email/i})
    // Add more form elements as needed
    // ...

    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    // Update other form elements as needed
    // ...

    await fireEvent.click(screen.getByRole('button', {  name: 'Register'}));
    
    // Add assertions based on the behavior of the form submission
    // ...

    // Ensure that RegisterModal was called
    expect(require('../components/RegistrationModal')).toHaveBeenCalled();
  });
});
