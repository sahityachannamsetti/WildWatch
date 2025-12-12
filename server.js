const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Sample species data with real Unsplash images
const species = [
  {
    id: 1,
    name: "Tiger",
    scientific: "Panthera tigris",
    habitat: "Forests",
    category: "Mammal",
    status: "Endangered",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/56/Tiger.50.jpg",
    description: "Tigers are the largest cat species in the world and are known for their power and strength."
  },
  {
    id: 2,
    name: "Giant Panda",
    scientific: "Ailuropoda melanoleuca",
    habitat: "Bamboo Forests",
    category: "Mammal",
    status: "Vulnerable",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Grosser_Panda.JPG",
    description: "Giant pandas are native to China and feed almost entirely on bamboo."
  },
  {
    id: 3,
    name: "African Elephant",
    scientific: "Loxodonta africana",
    habitat: "Savannas",
    category: "Mammal",
    status: "Vulnerable",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg",
    description: "The African elephant is the largest land animal on Earth."
  },
  {
    id: 4,
    name: "Snow Leopard",
    scientific: "Panthera uncia",
    habitat: "Mountainous Regions",
    category: "Mammal",
    status: "Vulnerable",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Snow_leopard_puppy_%28Uncia_uncia%29.jpg/1200px-Snow_leopard_puppy_%28Uncia_uncia%29.jpg?20130420195206",
    description: "Snow leopards live in the rugged mountains of Central and South Asia."
  },
  {
    id: 5,
    name: "Blue Whale",
    scientific: "Balaenoptera musculus",
    habitat: "Oceans",
    category: "Marine",
    status: "Endangered",
    image: "https://assets.worldwildlife.org/www-prd/images/Medium_WW2154941.width-1000.jpg",
    description: "The blue whale is the largest animal to have ever lived on Earth."
  },
  {
    id: 6,
    name: "Hawksbill Sea Turtle",
    scientific: "Eretmochelys imbricata",
    habitat: "Tropical Oceans",
    category: "Marine",
    status: "Critically Endangered",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Tortuga_carey_%28Eretmochelys_imbricata%29%2C_islas_Ad_Dimaniyat%2C_Om%C3%A1n%2C_2024-08-13%2C_DD_68.jpg/640px-Tortuga_carey_%28Eretmochelys_imbricata%29%2C_islas_Ad_Dimaniyat%2C_Om%C3%A1n%2C_2024-08-13%2C_DD_68.jpg",
    description: "Hawksbill turtles are vital to coral reef health but face threats from illegal trade."
  },
  {
    id: 7,
    name: "Bald Eagle",
    scientific: "Haliaeetus leucocephalus",
    habitat: "Forests & Mountains",
    category: "Bird",
    status: "Least Concern",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Bald_eagle_at_the_Hawk_Conservancy_Trust_2-2.jpg/640px-Bald_eagle_at_the_Hawk_Conservancy_Trust_2-2.jpg",
    description: "The bald eagle is a bird of prey found in North America and a symbol of the United States."
  },
  {
    id: 8,
    name: "Red Panda",
    scientific: "Ailurus fulgens",
    habitat: "Temperate Forests",
    category: "Mammal",
    status: "Endangered",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/50/RedPandaFullBody.JPG",
    description: "Red pandas are skilled climbers and are native to the eastern Himalayas."
  },
{
  id: 17,
  name: "Common Kingfisher",
  scientific: "Alcedo atthis",
  habitat: "Rivers, lakes, wetlands",
  category: "Bird",
  status: "Least Concern",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Common_Kingfisher_Alcedo_atthis.jpg/640px-Common_Kingfisher_Alcedo_atthis.jpg",
  description: "A small, brightly colored bird known for diving swiftly to catch fish."
},
{
  id: 18,
  name: "Eurasian Eagle-Owl",
  scientific: "Bubo bubo",
  habitat: "Forests and rocky cliffs",
  category: "Bird",
  status: "Least Concern",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Eagle_Owl_IMG_9203.JPG/640px-Eagle_Owl_IMG_9203.JPG",
  description: "One of the largest owls in the world with striking orange eyes."
},
{
  id: 19,
  name: "Indian Peafowl",
  scientific: "Pavo cristatus",
  habitat: "Forests and grasslands",
  category: "Bird",
  status: "Least Concern",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Paonroue.JPG/640px-Paonroue.JPG",
  description: "Famous for its beautiful tail feathers used during courtship displays."
},
{
  id: 20,
  name: "Emperor Penguin",
  scientific: "Aptenodytes forsteri",
  habitat: "Antarctic",
  category: "Bird",
  status: "Near Threatened",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Aptenodytes_forsteri_DT_-AQ_GR_Punta_Ambato-_%2818%29_%2820227404503%29.jpg/640px-Aptenodytes_forsteri_DT_-AQ_GR_Punta_Ambato-_%2818%29_%2820227404503%29.jpg",
  description: "The tallest and heaviest penguin species, known for surviving extreme cold."
},
{
  id: 21,
  name: "Red-tailed Hawk",
  scientific: "Buteo jamaicensis",
  habitat: "Grasslands, deserts, forests",
  category: "Bird",
  status: "Least Concern",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Buteo_jamaicensis_in_flight_at_Llano_Seco-1520.jpg/640px-Buteo_jamaicensis_in_flight_at_Llano_Seco-1520.jpg",
  description: "A strong North American raptor recognized by its distinct reddish tail."
},
{
  id: 22,
  name: "Greater Flamingo",
  scientific: "Phoenicopterus roseus",
  habitat: "Lakes, lagoons, wetlands",
  category: "Bird",
  status: "Least Concern",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/002_Greater_flamingo_taking_off_in_the_Camargue_Photo_by_Giles_Laurent.jpg/640px-002_Greater_flamingo_taking_off_in_the_Camargue_Photo_by_Giles_Laurent.jpg",
  description: "Tall, pink wading bird known for filter-feeding on algae and crustaceans."
},
{
  id: 23,
  name: "Whooper Swan",
  scientific: "Cygnus cygnus",
  habitat: "Lakes, wetlands, Arctic tundra",
  category: "Bird",
  status: "Least Concern",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Cygnus_cygnus_EM1B8407_%2833625656403%29_%282%29.jpg/640px-Cygnus_cygnus_EM1B8407_%2833625656403%29_%282%29.jpg",
  description: "A large migratory swan known for its loud honking calls."
},
{
  id: 24,
  name: "Mandarin Duck",
  scientific: "Aix galericulata",
  habitat: "Rivers, lakes, ponds",
  category: "Bird",
  status: "Least Concern",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Mandarin.duck.arp.jpg/640px-Mandarin.duck.arp.jpg",
  description: "One of the world's most colorful duck species, native to East Asia."
},
{
  id: 25,
  name: "Barn Owl",
  scientific: "Tyto alba",
  habitat: "Grasslands, farms, forests",
  category: "Bird",
  status: "Least Concern",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Tyto_alba_1_Luc_Viatour.jpg/640px-Tyto_alba_1_Luc_Viatour.jpg",
  description: "A nocturnal owl with a heart-shaped face and exceptional hearing for hunting."
}

];


// ✅ FIX: Add API route so frontend can fetch species
app.get("/api/species", (req, res) => {
  res.json(species);
});

const PORT = 5000;
console.log("BACKEND SPECIES DATA:", species);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
