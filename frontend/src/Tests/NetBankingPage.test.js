import React from 'react'
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NetBankingPage from '../pages/NetBankingPage';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'), // Use the actual implementation for everything except Link
    Link: ({ children, to }) => <a href={to}>{children}</a>, // Mock Link component
}));

jest.mock('../context/UserContext', () => ({
    GetUserContext: () => ({ user: { isLoggedIn: false }, setUser: jest.fn() }),
}));

describe('NetBankingPage component', () => {
    it('should render correctly', () => {
        render(
            <Router>
                <NetBankingPage />
            </Router>
        );

        // Check if the links are present
        expect(screen.getByText('Go to Fund Transfer')).toBeInTheDocument();
        expect(screen.getByText('Go to Add Beneficiary')).toBeInTheDocument();
        expect(screen.getByText('Go to Manage Beneficiary')).toBeInTheDocument();
        expect(screen.getByText('Go to transactions')).toBeInTheDocument();

        // Ensure correct hrefs in the links
        expect(screen.getByText('Go to Fund Transfer').href).toContain('/fundTransfer');
        expect(screen.getByText('Go to Add Beneficiary').href).toContain('/addBeneficiary');
        expect(screen.getByText('Go to Manage Beneficiary').href).toContain('/manageBeneficiary');
        expect(screen.getByText('Go to transactions').href).toContain('/transactions/');
    });
});
