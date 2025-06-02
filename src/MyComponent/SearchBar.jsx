// src/components/SearchBar.jsx
import React from 'react';

function SearchBar({ setSearchTerm }) {
  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search by Name or Department"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
