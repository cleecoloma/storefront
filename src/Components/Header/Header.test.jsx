import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import Header from './index.jsx';
import store from '../../store'; // Import your Redux store

test('Header component renders correctly', () => {
  render(
    <Provider store={store}>
      <Header />
    </Provider>
  );

  const headerText = screen.getByText(/KOKO DEPOT/i);
  expect(headerText).toBeInTheDocument();

  const bagButton = screen.getByTestId('bag-button'); // Locate the element by data-testid
  expect(bagButton).toBeInTheDocument();
});
