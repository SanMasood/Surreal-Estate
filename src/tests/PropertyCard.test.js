import React from 'react';
import { render, getByTestId } from '@testing-library/react';
import PropertyCard from '../components/PropertyCard';

test('renders property card', () => {
  const { asFragment } = render(<PropertyCard />);

  expect({ asFragment }).toMatchSnapshot();
});

test('renders title', () => {
  const { getByText } = render(<PropertyCard title="2 bedroom cottage" />);
  expect(getByText(/2 bedroom cottage/)).toHaveClass('title');
});
