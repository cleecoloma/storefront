import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App.jsx';
import { Provider } from 'react-redux';
import store from '../store';

test('renders the App component', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  // Assert that elements from the App component are present
  expect(screen.getByText('KOKO DEPOT')).toBeInTheDocument();
  expect(screen.getByText(/ELECTRONICS/i)).toBeInTheDocument();
  expect(screen.getByText(/contact@kokodepot.com/i)).toBeInTheDocument();
});
