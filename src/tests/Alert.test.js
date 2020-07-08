import React from 'react';
import { render } from '@testing-library/react';
import Alert from '../components/Alert';

test('displays error message', () => {
  const { getByText } = render(<Alert message="Error!" />);
  //const alertMessageNode = component.getByText('Error!');

  expect(getByText(/Error/).textContent).toBe('Error!');
});

/*test('displays success message',() => {
  const { getByText } = render(<Alert message="Success!" />);

  expect(getByText(/success/).textContent).toBe('Success!');
})*/