import React, {useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HalloweenApi from "./api";
import Questions from "./Questions";
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
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        if(item_name){
          const res = await HalloweenApi.getCostume(item_name);
          if(res && res.snippet && res.snippet.description !== undefined){
            let description = res.snippet.description;
            let videoTitle = res.snippet.title;
            SetTitle(videoTitle)
            const videoId = res.id;
            let videoData = `https://www.youtube.com/embed/${videoId}`;
            setVideoData(videoData)
            if(description.indexOf("Products") !== null){
              let descriptionIdx = description.indexOf("Products");
              setDescription(description.substring(descriptionIdx))
            }
          } else{
            return(<Questions />)
          }
        }


      } catch (e) {
        setError(e)
/*         console.error('Error fetching video data', e) */
      }
    }
    fetchData();
  }, [item_name]);

  if(error){
    return( <div> Error </div>)
  }

    return (
        <div>
        <h3 className="result-text"> Watch this tutorial to learn how to transform yourself into </h3>
        {item_name && (
        <p className="result-text">{item_name.replace(/-/g, ' ').toUpperCase()}</p>
        )}
        <iframe
        width="560"
        height="315"
        src={videoData}
        frameborder="0"
        suppressHydrationWarning={true}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
              <p className="title">{title}</p>
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