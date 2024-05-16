import React from "react";
import { Link } from "react-router-dom";
import {ListGroup, List, ListGroupItem} from "reactstrap";
import "./AllCostumes.css";

/* AllCostumes component

    * allCostumes prop passed down from  App.js

    **    returns a list of all costumes - listed by PK item_name

** or "No costumes available"

*/
const AllCostumes = ({allCostumes}) => {

    return (
        <div name="AllCostumes">
            {allCostumes && allCostumes.length > 0 ? (
                    <ListGroup>
               {allCostumes.map(costume => (
                <List type='inline' key={costume.item_name}>
                    <Link to={{pathname: `/costumes/${costume.item_name}`, 
                    state: {allCostumes: costume}}}>
                {costume.item_name.includes("-")
                  ? costume.item_name.replace(/-/g, " ")
                  : costume.item_name}
                    </Link>
                </List>
            ))}
            </ListGroup> 

    ) : ( 
        <p> No costumes available</p>
    )}
        </div>
    )
};

export default AllCostumes;