import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';

import { createMemoryHistory } from 'history';

import AddProperty from '../components/AddProperty';

test('renders components', () => {
  const history = createMemoryHistory();

  const { asFragment } = render(<Router history={history}>
    <AddProperty />
    </Router>);
  expect({ asFragment }).toMatchSnapshot();
});
