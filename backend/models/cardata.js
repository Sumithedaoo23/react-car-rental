const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema({
  carname: String,
  charges: Number,
  cartype: String,
  fueltype: String,
  acnonac: String,
  seats: Number,
  distance: Number,
  image: String, // base64 string
});

module.exports = mongoose.model("Cardata", CarSchema);
