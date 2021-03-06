import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from '../components/App';

test('renders components', () => {
  const history = createMemoryHistory();

  const { asFragment } = render(<Router history={history}>
    <App />
  </Router>);
  expect({ asFragment }).toMatchSnapshot();
});