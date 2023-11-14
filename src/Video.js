import React, { useRef, useState } from 'react';
import './Video.css';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';


function Video() {
  const[Playing,setPlaying]= useState(false);
  const videoRef =useRef(null);
  const onVideoPress = () => {
    if(Playing){
      videoRef.current.pause();
      setPlaying(false);
    
    }else{
      videoRef.current.play();
      setPlaying(true);
    }
    
  };
  return (
    <div className='video'>
        <video className="video__player" 
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src='https://cdn.cloud.altbalaji.com/content/2017-04/2150-58f329168f321/Boygiri_Revised_New_16d4a284_video_track_0.mp4'></video> 
        <VideoFooter channel="Alt balaji" description="trailer" song="superman"/>
        <VideoSidebar />
    </div>
  )
}

export default Video;


