const express = require('express');

// Create an Express application
const app = express();

// Importing the game-related routes
const gameRoutes = require('./routes/gameRoutes');

// Middleware for parsing JSON and urlencoded data
app.use(
  express.json(), // Parses incoming requests with JSON payloads
  express.urlencoded({ extended: false }) // Parses incoming requests with urlencoded payloads
);

// Use the game routes with the base path '/api/game'
app.use('/api/game', gameRoutes);

module.exports = app;
