import { useState } from 'react';
import VideoCard from './assets/VideoCard/VideoCard.tsx';
import './App.css';
import { VIDEOS } from './videos.tsx';
import { Routes, Route } from 'react-router-dom';
import VideoPage from './VideoPage.tsx';

function App() {

  const cardsRender = VIDEOS.map((video) => {
    return (
      <VideoCard
        key={video.id}
        id={video.id}
        title={video.title}
        channelName={video.channel}
        img={video.img}/>
      );
    }
  )

  return (
    
    <Routes>

      <Route
        path='/'
        element={
          <div className="video_container">
            {cardsRender}
          </div>
        }
        />

      <Route
        path='/video/:id'  
        element={<VideoPage/>}
        />

    </Routes>
    
  )
}; 


export default App
