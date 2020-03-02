// Gameplay:
// ---------
// Players start with 7 random tiles each out of 100 Scrabble tiles
// The board is 9 x 9 squares with some tiles that double or triple the value of the tile or word placed on them
// Players take turns to place any number of tiles on the board
// 5 rounds
// Each turn the game deals extra tiles to get your total back up to 7
// Game checks placed tiles, scores and indicates legit move
// When move is submitted, score is updated
// Computer generates and plays a move
// At the end of 5 rounds, display who won and offer to reset and play again
// Keep track of how many games have been won


// Check moves:
// ------------
// Tiles must be adjacent to eachother or be in a straight line through existing tiles
// Tiles must be adjacent to previously played tiles (except first turn)
// All formed words must exist in scrabble dictionary


// Display:
// --------
// Round 
// Player scores
// Rounds won


// Bonus functionality:
// --------------------
// Shuffle your tiles around
// Time limit turns
// Drag tiles onto the board
// Recall all your tiles off the board with one button
// Computer move difficulty to increase and vary around the level where the player is
// After the game is over see an alphabetical list of all words played with their definitions
// After the game is over see a short list of unusual or long words that could have been played or maybe a 'hint' button while you're playing

class Tile {
	constructor(letter, points) {
 		this.letter = letter;
 		this.points = points;
	}
}

const scrabbleTiles = [];

const makeTiles = (letter, points, quantity) => {
	for (let i=1; i<=quantity; i++) {
		scrabbleTiles.push(new Tile(letter, points));
	};	
}

let tileQuants = 
[
	["e", 1, 12],
	["a", 1, 9],
	["i", 1, 9],
	["o", 1, 8],
	["n", 1, 6],
	["r", 1, 6],
	["t", 1, 6],
	["l", 1, 4],
	["s", 1, 4],
	["u", 1, 4],
	["d", 2, 4],
	["g", 2, 3],
	["b", 3, 2],
	["c", 3, 2],
	["m", 3, 2],
	["p", 3, 2],
	["f", 4, 2],
	["h", 4, 2],
	["v", 4, 2],
	["w", 4, 2],
	["y", 4, 2],
	["k", 5, 1],
	["j", 8, 1],
	["x", 8, 1],
	["q", 10, 1],
	["z", 10, 1]
];

for (each of tileQuants) {
	makeTiles(each[0], each[1], each[2]);
};

console.log(scrabbleTiles);














