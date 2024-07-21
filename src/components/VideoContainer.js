import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCards, { AddVideoCardsHOC } from './VideoCards';
import { Link } from 'react-router-dom';


const VideoContainer = () => {

  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEOS_API);
    const data = await response.json();
    return setVideos(data.items);
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className='grid grid-cols-5'>
      {videos[0] && <AddVideoCardsHOC VideoCardsComp={VideoCards} info={videos[0]} />}
      {
        videos.map((video) => {
          return <Link to={`/watch?v=${video.id}`} key={video.id} ><VideoCards info={video} /></Link>
        })
      }
    </div>
  )
}

export default VideoContainer