import React, {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HalloweenApi from "./api";
import "./YouTubeVideo.css";


/* YouTubeVideo component
  * holds state for --
    * videoData (data from Youtube API)
    * title (data from the Youtube API -- title of youtube video)
    * description (data from Youtube API -- video description, possibly containing products)
  
  * calls on Halloween API (getCostume) to fetch data about specific costume (item_name)

  * renders YouTube video

*/

const YouTubeVideo = () => {
  const { item_name } = useParams();
  const [videoData, setVideoData] = useState(null);
  const [title, SetTitle] = useState(null);
  const [description, setDescription] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await HalloweenApi.getCostume(item_name);
        if(res.snippet.description){
          let description = res.snippet.description;
          if(description.indexOf("Products") !== null){
            let descriptionIdx = description.indexOf("Products");
            setDescription(description.substring(descriptionIdx))
            console.log('descripidx', description.substring(descriptionIdx))
          }
        }
        const videoId = res.id;
        let videoData = `https://www.youtube.com/embed/${videoId}`;
        let videoTitle = res.snippet.title;
        SetTitle(videoTitle)
        setVideoData(videoData)
      } catch (e) {
        console.error('Error fetching video data', e)
      }
    }
    fetchData();
  }, [item_name]);

    return (
        <div>
        <h3 className="result-text"> Watch this tutorial to learn how to transform yourself into </h3>
        <p className="result-text">{item_name.replace(/-/g, ' ').toUpperCase()}</p>
        <iframe
        width="560"
        height="315"
        src={videoData}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
              <p>{title}</p>
              {description && (
                <div style={{ maxHeight:"200px", overflowY:"auto"}}>
                  <ul>
                  {description.split("\n").map((item, index) => (
                    <li key={index}>{item}</li>
                  ))} 
                    </ul></div>
              )}
      </div>

    )
};

export default YouTubeVideo;