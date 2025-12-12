import React from "react";
import "../App.css";

export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="search-bar-container">
      <input 
        className="search-input"
        type="text"
        placeholder="Search species..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}
