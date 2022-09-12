"use strict";
const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT;

const commentModel=require("./schema")


function dupdatecomentHandler(req, res) {
    const id = req.params.id;
  
    const { name, picture, comment } = req.body;
    commentModel.findByIdAndUpdate(id, { name, picture, comment }, (err, result) => {
      if (err) {
        console.log(err);
      }
      else {
        commentModel.find({}, (err, result) => {
          if (err) {
            console.log(err);
          }
          else {
            res.json(result);
          }
        });
      }
    });
  }
  


module.exports=dupdatecomentHandler ;
