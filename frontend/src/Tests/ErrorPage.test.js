import React from 'react'
import {render, screen} from '@testing-library/react'
import ErrorPage from "../pages/ErrorPage";

describe('Error page' , ()=> {
    render(<ErrorPage/>);
    it('Should show error message', ()=>{
        expect(screen.getByRole('heading', {  name: /Error Page/i})).toBeInTheDocument();
    })
})
