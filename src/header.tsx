import { useState } from 'react';
import './Header.css';

type HeaderProps = {
    search: string;
    setSearch: (value: string) => void;
    onSetSearch: () => void;
    onShowAll: () => void;
};

function Header ({search, setSearch, onSetSearch, onShowAll}: HeaderProps) {

  const [isSearchOpen, setIsSearchOpen] = useState(false);


  const handleSearch = () => {
    onSetSearch();
  };
  
  const handleShowAll = () => {
    onShowAll();
    setIsSearchOpen(false);
  };

  return (
  <div className="header_container"> 

    <div className="search_dropdown">
        <button className="search_toggle" onClick={() => setIsSearchOpen(!isSearchOpen)}>
          Dropdown
        </button>
    
    
    {isSearchOpen && (
    <div className="search_menu">
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
    </div>
    )}
    </div>

   
  </div>)

}

export default Header