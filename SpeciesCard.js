import React from 'react';
import '../App.css'; // make sure CSS is imported

export default function SpeciesCard({ species }) {
  return (
    <div className="species-card">
      <img src={species.image} alt={species.name} />

      <h3>{species.name}</h3>
      <p><strong>Scientific:</strong> {species.scientific}</p>
      <p><strong>Habitat:</strong> {species.habitat}</p>
      <p><strong>Category:</strong> {species.category}</p>
      <p><strong>Status:</strong> {species.status}</p>
      <p>{species.description}</p>
    </div>
  );
}
