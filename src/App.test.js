import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Speedy Food', () => {
  render(<App />);
  const linkElement = screen.getByText(/Speedy Food/i);
  expect(linkElement).toBeInTheDocument();
});
