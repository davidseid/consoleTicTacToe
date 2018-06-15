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
    this.moves = 0;
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



const printResult = (game) => {
  if (game.state === 'win') {
    console.log(`Player ${game.player} wins!`);
  } else if (game.state === 'tie') {
    console.log('Tie Game');
  }
}

const detectWin = (game) => {
  const board = game.board;
  const player = game.player;
  if (board[0][0] === player && board[0][1] === player && board[0][2] === player) {
    game.state = 'win';
  } else if (board[1][0] === player && board[1][1] === player && board[1][2] === player) {
    game.state = 'win';
  } else if (board[2][0] === player && board[2][1] === player && board[2][2] === player) {
    game.state = 'win';
  } else if (board[0][0] === player && board[1][0] === player && board[2][0] === player) {
    game.state = 'win';
  } else if (board[0][1] === player && board[1][1] === player && board[2][1] === player) {
    game.state = 'win';
  } else if (board[0][2] === player && board[1][2] === player && board[2][2] === player) {
    game.state = 'win';
  } else if (board[0][0] === player && board[1][1] === player && board[2][2] === player) {
    game.state = 'win';
  } else if (board[0][2] === player && board[1][1] === player && board[2][0] === player) {
    game.state = 'win';
  } else if (game.moves === 9) {
    game.state = 'tie';
  }
}

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
      game.moves++;
      detectWin(game);
      if (game.state === 'win') {
        printBoard(game.board);
        printResult(game);
        rl.close();
        return;
      } else if (game.state === 'tie') {
        printBoard(game.board);
        printResult(game);
        rl.close();
        return;
      }

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