import React from "react";
import { useParams } from "react-router-dom";

/* AmazonLink component
    * amazonLink and image props passed down from App.js

    * displays a link to amazon and an image of the costume
*/

const AmazonLink = ({amazonLink, image}) => {
    const item_name = useParams();

    return (
        <div>         
            <h1> You got {item_name.item_name.replace(/-/g, ' ').toUpperCase()}!</h1>
            <a href={amazonLink} target="_blank" rel="noopener noreferrer"> Click here to purchase costume </a>

            <img src={image}></img>
        </div>
    )
};

export default AmazonLink;