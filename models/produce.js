const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProduceSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Produce = mongoose.model("produce", ProduceSchema);
