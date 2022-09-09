"use strict";
const WorldCup = require("./schema")
async function seedData() {
    const firstMatch = new WorldCup({
      name: "1",
      description:
        "test",
      status: "won",
    });
  
    const secondMatch = new WorldCup({
      name: "test2",
      description:
        "test",
      status: "failed",

    });
  
    const thirdMatch = new WorldCup({
      name: "test3",
      description:
        "test",
      status: "won",
    });
  
    await firstMatch.save();
    await secondMatch.save();
    await thirdMatch.save();
  }


  let Data=seedData()
  module.exports=Data