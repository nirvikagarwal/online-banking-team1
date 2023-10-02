import React from 'react'
import { render, screen, waitFor, act } from '@testing-library/react'
import ForgotPassword from '../pages/ForgotPasswordPage'
import MockIntersectionObserver from './IntersectionObserver'
import user from '@testing-library/user-event'

jest.mock('../utils/apiHelper', () => ({
    resetPassword: jest.fn(),
}));

jest.mock('../components/ForgotPasswordModal', () => ({ show, handleClose }) => {
    return (
        <div data-testid="mocked-ForgotPassword-modal">
            <button onClick={handleClose} data-testid="close-button">Close</button>
        </div>
    );
});

jest.mock('react-hook-form', () => ({
    useForm: () => ({
        register: jest.fn(),
        handleSubmit: jest.fn(),
        formState: {
            errors: {},
        }
    }),
}));

describe('Forgot Password', () => {
    it('should reneder correctly', () => {
        render(<ForgotPassword />);
        expect(screen.getByRole('heading', { name: /reset your password/i })).toBeInTheDocument();
        expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /add/i })).toBeInTheDocument();
    })

    it('should handle form submission', async () => {
        render(<ForgotPassword/>);
        act(() => {
            const email = screen.getByRole('textbox', { name: /email/i });
            user.type(email, 'aman@gmail.com');
        });

        act(() => {
            const mobile = screen.getByRole('textbox', { name: /mobile/i });
            user.type(mobile, '1234567890');
        });

        act(() => {
            const dob = screen.getByLabelText(/date of birth/i);
            user.type(dob, '12345678')
        });

        act(() => {
            const newPassword = screen.getByLabelText(/new password/i);
            user.type(newPassword, 'Aman1234@');
        });


        const add = screen.getByRole('button', { name: /add/i });
        await user.click(add);
    })
})
