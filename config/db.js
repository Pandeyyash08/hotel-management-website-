// config/db.js
const { Sequelize } = require("sequelize");
require("dotenv").config(); // Ensure environment variables are loaded

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    logging: console.log, // Enable SQL query logging (optional)
  }
);

// Test connection and log result
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("✅ Connected to MySQL database successfully.");
    console.log(`📡 DB: ${process.env.DB_NAME} | USER: ${process.env.DB_USER} | HOST: ${process.env.DB_HOST}`);
  } catch (error) {
    console.error("❌ Unable to connect to the database:", error);
  }
}

// Call the test function immediately
testConnection();

module.exports = sequelize;
