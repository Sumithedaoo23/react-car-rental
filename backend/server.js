// // const express = require('express');
// // const mongoose = require('mongoose');
// // const bodyParser = require('body-parser');
// // const cors = require('cors');
// // const jwt = require('jsonwebtoken');
// // const multer = require('multer');
// // // const CoffeeUserData = require('./models/signupfile');
// // const Cardata = require('./models/cars');

// // // const app = express();
// // // app.use(cors());

// // const app = express();
// // const MONGO_URI = "mongodb://127.0.0.1:27017/cardetail";

// // // Middleware
// // app.use(cors());
// // app.use(express.json());
// // app.use(bodyParser.urlencoded({ extended: true }));
// // app.use('/uploads', express.static('uploads'));

// // // Multer setup
// // const storage = multer.memoryStorage();
// // const upload = multer({ storage });

// // // MongoDB Connection
// // mongoose.connect(MONGO_URI, {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true,
// // })
// //     .then(() => console.log("MongoDB Connected"))
// //     .catch((err) => console.error("MongoDB Connection Error:", err));

// // // Add Coffee Item into database
// // app.post("/cardetails", upload.single("image"), async (req, res) => {
// //     try {
// //         const { carname, charges, cartype, fueltype, acnonac, seats, distance } = req.body;

// //         if (!carname || !charges || !cartype || !fueltype || !acnonac || !seats || !distance || !req.file) {
// //             return res.status(400).json({ error: "All fields are required including image" });
// //         }

// //         const image = req.file.buffer.toString("base64");

// //         const newItem = new Cardata({
// //             carname,
// //             charges,
// //             cartype,
// //             fueltype,
// //             acnonac,
// //             seats,
// //             distance,
// //             image
// //         });

// //         await newItem.save();

// //         res.status(201).json({ message: "Car detail added successfully" });
// //     } catch (error) {
// //         console.error("Error adding car details:", error);
// //         res.status(500).json({ error: "Internal server error" });
// //     }
// // });

// // // Get categorized coffee items

// // app.get("/cardetails", async (req, res) => {
// //   try {
// //     const cars = await Cardata.find();
// //     res.status(200).json(cars);
// //   } catch (error) {
// //     console.error("Error fetching car details:", error);
// //     res.status(500).json({ error: "Internal server error" });
// //   }
// // });

// // // Start the Server
// // app.listen(4001)

// // const express = require('express');
// // const mongoose = require('mongoose');
// // const bodyParser = require('body-parser');
// // const cors = require('cors');
// // const multer = require('multer');
// // const Cardata = require('./models/cars');

// // const app = express();
// // const MONGO_URI = "mongodb://127.0.0.1:27017/cardetail";

// // // Middleware
// // app.use(cors());
// // app.use(express.json());
// // app.use(bodyParser.urlencoded({ extended: true }));
// // app.use('/uploads', express.static('uploads'));
// // // app.use('/', require('./routes/cardet~ails'))  // or your correct path

// // // Multer setup (stores image in memory as buffer)
// // const storage = multer.memoryStorage();
// // const upload = multer({ storage });

// // // MongoDB Connection
// // mongoose.connect(MONGO_URI, {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true,
// // })
// // .then(() => console.log("✅ MongoDB Connected"))
// // .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// // // ROUTES
// // // ----------------------

// // // POST: Add a new car
// // app.post("/cardetails", upload.single("image"), async (req, res) => {
// //     try {
// //         const { carname, charges, cartype, fueltype, acnonac, seats, distance } = req.body;

// //         if (!carname || !charges || !cartype || !fueltype || !acnonac || !seats || !distance || !req.file) {
// //             return res.status(400).json({ error: "All fields are required including image" });
// //         }

// //         const image = req.file.buffer.toString("base64");

// //         const newItem = new Cardata({
// //             carname,
// //             charges,
// //             cartype,
// //             fueltype,
// //             acnonac,
// //             seats,
// //             distance,
// //             image
// //         });

// //         await newItem.save();
// //         res.status(201).json({ message: "✅ Car detail added successfully" });
// //     } catch (error) {
// //         console.error("❌ Error adding car details:", error);
// //         res.status(500).json({ error: "Internal server error" });
// //     }
// // });

