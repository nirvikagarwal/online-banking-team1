import React, {useEffect} from 'react';
import { render, fireEvent, act, renderHook } from '@testing-library/react';
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
        // Add more mock transactions as needed
    ];

    test('renders the component', async () => {
        const { getByText } = render(<TransactionsPage />);
        expect(getByText('Transactions')).toBeInTheDocument();
        expect(getByText('Select Account Number:')).toBeInTheDocument();
        // Add more assertions to validate the initial rendering of the component
    });

    describe('useEffect hook', () => {
        it('should call getTransactions and update state', async () => {
            const getTransactions = () => ({
                selectedAccount: 'testedAccount',
            })
            const { result } = renderHook(() => useEffect(() => {
                if (selectedAccount) {
                    const func = async (selectedAccount) => {
                        const response = await getTransactions(selectedAccount);
                        if (response) setTransactions(response);
                    };
                    func(selectedAccount);
                }
            }, [selectedAccount]));

            // Ensure that useEffect has been called
            expect(window.getTransactions).toHaveBeenCalledWith(selectedAccount);

            // Call the callback function returned by useEffect
            await act(async () => {
                result.current[0](); // result.current[0] is the callback function passed to useEffect
            });

            // Check if setTransactions has been called with the mock response
            expect(result.current[1]).toHaveBeenCalledWith(responseMock);
        });
    });
});
