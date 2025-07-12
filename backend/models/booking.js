// const mongoose = require("mongoose");

// const BookingSchema = new mongoose.Schema({
//   carId: { type: mongoose.Schema.Types.ObjectId, ref: "Cardata", required: true },
//   name: String,
//   email: String,
//   phone: String,
//   pickupDate: String,
//   dropoffDate: String,
//   pickupLocation: String,
//   dropoffLocation: String,
//   aadharCard: String,        // base64 format
//   drivingLicense: String     // base64 format
// }, { timestamps: true });

// module.exports = mongoose.model("Booking", BookingSchema);





const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  carId: String,
  name: String,
  email: String,
  phone: String,
  pickupDate: String,
  dropoffDate: String,
  pickupLocation: String,
  dropoffLocation: String,
  aadharCard: String, // base64 string
  drivingLicense: String, // base64 string
});

module.exports = mongoose.model("Booking", bookingSchema);
