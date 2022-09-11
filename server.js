'use strict';
//------IMPORT SECTIONS-------//
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const app = express();
app.use(cors());
const PORT = process.env.PORT || 3010;
const groups = require("./groups.json")
// const seedData = require("./components/seedData")


//------MONGOOSE CONFIGURATION-------//
// mongoose.connect("mongodb://localhost:27017/WorldCup", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
mongoose.connect(`${process.env.mongodb_url}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// seedData


//------ROUTE SECTIONS-------//

app.get("/", getHomeHandler);
app.get("/test", getTestHandler);
app.get("/groups", getGroupHandler);
app.get("*", getDefaultHandler);

// http://localhost:3010/
function getHomeHandler(req, res) {
  res.send("HI FROM HOME ROUTE");
}
// http://localhost:3010/test
function getTestHandler(request, response) {
  response.send("test request received");
}
// http://localhost:3010/*
function getDefaultHandler(req, res) {
  res.status(404).send("SORRY! PAGE IS NOT FOUND");
}

// http://localhost:3010/groups
function getGroupHandler(req,res){
  res.send(groups)
}
//------SERVER LISTENING-------//
app.listen(PORT, () => console.log(`listening on ${PORT}`));
