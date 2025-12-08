import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [species, setSpecies] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/species")
      .then((res) => res.json())
      .then((data) => setSpecies(data));
  }, []);

  return (
    <div className="container">
      <h1 className="title">🐾 WildWatch</h1>
      <p className="subtitle">
        Explore endangered species, habitats, and conservation efforts.
      </p>

      <div className="main-layout">
        {/* Species Cards */}
        <div className="cards-grid">
          {species.map((s) => (
            <div
              key={s.id}
              className="species-card"
              onClick={() => setSelected(s)}
            >
              <img src={s.image} alt={s.name} />
              <div className="card-info">
                <h3>{s.name}</h3>
                <p className="status">{s.status}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Panel - Details */}
        <div className="details-panel">
          {selected ? (
            <div>
              <img src={selected.image} alt="" className="details-img" />
              <h2>{selected.name}</h2>
              <p><strong>Status:</strong> {selected.status}</p>
              <p><strong>Region:</strong> {selected.region}</p>
              <p><strong>Habitat:</strong> {selected.habitat}</p>
              <p className="desc">{selected.description}</p>
            </div>
          ) : (
            <p className="placeholder">Select a species to view details</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
