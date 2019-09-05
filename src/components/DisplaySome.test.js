import React from 'react';
import { render } from '@testing-library/react';
import DisplaySome from './DisplaySome';

describe('Display something from DisplaySome', () => {
  it('should render...', () => {
    render(<DisplaySome />);
  });
  it('should check props...', () => {
    const value = render(<DisplaySome strikes={2}/>)
    value.getByText(/Strikes: 5/i);
  })
});