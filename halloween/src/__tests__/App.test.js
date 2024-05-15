import React from "react";
import { render } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import App from '../App';

jest.mock('../api', () => ({
  getcostumes: jest.fn().mockResolvedValue([
          {item_name: 'Grim Reaper'}
      ])
}));

it("renders App", () => {
  render(
    <MemoryRouter >
      <App/>
    </MemoryRouter>
  );
});

