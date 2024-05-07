// Global variables
const startButton = document.querySelector('#start') //variable to store start button
const resetButton = document.querySelector('#reset') //variable to store reset button
let player1 = 'Player 1' //initialize the player 1
let player2 = 'Player 2' //initialize the player 2
let currentPlayer //initialize the current player
const cells = document.querySelectorAll('.board .cell') //select all cells in board
let cell //initialize single cell
// Functions
function startGame() {
  currentPlayer = player1 //assume that current player is player 1
  for (let i = 0; i < cells.length; i++) {
    //loop through cells
    cells[i].addEventListener('click', () => {
      cell = cells[i] //each single cell

      if (
        (i >= 35 || cells[i + 7].style.backgroundColor !== '') &&
        cell.style.backgroundColor === ''
      ) {
        if (cell.style.backgroundColor == '') {
          if (currentPlayer === player1) {
            //set current player cell color to red
            cell.style.backgroundColor = 'red'

            currentPlayer = player2 //change current player to be the player 2
          } else if (currentPlayer === player2) {
            //if current player is equal to player 2 ,set the cell color to yellow
            cell.style.backgroundColor = 'yellow'
            currentPlayer = player1 //change the current player to player 1
          }
        }
      }
    })
  }
}

// Event listeners
startButton.addEventListener('click', startGame) //event listener to click on start
resetButton.addEventListener('click', resetGame) //event listener to click on reset
