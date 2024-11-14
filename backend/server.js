const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const candidateRoutes = require('./routes/candidateRoutes');
const surveyRoutes = require('./routes/surveyRoutes'); // Import survey routes
const applicantProfileRoutes = require('./routes/applicantProfileRoutes');
const interviewRoutes = require('./routes/interviewRoutes');
const skillZoneRoutes = require('./routes/skillZoneRoutes');

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// API Routes
app.use(candidateRoutes);  
app.use(surveyRoutes); 
app.use('/api/applicantProfiles', applicantProfileRoutes);
app.use('/api/interviews', interviewRoutes);
app.use('/api/skill-zone', skillZoneRoutes);


// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
