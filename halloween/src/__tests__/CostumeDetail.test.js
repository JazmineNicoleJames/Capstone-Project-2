import { MemoryRouter, Route, Routes } from "react-router-dom";
import {render, waitFor } from '@testing-library/react';
import CostumeDetail from "../CostumeDetail";


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
        {
          item_name: 'fake',
          title: "testing title",
          description: "testing description",
          result_type: 'youtube-video',
          youtube_video_id: 'youtube-video-id'
        }
      ),
      getCostumes: jest.fn().mockResolvedValue(
        {
          item_name: 'fake'
        }
      )
  }
}));

test("should match snapshot", async () => {
  const allCostumes = [
    {
      item_name: 'fake',
      title: "testing title",
      description: "testing description",
      result_type: 'youtube-video',
      youtube_video_id: 'youtube-video-id'
    }
  ];

  const { asFragment } = render(
      <MemoryRouter>
          <CostumeDetail allCostumes={allCostumes}/>
      </MemoryRouter>
  );

  await waitFor(() => {
    expect(asFragment()).toMatchSnapshot();
  })
});


test("renders loading message while loading", () => {
  const { getByText } = render(
    <MemoryRouter>
      <CostumeDetail />
    </MemoryRouter>
  );
  expect(getByText("Loading...")).toBeInTheDocument();
});


test("renders single costume", async () => {
  const allCostumes = [
    {
      item_name: 'fake',
      title: "testing title",
      description: "testing description",
      result_type: 'youtube-video',
      youtube_video_id: 'youtube-video-id'
    }
  ];

  const { getByText } = render(
    <MemoryRouter initialEntries={['/costumes/fake']}>
      <Routes>
      <Route path="/costumes/:item_name" element={<CostumeDetail allCostumes={allCostumes} />}>
      </Route>
      </Routes>
    </MemoryRouter>
  );

  await waitFor(() => {
    expect(getByText("FAKE")).toBeInTheDocument()
  })
});