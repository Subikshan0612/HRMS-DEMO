// controllers/employeeController.js
const Employee = require('../models/Employee');

// Get all employees with optional filtering
exports.getEmployees = async (req, res) => {
  try {
    const { searchTerm, stage } = req.query;
    const filter = {};

    if (searchTerm) {
      filter.name = { $regex: searchTerm, $options: 'i' };
    }

    if (stage && stage !== 'All') {
      filter.stage = stage;
    }

    const employees = await Employee.find(filter);
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new employee
exports.createEmployee = async (req, res) => {
  try {
    const newEmployee = new Employee(req.body);
    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update employee details
exports.updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!employee) return res.status(404).json({ message: 'Employee not found' });
    res.status(200).json(employee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an employee
exports.deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    if (!employee) return res.status(404).json({ message: 'Employee not found' });
    res.status(200).json({ message: 'Employee deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
