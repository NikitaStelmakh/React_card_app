import { useState } from 'react';
import './Header.css';
import DOCUMENTATION from './DOCUMENTATION'

type HeaderProps = {
    search: string;
    setSearch: (value: string) => void;
    onSetSearch: () => void;
    onClearAll: () => void;
};



function Header ({search, setSearch, onSetSearch, onClearAll}: HeaderProps) {

  const [isOpen, setIsOpen] = useState(false);

  const suggestions = DOCUMENTATION.filter(article =>
      article.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      ).slice(0,5);
 


  const handleSearch = () => {
    setIsOpen(false);
    onSetSearch();
  };
  
  const handleSuggestionClick = (title: string) => {
    setSearch(title);
    setIsOpen(false);
    onSetSearchWithTitle(title);
  };

  const onSetSearchWithTitle = (title: string) => {
    setSearch(title);
    onSetSearch();

  }

  const handleClearAll = () => {
    setIsOpen(false);
    onClearAll();
  };

  return (
  <div className="header_container"> 
    <div className="header_search">
      <input 
         type="text"
         placeholder="Search articles..."
         value={search}
         onFocus={() => setIsOpen(true)}
         onChange={(event) => {
            setSearch(event.target.value);
            setIsOpen(true);
         }}
         onKeyDown={(event) => {
            if (event.key === "Enter") {
                handleSearch();
            }

            if(event.key === "Escape") {
                setIsOpen(false)
            }
         }}
       />

       {isOpen && search.trim()!== "" && (
        <div className="search_suggestions">
            {suggestions.length > 0 ? (
                suggestions.map((article) => (
              <button
                type="button"
                key={article.id}
                onClick={() => handleSuggestionClick(article.title)}
        >
                {article.title}
              </button>
            ))
        ) : (<div className="no_suggestions">
            No articles found
        </div>
       )}
    </div>
    )}
    <button className="header_btn" onClick={handleSearch}>
        Search
      </button>

      <button className="header_btn" onClick={handleClearAll}>
        Clear search
      </button>
    </div>
   </div>
  );  
}


export default Header