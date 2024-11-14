// models/ApplicantProfile.js
const mongoose = require('mongoose');

const applicantProfileSchema = new mongoose.Schema({
  name: String,
  email: String,
  position: String,
  status: {
    type: String,
    enum: ['Hired', 'Not-Hired'],
    default: 'Not-Hired',
  },
  color: {
    type: String,
    default: '#ff9800',
  },
});

module.exports = mongoose.model('ApplicantProfile', applicantProfileSchema);
