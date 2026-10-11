import { useState } from 'react';
import ArticleCard from './assets/ArticleCard/ArticleCard.tsx';
import './App.css';
import { DOCUMENTATION } from './DOCUMENTATION.tsx';
import { Routes, Route } from 'react-router-dom';
import ArticlePage from './ArticlePage.tsx';
import  Header  from './header.tsx'

function App() {
  const [search, setSearch] = useState("");
  const [appliedSearch, setAppliedSearch] = useState("");

  const filteredArticles = DOCUMENTATION.filter(article => article.title.toLowerCase().includes(appliedSearch.toLowerCase()));


  const cardsRender = filteredArticles.map((article) => {
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
        <>
          <Header
            search={search}
            setSearch={setSearch}
            onSetSearch={() => setAppliedSearch(search)}
            onShowAll={() => {
              setSearch("");
              setAppliedSearch("");
            }}
          />
          <main className="main_content">
            <div className="video_container">
              {cardsRender}
            </div>

            {filteredArticles.length === 0 && (
              <h2>Article not found</h2>
              )}
          </main>  
        </>
        }
      />

      <Route
        path='/article/:id'  
        element={<ArticlePage/>}
      />

    </Routes>
    
  );
}; 


export default App
