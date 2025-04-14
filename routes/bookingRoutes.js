const express = require("express");
const router = express.Router();
const Booking = require("../models/bookingModel"); // Correct path

// Example route
router.get("/", (req, res) => {
  res.send("Booking Routes Working");
});

module.exports = router;
