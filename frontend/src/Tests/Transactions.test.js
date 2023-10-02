import React, {useEffect} from 'react';
import { render, fireEvent, act, renderHook, screen } from '@testing-library/react';
import TransactionsPage from '../pages/Transactions';

const selectedAccount = 'testAccount';
const responseMock = ['transaction1', 'transaction2'];
jest.mock('../utils/apiHelper', () => ({
    getAccount: jest.fn((details) => true),
    getTransactions: () => ({
        selectedAccount: 'testedAccount',
    })
}));

jest.mock('react-router-dom', () => ({
    useParams: () => ({
        userId: '123',
    })
}));

describe('TransactionsPage', () => {
    const mockAccounts = [
        { accountNo: '12345' },
        { accountNo: '67890' }
    ];

    const mockTransactions = [
        {
            transactionId: '1',
            timestamp: '2021-09-27T12:34:56Z',
            to: '12345',
            amount: 1000,
            userStartBalance: 5000,
            from: '98765'
        }
    ];

    test('renders the component', () => {
        render(<TransactionsPage />);
        expect(screen.getByRole('heading', {  name: /transactions/i})).toBeInTheDocument();
        expect(screen.getByRole('button', {  name: /download pdf/i})).toBeInTheDocument();
        expect(screen.getByRole('combobox', {  name: /select account number:/i})).toBeInTheDocument();
    });
});
