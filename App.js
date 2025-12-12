import React, { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import SpeciesList from "./components/SpeciesList";

function App() {
  const [species, setSpecies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Fetch species data from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/species")
      .then((res) => res.json())
      .then((data) => setSpecies(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">

      {/* Homepage Banner */}
      <header className="hero-section">
        <h1>WildWatch</h1>
        <p>Discover endangered species and learn how to protect wildlife.</p>
      </header>

      {/* Search Bar */}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Category Filter */}
      <div className="filter-container">
        <select
          className="filter-dropdown"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Mammal">Mammals</option>
          <option value="Bird">Birds</option>
          <option value="Marine">Marine</option>
        </select>
      </div>

      {/* Species Cards */}
      <SpeciesList
        species={species}
        searchTerm={searchTerm}
        selectedCategory={selectedCategory}
      />

    </div>
  );
}

export default App;
