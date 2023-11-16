const asyncHandler = require('express-async-handler');

// Importing the utilities functions for the game
const {
  initializeGame,
  rankValues,
  suitValues,
  getPlayerInfo,
} = require('../utilities/gameUtilities');

// @desc    Starts the game
// @route   POST /api/game/start
// @access  Public
const start = asyncHandler(async (req, res) => {
  initializeGame();

  res.status(200).json({ message: 'A new game has started!', gameState });
});

// @desc    Draws a card
// @route   POST /api/game/draw/:round/:player
// @access  Public
const draw = asyncHandler(async (req, res) => {
  const { round, player } = req.params;

  const randomIndex = Math.floor(Math.random() * gameState.deck.length);
  const cardDrawn = gameState.deck.splice(randomIndex, 1)[0];

  gameState.players[player - 1].hand[round - 1] = cardDrawn;

  res
    .status(200)
    .json({ message: 'A new card has been drawn', card: cardDrawn, gameState });
});

// @desc    Conslidate round points
// @route   GET /api/game/round/:round
// @access  Public
const round = asyncHandler(async (req, res) => {
  const { round } = req.params;

  gameState.players.forEach((player) => {
    const playerCard = player.hand[round - 1];
    const playerScore =
      rankValues[playerCard.rank] + suitValues[playerCard.suit];

    player.roundPoints = gameState.players.reduce((count, otherPlayer) => {
      if (otherPlayer.name !== player.name) {
        const otherPlayerCard = otherPlayer.hand[round - 1];
        const otherPlayerScore =
          rankValues[otherPlayerCard.rank] + suitValues[otherPlayerCard.suit];

        return count + (otherPlayerScore <= playerScore);
      }
      return count;
    }, 1);

    player.score += player.roundPoints;
  });

  const currentRoundInfo = {
    round: gameState.round,
    playerInfo: gameState.players.map((player) => ({
      name: player.name,
      hand: player.hand[round - 1] || null,
      score: player.score,
      roundPoints: player.roundPoints,
    })),
  };

  res.status(200).json(currentRoundInfo);
});

// @desc    Consolidate all points
// @route   GET /api/game/scores
// @access  Public
const scores = asyncHandler(async (req, res) => {
  const playerScores = getPlayerInfo(gameState.players);

  res.status(200).json(playerScores);
});

// @desc    Ends the game
// @route   GET /api/game/end
// @access  Public
const end = asyncHandler(async (req, res) => {
  const playerInfo = getPlayerInfo(gameState.players);

  const sortedPlayers = playerInfo.sort((a, b) => b.score - a.score);

  res.status(200).json(sortedPlayers);
});

module.exports = {
  start,
  draw,
  round,
  scores,
  end,
};
