import React from 'react';
import { render } from '@testing-library/react';
import NavBar from '../components/NavBar';

test('renders Surreal Estate logo', () => {
  const { getByAltText } = render(<NavBar />);
  const logo = getByAltText(/surreal-estate-logo/i);
  expect(logo).toBeInTheDocument();
});

test('renders Navbar', () => {
    const { getByRole } = render(<ul />);
    const list = getByRole('list');
    expect(list).toBeInTheDocument();
    
})
