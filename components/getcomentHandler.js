
"use strict";
const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT;

const commentModel=require("./schema")



function getcomentHandler(req, res) {
    console.log("hellllllllllooooooooooooooooooo");
  
    commentModel.find({}, (err, result) => {
      if (err) {
        console.log(err);
      }
      else {
        // console.log(result);
        res.json(result);
      }
    });
  }
  




module.exports=getcomentHandler ;
