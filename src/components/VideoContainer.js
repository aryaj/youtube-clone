import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCards from './VideoCards';
import { Link } from 'react-router-dom';


const VideoContainer = () => {

  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEOS_API);
    const data = await response.json();
    console.log("data", data)
    return setVideos(data.items);
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className='grid grid-cols-5'>
      {
        videos.map((video) => {
          return <Link to={`/watch?v=${video.id}`}><VideoCards key={video.id} info={video} /></Link>
        })
      }
    </div>
  )
}

export default VideoContainer