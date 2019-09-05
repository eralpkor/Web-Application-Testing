import React from 'react';
import { render } from '@testing-library/react';
import Display from './Display';

describe('Display something from DisplaySome', () => {
  it('should render...', () => {
    render(<Display />);
  });
  it('should check props...', () => {
    const value = render(<Display strikes={5} balls={1} />)
    value.getByText(/Strikes: 5/);
    value.getByText(/Balls: 1/);

  })
});


