import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import NavBar from '../components/NavBar';

test('renders components', () => {
  const history = createMemoryHistory();

  const { asFragment } = render(<Router history={history}>
    <NavBar />
  </Router>);
  expect({ asFragment }).toMatchSnapshot();
});

 test('renders Surreal Estate logo', () => {
  const history = createMemoryHistory();

  const { getByAltText } = render(<Router history={history}>

  <NavBar />
  </Router>);

  const logo = getByAltText(/surreal-estate-logo/i);
  expect(logo).toBeInTheDocument();
});

test('renders Navbar', () => {
  const { getByRole } = render(<ul />);
  const list = getByRole('list');
  expect(list).toBeInTheDocument();
});

