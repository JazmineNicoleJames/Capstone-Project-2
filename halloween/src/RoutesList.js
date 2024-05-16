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
            <Route path="/costumes" element={<AllCostumes allCostumes={allCostumes} />} />
            <Route path="/costumes/:item_name" element={<CostumeDetail allCostumes={allCostumes}/>} />
            <Route path="/youtube-video/:item_name" element={<YouTubeVideo />} />
            <Route path="/" element={<Questions />} />
        </Routes>
    )
}
export default RoutesList;