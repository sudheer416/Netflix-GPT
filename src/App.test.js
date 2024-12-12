
import { BrowserRouter } from "react-router";
import { render, screen } from '@testing-library/react'

import Header from './component/Header';



test('renders learn react link', () => {
  render(
  <Header/>
);
  const linkElement = screen.getByAltText(/netflix-log/i);
  expect(linkElement).toBeInTheDocument();
});