// // // GET: All cars
// // app.get("/cardetails", async (req, res) => {
// //     try {
// //         const cars = await Cardata.find();
// //         res.status(200).json(cars);
// //     } catch (error) {
// //         console.error("❌ Error fetching car details:", error);
// //         res.status(500).json({ error: "Internal server error" });
// //     }
// // });

// // // ✅ GET: Specific car by ID (for "View Details" feature)
// // // app.get("/cardetails/:id", async (req, res) => {
// // //     try {
// // //         const car = await Cardata.findById(req.params.id);
// // //         if (!car) return res.status(404).json({ error: "Car not found" });
// // //         res.status(200).json(car);
// // //     } catch (error) {
// // //         console.error("❌ Error fetching car by ID:", error);
// // //         res.status(500).json({ error: "Internal server error" });
// // //     }
// // // });

// // app.get("/cardetails/:id", async (req, res) => {
// //   try {
// //     const { id } = req.params;

// //     // 🔥 Convert to ObjectId
// //     // const car = await Car.findById(new mongoose.Types.ObjectId(id));
// //     const car = await Cardata.findById(new mongoose.Types.ObjectId(id));

// //     if (!car) {
// //       return res.status(404).json({ error: "Car not found" });
// //     }

// //     res.json(car);
// //   } catch (error) {
// //     console.error("Error getting car:", error);
// //     res.status(500).json({ error: "Internal server error" });
// //   }
// // });

// // // Start the Server
// // app.listen(4004, () => {
// //     console.log("🚀 Server running on http://localhost:4004");
// // });

// // // POST /bookings
// // app.post("/bookings", (req, res) => {
// //   const booking = req.body;
// //   // Save to DB (MongoDB or others)
// //   console.log("New Booking:", booking);
// //   res.status(200).json({ message: "Booking saved!" });
// // });

// // const express = require('express');
// // const mongoose = require('mongoose');
// // const bodyParser = require('body-parser');
// // const cors = require('cors');
// // const multer = require('multer');
// // const Cardata = require('./models/cars');

// // const app = express();
// // const PORT = 4004;
// // const MONGO_URI = "mongodb://127.0.0.1:27017/cardetail";

// // // Middleware
// // app.use(cors());
// // app.use(express.json());
// // app.use(bodyParser.urlencoded({ extended: true }));
// // app.use('/uploads', express.static('uploads'));

// // // Multer setup (store image in memory as buffer)
// // const storage = multer.memoryStorage();
// // const upload = multer({ storage });

// // // MongoDB Connection
// // mongoose.connect(MONGO_URI, {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true,
// // })
// // .then(() => console.log("✅ MongoDB Connected"))
// // .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// // // ----------------------
// // // ROUTES
// // // ----------------------

// // // ✅ POST: Add a new car
// // app.post("/cardetails", upload.single("image"), async (req, res) => {
// //     try {
// //         const { carname, charges, cartype, fueltype, acnonac, seats, distance } = req.body;

// //         if (!carname || !charges || !cartype || !fueltype || !acnonac || !seats || !distance || !req.file) {
// //             return res.status(400).json({ error: "All fields are required including image" });
// //         }

// //         const image = req.file.buffer.toString("base64");

// //         const newItem = new Cardata({
// //             carname,
// //             charges,
// //             cartype,
// //             fueltype,
// //             acnonac,
// //             seats,
// //             distance,
// //             image
// //         });

// //         await newItem.save();
// //         res.status(201).json({ message: "✅ Car detail added successfully" });
// //     } catch (error) {
// //         console.error("❌ Error adding car details:", error);
// //         res.status(500).json({ error: "Internal server error" });
// //     }
// // });

// // // ✅ GET: All cars
// // app.get("/cardetails", async (req, res) => {
// //     try {
// //         const cars = await Cardata.find();
// //         res.status(200).json(cars);
// //     } catch (error) {
// //         console.error("❌ Error fetching car details:", error);
// //         res.status(500).json({ error: "Internal server error" });
// //     }
// // });

