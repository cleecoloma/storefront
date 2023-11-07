import { render, screen } from '@testing-library/react';
import Header from './index';

test('Header component renders correctly', () => {
  render(<Header />);

  const headerText = screen.getByText(/KOKO DEPOT/i);
  expect(headerText).toBeInTheDocument();
});
