const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// Dummy Data (Database ki jagah)
const products = [
  { id: 1, name: "Iphone", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 },
  { id: 3, name: "Headphones", price: 1500 },
];

// GET API
app.get("/products", (req, res) => {
  res.json(products);
});

// Server Start
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
