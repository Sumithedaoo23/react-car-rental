const mongoose = require('mongoose');

const CarsdataSchema = new mongoose.Schema({
    carname:String,
    charges:Number,
    cartype:String,
    fueltype:String,
    acnonac:String,
    seats:Number,
    distance:Number,
    image:String,

})

module.exports = mongoose.model("Cardetail", CarsdataSchema);