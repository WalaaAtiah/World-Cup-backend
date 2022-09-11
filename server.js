/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

'use strict';
//------IMPORT SECTIONS-------//
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require("mongoose");
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT;
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
app.get("/coment", getcomentHandler);
app.post("/coment", comentHandler);
app.delete("/coment/:id", deletecomentHandler);
app.put("/coment/:id", dupdatecomentHandler);

app.get("*", getDefaultHandler);

// http://localhost:3001/
function getHomeHandler(req, res) {
  res.send("HI FROM HOME ROUTE");
}
// http://localhost:3001/test
function getTestHandler(request, response) {
  response.send("test request received");
}

const commentSchema = new mongoose.Schema({
  name: String,
  picture: String,
  comment: String

});

const commentModel = mongoose.model('comment', commentSchema);





//seed data
async function seedCommentData() {
  const firstcomment = new commentModel({
    name: "yasmeen sabry",
    picture: "https://i0.wp.com/arawiki.net/wp-content/uploads/2022/03/%D9%8A%D8%A7%D8%B3%D9%85%D9%8A%D9%86-%D8%B5%D8%A8%D8%B1%D9%8A-%D9%81%D9%8A-%D9%84%D9%86%D8%AF%D9%86-%D9%84%D9%85%D9%86%D8%A7%D9%82%D8%B4%D8%A9-%D9%82%D8%B6%D8%A7%D9%8A%D8%A7-%D8%A7%D9%84%D9%85%D8%B1%D8%A3%D8%A9-%D8%A7%D9%84%D8%B9%D8%B1%D8%A8%D9%8A%D8%A9.jpg?fit=1440%2C1080&ssl=1?v=1648186283",
    comment: "esaaaaaaaam safaaaaa7"

  });

  const secondcomment = new commentModel({
    name: "wesam Qutob",
    picture: "https://angartwork.akamaized.net/webp/?id=1154056631&size=296",
    comment: "mnawar ya bashaaaaa"

  });

  const theardcomment = new commentModel({
    name: "joe hattab",
    picture: "https://yt3.ggpht.com/ytc/AMLnZu8harVVO1tVewVkY7WfvGGsCSOP8gGSABk2HO_8PA=s900-c-k-c0x00ffffff-no-rj",
    comment: "nice pic shawaleeeeeeeeeeeeeeeeeeeeeeeee"

  });

  await firstcomment.save();
  await secondcomment.save();
  await theardcomment.save();
  console.log('done');
}
// console.log(seedCommentData);
// seedCommentData();






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


function deletecomentHandler(req, res) {
  const comId = req.params.id;
  commentModel.deleteOne({ _id: comId }, (err, result) => {
    commentModel.find({}, (err, result) => {
      if (err) {
        console.log(err);
      }
      else {
        res.json(result);
      }
    });
  });
}

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

// http://localhost:3001/*
function getDefaultHandler(req, res) {
  res.status(404).send("SORRY! PAGE IS NOT FOUND");
}

//------SERVER LISTENING-------//
app.listen(PORT, () => console.log(`listening on ${PORT}`));
