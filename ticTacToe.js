/* Building basic Tic Tac Toe console game */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const makeBoard = () => {
  const board = new Array(3);
  for (let i = 0; i < board.length; i++) {
    board[i] = new Array(3);
  }
  return board;
}

class Game {
  constructor() {
    this.board = makeBoard();
    this.player = 'X';
    this.state = 'play';
  }
}

let myGame = new Game;

const printBoard = (board) => {
  console.log('\n')
  printRow(board[0]);
  console.log('_________');
  printRow(board[1]);
  console.log('_________');
  printRow(board[2]);
  console.log('\n')

};

const printRow = (row) => {
  let c0 = row[0] || ' ';
  let c1 = row[1] || ' ';
  let c2 = row[2] || ' ';
  console.log(`${c0} | ${c1} | ${c2} `);
}

const updateBoard = (board, input, player) => {
  let row = input[0];
  let col = input[1];
  if (!board[row][col]) {
    board[row][col] = player;
    return true;
  } else {
    return false;
  }
}

const getMove = (updateBoard, board, player) => {
    rl.question(`Player ${player}, please input the row and column for your next move: `, (answer) => {
      const success = updateBoard(board, answer, player);
      printBoard(board);
      // if board is full return draw
      // if winner return win
      // else 
      if (success) {
        player === 'X' ? player = 'O' : player = 'X';
      }
      getMove(updateBoard, board, player);
  });
}

// calculate win scenarios

// end game

printBoard(myGame.board);
getMove(updateBoard, myGame.board, myGame.player);
