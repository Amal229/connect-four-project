// Global variables
const startButton = document.querySelector('#start') //variable to store start button
const resetButton = document.querySelector('#reset') //variable to store reset button
let player1 = 'Player 1' //initialize the player 1
let player2 = 'Player 2' //initialize the player 2
let currentPlayer //initialize the current player
const cells = document.querySelectorAll('.board .cell') //select all cells in board
let cell //initialize single cell
let win = false //initialize boolean
let v = document.querySelector('#winner')
let c = document.querySelector('#current')
c.innerText = 'Click Start Now!'

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
      checkWin()
    })
  }
}
//check win conditions
function checkWin() {
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

// Event listeners
startButton.addEventListener('click', startGame) //event listener to click on start
resetButton.addEventListener('click', resetGame) //event listener to click on reset
