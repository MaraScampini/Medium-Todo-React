///<reference types="Jest"/>

import { render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";


test('it should render App', () => {
  render(<App></App>)
  const title = screen.getByText('React Todo App')

  expect(title).toBeInTheDocument()
})