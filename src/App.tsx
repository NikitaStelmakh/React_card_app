import { useState } from 'react';
import ArticleCard from './assets/ArticleCard/ArticleCard.tsx';
import './App.css';
import { DOCUMENTATION } from './DOCUMENTATION.tsx';
import { Routes, Route } from 'react-router-dom';
import ArticlePage from './ArticlePage.tsx';
import  Header  from './header.tsx'

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
            <Header></Header>
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
