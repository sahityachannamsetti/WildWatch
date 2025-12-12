import React from "react";
import SpeciesCard from "./SpeciesCard";
import "../App.css";
export default function SpeciesList({ species, searchTerm, selectedCategory }) {

  const filtered = species.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || s.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="species-container">
      {filtered.map(s => (
        <SpeciesCard key={s.id} species={s} />
      ))}
    </div>
  );
}

