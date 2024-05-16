import React from "react";
import { render, waitFor } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from "react-router-dom";
import YouTubeVideo from "../YouTubeVideo";
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
                    title: 'mock video title',
                    description: 'fake'
                }
            })
    }
}));


test("should match snapshot", async () => {
    const costume = {
        id: 'fake',
            snippet:{
                title: 'mock video title',
                description: 'fake'
            }
    }
    const { asFragment } = render(
        <MemoryRouter initialEntries={['/youtube-video/fake']}>
            <Routes>
                <Route path='/youtube-video/:item_name' element={<YouTubeVideo allCostumes={costume}/>} />
            </Routes>
        </MemoryRouter>
    );
    
    await waitFor(() => {
        expect(HalloweenApi.getCostume).toHaveBeenCalledWith('fake');
        expect(asFragment()).toMatchSnapshot();
    });
});

test("render youTube video", async () => {
    const { getByText } = render(
        <MemoryRouter initialEntries={['/youtube-video/fake']}>
            <Routes>
                <Route path='/youtube-video/:item_name' element={<YouTubeVideo/>} />
            </Routes>
        </MemoryRouter>
    );
    
    await waitFor(() => {  
        expect(getByText("Watch this tutorial to learn how to transform yourself into")).toBeInTheDocument()
    });
});