// // // ✅ GET: Car details by ID (used in "View Details" page)
// // app.get("/cardetails/:id", async (req, res) => {
// //     try {
// //         const { id } = req.params;
// //         const car = await Cardata.findById(new mongoose.Types.ObjectId(id));

// //         if (!car) {
// //             return res.status(404).json({ error: "Car not found" });
// //         }

// //         res.status(200).json(car);
// //     } catch (error) {
// //         console.error("❌ Error getting car by ID:", error);
// //         res.status(500).json({ error: "Internal server error" });
// //     }
// // });

// // // ✅ POST: Create a booking
// // app.post("/bookings", (req, res) => {
// //     const booking = req.body;
// //     // Save to DB (you can implement actual save logic here)
// //     console.log("New Booking:", booking);
// //     res.status(200).json({ message: "Booking saved!" });
// // });

// // // ----------------------
// // // START SERVER
// // // ----------------------
// // app.listen(PORT, () => {
// //     console.log(`🚀 Server running on http://localhost:${PORT}`);
// // });

// // const express = require('express');
// // const mongoose = require('mongoose');
// // const cors = require('cors');
// // const multer = require('multer');
// // const bodyParser = require('body-parser');

// // const Cardata = require('./models/cars');
// // const Booking = require('./models/Booking');

// // const app = express();
// // const PORT = 4004;
// // const MONGO_URI = "mongodb://127.0.0.1:27017/cardetail";

// // // Middleware
// // app.use(cors());
// // app.use(express.json());
// // app.use(bodyParser.urlencoded({ extended: true }));
// // app.use('/uploads', express.static('uploads'));

// // // Multer setup
// // const storage = multer.memoryStorage();
// // const upload = multer({ storage });

// // // MongoDB Connection
// // mongoose.connect(MONGO_URI, {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// // })
// // .then(() => console.log("✅ MongoDB Connected"))
// // .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// // // ------------------- ROUTES -------------------

// // // ✅ POST /cardetails (Add Car and return _id)
// // app.post("/cardetails", upload.single("image"), async (req, res) => {
// //   try {
// //     const { carname, charges, cartype, fueltype, acnonac, seats, distance } = req.body;

// //     if (!carname || !charges || !cartype || !fueltype || !acnonac || !seats || !distance || !req.file) {
// //       return res.status(400).json({ error: "All fields including image are required." });
// //     }

// //     const image = req.file.buffer.toString("base64");

// //     const newCar = new Cardata({
// //       carname,
// //       charges,
// //       cartype,
// //       fueltype,
// //       acnonac,
// //       seats,
// //       distance,
// //       image
// //     });

// //     await newCar.save();
// //     res.status(201).json(newCar); // includes _id
// //   } catch (err) {
// //     console.error("❌ Error in adding car:", err);
// //     res.status(500).json({ error: "Internal server error" });
// //   }
// // });

// // // ✅ GET /cardetails (All cars)
// // app.get("/cardetails", async (req, res) => {
// //   try {
// //     const cars = await Cardata.find();
// //     res.status(200).json(cars);
// //   } catch (err) {
// //     console.error("❌ Fetch error:", err);
// //     res.status(500).json({ error: "Internal server error" });
// //   }
// // });

// // // ✅ GET /cardetails/:id (Single car by ID)
// // app.get("/cardetails/:id", async (req, res) => {
// //   try {
// //     const { id } = req.params;
// //     const car = await Cardata.findById(id);
// //     if (!car) {
// //       return res.status(404).json({ error: "Car not found" });
// //     }
// //     res.status(200).json(car);
// //   } catch (err) {
// //     console.error("❌ Error getting car by ID:", err);
// //     res.status(500).json({ error: "Internal server error" });
// //   }
// // });

// // // ✅ POST /bookings (Save booking with image fields as base64)
// // app.post("/bookings", upload.fields([
// //   { name: "aadharCard", maxCount: 1 },
// //   { name: "drivingLicense", maxCount: 1 }
// // ]), async (req, res) => {
// //   try {
// //     const {
// //       carId, name, email, phone,
// //       pickupDate, dropoffDate,
// //       pickupLocation, dropoffLocation
// //     } = req.body;

