import React from "react";
import { render, waitFor } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import RoutesList from '../RoutesList';

test("should match snapshot", async () => {
    const { asFragment } = render(
        <MemoryRouter>
            <RoutesList />
        </MemoryRouter>
    );
    await waitFor(() => {
      expect(asFragment()).toMatchSnapshot();
    });
});


test("should render costume '/costume' route path", () => {
    const mockCostumes = [
        {item_name: "fake"}
    ];

    const { getByText } = render(
        <MemoryRouter initialEntries={['/costumes']}>
            <RoutesList allCostumes={mockCostumes}/>
        </MemoryRouter>
    );
    const costumeElement = getByText("fake");
    
    expect(costumeElement).toBeInTheDocument();
});


test("should render home '/' route path", () => { 
    const { getByTestId } = render(
        <MemoryRouter initialEntries={['/']}>
            <RoutesList/>
        </MemoryRouter>
    );
    const form = getByTestId('my-form');

    expect(form).toBeInTheDocument();
})
