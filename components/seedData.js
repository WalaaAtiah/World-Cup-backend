"use strict";
const commentModel = require("./schema")

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

// seedCommentData();
  let Data=seedCommentData

  module.exports=Data 

