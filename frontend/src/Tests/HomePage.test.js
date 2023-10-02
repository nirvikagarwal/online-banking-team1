import React from 'react';
import {render, screen} from '@testing-library/react';
import HomePage from '../pages/HomePage';

describe('HomePage', ()=> {
    it('should render correctly', ()=> {
        render(<HomePage/>)
        expect(screen.getByRole('heading', {  name: /at cashswift, we are committed to empowering individuals and businesses with financial solutions that drive growth and prosperity in our communities\./i})).toBeInTheDocument();
    })
})