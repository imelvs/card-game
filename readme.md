# Card Game Web Application

This is a simple web application for a card game built using the Express.js and Node.js. The game allows four players to participate and follows specific rules for drawing cards, calculating scores, and determining the game winner.

## Game Rules

The game consists of 4 players and a standard deck of 52 cards.
Each round, every player draws a card.
At the end of each round, the player with the highest card value gets 4 points, the second gets 3 points, the third gets 2 points, and the last gets 1 point.
In the event of a tie, the player with the highest-ranking suit (Spades > Hearts > Clubs > Diamonds) wins.
The game ends when the deck is empty (at the end of round 13).
At the end of the game, player scores are tabulated, and the winner is determined.

## Features

- Initialize a new game.
- Draw a card for each player in each round.
- Calculate scores based on card ranks and suits.
- Determine the game winner at the end of all rounds.

## Installation

To run this application locally, follow these steps:

1. Install dependencies:

   ```
   npm install
   ```
2. Start the application:

   ```
   npm start
   ```

## Usage

Once the application is running, you can follow the API endpoints and game rules outlined to interact with the card game using Postman.

## API Endpoints

POST /api/game/start: Initializes a new game.
POST /api/game/draw/:round/:player: Allows a player to draw a card for the specified round.
GET /api/game/round/:round: Retrieves information about the current round.
GET /api/game/scores: Retrieves the current scores of all players in the game.
GET /api/game/end: Determines the order of the ranking of the players and returns their names and scores once the game ends.
