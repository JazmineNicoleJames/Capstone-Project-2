import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import YouTubeVideo from "./YouTubeVideo";
import AmazonLink from "./AmazonLink";

/* CostumeDetail component 
    * uses allCostumes as a prop
        
    * uses the params (item_name) to filter through allCostumes - saves it as costumeData
    
    * uses costumeData to set selectedCostume 

    * displays Loading... while fetching data 

    * renders either YouTubeVideo or AmazonLink or both 
        -- depending on result_type from selectedCostume data

*/

const CostumeDetail = ({ allCostumes }) => {

    const {item_name} = useParams();
    const [selectedCostume, setSelectedCostume] = useState(null);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchCostume = async () => {
            try{
                if(allCostumes !== undefined){
                    const costumeData = allCostumes.find(costume => costume.item_name === item_name);
                    setSelectedCostume(costumeData);
                }

            } catch (e) {
                setError(e)
                console.error('e', e)
            }

        };
        fetchCostume();
    }, [allCostumes, item_name]);

    if(error){
        return(<div> Error </div>)
    }
    
    if(!selectedCostume) return <div>Loading...</div>;

    const {result_type, youtube_video_id, amazon_link_id, img} = selectedCostume;
    return (
        <div>
            {result_type === 'youtube-video' && youtube_video_id && (
                <YouTubeVideo videoId={youtube_video_id} />
            )}
            {result_type === 'amazon-link' && amazon_link_id && (
                <AmazonLink amazonLink={amazon_link_id} image={img} />
            )}
            {result_type === 'both' && (
                <div>
                <YouTubeVideo videoId={youtube_video_id} />
                <AmazonLink amazonLink={amazon_link_id} />
                </div>
            )}
        </div>
    )
};

export default CostumeDetail;