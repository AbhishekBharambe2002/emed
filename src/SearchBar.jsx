// SearchBar.js
import React from 'react';
import './SearchBar.css';

function SearchBar({ searchTerm, setSearchTerm }) {
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for products"
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchBar;
