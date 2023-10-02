import React from 'react';
import { render, screen, within} from '@testing-library/react';
import FundTransfer from '../pages/FundTransfer';
import MockIntersectionObserver from './IntersectionObserver'
import user from '@testing-library/user-event';

jest.mock('../utils/apiHelper', () => ({
  getAccount: jest.fn(() => '1234567890'),
  fundTransfer: jest.fn(),
}));

jest.mock('react-hook-form', () => ({
  useForm: () => ({
    register: jest.fn(),
    handleSubmit: jest.fn(),
    formState: {
      errors: {},
    }
  }),
}));

jest.mock('../context/UserContext', () => ({
  GetUserContext: () => ({ user: { isLoggedIn: false }, setUser: jest.fn() }),
}));

jest.mock('../components/FundTransferModal', () => () => <div>FundTransferModalMock</div>);
jest.mock('../components/ActivateNetBankingModal', () => () => <div>ActivateNetBankingModalMock</div>);

describe('FundTransfer component', () => {
  const onSubmit = jest.fn();

  test('onSubmit is called when all fields pass validation', async () => {
    render(<FundTransfer />);

    const TransactionType = screen.getByRole('combobox', {  name: /default select example/i});
    user.selectOptions(TransactionType, within(TransactionType).getByRole('option', {name: 'NEFT'}));

    const amount = screen.getByRole('spinbutton', {  name: /amount/i});
    user.type(amount, '200');

    const beneficiaryAccountNo = screen.getByRole('textbox', {  name: /beneficiary account number/i})
    user.type(beneficiaryAccountNo, '1234567890');

    const userAccountNo = screen.getByRole('textbox', {  name: /user account number/i})
    user.type(userAccountNo, '0987654321');

    const transactionPassword = screen.getByLabelText(/transaction password/i);
    user.type(transactionPassword, 'Aman0702@');

    expect(screen.getByRole('button', {  name: /send/i})).toBeInTheDocument();
    await user.click(screen.getByRole('button', {  name: /send/i}));

  });
});
