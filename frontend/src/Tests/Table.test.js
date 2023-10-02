import React from 'react'
import {render, screen} from '@testing-library/react'
import { getUsers } from "../utils/apiHelper";
import Table from '../pages/Table'

jest.mock('../utils/apiHelper', () => ({
    getUsers: jest.fn(),
  }));
  
  describe('Table component', () => {
    const mockUsers = [
      {
        userId: '1',
        firstName: 'John',
        lastName: 'Doe',
        fatherName: 'John Doe Sr.',
        middleName: '',
        dob: '1990-01-01',
        email: 'john.doe@example.com',
        pan: 'ABCDE1234F',
        mobile: '1234567890',
        address: '1234 Elm St, Springfield, IL',
      },
      // Add more mock users as needed
    ];
  
    beforeEach(() => {
      getUsers.mockResolvedValue(mockUsers);
    });
  
    it('should render the table with correct user data', async () => {
      const { getByText, getAllByRole } = render(<Table />);
  
      // Wait for data to load
      await Promise.resolve();
  
      // Check if the table headers are present
      expect(getByText('user_id')).toBeInTheDocument();
      expect(getByText('first_name')).toBeInTheDocument();
  
      // Check if the correct number of rows is rendered
      const tableRows = getAllByRole('row');
      // We add 1 for the table header row
      expect(tableRows.length).toBe(mockUsers.length);
    });
  });

