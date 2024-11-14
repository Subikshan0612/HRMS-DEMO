// controller/applicantProfileController.js
const ApplicantProfile = require('../models/ApplicantProfile');

// Get all applicant profiles
exports.getAllApplicantProfiles = async (req, res) => {
  try {
    const profiles = await ApplicantProfile.find();
    res.json(profiles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new applicant profile
exports.createApplicantProfile = async (req, res) => {
  try {
    const newProfile = new ApplicantProfile(req.body);
    await newProfile.save();
    res.status(201).json(newProfile);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an applicant profile by ID
exports.deleteApplicantProfile = async (req, res) => {
  try {
    await ApplicantProfile.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Profile deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Batch delete applicant profiles by IDs
exports.batchDeleteApplicantProfiles = async (req, res) => {
  try {
    const { ids } = req.body;
    await ApplicantProfile.deleteMany({ _id: { $in: ids } });
    res.status(200).json({ message: 'Profiles deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
