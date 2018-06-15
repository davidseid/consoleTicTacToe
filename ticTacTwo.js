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
    this.board = new Array(3);
    for (let i = 0; i < 3; i++) {
      this.board.push(new Array(3));
    }

    this.player = 'X';
    this.state = 'play';
  }
}

const printBoard = (board) => {
  console.log('\n');
  printRow(board[0]);
  console.log('_________________');
  printRow(board[1]);
  console.log('_________________');
  printRow(board[2]);
}

const printRow = (row) => {
  console.log(`row[0] | row[1] | row[2]`);
}