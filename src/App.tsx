import { useState } from 'react';
import ArticleCard from './assets/VideoCard/VideoCard.tsx';
import './App.css';
import { DOCUMENTATION } from './videos.tsx';
import { Routes, Route } from 'react-router-dom';
import ArticlePage from './VideoPage.tsx';

function App() {

  const cardsRender = DOCUMENTATION.map((article) => {
    return (
      <ArticleCard
        key={article.id}
        id={article.id}
        title={article.title}
        contents={article.contents}
        img={article.img}
        description={article.description}/>
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
        path='/article/:id'  
        element={<ArticlePage/>}
        />

    </Routes>
    
  )
}; 


export default App
