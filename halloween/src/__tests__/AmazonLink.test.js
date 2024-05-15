import React from "react";
import { render, waitFor } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from "react-router-dom";
import AmazonLink from "../AmazonLink";
import HalloweenApi from "../api";

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
        item_name: 'fake'
    })
}));

jest.mock('../api', () => ({
    __esModule: true,
    default: {
        getCostume: jest.fn().mockResolvedValue(
        {id: 'fake',
            snippet:{
                title: 'mock amazon link',
                description: 'fake'
            }
        })
    }
}));

test("should match snapshot", async () => {
    const costume = {
        id: 'fake',
            snippet:{
                title: 'mock amazon link',
                description: 'fake'
            }
    }
    const { asFragment } = render(
        <MemoryRouter initialEntries={['/youtube-video/fake']}>
            <Routes>
                <Route path='/amazon-link/:item_name' element={<AmazonLink allCostumes={costume}/>} />
            </Routes>
        </MemoryRouter>
    );
    
    await waitFor(() => {
        expect(asFragment()).toMatchSnapshot();
    });
});