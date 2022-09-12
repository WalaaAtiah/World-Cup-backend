"use strict";
const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT;

const commentModel=require("./schema")


async function comentHandler(req, res) {
  console.log(req.body);
  const { name, picture, comment } = req.body;
  await commentModel.create({
    name: name,
    picture: picture,
    comment: comment
  });

  commentModel.find({}, (err, result) => {
    if (err) {
      console.log(err);
    }
    else {
      res.json(result);
    }
  });
}



module.exports=comentHandler ;
