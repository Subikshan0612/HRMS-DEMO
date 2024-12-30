// routes/employeeRoutes.js
const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

router.get('/employees', employeeController.getEmployees); // Fetch employees with optional query params
router.post('/employees', employeeController.createEmployee); // Create new employee
router.put('/employees/:id', employeeController.updateEmployee); // Update employee
router.delete('/employees/:id', employeeController.deleteEmployee); // Delete employee

module.exports = router;
