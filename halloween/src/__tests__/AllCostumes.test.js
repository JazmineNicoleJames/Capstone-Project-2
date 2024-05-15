import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import AllCostumes from '../AllCostumes';

jest.mock('../App', () => ({
    __esModule: true,
    default:() => ({
        allCostumes: [
            {item_name: 'Grim Reaper'}
        ]
    })
}));


test("should match snapshot", () => {
    const allCostumes = [{item_name: 'Grim Reaper'}];
    const { asFragment } = render(
        <MemoryRouter>
            <AllCostumes allCostumes={allCostumes}/>
        </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
});


test("renders AllCostumes", () => {
    const allCostumes = [{item_name: 'Grim Reaper'}];
    const { getByText } = render(
        <MemoryRouter>
            <AllCostumes allCostumes={allCostumes} />
        </MemoryRouter>
    );
    expect(getByText("Grim Reaper")).toBeInTheDocument();
});


test('fails to renders AllCostumes, displays error message', () => {
    const { getByText } = render(
        <MemoryRouter>
            <AllCostumes />
        </MemoryRouter>
    );
    
    expect(getByText("No costumes available")).toBeInTheDocument();
});


