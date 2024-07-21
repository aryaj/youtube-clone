import React from 'react'
import { Link } from 'react-router-dom';

const ResultListVideoCard = ({ video }) => {
    console.log("video", video);
    const { snippet } = video;
    const { channelTitle, title, thumbnails, description } = snippet;
    return (
        <div className='flex gap-3 mb-10'>
            <div className=''>
                <Link to={`/watch?v=${video.id.videoId || video.id.channelId || video.id.playlistId}`}>
                    <img className='rounded-md pb-1 h-28' alt='thumbnail' src={thumbnails.medium.url} />
                </Link>
            </div>
            <div>
                <Link to={`/watch?v=${video.id.videoId || video.id.channelId || video.id.playlistId}`}>
                    <h1 className='font-bold'>{title}</h1>
                    <p className='text-gray-700'>{channelTitle}</p>
                    <p className='text-gray-700'>{description}</p>
                </Link>
            </div>
        </div >
    )
}

export default ResultListVideoCard