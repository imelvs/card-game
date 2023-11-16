const express = require('express');
const router = express.Router();

// Importing the controller functions for each game action
const {
  start,
  draw,
  round,
  scores,
  end,
} = require('../controllers/gameControllers');

// Route to start a new game
// @route   POST /api/game/start
// @desc    Invokes the start function to initialize and start a new game
router.post('/start', start);

// Route to draw a card
// @route   POST /api/game/draw/:round/:player
// @desc    Invokes the draw function to draw a card per player per round
router.post('/draw/:round/:player', draw);

// Route to consolidate the points gained in the round
// @route   GET /api/game/round/:round
// @desc    Invokes the round function to calculate scores and update game state
router.get('/round/:round', round);

// Route to consolidate the all points gained so far
// @route   GET /api/game/scores
// @desc    Invokes the scores function to calculate all scores gained
router.get('/scores', scores);

// Route to end the game and fetch final results
// @route   GET /api/game/end
// @desc    Invokes the end function to finalize the game state and return the final scores and standings
router.get('/end', end);

module.exports = router;
