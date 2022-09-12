

"use strict";
const mongoose = require("mongoose");

// const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  name: String,
  picture: String,
  comment: String

});

const commentModel = mongoose.model('comment', commentSchema);


module.exports=commentModel 
// seedData