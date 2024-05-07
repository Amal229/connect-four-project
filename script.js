// Global variables
const cells = document.querySelectorAll('.board .cell') //select the cells on board
let player1 = 'Player 1' //assign name of players
let player2 = 'Player 2'
let currentPlayer //initialize current player
let cell //initialize the current cell
let win = false //boolean to check if player won
let v = document.querySelector('#winner') //selector to display winner messege
let c = document.querySelector('#current') //display mesage
const startButton = document.querySelector('#start') //selec the start button
const resetButton = document.querySelector('#reset') //select reset button
c.innerText = 'Click Start Now!' //display message before start game

// Functions
function startGame() {
  c.innerText = 'Player 1 vs Player 2' //display message after start game
  currentPlayer = player1 //first set current player to player 1
  for (let i = 0; i < cells.length; i++) {
    //loop through cells
    cells[i].addEventListener('click', () => {
      //add event listener for each cell
      cell = cells[i] //each cell will have index ,assigning current cell to cell variable

      if (
        (i >= 35 || cells[i + 7].style.backgroundColor !== '') &&
        cell.style.backgroundColor === ''
      ) {
        //check each cell in the bottom of current cell are filled and the current cell is equal to null it will excute the inner code
        //check if the current cell position is in the bottom row it wll set color player value
        //or if the bellow cells of each is colored and the current cell is null not colored it will run bellow code
        //behaviour of dropping down the colored cells
        if (cell.style.backgroundColor == '' && !win) {
          //if cell is null and true do this
          if (currentPlayer === player1) {
            //check if current player is player 1
            cell.style.backgroundColor = 'red' //if player 1 ,set cell background color to red

            currentPlayer = player2 //replace player 1 t player 2  and set it to current player
          } else if (currentPlayer === player2) {
            //if the current player i player 2 set the cell background color to yellow
            cell.style.backgroundColor = 'yellow'
            currentPlayer = player1 //replace the current player from player 2 to player 1 and store it
          }
        }
      }
      checkWin() //this function will check if the player won
    })
  }
}
function checkWin() {
  //check if player won and true it will display message and stop the game

  for (let i = 0; i < cells.length; i++) {
    if (
      (cells[35].style.backgroundColor === 'red' &&
        cells[36].style.backgroundColor === 'red' &&
        cells[37].style.backgroundColor === 'red' &&
        cells[38].style.backgroundColor === 'red') ||
      (cells[36].style.backgroundColor === 'red' &&
        cells[37].style.backgroundColor === 'red' &&
        cells[38].style.backgroundColor === 'red' &&
        cells[39].style.backgroundColor === 'red') ||
      (cells[37].style.backgroundColor === 'red' &&
        cells[38].style.backgroundColor === 'red' &&
        cells[39].style.backgroundColor === 'red' &&
        cells[40].style.backgroundColor === 'red') ||
      (cells[38].style.backgroundColor === 'red' &&
        cells[39].style.backgroundColor === 'red' &&
        cells[40].style.backgroundColor === 'red' &&
        cells[41].style.backgroundColor === 'red')
    ) {
      win = true
      v.innerText = 'Red Player won!'
    } else if (
      (cells[28].style.backgroundColor === 'red' &&
        cells[29].style.backgroundColor === 'red' &&
        cells[30].style.backgroundColor === 'red' &&
        cells[31].style.backgroundColor === 'red') ||
      (cells[29].style.backgroundColor === 'red' &&
        cells[30].style.backgroundColor === 'red' &&
        cells[31].style.backgroundColor === 'red' &&
        cells[32].style.backgroundColor === 'red') ||
      (cells[30].style.backgroundColor === 'red' &&
        cells[31].style.backgroundColor === 'red' &&
        cells[32].style.backgroundColor === 'red' &&
        cells[33].style.backgroundColor === 'red') ||
      (cells[31].style.backgroundColor === 'red' &&
        cells[32].style.backgroundColor === 'red' &&
        cells[33].style.backgroundColor === 'red' &&
        cells[34].style.backgroundColor === 'red')
    ) {
      win = true
      v.innerText = 'Red Player won!'
    } else if (
      (cells[21].style.backgroundColor === 'red' &&
        cells[22].style.backgroundColor === 'red' &&
        cells[23].style.backgroundColor === 'red' &&
        cells[24].style.backgroundColor === 'red') ||
      (cells[22].style.backgroundColor === 'red' &&
        cells[23].style.backgroundColor === 'red' &&
        cells[24].style.backgroundColor === 'red' &&
        cells[25].style.backgroundColor === 'red') ||
      (cells[23].style.backgroundColor === 'red' &&
        cells[24].style.backgroundColor === 'red' &&
        cells[25].style.backgroundColor === 'red' &&
        cells[26].style.backgroundColor === 'red') ||
      (cells[24].style.backgroundColor === 'red' &&
        cells[25].style.backgroundColor === 'red' &&
        cells[26].style.backgroundColor === 'red' &&
        cells[27].style.backgroundColor === 'red')
    ) {
      win = true
      v.innerText = 'Red Player won!'
    } else if (
      (cells[14].style.backgroundColor === 'red' &&
        cells[15].style.backgroundColor === 'red' &&
        cells[16].style.backgroundColor === 'red' &&
        cells[17].style.backgroundColor === 'red') ||
      (cells[15].style.backgroundColor === 'red' &&
        cells[16].style.backgroundColor === 'red' &&
        cells[17].style.backgroundColor === 'red' &&
        cells[18].style.backgroundColor === 'red') ||
      (cells[16].style.backgroundColor === 'red' &&
        cells[17].style.backgroundColor === 'red' &&
        cells[18].style.backgroundColor === 'red' &&
        cells[19].style.backgroundColor === 'red') ||
      (cells[17].style.backgroundColor === 'red' &&
        cells[18].style.backgroundColor === 'red' &&
        cells[19].style.backgroundColor === 'red' &&
        cells[20].style.backgroundColor === 'red')
    ) {
      win = true
      v.innerText = 'Red Player won!'
    } else if (
      (cells[7].style.backgroundColor === 'red' &&
        cells[8].style.backgroundColor === 'red' &&
        cells[9].style.backgroundColor === 'red' &&
        cells[10].style.backgroundColor === 'red') ||
      (cells[8].style.backgroundColor === 'red' &&
        cells[9].style.backgroundColor === 'red' &&
        cells[10].style.backgroundColor === 'red' &&
        cells[11].style.backgroundColor === 'red') ||
      (cells[9].style.backgroundColor === 'red' &&
        cells[10].style.backgroundColor === 'red' &&
        cells[11].style.backgroundColor === 'red' &&
        cells[12].style.backgroundColor === 'red') ||
      (cells[10].style.backgroundColor === 'red' &&
        cells[11].style.backgroundColor === 'red' &&
        cells[12].style.backgroundColor === 'red' &&
        cells[13].style.backgroundColor === 'red')
    ) {
      win = true
      v.innerText = 'Red Player won!'
    } else if (
      (cells[0].style.backgroundColor === 'red' &&
        cells[1].style.backgroundColor === 'red' &&
        cells[2].style.backgroundColor === 'red' &&
        cells[3].style.backgroundColor === 'red') ||
      (cells[1].style.backgroundColor === 'red' &&
        cells[2].style.backgroundColor === 'red' &&
        cells[3].style.backgroundColor === 'red' &&
        cells[4].style.backgroundColor === 'red') ||
      (cells[2].style.backgroundColor === 'red' &&
        cells[3].style.backgroundColor === 'red' &&
        cells[4].style.backgroundColor === 'red' &&
        cells[5].style.backgroundColor === 'red') ||
      (cells[3].style.backgroundColor === 'red' &&
        cells[4].style.backgroundColor === 'red' &&
        cells[5].style.backgroundColor === 'red' &&
        cells[6].style.backgroundColor === 'red')
    ) {
      win = true
      v.innerText = 'Red Player won!'
    } else if (
      (cells[35].style.backgroundColor === 'red' &&
        cells[28].style.backgroundColor === 'red' &&
        cells[21].style.backgroundColor === 'red' &&
        cells[14].style.backgroundColor === 'red') ||
      (cells[28].style.backgroundColor === 'red' &&
        cells[21].style.backgroundColor === 'red' &&
        cells[14].style.backgroundColor === 'red' &&
        cells[7].style.backgroundColor === 'red') ||
      (cells[21].style.backgroundColor === 'red' &&
        cells[14].style.backgroundColor === 'red' &&
        cells[7].style.backgroundColor === 'red' &&
        cells[0].style.backgroundColor === 'red')
    ) {
      win = true
      v.innerText = 'Red Player won!'
    } else if (
      (cells[36].style.backgroundColor === 'red' &&
        cells[29].style.backgroundColor === 'red' &&
        cells[22].style.backgroundColor === 'red' &&
        cells[15].style.backgroundColor === 'red') ||
      (cells[29].style.backgroundColor === 'red' &&
        cells[22].style.backgroundColor === 'red' &&
        cells[15].style.backgroundColor === 'red' &&
        cells[8].style.backgroundColor === 'red') ||
      (cells[22].style.backgroundColor === 'red' &&
        cells[15].style.backgroundColor === 'red' &&
        cells[8].style.backgroundColor === 'red' &&
        cells[1].style.backgroundColor === 'red')
    ) {
      win = true
      v.innerText = 'Red Player won!'
    } else if (
      (cells[37].style.backgroundColor === 'red' &&
        cells[30].style.backgroundColor === 'red' &&
        cells[23].style.backgroundColor === 'red' &&
        cells[16].style.backgroundColor === 'red') ||
      (cells[30].style.backgroundColor === 'red' &&
        cells[23].style.backgroundColor === 'red' &&
        cells[16].style.backgroundColor === 'red' &&
        cells[9].style.backgroundColor === 'red') ||
      (cells[23].style.backgroundColor === 'red' &&
        cells[16].style.backgroundColor === 'red' &&
        cells[9].style.backgroundColor === 'red' &&
        cells[2].style.backgroundColor === 'red')
    ) {
      win = true
      v.innerText = 'Red Player won!'
    } else if (
      (cells[38].style.backgroundColor === 'red' &&
        cells[31].style.backgroundColor === 'red' &&
        cells[24].style.backgroundColor === 'red' &&
        cells[17].style.backgroundColor === 'red') ||
      (cells[31].style.backgroundColor === 'red' &&
        cells[24].style.backgroundColor === 'red' &&
        cells[17].style.backgroundColor === 'red' &&
        cells[10].style.backgroundColor === 'red') ||
      (cells[24].style.backgroundColor === 'red' &&
        cells[17].style.backgroundColor === 'red' &&
        cells[10].style.backgroundColor === 'red' &&
        cells[3].style.backgroundColor === 'red')
    ) {
      win = true
      v.innerText = 'Red Player won!'
    } else if (
      (cells[39].style.backgroundColor === 'red' &&
        cells[32].style.backgroundColor === 'red' &&
        cells[25].style.backgroundColor === 'red' &&
        cells[18].style.backgroundColor === 'red') ||
      (cells[32].style.backgroundColor === 'red' &&
        cells[25].style.backgroundColor === 'red' &&
        cells[18].style.backgroundColor === 'red' &&
        cells[11].style.backgroundColor === 'red') ||
      (cells[25].style.backgroundColor === 'red' &&
        cells[18].style.backgroundColor === 'red' &&
        cells[11].style.backgroundColor === 'red' &&
        cells[4].style.backgroundColor === 'red')
    ) {
      win = true
      v.innerText = 'Red Player won!'
    } else if (
      (cells[40].style.backgroundColor === 'red' &&
        cells[33].style.backgroundColor === 'red' &&
        cells[26].style.backgroundColor === 'red' &&
        cells[19].style.backgroundColor === 'red') ||
      (cells[33].style.backgroundColor === 'red' &&
        cells[26].style.backgroundColor === 'red' &&
        cells[19].style.backgroundColor === 'red' &&
        cells[12].style.backgroundColor === 'red') ||
      (cells[26].style.backgroundColor === 'red' &&
        cells[19].style.backgroundColor === 'red' &&
        cells[12].style.backgroundColor === 'red' &&
        cells[5].style.backgroundColor === 'red')
    ) {
      win = true
      v.innerText = 'Red Player won!'
    } else if (
      (cells[41].style.backgroundColor === 'red' &&
        cells[34].style.backgroundColor === 'red' &&
        cells[27].style.backgroundColor === 'red' &&
        cells[20].style.backgroundColor === 'red') ||
      (cells[34].style.backgroundColor === 'red' &&
        cells[27].style.backgroundColor === 'red' &&
        cells[20].style.backgroundColor === 'red' &&
        cells[13].style.backgroundColor === 'red') ||
      (cells[27].style.backgroundColor === 'red' &&
        cells[20].style.backgroundColor === 'red' &&
        cells[13].style.backgroundColor === 'red' &&
        cells[6].style.backgroundColor === 'red')
    ) {
      win = true
      v.innerText = 'Red Player won!'
    } //diognal red
    else if (
      cells[3].style.backgroundColor === 'red' &&
      cells[9].style.backgroundColor === 'red' &&
      cells[15].style.backgroundColor === 'red' &&
      cells[21].style.backgroundColor === 'red'
    ) {
      win = true
      v.innerText = 'Red Player won!'
    } else if (
      cells[4].style.backgroundColor === 'red' &&
      cells[10].style.backgroundColor === 'red' &&
      cells[16].style.backgroundColor === 'red' &&
      cells[22].style.backgroundColor === 'red'
    ) {
      win = true
      v.innerText = 'Red Player won!'
    } else if (
      cells[10].style.backgroundColor === 'red' &&
      cells[16].style.backgroundColor === 'red' &&
      cells[22].style.backgroundColor === 'red' &&
      cells[28].style.backgroundColor === 'red'
    ) {
      win = true
      v.innerText = 'Red Player won!'
    } else if (
      cells[5].style.backgroundColor === 'red' &&
      cells[11].style.backgroundColor === 'red' &&
      cells[17].style.backgroundColor === 'red' &&
      cells[23].style.backgroundColor === 'red'
    ) {
      win = true
      v.innerText = 'Red Player won!'
    } else if (
      cells[11].style.backgroundColor === 'red' &&
      cells[17].style.backgroundColor === 'red' &&
      cells[23].style.backgroundColor === 'red' &&
      cells[29].style.backgroundColor === 'red'
    ) {
      win = true
      v.innerText = 'Red Player won!'
    } else if (
      cells[17].style.backgroundColor === 'red' &&
      cells[23].style.backgroundColor === 'red' &&
      cells[29].style.backgroundColor === 'red' &&
      cells[35].style.backgroundColor === 'red'
    ) {
      win = true
      v.innerText = 'Red Player won!'
    } else if (
      cells[6].style.backgroundColor === 'red' &&
      cells[12].style.backgroundColor === 'red' &&
      cells[18].style.backgroundColor === 'red' &&
      cells[24].style.backgroundColor === 'red'
    ) {
      win = true
      v.innerText = 'Red Player won!'
    } else if (
      cells[12].style.backgroundColor === 'red' &&
      cells[18].style.backgroundColor === 'red' &&
      cells[24].style.backgroundColor === 'red' &&
      cells[30].style.backgroundColor === 'red'
    ) {
      win = true
      v.innerText = 'Red Player won!'
    } else if (
      cells[18].style.backgroundColor === 'red' &&
      cells[24].style.backgroundColor === 'red' &&
      cells[30].style.backgroundColor === 'red' &&
      cells[36].style.backgroundColor === 'red'
    ) {
      win = true
      v.innerText = 'Red Player won!'
    } else if (
      cells[13].style.backgroundColor === 'red' &&
      cells[19].style.backgroundColor === 'red' &&
      cells[25].style.backgroundColor === 'red' &&
      cells[31].style.backgroundColor === 'red'
    ) {
      win = true
      v.innerText = 'Red Player won!'
    } else if (
      cells[19].style.backgroundColor === 'red' &&
      cells[25].style.backgroundColor === 'red' &&
      cells[31].style.backgroundColor === 'red' &&
      cells[37].style.backgroundColor === 'red'
    ) {
      win = true
      v.innerText = 'Red Player won!'
    } else if (
      cells[20].style.backgroundColor === 'red' &&
      cells[26].style.backgroundColor === 'red' &&
      cells[32].style.backgroundColor === 'red' &&
      cells[38].style.backgroundColor === 'red'
    ) {
      win = true
      v.innerText = 'Red Player won!'
    } else if (
      cells[14].style.backgroundColor === 'red' &&
      cells[22].style.backgroundColor === 'red' &&
      cells[30].style.backgroundColor === 'red' &&
      cells[38].style.backgroundColor === 'red'
    ) {
      win = true
      v.innerText = 'Red Player won!'
    } else if (
      cells[7].style.backgroundColor === 'red' &&
      cells[15].style.backgroundColor === 'red' &&
      cells[23].style.backgroundColor === 'red' &&
      cells[31].style.backgroundColor === 'red'
    ) {
      win = true
      v.innerText = 'Red Player won!'
    } else if (
      cells[15].style.backgroundColor === 'red' &&
      cells[23].style.backgroundColor === 'red' &&
      cells[31].style.backgroundColor === 'red' &&
      cells[39].style.backgroundColor === 'red'
    ) {
      win = true
      v.innerText = 'Red Player won!'
    } else if (
      cells[0].style.backgroundColor === 'red' &&
      cells[8].style.backgroundColor === 'red' &&
      cells[16].style.backgroundColor === 'red' &&
      cells[24].style.backgroundColor === 'red'
    ) {
      win = true
      v.innerText = 'Red Player won!'
    } else if (
      cells[8].style.backgroundColor === 'red' &&
      cells[16].style.backgroundColor === 'red' &&
      cells[24].style.backgroundColor === 'red' &&
      cells[32].style.backgroundColor === 'red'
    ) {
      win = true
      v.innerText = 'Red Player won!'
    } else if (
      cells[16].style.backgroundColor === 'red' &&
      cells[24].style.backgroundColor === 'red' &&
      cells[32].style.backgroundColor === 'red' &&
      cells[40].style.backgroundColor === 'red'
    ) {
      win = true
      v.innerText = 'Red Player won!'
    } else if (
      cells[1].style.backgroundColor === 'red' &&
      cells[9].style.backgroundColor === 'red' &&
      cells[17].style.backgroundColor === 'red' &&
      cells[25].style.backgroundColor === 'red'
    ) {
      win = true
      v.innerText = 'Red Player won!'
    } else if (
      cells[9].style.backgroundColor === 'red' &&
      cells[17].style.backgroundColor === 'red' &&
      cells[25].style.backgroundColor === 'red' &&
      cells[33].style.backgroundColor === 'red'
    ) {
      win = true
      v.innerText = 'Red Player won!'
    } else if (
      cells[17].style.backgroundColor === 'red' &&
      cells[25].style.backgroundColor === 'red' &&
      cells[33].style.backgroundColor === 'red' &&
      cells[41].style.backgroundColor === 'red'
    ) {
      win = true
      v.innerText = 'Red Player won!'
    } else if (
      cells[2].style.backgroundColor === 'red' &&
      cells[10].style.backgroundColor === 'red' &&
      cells[18].style.backgroundColor === 'red' &&
      cells[26].style.backgroundColor === 'red'
    ) {
      win = true
      v.innerText = 'Red Player won!'
    } else if (
      cells[10].style.backgroundColor === 'red' &&
      cells[18].style.backgroundColor === 'red' &&
      cells[26].style.backgroundColor === 'red' &&
      cells[34].style.backgroundColor === 'red'
    ) {
      win = true
      v.innerText = 'Red Player won!'
    } else if (
      cells[3].style.backgroundColor === 'red' &&
      cells[11].style.backgroundColor === 'red' &&
      cells[19].style.backgroundColor === 'red' &&
      cells[27].style.backgroundColor === 'red'
    ) {
      win = true
      v.innerText = 'Red Player won!'
    }

    //yellow
    else if (
      (cells[35].style.backgroundColor === 'yellow' &&
        cells[36].style.backgroundColor === 'yellow' &&
        cells[37].style.backgroundColor === 'yellow' &&
        cells[38].style.backgroundColor === 'yellow') ||
      (cells[36].style.backgroundColor === 'yellow' &&
        cells[37].style.backgroundColor === 'yellow' &&
        cells[38].style.backgroundColor === 'yellow' &&
        cells[39].style.backgroundColor === 'yellow') ||
      (cells[37].style.backgroundColor === 'yellow' &&
        cells[38].style.backgroundColor === 'yellow' &&
        cells[39].style.backgroundColor === 'yellow' &&
        cells[40].style.backgroundColor === 'yellow') ||
      (cells[38].style.backgroundColor === 'yellow' &&
        cells[39].style.backgroundColor === 'yellow' &&
        cells[40].style.backgroundColor === 'yellow' &&
        cells[41].style.backgroundColor === 'yellow')
    ) {
      win = true
      v.innerText = 'Yellow Player won!'
    } else if (
      (cells[28].style.backgroundColor === 'yellow' &&
        cells[29].style.backgroundColor === 'yellow' &&
        cells[30].style.backgroundColor === 'yellow' &&
        cells[31].style.backgroundColor === 'yellow') ||
      (cells[29].style.backgroundColor === 'yellow' &&
        cells[30].style.backgroundColor === 'yellow' &&
        cells[31].style.backgroundColor === 'yellow' &&
        cells[32].style.backgroundColor === 'yellow') ||
      (cells[30].style.backgroundColor === 'yellow' &&
        cells[31].style.backgroundColor === 'yellow' &&
        cells[32].style.backgroundColor === 'yellow' &&
        cells[33].style.backgroundColor === 'yellow') ||
      (cells[31].style.backgroundColor === 'yellow' &&
        cells[32].style.backgroundColor === 'yellow' &&
        cells[33].style.backgroundColor === 'yellow' &&
        cells[34].style.backgroundColor === 'yellow')
    ) {
      win = true
      v.innerText = 'Yellow Player won!'
    } else if (
      (cells[21].style.backgroundColor === 'yellow' &&
        cells[22].style.backgroundColor === 'yellow' &&
        cells[23].style.backgroundColor === 'yellow' &&
        cells[24].style.backgroundColor === 'yellow') ||
      (cells[22].style.backgroundColor === 'yellow' &&
        cells[23].style.backgroundColor === 'yellow' &&
        cells[24].style.backgroundColor === 'yellow' &&
        cells[25].style.backgroundColor === 'yellow') ||
      (cells[23].style.backgroundColor === 'yellow' &&
        cells[24].style.backgroundColor === 'yellow' &&
        cells[25].style.backgroundColor === 'yellow' &&
        cells[26].style.backgroundColor === 'yellow') ||
      (cells[24].style.backgroundColor === 'yellow' &&
        cells[25].style.backgroundColor === 'yellow' &&
        cells[26].style.backgroundColor === 'yellow' &&
        cells[27].style.backgroundColor === 'yellow')
    ) {
      win = true
      v.innerText = 'Yellow Player won!'
    } else if (
      (cells[14].style.backgroundColor === 'yellow' &&
        cells[15].style.backgroundColor === 'yellow' &&
        cells[16].style.backgroundColor === 'yellow' &&
        cells[17].style.backgroundColor === 'yellow') ||
      (cells[15].style.backgroundColor === 'yellow' &&
        cells[16].style.backgroundColor === 'yellow' &&
        cells[17].style.backgroundColor === 'yellow' &&
        cells[18].style.backgroundColor === 'yellow') ||
      (cells[16].style.backgroundColor === 'yellow' &&
        cells[17].style.backgroundColor === 'yellow' &&
        cells[18].style.backgroundColor === 'yellow' &&
        cells[19].style.backgroundColor === 'yellow') ||
      (cells[17].style.backgroundColor === 'yellow' &&
        cells[18].style.backgroundColor === 'yellow' &&
        cells[19].style.backgroundColor === 'yellow' &&
        cells[20].style.backgroundColor === 'yellow')
    ) {
      win = true
      v.innerText = 'Yellow Player won!'
    } else if (
      (cells[7].style.backgroundColor === 'yellow' &&
        cells[8].style.backgroundColor === 'yellow' &&
        cells[9].style.backgroundColor === 'yellow' &&
        cells[10].style.backgroundColor === 'yellow') ||
      (cells[8].style.backgroundColor === 'yellow' &&
        cells[9].style.backgroundColor === 'yellow' &&
        cells[10].style.backgroundColor === 'yellow' &&
        cells[11].style.backgroundColor === 'yellow') ||
      (cells[9].style.backgroundColor === 'yellow' &&
        cells[10].style.backgroundColor === 'yellow' &&
        cells[11].style.backgroundColor === 'yellow' &&
        cells[12].style.backgroundColor === 'yellow') ||
      (cells[10].style.backgroundColor === 'yellow' &&
        cells[11].style.backgroundColor === 'yellow' &&
        cells[12].style.backgroundColor === 'yellow' &&
        cells[13].style.backgroundColor === 'yellow')
    ) {
      win = true
      v.innerText = 'Yellow Player won!'
    } else if (
      (cells[0].style.backgroundColor === 'yellow' &&
        cells[1].style.backgroundColor === 'yellow' &&
        cells[2].style.backgroundColor === 'yellow' &&
        cells[3].style.backgroundColor === 'yellow') ||
      (cells[1].style.backgroundColor === 'yellow' &&
        cells[2].style.backgroundColor === 'yellow' &&
        cells[3].style.backgroundColor === 'yellow' &&
        cells[4].style.backgroundColor === 'yellow') ||
      (cells[2].style.backgroundColor === 'yellow' &&
        cells[3].style.backgroundColor === 'yellow' &&
        cells[4].style.backgroundColor === 'yellow' &&
        cells[5].style.backgroundColor === 'yellow') ||
      (cells[3].style.backgroundColor === 'yellow' &&
        cells[4].style.backgroundColor === 'yellow' &&
        cells[5].style.backgroundColor === 'yellow' &&
        cells[6].style.backgroundColor === 'yellow')
    ) {
      win = true
      v.innerText = 'Yellow Player won!'
    } else if (
      (cells[35].style.backgroundColor === 'yellow' &&
        cells[28].style.backgroundColor === 'yellow' &&
        cells[21].style.backgroundColor === 'yellow' &&
        cells[14].style.backgroundColor === 'yellow') ||
      (cells[28].style.backgroundColor === 'yellow' &&
        cells[21].style.backgroundColor === 'yellow' &&
        cells[14].style.backgroundColor === 'yellow' &&
        cells[7].style.backgroundColor === 'yellow') ||
      (cells[21].style.backgroundColor === 'yellow' &&
        cells[14].style.backgroundColor === 'yellow' &&
        cells[7].style.backgroundColor === 'yellow' &&
        cells[0].style.backgroundColor === 'yellow')
    ) {
      win = true
      v.innerText = 'Yellow Player won!'
    } else if (
      (cells[36].style.backgroundColor === 'yellow' &&
        cells[29].style.backgroundColor === 'yellow' &&
        cells[22].style.backgroundColor === 'yellow' &&
        cells[15].style.backgroundColor === 'yellow') ||
      (cells[29].style.backgroundColor === 'yellow' &&
        cells[22].style.backgroundColor === 'yellow' &&
        cells[15].style.backgroundColor === 'yellow' &&
        cells[8].style.backgroundColor === 'yellow') ||
      (cells[22].style.backgroundColor === 'yellow' &&
        cells[15].style.backgroundColor === 'yellow' &&
        cells[8].style.backgroundColor === 'yellow' &&
        cells[1].style.backgroundColor === 'yellow')
    ) {
      win = true
      v.innerText = 'Yellow Player won!'
    } else if (
      (cells[37].style.backgroundColor === 'yellow' &&
        cells[30].style.backgroundColor === 'yellow' &&
        cells[23].style.backgroundColor === 'yellow' &&
        cells[16].style.backgroundColor === 'yellow') ||
      (cells[30].style.backgroundColor === 'yellow' &&
        cells[23].style.backgroundColor === 'yellow' &&
        cells[16].style.backgroundColor === 'yellow' &&
        cells[9].style.backgroundColor === 'yellow') ||
      (cells[23].style.backgroundColor === 'yellow' &&
        cells[16].style.backgroundColor === 'yellow' &&
        cells[9].style.backgroundColor === 'yellow' &&
        cells[2].style.backgroundColor === 'yellow')
    ) {
      win = true
      v.innerText = 'Yellow Player won!'
    } else if (
      (cells[38].style.backgroundColor === 'yellow' &&
        cells[31].style.backgroundColor === 'yellow' &&
        cells[24].style.backgroundColor === 'yellow' &&
        cells[17].style.backgroundColor === 'yellow') ||
      (cells[31].style.backgroundColor === 'yellow' &&
        cells[24].style.backgroundColor === 'yellow' &&
        cells[17].style.backgroundColor === 'yellow' &&
        cells[10].style.backgroundColor === 'yellow') ||
      (cells[24].style.backgroundColor === 'yellow' &&
        cells[17].style.backgroundColor === 'yellow' &&
        cells[10].style.backgroundColor === 'yellow' &&
        cells[3].style.backgroundColor === 'yellow')
    ) {
      win = true
      v.innerText = 'Yellow Player won!'
    } else if (
      (cells[39].style.backgroundColor === 'yellow' &&
        cells[32].style.backgroundColor === 'yellow' &&
        cells[25].style.backgroundColor === 'yellow' &&
        cells[18].style.backgroundColor === 'yellow') ||
      (cells[32].style.backgroundColor === 'yellow' &&
        cells[25].style.backgroundColor === 'yellow' &&
        cells[18].style.backgroundColor === 'yellow' &&
        cells[11].style.backgroundColor === 'yellow') ||
      (cells[25].style.backgroundColor === 'yellow' &&
        cells[18].style.backgroundColor === 'yellow' &&
        cells[11].style.backgroundColor === 'yellow' &&
        cells[4].style.backgroundColor === 'yellow')
    ) {
      win = true
      v.innerText = 'Yellow Player won!'
    } else if (
      (cells[40].style.backgroundColor === 'yellow' &&
        cells[33].style.backgroundColor === 'yellow' &&
        cells[26].style.backgroundColor === 'yellow' &&
        cells[19].style.backgroundColor === 'yellow') ||
      (cells[33].style.backgroundColor === 'yellow' &&
        cells[26].style.backgroundColor === 'yellow' &&
        cells[19].style.backgroundColor === 'yellow' &&
        cells[12].style.backgroundColor === 'yellow') ||
      (cells[26].style.backgroundColor === 'yellow' &&
        cells[19].style.backgroundColor === 'yellow' &&
        cells[12].style.backgroundColor === 'yellow' &&
        cells[5].style.backgroundColor === 'yellow')
    ) {
      win = true
      v.innerText = 'Yellow Player won!'
    } else if (
      (cells[41].style.backgroundColor === 'yellow' &&
        cells[34].style.backgroundColor === 'yellow' &&
        cells[27].style.backgroundColor === 'yellow' &&
        cells[20].style.backgroundColor === 'yellow') ||
      (cells[34].style.backgroundColor === 'yellow' &&
        cells[27].style.backgroundColor === 'yellow' &&
        cells[20].style.backgroundColor === 'yellow' &&
        cells[13].style.backgroundColor === 'yellow') ||
      (cells[27].style.backgroundColor === 'yellow' &&
        cells[20].style.backgroundColor === 'yellow' &&
        cells[13].style.backgroundColor === 'yellow' &&
        cells[6].style.backgroundColor === 'yellow')
    ) {
      win = true
      v.innerText = 'Yellow Player won!'
    }
    //diagnal yellow
    else if (
      cells[3].style.backgroundColor === 'yellow' &&
      cells[9].style.backgroundColor === 'yellow' &&
      cells[15].style.backgroundColor === 'yellow' &&
      cells[21].style.backgroundColor === 'yellow'
    ) {
      win = true
      v.innerText = 'Yellow Player won!'
    } else if (
      cells[4].style.backgroundColor === 'yellow' &&
      cells[10].style.backgroundColor === 'yellow' &&
      cells[16].style.backgroundColor === 'yellow' &&
      cells[22].style.backgroundColor === 'yellow'
    ) {
      win = true
      v.innerText = 'Yellow Player won!'
    } else if (
      cells[10].style.backgroundColor === 'yellow' &&
      cells[16].style.backgroundColor === 'yellow' &&
      cells[22].style.backgroundColor === 'yellow' &&
      cells[28].style.backgroundColor === 'yellow'
    ) {
      win = true
      v.innerText = 'Yellow Player won!'
    } else if (
      cells[5].style.backgroundColor === 'yellow' &&
      cells[11].style.backgroundColor === 'yellow' &&
      cells[17].style.backgroundColor === 'yellow' &&
      cells[23].style.backgroundColor === 'yellow'
    ) {
      win = true
      v.innerText = 'Yellow Player won!'
    } else if (
      cells[11].style.backgroundColor === 'yellow' &&
      cells[17].style.backgroundColor === 'yellow' &&
      cells[23].style.backgroundColor === 'yellow' &&
      cells[29].style.backgroundColor === 'yellow'
    ) {
      win = true
      v.innerText = 'Yellow Player won!'
    } else if (
      cells[17].style.backgroundColor === 'yellow' &&
      cells[23].style.backgroundColor === 'yellow' &&
      cells[29].style.backgroundColor === 'yellow' &&
      cells[35].style.backgroundColor === 'yellow'
    ) {
      win = true
      v.innerText = 'Yellow Player won!'
    } else if (
      cells[6].style.backgroundColor === 'yellow' &&
      cells[12].style.backgroundColor === 'yellow' &&
      cells[18].style.backgroundColor === 'yellow' &&
      cells[24].style.backgroundColor === 'yellow'
    ) {
      win = true
      v.innerText = 'Yellow Player won!'
    } else if (
      cells[12].style.backgroundColor === 'yellow' &&
      cells[18].style.backgroundColor === 'yellow' &&
      cells[24].style.backgroundColor === 'yellow' &&
      cells[30].style.backgroundColor === 'yellow'
    ) {
      win = true
      v.innerText = 'Yellow Player won!'
    } else if (
      cells[18].style.backgroundColor === 'yellow' &&
      cells[24].style.backgroundColor === 'yellow' &&
      cells[30].style.backgroundColor === 'yellow' &&
      cells[36].style.backgroundColor === 'yellow'
    ) {
      win = true
      v.innerText = 'Yellow Player won!'
    } else if (
      cells[13].style.backgroundColor === 'yellow' &&
      cells[19].style.backgroundColor === 'yellow' &&
      cells[25].style.backgroundColor === 'yellow' &&
      cells[31].style.backgroundColor === 'yellow'
    ) {
      win = true
      v.innerText = 'Yellow Player won!'
    } else if (
      cells[19].style.backgroundColor === 'yellow' &&
      cells[25].style.backgroundColor === 'yellow' &&
      cells[31].style.backgroundColor === 'yellow' &&
      cells[37].style.backgroundColor === 'yellow'
    ) {
      win = true
      v.innerText = 'Yellow Player won!'
    } else if (
      cells[20].style.backgroundColor === 'yellow' &&
      cells[26].style.backgroundColor === 'yellow' &&
      cells[32].style.backgroundColor === 'yellow' &&
      cells[38].style.backgroundColor === 'yellow'
    ) {
      win = true
      v.innerText = 'Yellow Player won!'
    } else if (
      cells[14].style.backgroundColor === 'yellow' &&
      cells[22].style.backgroundColor === 'yellow' &&
      cells[30].style.backgroundColor === 'yellow' &&
      cells[38].style.backgroundColor === 'yellow'
    ) {
      win = true
      v.innerText = 'Yellow Player won!'
    } else if (
      cells[7].style.backgroundColor === 'yellow' &&
      cells[15].style.backgroundColor === 'yellow' &&
      cells[23].style.backgroundColor === 'yellow' &&
      cells[31].style.backgroundColor === 'yellow'
    ) {
      win = true
      v.innerText = 'Yellow Player won!'
    } else if (
      cells[15].style.backgroundColor === 'yellow' &&
      cells[23].style.backgroundColor === 'yellow' &&
      cells[31].style.backgroundColor === 'yellow' &&
      cells[39].style.backgroundColor === 'yellow'
    ) {
      win = true
      v.innerText = 'Yellow Player won!'
    } else if (
      cells[0].style.backgroundColor === 'yellow' &&
      cells[8].style.backgroundColor === 'yellow' &&
      cells[16].style.backgroundColor === 'yellow' &&
      cells[24].style.backgroundColor === 'yellow'
    ) {
      win = true
      v.innerText = 'Yellow Player won!'
    } else if (
      cells[8].style.backgroundColor === 'yellow' &&
      cells[16].style.backgroundColor === 'yellow' &&
      cells[24].style.backgroundColor === 'yellow' &&
      cells[32].style.backgroundColor === 'yellow'
    ) {
      win = true
      v.innerText = 'Yellow Player won!'
    } else if (
      cells[16].style.backgroundColor === 'yellow' &&
      cells[24].style.backgroundColor === 'yellow' &&
      cells[32].style.backgroundColor === 'yellow' &&
      cells[40].style.backgroundColor === 'yellow'
    ) {
      win = true
      v.innerText = 'Yellow Player won!'
    } else if (
      cells[1].style.backgroundColor === 'yellow' &&
      cells[9].style.backgroundColor === 'yellow' &&
      cells[17].style.backgroundColor === 'yellow' &&
      cells[25].style.backgroundColor === 'yellow'
    ) {
      win = true
      v.innerText = 'Yellow Player won!'
    } else if (
      cells[9].style.backgroundColor === 'yellow' &&
      cells[17].style.backgroundColor === 'yellow' &&
      cells[25].style.backgroundColor === 'yellow' &&
      cells[33].style.backgroundColor === 'yellow'
    ) {
      win = true
      v.innerText = 'Yellow Player won!'
    } else if (
      cells[17].style.backgroundColor === 'yellow' &&
      cells[25].style.backgroundColor === 'yellow' &&
      cells[33].style.backgroundColor === 'yellow' &&
      cells[41].style.backgroundColor === 'yellow'
    ) {
      win = true
      v.innerText = 'Yellow Player won!'
    } else if (
      cells[2].style.backgroundColor === 'yellow' &&
      cells[10].style.backgroundColor === 'yellow' &&
      cells[18].style.backgroundColor === 'yellow' &&
      cells[26].style.backgroundColor === 'yellow'
    ) {
      win = true
      v.innerText = 'Yellow Player won!'
    } else if (
      cells[10].style.backgroundColor === 'yellow' &&
      cells[18].style.backgroundColor === 'yellow' &&
      cells[26].style.backgroundColor === 'yellow' &&
      cells[34].style.backgroundColor === 'yellow'
    ) {
      win = true
      v.innerText = 'Yellow Player won!'
    } else if (
      cells[3].style.backgroundColor === 'yellow' &&
      cells[11].style.backgroundColor === 'yellow' &&
      cells[19].style.backgroundColor === 'yellow' &&
      cells[27].style.backgroundColor === 'yellow'
    ) {
      win = true
      v.innerText = 'Yellow Player won!'
    }
  }
}

function resetGame() {
  c.innerText = 'Player 1 vs Player 2' //display message
  v.innerText = '' //null message
  win = false //set to false to clear cells
  for (let i = 0; i < cells.length; i++) {
    //when click on reset the player should start with red again
    if (cell.style.backgroundColor === 'yellow' && currentPlayer === player2) {
      cell.style.backgroundColor === 'red'
      currentPlayer = player1
    }
    if (cell.style.backgroundColor != null) {
      //if cells not null set the cells color to null
      cells[i].style.backgroundColor = ''
    }
  }
}

// Event listeners
startButton.addEventListener('click', startGame) //make buttons clickable
resetButton.addEventListener('click', resetGame)
