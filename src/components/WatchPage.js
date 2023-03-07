import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice'

export const WatchPage = () => {
    const dispatch = useDispatch();
    let [searchParams] = useSearchParams();
searchParams.get("v");
    useEffect(()=>{
        dispatch(closeMenu());
    },[])
  return (
    <div className='px-5'><iframe width="800" height="400" src={"https://www.youtube.com/embed/" + searchParams.get("v")} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
  )
}