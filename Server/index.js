const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const cberesapi = require("./cberesapi.json");
const reid405679 = require("./resid405679.json");
const reid1002539 = require("./resapi1002539.json");

app.use(bodyParser.json());
app.use(cors());

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
