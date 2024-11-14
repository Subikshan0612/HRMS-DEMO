const mongoose = require('mongoose');

// MongoDB connection setup
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/hrms-DB');
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Exit the process with failure
  }
};

module.exports = connectDB;
