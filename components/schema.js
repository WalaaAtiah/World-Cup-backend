

"use strict";

// const mongoose = require("mongoose");
console.log(`${process.env.mongodb_url}`)
const WorldCupSchema = new mongoose.Schema({
  name: String,
  description: String,
  avatar: String,
  status: String,
  email:String,
});

const WorldCup = mongoose.model("Cup", WorldCupSchema);

module.exports=WorldCup 
// seedData