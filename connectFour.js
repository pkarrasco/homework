const { Console } = require("console-mpds");

const console = new Console();
playGame();

function playGame() {
  do {
    newGame();
  } while (playerWantsToContinue());
}

function newGame () { 
  let game = initGame();
  displayBoard(game);

}

function initGame(){
  let game = {
    turn: 0,
    MAX_PLAYERS: 2,
    MAX_ROWS: 6,
    MAX_COLUMNS: 7,
    TOKEN_YELLOW: 'O',
    TOKEN_RED: '·',
    TOKEN_EMPTY: ' ',
    tokens:[]
  };
  for (let row = 0; row < game.MAX_ROWS ; row++) {
    game.tokens[row]= [];
    for (let column = 0; column < game.MAX_COLUMNS; column++){
      game.tokens[row][column]= game.TOKEN_EMPTY;
    }
  }
  return game;
}

function displayBoard(game) {
  const VERTICAL_SEPARATOR = `|`;
  let msg = `-----------------------------\n`;
  for (let i = 0; i < game.tokens.length; i++) {
    for (let j = 0; j < game.tokens[i].length; j++) {
      msg += `${VERTICAL_SEPARATOR} ${game.tokens[i][j]} `;
    }
    msg += `${VERTICAL_SEPARATOR}\n`;
  }
  msg += `-----------------------------`;
  console.writeln(msg);
}

function getMovement(){
  answer = console.readString(`¿Quieres jugar otra partida? `);
}

function playerWantsToContinue() {
    let result;
    let answer;
    let error = false;
    do {
      answer = console.readString(`¿Quieres jugar otra partida? `);
      result = answer === `y` || answer === `s`;
      error = !result && answer !== `n`;
      if (error) {
        console.writeln(`Por favor, responda "s" o "n"`);
      }
    } while (error);
    return result;
  }