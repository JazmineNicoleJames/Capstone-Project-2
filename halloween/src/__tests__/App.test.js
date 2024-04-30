import React from "react";
import { getByTestId, render, screen } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

test("renders App", () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  expect(getByText("Home")).toBeInTheDocument();
  expect(getByText("Browse all costumes")).toBeInTheDocument();
});

test("home page contains questionaire form", () => {
  const { getByTestId } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
  );
  const form = getByTestId('my-form');
  expect(form).toBeInTheDocument();
})