// //     const aadharCard = req.files?.aadharCard?.[0]?.buffer.toString("base64") || "";
// //     const drivingLicense = req.files?.drivingLicense?.[0]?.buffer.toString("base64") || "";

// //     const booking = new Booking({
// //       carId,
// //       name,
// //       email,
// //       phone,
// //       pickupDate,
// //       dropoffDate,
// //       pickupLocation,
// //       dropoffLocation,
// //       aadharCard,
// //       drivingLicense,
// //     });

// //     await booking.save();
// //     res.status(200).json({ message: "✅ Booking saved!" });
// //   } catch (err) {
// //     console.error("❌ Booking save error:", err);
// //     res.status(500).json({ error: "Booking failed" });
// //   }
// // });

// // // ------------------- START SERVER -------------------
// // app.listen(PORT, () => {
// //   console.log(`🚀 Server is running on http://localhost:${PORT}`);
// // });

// const express = require("express");
// const mongoose = require("mongoose");
// const multer = require("multer");
// const cors = require("cors");
// const bodyParser = require("body-parser");

// const Cardata = require("./models/cardata");
// const Booking = require("./models/booking");

// const app = express();
// const PORT = 4004;
// const MONGO_URI = "mongodb://127.0.0.1:27017/cardetail";

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use("/uploads", express.static("uploads")); // if needed for static files

// // Multer setup
// const storage = multer.memoryStorage();
// const upload = multer({ storage });

// // MongoDB Connection
// mongoose.connect(MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => console.log("✅ MongoDB Connected"))
// .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// // ------------------- ROUTES -------------------

// // ✅ POST: Add car
// app.post("/cardetails", upload.single("image"), async (req, res) => {
//   try {
//     const { carname, charges, cartype, fueltype, acnonac, seats, distance } = req.body;
//     const image = req.file?.buffer?.toString("base64");

//     if (!carname || !charges || !cartype || !fueltype || !acnonac || !seats || !distance || !image) {
//       return res.status(400).json({ error: "All fields and image required" });
//     }

//     const newCar = new Cardata({
//       carname,
//       charges,
//       cartype,
//       fueltype,
//       acnonac,
//       seats,
//       distance,
//       image,
//     });

//     await newCar.save();
//     res.status(201).json(newCar);
//   } catch (err) {
//     console.error("❌ Error in adding car:", err);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// // ✅ GET: All cars
// app.get("/cardetails", async (req, res) => {
//   try {
//     const cars = await Cardata.find();
//     res.status(200).json(cars);
//   } catch (err) {
//     console.error("❌ Fetch error:", err);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// // ✅ GET: Single car by ID
// app.get("/cardetails/:id", async (req, res) => {
//   try {
//     const car = await Cardata.findById(req.params.id);
//     if (!car) return res.status(404).json({ error: "Car not found" });
//     res.status(200).json(car);
//   } catch (err) {
//     console.error("❌ Error getting car:", err);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// // ✅ POST: Save Booking
// app.post("/bookings", upload.fields([
//   { name: "aadharCard", maxCount: 1 },
//   { name: "drivingLicense", maxCount: 1 }
// ]), async (req, res) => {
//   try {
//     const {
//       carId, name, email, phone,
//       pickupDate, dropoffDate,
//       pickupLocation, dropoffLocation
//     } = req.body;

//     const aadharCard = req.files?.aadharCard?.[0]?.buffer?.toString("base64") || "";
//     const drivingLicense = req.files?.drivingLicense?.[0]?.buffer?.toString("base64") || "";

//     const booking = new Booking({
//       carId,
//       name,
//       email,
//       phone,
//       pickupDate,
//       dropoffDate,
//       pickupLocation,
//       dropoffLocation,
//       aadharCard,
//       drivingLicense,
//     });

//     await booking.save();
//     res.status(200).json({ message: "✅ Booking saved successfully" });
//   } catch (err) {
//     console.error("❌ Booking error:", err);
//     res.status(500).json({ error: "Failed to save booking" });
//   }
// });

