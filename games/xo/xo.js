
const X_CLASS = 'x'
const O_CLASS = 'o'
const cellElements = document.querySelectorAll('.square')
const board = document.getElementById('board')
const winningMessageElement = document.querySelector('.winning-message')
const restartButton = document.getElementById('reset-btn')
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
let circleTurn
let turn=document.querySelector(".turn")
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]


restartButton.addEventListener('click', startGame)

function startGame() {
  circleTurn = false
  cellElements.forEach(cell => {
    cell.innerText=""
    cell.classList.remove(X_CLASS)
    cell.classList.remove(O_CLASS)
    cell.removeEventListener('click', handleClick)
    cell.addEventListener('click', handleClick, { once: true })
  })
  setBoardHoverClass()
  winningMessageElement.classList.remove('show')
}

function handleClick(e) {
  const cell = e.target
  console.log(cell)
  const currentClass = circleTurn ? O_CLASS : X_CLASS
  placeMark(cell, currentClass)
  if (checkWin(currentClass)) {
    endGame(false)
  } else if (isDraw()) {
    endGame(true)
  } else {
    swapTurns()
    setBoardHoverClass()
  }
}

function endGame(draw) {
  if (draw) {
    winningMessageTextElement.innerText = 'Draw!'
  } else {
    const winner = circleTurn ? "O's" : "X's";
    winningMessageTextElement.innerText = `${winner} Wins!`;
  }
  if (winningMessageElement) {
    winningMessageElement.classList.add('show');
  }
}



function isDraw() {
  return [...cellElements].every(cell => {
    return cell.classList.contains(X_CLASS) || cell.classList.contains(O_CLASS)
  })
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass)
  if (currentClass===O_CLASS){
    cell.innerText="0"
  }
  else
  cell.innerText="X"
}

function swapTurns() {
  circleTurn = !circleTurn
  if (circleTurn) {
    turn.innerHTML="It's Player 2's turn."
  }
else {
  turn.innerHTML="It's Player 1's turn."
}
}

function setBoardHoverClass() {
  board.classList.remove(X_CLASS)
  board.classList.remove(O_CLASS)
  if (circleTurn) {
    board.classList.add(O_CLASS)
  } else {
    board.classList.add(X_CLASS)
  }
}

function checkWin(currentClass) {
  return WINNING_COMBINATIONS.some(combination => {
    return combination.every(index => {
      return cellElements[index].classList.contains(currentClass)
    })
  })
}



startGame()
