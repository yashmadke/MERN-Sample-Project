const mongoose = require("mongoose");

const URL = "mongodb://localhost:27017/";

const dbConnection = async () => {
  try {
    await mongoose.connect(URL);
    console.log("MongoDB Connected.....");
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = dbConnection;
