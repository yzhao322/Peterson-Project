const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Posts collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/peterson");

const productSeed = [
  {
    product: "apple",
    quantity: 50,

  },
  {
    product: "lemon",
    quantity: 50,

  },
  {
    product: "kiwi",
    quantity: 50,

  },

];

db.Produce.remove({})
  .then(() => db.Produce.collection.insertMany(productSeed))
  .then(data => {
    console.log(data.result.n + " produce inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
