import React from "react";
import { useParams } from "react-router-dom";
import './AmazonLink.css';
/* AmazonLink component
    * amazonLink and image props passed down from App.js

    * displays a link to amazon and an image of the costume
*/

const AmazonLink = ({amazonLink, image}) => {
    const item_name = useParams();

    return (
        <div>   
 
            <p className="result-text-name">{item_name.item_name.replace(/-/g, ' ').toUpperCase()}</p>
            <a className="amazon-link" href={amazonLink} target="_blank" rel="noopener noreferrer">  Click here to purchase costume </a>
            <div className="image-div">
               <img src={image} alt="costume image"></img>
            </div> 

        </div>
    )
};

export default AmazonLink;