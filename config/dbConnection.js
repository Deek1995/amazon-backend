const mongoose = require("mongoose");

const dbConnection = async () => {
  console.log("🟡 Trying to connect to MongoDB...");
  try {
    await mongoose.connect(process.env.AMAZON_CONNECTION_STRING);
    console.log("MongoDB connection successful!");
  } catch (err) {
    console.log("MongoDB connection failed:", err);
  }
};

module.exports = dbConnection;
