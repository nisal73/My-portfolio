import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Chamod Nisal portfolio elements', () => {
  render(<App />);
  const nameElements = screen.getAllByText(/Chamod Nisal/i);
  expect(nameElements.length).toBeGreaterThan(0);
});
