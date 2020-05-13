const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProduceSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  inventory: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  }
});

module.exports = Produce = mongoose.model("produce", ProduceSchema);
