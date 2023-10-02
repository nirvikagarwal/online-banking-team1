import React from 'react';
import { render, screen } from '@testing-library/react';
import Form from '../pages/UserRegistrationPage';
import MockIntersectionObserver from './IntersectionObserver';
import user from '@testing-library/user-event';

jest.mock('../utils/apiHelper', () => ({
  registorUser: () => {
    return true;
  },
}));

jest.mock('../components/RegistrationModal', () => jest.fn(() => null));

describe('Form component', () => {
  it('renders form correctly', () => {
    render(<Form />)
    
    expect(screen.getByRole('textbox', {  name: /first name/i})).toBeInTheDocument();
    expect(screen.getByRole('textbox', {  name: /last name/i})).toBeInTheDocument();
    expect(screen.getByRole('textbox', {  name: /email/i})).toBeInTheDocument();

    expect(screen.getByRole('heading', {  name: /register your account/i})).toBeInTheDocument();
  });

  it('handles form submission', async() => {
    render(<Form />);
    
    const firstName = screen.getByRole('textbox', {  name: /first name/i});
    user.type(firstName, 'Aman');

    const middleName = screen.getByRole('textbox', {  name: /middle name/i});
    user.type(middleName, 'Kumar');

    const lastName = screen.getByRole('textbox', {  name: /last name/i});
    user.type(lastName, 'Aman');

    const fatherName = screen.getByRole('textbox', {  name: /father name/i});
    user.type(fatherName, 'Krishna');

    const email= screen.getByRole('textbox', {  name: /email/i})
    user.type(email, 'kaman@gmail.com');

    const dob = screen.getByLabelText(/date of birth/i);
    user.type(dob, '12022002');

    const mob = screen.getByRole('textbox', {  name: /mobile/i});
    user.type(mob, '1234567890');

    const PAN= screen.getByRole('textbox', {  name: /pan number/i});
    user.type(PAN, 'GHGSD7648F');

    const add = screen.getByRole('textbox', {  name: /address/i});
    user.type('Hyderabad');

    const pass = screen.getByLabelText(/password/i)
    user.type(pass,'Kshd3897@');

    const check = screen.getByRole('checkbox', {  name: /agree to terms and conditions/i});
    user.click(check);

    await user.click(screen.getByRole('button', {name: 'Register'}));
    expect(require('../components/RegistrationModal')).toHaveBeenCalled();
  });
});
