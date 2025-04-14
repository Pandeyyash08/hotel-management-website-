// models/Booking.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Booking = sequelize.define("Booking", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  checkinDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  checkoutDate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  roomid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  paymentStatus: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
});

module.exports = Booking;
