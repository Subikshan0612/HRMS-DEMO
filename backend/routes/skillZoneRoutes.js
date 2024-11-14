const express = require('express');
const router = express.Router();
const {
  getSkillZones,
  createSkillZone,
  updateSkillZoneCandidate,
  deleteSkillZoneCandidate,
  deleteSkillZone // include deleteSkillZone
} = require('../controllers/skillZoneController');

// Routes
router.get('/', getSkillZones); // Fetch all skill zones
router.post('/', createSkillZone); // Create new skill zone
router.put('/:skillZoneId/candidates/:candidateId', updateSkillZoneCandidate); // Edit candidate in a skill zone
router.delete('/:skillZoneId/candidates/:candidateId', deleteSkillZoneCandidate); // Delete candidate from a skill zone

// New route to delete an entire skill zone
router.delete('/:skillZoneId', deleteSkillZone); // Delete skill zone by ID

module.exports = router;