// // ------------------- START SERVER -------------------
// app.listen(PORT, () => {
//   console.log(`🚗 Server running at http://localhost:${PORT}`);
// });




const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const cors = require("cors");
const bodyParser = require("body-parser");

const Cardata = require("./models/cardata");
const Booking = require("./models/booking");

const app = express();
const PORT = 4006;
const MONGO_URI = "mongodb://127.0.0.1:27017/cardetail";

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads")); // optional for static files

// Multer setup to read files into memory
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Connect MongoDB
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ MongoDB Connection Error:", err));

// ------------------- ROUTES -------------------

// ✅ Add Car
app.post("/cardetails", upload.single("image"), async (req, res) => {
  try {
    const { carname, charges, cartype, fueltype, acnonac, seats, distance } =
      req.body;
    const image = req.file?.buffer?.toString("base64");
    // const image = `data:image/jpeg;base64,${req.file?.buffer?.toString("base64")}`;

    if (
      !carname ||
      !charges ||
      !cartype ||
      !fueltype ||
      !acnonac ||
      !seats ||
      !distance ||
      !image
    ) {
      return res.status(400).json({ error: "All fields and image required" });
    }

    const newCar = new Cardata({
      carname,
      charges,
      cartype,
      fueltype,
      acnonac,
      seats,
      distance,
      image,
    });

    await newCar.save();
    res.status(201).json(newCar);
  } catch (err) {
    console.error("❌ Error adding car:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ✅ Get All Cars
app.get("/cardetails", async (req, res) => {
  try {
    const cars = await Cardata.find();
    res.status(200).json(cars);
  } catch (err) {
    console.error("❌ Fetching cars failed:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// ✅ Get Car by ID
// app.get("/cardetails/:id", async (req, res) => {
//   try {
//     // const car = await Cardata.findById(req.params.id);
//     // if (!car) return res.status(404).json({ error: "Car not found" });
//     // res.status(200).json(car);
//     const { id } = req.params;
//     if (!mongoose.Types.ObjectId.isValid(id)) {
//       return res.status(400).json({ error: "Invalid car ID" });
//     }
//     const car = await Cardata.findById(id);
//   } catch (err) {
//     console.error("❌ Fetching car by ID failed:", err);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

app.get("/cardetails/:id", async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid car ID" });
    }

    const car = await Cardata.findById(id);

    if (!car) {
      return res.status(404).json({ error: "Car not found" });
    }

    res.status(200).json(car); // ✅ this was missing!
  } catch (err) {
    console.error("❌ Fetching car by ID failed:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});


// ✅ Save Booking
app.post(
  "/bookings",
  upload.fields([
    { name: "aadharCard", maxCount: 1 },
    { name: "drivingLicense", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const {
        carId,
        name,
        email,
        phone,
        pickupDate,
        dropoffDate,
        pickupLocation,
        dropoffLocation,
      } = req.body;

      console.log("📩 Booking Data Received:");
      console.log("Body:", req.body);
      console.log("Files:", req.files);

      const aadharCard =
        req.files?.aadharCard?.[0]?.buffer?.toString("base64") || "";
      const drivingLicense =
        req.files?.drivingLicense?.[0]?.buffer?.toString("base64") || "";

      if (
        !name ||
        !email ||
        !pickupDate ||
        !dropoffDate ||
        !pickupLocation ||
        !dropoffLocation ||
        !aadharCard ||
        !drivingLicense
      ) {
        return res
          .status(400)
          .json({ error: "All fields including documents are required" });
      }

      const booking = new Booking({
        carId,
        name,
        email,
        phone,
        pickupDate,
        dropoffDate,
        pickupLocation,
        dropoffLocation,
        aadharCard,
        drivingLicense,
      });

      await booking.save();
      res.status(200).json({ message: "✅ Booking saved successfully" });
    } catch (err) {
      console.error("❌ Booking save error:", err);
      res.status(500).json({ error: "Failed to save booking" });
    }
  }
);

// ------------------- START SERVER -------------------
app.listen(PORT, () => {
  console.log(`🚗 Server running at http://localhost:${PORT}`);
});
