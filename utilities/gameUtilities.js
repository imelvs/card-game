const initializeGame = () => {
  // Define the ranks and suits of a standard deck
  const ranks = [
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'J',
    'Q',
    'K',
    'A',
  ];
  const suits = ['S', 'H', 'C', 'D'];

  // Create a deck by combining each suit with each rank
  const deck = [];
  for (const suit of suits) {
    for (const rank of ranks) {
      deck.push({ rank, suit });
    }
  }

  // Shuffle the deck using Fisher-Yates algorithm
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }

  // Initialize game state with players and shuffled deck
  gameState = {
    round: 1,
    deck: deck,
    players: [
      { name: 'Player 1', hand: [], score: 0, roundPoints: 0 },
      { name: 'Player 2', hand: [], score: 0, roundPoints: 0 },
      { name: 'Player 3', hand: [], score: 0, roundPoints: 0 },
      { name: 'Player 4', hand: [], score: 0, roundPoints: 0 },
    ],
  };

  return gameState;
};

// Define the value of each rank for scoring purposes
const rankValues = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  J: 11,
  Q: 12,
  K: 13,
  A: 14,
};

// Define the value of each suit for scoring purposes
const suitValues = {
  S: 4,
  H: 3,
  C: 2,
  D: 1,
};

const getPlayerInfo = (players) => {
  return players.map((player) => ({
    name: player.name,
    score: player.score,
  }));
};

module.exports = {
  initializeGame,
  rankValues,
  suitValues,
  getPlayerInfo,
};
