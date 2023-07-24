require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const { notFoundHandler, errorHandler } = require('./middlewares/errorHandler');
const db = require('./models/db');
const apiRoutes = require('./routes/api.route');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));


// Home route
app.get('/', (req, res) => {
  res.send({ message: 'Welcome to Task Manager API' });
});

// API routes
app.use('/v1', apiRoutes);

// Middleware to handle 404 Not Found
app.use(notFoundHandler);

// Error handling middleware
app.use(errorHandler);




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));
