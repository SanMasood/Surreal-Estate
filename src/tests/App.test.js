import React from 'react';
import { render } from '@testing-library/react';
import App from '../components/App';

test('renders Surreal Estate text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/surreal estate/i);
  expect(linkElement).toBeInTheDocument();
});
