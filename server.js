'use strict';
//------IMPORT SECTIONS-------//
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3010;
// const seedData = require("./components/seedData")


//------MONGOOSE CONFIGURATION-------//
mongoose.connect("mongodb://localhost:27017/WorldCup", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// seedData


//------ROUTE SECTIONS-------//

app.get("/", getHomeHandler);
app.get("/test", getTestHandler);
app.get("*", getDefaultHandler);

// http://localhost:3001/
function getHomeHandler(req, res) {
  res.send("HI FROM HOME ROUTE");
}
// http://localhost:3001/test
function getTestHandler(request, response) {
  response.send("test request received");
}
// http://localhost:3001/*
function getDefaultHandler(req, res) {
  res.status(404).send("SORRY! PAGE IS NOT FOUND");
}

//------SERVER LISTENING-------//
app.listen(PORT, () => console.log(`listening on ${PORT}`));
