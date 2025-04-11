const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require("./config/db");
const app = express(); // ✅ Move this up

// CORS configuration
app.use(cors({
  origin: "http://localhost:5173", // your frontend origin
  credentials: true
}));

app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/storeDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.log("❌ MongoDB connection error:", err));

// Dummy route
app.get("/api/products", (req, res) => {
  res.json([
    { name: "Product 1", sku: "SKU001", price: 100, stock: 10 },
    { name: "Product 2", sku: "SKU002", price: 200, stock: 5 },
  ]);
});

app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
