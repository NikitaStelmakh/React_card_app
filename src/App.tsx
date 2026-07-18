import { useState } from 'react'
import VideoCard from './assets/VideoCard/VideoCard.tsx'
import './App.css'
import {VIDEOS} from './videos.tsx'

function App() {

  const cardsRender = VIDEOS.map((video) => {
    return (
      <VideoCard
        key={video.id}
        title={video.title}
        channelName={video.channel}
        img={video.img}/>
      );
    }
  )

  return (
    <>
      <div className="video_container">
        {cardsRender}
      </div>
    </>
  )
}; 


export default App
