import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ActivateNetBanking from '../pages/ActivateNetBankingPage';

jest.mock('../utils/apiHelper', () => ({
  activateNetBanking: jest.fn(),
}));

describe('ActivateNetBanking', () => {
  it('renders without crashing', () => {
    render(<ActivateNetBanking />);
  });

  it('activates net banking successfully', async () => {
    const { getByLabelText, getByText } = render(<ActivateNetBanking />);
    
    const transactionPasswordInput = getByLabelText('Set Transaction Password');
    const accountNoInput = getByLabelText('Fill Account Number');
    const submitButton = screen.getByRole('button', { name: 'Activate Net Banking'});

    fireEvent.change(transactionPasswordInput, { target: { value: 'password123' } });
    fireEvent.change(accountNoInput, { target: { value: '1234567890' } });
    fireEvent.click(submitButton);

    expect(transactionPasswordInput.value).toBe('password123');
    expect(accountNoInput.value).toBe('1234567890');
  });
});
