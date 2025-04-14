const express = require("express");
const Booking = require("../models/booking");
const sequelize = require("../config/db");
const router = express.Router();
// const Room = require("../models/roomModel"); // Correct path
// Booking= require("../models/booking"); // Correct path

// Example route
router.get("/", (req, res) => {
  res.send("Room Routes Working");
});

// router.get("/rooms", async (req, res) => {
//   try {
//     const rooms = await Room.findAll(); // Fetch all rooms from the database
//     res.json(rooms); // Send the rooms as a JSON response
//   } catch (error) {
//     console.error("Error fetching rooms:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// });


sequelize
  .authenticate()
  .then(() => {
    console.log("✅ Connected to MySQL");
    return sequelize.sync(); // <- This line creates the tables if they don't exist
  })
  .then(() => {
    console.log("📦 Models synced with DB");
  })
  .catch((err) => {
    console.error("❌ DB connection failed:", err);
  });


router.post("/booknow", async (req, res) => {
  const { username, email, checkinDate, checkoutDate , paymentStatus,roomid } = req.body;
  try {
    // Create a new booking record in the database
    const booking = await Booking.create({
      username,
      email,
      checkinDate,
      checkoutDate,
      paymentStatus,
      roomid
    });
    res.status(201).json({ message: "Booking created!", booking }); // Send the created booking as a JSON response
  } catch (error) {
    console.error("Error creating booking:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
);

module.exports = router;
