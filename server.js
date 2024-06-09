// server.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes');
const errorMiddleware = require('./middleware/errorMiddleware');
const { url, options } = require('./config/db');

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(url, options)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/tasks', taskRoutes);

// Error handling middleware
app.use(errorMiddleware);

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
