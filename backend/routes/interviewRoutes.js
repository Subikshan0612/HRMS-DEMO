const express = require('express');
const router = express.Router();
const interviewController = require('../controllers/interviewController');

// Define routes
router.post('/', interviewController.createInterview);
router.get('/', interviewController.getInterviews);
router.put('/:id', interviewController.updateInterview);
router.delete('/:id', interviewController.deleteInterview);

module.exports = router;
