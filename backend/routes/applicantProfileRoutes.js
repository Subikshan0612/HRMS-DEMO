// routes/applicantProfileRoutes.js
const express = require('express');
const applicantProfileController = require('../controllers/applicantProfileController');

const router = express.Router();

router.get('/', applicantProfileController.getAllApplicantProfiles);
router.post('/', applicantProfileController.createApplicantProfile);
router.delete('/:id', applicantProfileController.deleteApplicantProfile);
router.delete('/batch', applicantProfileController.batchDeleteApplicantProfiles);

module.exports = router;
