import { useState } from 'react';
import './Header.css';

type HeaderProps = {
    search: string;
    setSearch: (value: string) => void;
    onSetSearch: () => void;
    onShowAll: () => void;
};

function Header ({search, setSearch, onSetSearch, onShowAll}: HeaderProps) {


  const handleSearch = () => {
    onSetSearch();
  };
  
  const handleShowAll = () => {
    onShowAll();
  };

  return (
  <div className="header_container"> {(
    <div className="header_search">
      <input 
         type="text"
         placeholder="Search articles..."
         value={search}
         onChange={(event) => setSearch(event.target.value)}
         onKeyDown={(event) => {
            if (event.key === "Enter") {
                handleSearch();
            }
         }}
       />
       
    
      <button onClick={handleSearch}>
        Search
      </button>

      <button onClick={handleShowAll}>
        All articles
      </button>
    </div>
    )}
    </div>)

}

export default Header