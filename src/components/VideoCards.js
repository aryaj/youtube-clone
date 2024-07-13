import React from 'react'

const VideoCards = ({ info }) => {
    console.log("info", info);
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;
    const { viewCount, likeCount, commentCount } = statistics;
    return (
        <div className='m-2 p-2'>
            <img className='rounded-md pb-1 h-28' alt='thumbnail' src={thumbnails.medium.url} />
            <ul>
                <li className='font-semibold pb-1'>{title}</li>
                <li className='pb-1'>{channelTitle}</li>
                <li className='pb-1'>{viewCount} views</li>
            </ul>
        </div>
    )
}

export default VideoCards