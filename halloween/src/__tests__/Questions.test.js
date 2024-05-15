import React from "react";
import { fireEvent, render, waitFor } from '@testing-library/react';
import { MemoryRouter, useNavigate } from "react-router-dom";
import Questions from '../Questions';
import HalloweenApi from "../api"; 

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn()
}))

jest.mock('../api', () => ({
  ...jest.requireActual('../api'),
  getByAllFilters: jest.fn(),
}));

test("component renders questionaire form", () => {
    const { getByTestId } = render(
        <MemoryRouter>
          <Questions/>
        </MemoryRouter>
    );
    const form = getByTestId('my-form');
    expect(form).toBeInTheDocument();
});


test("handles empty results", async () => { 
    useNavigate.mockReturnValue(jest.fn());
    HalloweenApi.getByAllFilters.mockResolvedValue([]);

    const alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {})

    const { getByText } = render(
      <MemoryRouter>
        <Questions/>
      </MemoryRouter>
    );

    fireEvent.change(getByText('Select a theme'), {target: {value: 'classic'}});
    fireEvent.change(getByText('Select a gender preference'), {target: {value: 'feminine'}});
    fireEvent.change(getByText('Select your experience Level'), {target: {value: 'easy'}});
    
    fireEvent.submit(getByText('Submit'));

    await waitFor(() => {
      expect(useNavigate).toHaveBeenCalledWith();
      expect(alertSpy).toHaveBeenCalledWith('Sorry, there are no results for your search filter. Please try again');
      expect(window.location.pathname).toBe('/');
    });

    alertSpy.mockRestore();
});



test("returns a costume, renders component", async () => {
  useNavigate.mockReturnValue(jest.fn());

  HalloweenApi.getByAllFilters.mockResolvedValue([          
    {
      item_name: 'fake',
      theme: 'classic',
      genderPref: 'feminine',
      experienceLevel: 'easy'
    }
  ]);

  const { getByText } = render(
    <MemoryRouter>
      <Questions/>
    </MemoryRouter>
  );

  fireEvent.change(getByText('Select a theme'), {target: {value: 'classic'}});
  fireEvent.change(getByText('Select a gender preference'), {target: {value: 'feminine'}});
  fireEvent.change(getByText('Select your experience Level'), {target: {value: 'easy'}});
  
  fireEvent.submit(getByText('Submit'));

  await waitFor(() => {
    expect(useNavigate).toHaveBeenCalledWith();
  });

  expect(useNavigate().mock.calls[0][0]).toBe('/costumes/fake')
})



