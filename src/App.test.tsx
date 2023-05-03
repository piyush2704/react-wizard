import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {


    it('should show only Next button if currely on first page', () => {
        render(<App/>)
        expect(screen.queryByText('Back')).toBeFalsy();
    })
    
})


