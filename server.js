const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// TEMPORARY: Static species data (later you can expand)
const speciesData = [
  {
    id: 1,
    name: "Snow Leopard",
    category: "Mammal",
    region: "Central Asia",
    status: "Vulnerable",
    habitat: "Mountain ranges",
    image: "https://example.com/snow-leopard.jpg",
    description: "Snow leopards live in cold mountain regions...",
  },
  {
    id: 2,
    name: "Asian Elephant",
    category: "Mammal",
    region: "Asia",
    status: "Endangered",
    habitat: "Forests & grasslands",
    image: "https://example.com/asian-elephant.jpg",
    description: "Asian elephants face habitat loss...",
  }
];

// APIs
app.get("/species", (req, res) => {
  res.json(speciesData);
});

app.get("/species/:id", (req, res) => {
  const id = Number(req.params.id);
  const species = speciesData.find(s => s.id === id);
  if (!species) return res.status(404).json({ error: "Species not found" });
  res.json(species);
});

// Server
app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
