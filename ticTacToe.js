/* Building basic Tic Tac Toe console game */

const readline = require('readline');

class Game {
  constructor() {
    this.board = new Array(3);
    for (let i = 0; i < this.board.length; i++) {
      this.board[i] = new Array(3);
    }

    this.currentPlayer = 'X';
    this.gameState = 'play';
  }
}

let myGame = new Game;

// make display board function

const printBoard = (game) => {
  printRow(game.board[0]);
  console.log('_________');
  printRow(game.board[1]);
  console.log('_________');
  printRow(game.board[2]);
};

const printRow = (row) => {
  let c0 = row[0] || ' ';
  let c1 = row[1] || ' ';
  let c2 = row[2] || ' ';

  console.log(`${c0} | ${c1} | ${c2} `);
}
// prompt user for input

// calculate win scenarios

// end game

printBoard(myGame);