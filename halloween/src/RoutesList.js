import React, {useContext} from "react";
import { Route, Routes } from "react-router-dom";
import YouTubeVideo from "./YouTubeVideo";
import AllCostumes from "./AllCostumes";
import Questions from "./Questions";
import CostumeDetail from "./CostumeDetail";


/* RoutesList component
    Routes to AllCostumes component "/costumes",
        * to CostumeDetail component "/costumes/:item_name",
        * to YouTubeVideo component "/youtube-video/:item_name",
        * and to Questions component "/"
*/

const RoutesList = ({allCostumes}) => {

    return (
        <Routes>
            <Route exact="true" path="/costumes" element={<AllCostumes allCostumes={allCostumes} />} />
            <Route exact="true" path="/costumes/:item_name" element={<CostumeDetail allCostumes={allCostumes}/>} />
            <Route exact="true" path="/youtube-video/:item_name" element={<YouTubeVideo />} />
            <Route exact="true" path="/" element={<Questions />} />
        </Routes>
    )
}
export default RoutesList;