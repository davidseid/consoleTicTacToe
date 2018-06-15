/* Second attempt at building console version of tic tac toe 
  Target is doing the whole thing in 45 minutes. 
*/

/* To Do:
  - Build game class and initialize with board, player, and state
  - Build promptAction with Readline
  - Bring in Readline
  - Design win logic
  - Design print board
  - Design alternate players
*/

/* Game Class */

class Game {
  constructor() {
    this.board = new Array();
    for (let i = 0; i < 3; i++) {
      this.board.push(new Array(3).fill(' '));
    }

    this.player = 'X';
    this.state = 'play';
  }
}

/* Print Board */
const printBoard = (board) => {
  console.log('\n');
  printRow(board[0]);
  console.log('_________');
  printRow(board[1]);
  console.log('_________');
  printRow(board[2]);
}

const printRow = (row) => {
  console.log(`${row[0]} | ${row[1]} | ${row[2]}`);
}

/* Initialize Readline */
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/* rotatePlayer */
const rotatePlayer = (player) => {
  if (player === 'X') return 'O';
  if (player === 'O') return 'X';
};

/* Prompt User */ 
const getMove = (game) => {
  let player = game.player;
  let board = game.board;

  printBoard(board);

  rl.question(`Player ${player}, select your move `, (answer) => {
    let row = answer[0];
    let col = answer[1];

    if (board[row][col] === ' ') {
      board[row][col] = player;
      game.player = rotatePlayer(player);
      getMove(game);
    } else {
      getMove(game);
    }
  });
}

/* Instantiate */
const myGame = new Game();


/* Test */
getMove(myGame);