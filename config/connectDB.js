const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    
    const dbURI = process.env.DB_URI; 

   
    if (!dbURI) {
      throw new Error("DB_URI environment variable is not set.");
    }

    await mongoose.connect(dbURI);
    console.log('Database connected');
  } catch (err) {
    console.error('Database connection error:', err);
  }
};

module.exports = connectDB;
