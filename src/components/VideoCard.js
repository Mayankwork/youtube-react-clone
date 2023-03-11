import React from 'react'

const VideoCard = ({info}) => {

    const{snippet,statistics} = info;
    const{channelTitle,title,thumbnails} = snippet;

  return (
    <div className='  p-2 m-2 w-48'>
        <img className='rounded-lg' alt='thumbnail' src={thumbnails.medium.url}/>
        <ul>
            <li className='font-semibold py-1 '>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>
    </div>
    // <div></div>
  )
}

export default VideoCard