import React from "react";
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom/extend-expect';
import CostumeDetail from "../CostumeDetail"


jest.mock("../__mocks__/apiMock", () => ({
  __esModule: true,
  default:() => ({
      getCostumes: [{
      item_name: "Grim Reaper",
      title: "This is a test",
      description:"Testing"
    },
    { item_name: "Deer",
      title: "This is a test",
      description:"Testing"
     }
    ]
})
}));

test("renders loading msg", () => {
  const { getByText } = render((
    <MemoryRouter>
      <CostumeDetail/>
    </MemoryRouter>
  ));
  expect(getByText("Loading...")).toBeInTheDocument();
});

test("renders all costumes", async () => {
  const { getByText } = render(
    <MemoryRouter>
      <CostumeDetail />
    </MemoryRouter>
  );

  await waitFor(() => {
    expect(screen.getByText("This is a test")).toBeInTheDocument()
  })
})