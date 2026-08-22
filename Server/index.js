// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");

// const app = express();

// const cberesapi = require("./cberesapi.json");
// const reid405679 = require("./resid405679.json");
// const reid1002539 = require("./resapi1002539.json");

// app.use(bodyParser.json());
// app.use(cors());

// app.get("/", (req, res) => {
//   res.send("FoodRush API is running 🚀");
// });

// app.get("/restaurants", (req, res) => {
//   res.json(cberesapi);
// });

// app.get("/restaurants/405679", (req, res) => {
//   res.json(reid405679);
// });

// app.get("/restaurants/1002539", (req, res) => {
//   res.json(reid1002539);
// });

// const PORT = process.env.PORT || 3002;

// app.listen(PORT, () => {
//   console.log(`FoodRush API running on port ${PORT}`);
// });
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import cberesapi from "./cberesapi.json" with { type: "json" };
import reid405679 from "./resid405679.json" with { type: "json" };
import reid1002539 from "./resapi1002539.json" with { type: "json" };

import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

// MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully ✅");
  })
  .catch((error) => {
    console.error("MongoDB connection error ❌", error);
  });

// Authentication
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("FoodRush API is running 🚀");
});

app.get("/restaurants", (req, res) => {
  res.json(cberesapi);
});

app.get("/restaurants/405679", (req, res) => {
  res.json(reid405679);
});

app.get("/restaurants/1002539", (req, res) => {
  res.json(reid1002539);
});

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`FoodRush API running on port ${PORT}`);
});
