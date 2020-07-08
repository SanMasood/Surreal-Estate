import React from 'react';
import { render } from '@testing-library/react';
import Alert from '../components/Alert';

test('displays error message', () => {
  const { getByText } = render(<Alert message="Error!" />);
  // const alertMessageNode = component.getByText('Error!');

  expect(getByText(/Error/).textContent).toBe('Error!');
});

test('displays success message', () => {
  const { getByText } = render(<Alert message="Success!" />);

  expect(getByText(/success/i).textContent).toBe('Success!');
});

test('does not render error or success if message props is empty', () => {
  const { asFragment } = render(<Alert message="" />);
  expect({ asFragment }).toMatchSnapshot();
});

test('renders error message if property not created', () => {
  const { getByText, asFragment } = render(<Alert message="Error!" />);
  expect(asFragment()).toMatchSnapshot();
});

test('renders success message if property created', () => {
  const { getByText, asFragment }=render(<Alert message='Success!'/>);
  expect(asFragment()).toMatchSnapshot();
})