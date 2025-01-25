const mongoose = require("mongoose");
const { finished } = require("supertest/lib/test");

const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

module.exports = mongoose.model("Item", ItemSchema);
