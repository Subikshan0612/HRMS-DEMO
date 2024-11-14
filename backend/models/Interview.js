const mongoose = require('mongoose');

const interviewSchema = new mongoose.Schema({
  candidate: { type: String, required: true },
  interviewer: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  description: { type: String },
  status: { type: String, default: 'Scheduled' },
});

module.exports = mongoose.model('Interview', interviewSchema);
