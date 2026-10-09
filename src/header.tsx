import { Link } from 'react-router-dom';
import { DOCUMENTATION } from './DOCUMENTATION.tsx';
import { useState } from 'react';

function Header () {
  const [search, setSearch] = useState("");
  const [appliedSearch, setAppliedSearch] = useState("");

  const filteredArticles = DOCUMENTATION.filter(article => article.title.toLowerCase().includes(search.toLowerCase()));

  const handleSearch = () => {
    setAppliedSearch(search);
  };
  
  const handleShowAll = () => {
    setSearch("");
    setAppliedSearch("");
  };

  return (<div className="header_container">
    <div className="main_page_btn">
      <Link to={'/'}> All articles </Link>

    </div>  
    <input 
       type="text"
       placeholder="Search articles..."
       value={search}
       onChange={(event) => setSearch(event.target.value)}
       />
    
    <button onClick={handleSearch}>
        Search
    </button>

    <button onClick={handleShowAll}>
        All articles
    </button>
    
      <div className="filter_container">
        {filteredArticles.map(article =>
            <Link
              key={article.id}
              to={`/article/${article.id}`}>
                  <h2>{article.title}</h2>
            </Link>
        )}
      </div>  
      {filteredArticles.length === 0 && (
            <h1>Articles not found</h1>
      )}
  </div>)

}

export default Header