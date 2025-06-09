let board;
let currentPlayer;
let isGameOver = false;
let mode = 'human'; // 'human' or 'computer'

const boardEl = document.getElementById('board');
const statusEl = document.getElementById('status');
/* Created By Yash kumar Banjare... */ 
const WINNING_COMBOS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
  [0, 4, 8], [2, 4, 6]             // Diagonals
];

function setMode(selectedMode) {
  mode = selectedMode;
  startGame();
}

function startGame() {
  board = Array(9).fill('');
  currentPlayer = 'X';
  isGameOver = false;
  statusEl.textContent = "Player X's turn";
  renderBoard();
}

function renderBoard() {
  boardEl.innerHTML = '';
  board.forEach((cell, i) => {
    const cellEl = document.createElement('div');
    cellEl.classList.add('cell');
    cellEl.textContent = cell;
    cellEl.addEventListener('click', () => handleClick(i));
    boardEl.appendChild(cellEl);
  });
}
// /* Created By Yash kumar Banjare... */ 
function handleClick(index) {
  if (board[index] || isGameOver) return;
  board[index] = currentPlayer;
  renderBoard();
  checkWin();

  if (!isGameOver) {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusEl.textContent = `Player ${currentPlayer}'s turn`;

    if (mode === 'computer' && currentPlayer === 'O') {
      setTimeout(computerMove, 500); // delay for realism
    }
  }
}

function computerMove() {
  const emptyIndices = board
    .map((cell, i) => (cell === '' ? i : null))
    .filter(i => i !== null);

  const randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
  handleClick(randomIndex);
}

function checkWin() {
  for (const combo of WINNING_COMBOS) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      isGameOver = true;
      statusEl.textContent = `Player ${board[a]} wins!`;
      highlightWinningCells(combo);
      return;
    }
  }
/* Created By Yash kumar Banjare... */ 
  if (!board.includes('')) {
    isGameOver = true;
    statusEl.textContent = "It's a draw!";
  }
}

function highlightWinningCells(combo) {
  const cells = document.querySelectorAll('.cell');
  combo.forEach(i => cells[i].classList.add('winner'));
}

// Initialize
startGame();
/* Created By Yash kumar Banjare... */ 