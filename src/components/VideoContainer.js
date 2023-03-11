import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import YOUTUBE_API_KEY from '../utils/constants'
import VideoCard from './VideoCard';

const VideoContainer = () => {

  const [videos,setVideos] = useState([]);

  useEffect(()=>{
    getVideos();
  },[])
  const getVideos = async()=>{
    const data = await fetch(YOUTUBE_API_KEY);
    const json = await data.json();
    setVideos(json.items);
  }
  return (
    <div className='flex flex-wrap justify-around'>
      {videos.map((video)=>(
      <Link to={"/watch?v=" +video.id} key={video.id}> <VideoCard  info={video}/></Link>)
      )}
    
      </div>
  )
}

export default VideoContainer