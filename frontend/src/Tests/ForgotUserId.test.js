import React from 'react'
import {render, screen} from '@testing-library/react'
import ForgotUserIdPage from '../pages/ForgotUserIdPage';

describe('ForgotUserIdPage page' , ()=> {
    render(<ForgotUserIdPage/>);
    it('Should show error message', ()=>{
        expect(screen.getByRole('heading', {  name: /ForgotUserIdPage/i})).toBeInTheDocument();
    })
})
