import React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import AddBeneficiary from '../pages/ManageBeneficiary';
import MOckIntersectionObserver from './IntersectionObserver'

jest.mock('react-hook-form', () => ({
    useForm: () => ({
        register: jest.fn(),
        handleSubmit: jest.fn(),
        formState: {
            errors: {},
        }
    }),
}));

describe('AddBeneficiary component', () => {
    it('should render the component and handle form submission', () => {
      render(<AddBeneficiary />);
  
      // Fill in the form
      const nameInput = screen.getByLabelText(/Name/i);
      const accountNoInput = screen.getByLabelText(/Account Number/i);
      const ifscCodeInput = screen.getByLabelText(/IFSC Code/i);
      const passwordInput = screen.getByLabelText(/Password/i);
  
      fireEvent.change(nameInput, { target: { value: 'John Doe' } });
      fireEvent.change(accountNoInput, { target: { value: '1234567890' } });
      fireEvent.change(ifscCodeInput, { target: { value: 'ABCD123456' } });
      fireEvent.change(passwordInput, { target: { value: 'Test123!@#' } });
  
      const submitButton = screen.getByRole('button', { name: /UPDATE/i });
  
      // Submit the form
      fireEvent.click(submitButton);

      const name = screen.getByRole('textbox', {  name: /name/i});
      expect(name).toHaveValue('');
    });
  });