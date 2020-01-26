import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('render checkboxes', () => {
  const { container } = render(<App />);
  expect(container.querySelectorAll('[name="data"]').length).toEqual(4);
});

test('render master toggle', () => {
  const { getByText } = render(<App />);
  expect(getByText('Select all')).toBeInTheDocument();
});
