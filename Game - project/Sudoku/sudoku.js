// Game State
let board = [];
let solvedBoard = [];
let selectedCell = null;
let timer = null;
let seconds = 0;

// DOM Elements
const boardEl = document.getElementById('sudoku-board');
const numpadEl = document.getElementById('numpad');
const difficultySelect = document.getElementById('difficulty-select');
const timerEl = document.getElementById('timer');
const modalOverlay = document.getElementById('modal-overlay');
const modalTitle = document.getElementById('modal-title');
const modalMessage = document.getElementById('modal-message');

// Difficulties (number of empty cells)
const DIFFICULTIES = {
    easy: 30,
    medium: 45,
    hard: 55
};

// Initialize Game
function init() {
    createNumpad();
    setupEventListeners();
    startNewGame();
}

function startNewGame() {
    // Reset state
    seconds = 0;
    selectedCell = null;
    updateTimerDisplay();
    clearInterval(timer);
    
    // Generate new board
    generateBoard();
    renderBoard();
    
    // Start timer
    timer = setInterval(() => {
        seconds++;
        updateTimerDisplay();
    }, 1000);
}

// -----------------
// UI Functions
// -----------------
function createNumpad() {
    numpadEl.innerHTML = '';
    for (let i = 1; i <= 9; i++) {
        const btn = document.createElement('button');
        btn.classList.add('num-btn');
        btn.textContent = i;
        btn.addEventListener('click', () => handleNumberInput(i));
        numpadEl.appendChild(btn);
    }
}

function renderBoard() {
    boardEl.innerHTML = '';
    for (let i = 0; i < 81; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.index = i;
        
        const row = Math.floor(i / 9);
        const col = i % 9;
        const val = board[row][col];
        
        if (val !== 0) {
            cell.textContent = val;
            cell.classList.add('fixed');
        }
        
        cell.addEventListener('click', () => selectCell(i));
        boardEl.appendChild(cell);
    }
}

function selectCell(index) {
    // Clear previous selections
    document.querySelectorAll('.cell').forEach(c => {
        c.classList.remove('selected', 'highlighted', 'same-number');
    });

    selectedCell = index;
    const cellEl = boardEl.children[index];
    cellEl.classList.add('selected');

    const row = Math.floor(index / 9);
    const col = index % 9;
    const value = board[row][col];

    // Highlight row, column, and subgrid
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;

    for (let i = 0; i < 81; i++) {
        const r = Math.floor(i / 9);
        const c = i % 9;
        const currentVal = board[r][c];

        const el = boardEl.children[i];
        
        // Same number highlight
        if (value !== 0 && currentVal === value && i !== index) {
            el.classList.add('same-number');
        }

        // Row/Col/Subgrid highlight
        if (r === row || c === col || (r >= startRow && r < startRow + 3 && c >= startCol && c < startCol + 3)) {
            if (i !== index) el.classList.add('highlighted');
        }
    }
}

function handleNumberInput(num) {
    if (selectedCell === null) return;
    
    const row = Math.floor(selectedCell / 9);
    const col = selectedCell % 9;
    const cellEl = boardEl.children[selectedCell];
    
    // Don't override fixed cells
    if (cellEl.classList.contains('fixed')) return;
    
    // Check if correct
    if (num === solvedBoard[row][col]) {
        // Correct
        board[row][col] = num;
        cellEl.textContent = num;
        cellEl.classList.remove('error');
        
        // Re-select to update highlights
        selectCell(selectedCell);
        
        checkWin();
    } else {
        // Incorrect
        
        // Show error animation briefly
        cellEl.classList.add('error');
        setTimeout(() => {
            cellEl.classList.remove('error');
        }, 500);
    }
}

function eraseCell() {
    if (selectedCell === null) return;
    const cellEl = boardEl.children[selectedCell];
    if (cellEl.classList.contains('fixed')) return;
    
    const row = Math.floor(selectedCell / 9);
    const col = selectedCell % 9;
    
    board[row][col] = 0;
    cellEl.textContent = '';
    selectCell(selectedCell); // update highlights
}

function useHint() {
    if (selectedCell === null) return;
    const cellEl = boardEl.children[selectedCell];
    if (cellEl.classList.contains('fixed') || board[Math.floor(selectedCell/9)][selectedCell%9] !== 0) return;
    
    const row = Math.floor(selectedCell / 9);
    const col = selectedCell % 9;
    const correctNum = solvedBoard[row][col];
    
    handleNumberInput(correctNum);
}


function updateTimerDisplay() {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    timerEl.textContent = `${m}:${s}`;
}

function checkWin() {
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            if (board[r][c] === 0) return;
        }
    }
    gameOver();
}

function gameOver() {
    clearInterval(timer);
    modalOverlay.classList.add('active');
    
    modalTitle.textContent = 'Excellent!';
    modalMessage.innerHTML = `You solved the puzzle in <b>${timerEl.textContent}</b><br>Difficulty: ${difficultySelect.value}`;
    modalTitle.style.color = 'var(--success)';
}

function setupEventListeners() {
    document.getElementById('btn-new-game').addEventListener('click', startNewGame);
    document.getElementById('btn-erase').addEventListener('click', eraseCell);
    document.getElementById('btn-hint').addEventListener('click', useHint);
    difficultySelect.addEventListener('change', startNewGame);
    document.getElementById('modal-btn-new-game').addEventListener('click', () => {
        modalOverlay.classList.remove('active');
        startNewGame();
    });
    
    // Keyboard support
    window.addEventListener('keydown', (e) => {
        if (e.key >= '1' && e.key <= '9') {
            handleNumberInput(parseInt(e.key));
        } else if (e.key === 'Backspace' || e.key === 'Delete') {
            eraseCell();
        } else if (e.key.startsWith('Arrow') && selectedCell !== null) {
            e.preventDefault();
            let row = Math.floor(selectedCell / 9);
            let col = selectedCell % 9;
            
            if (e.key === 'ArrowUp') row = Math.max(0, row - 1);
            if (e.key === 'ArrowDown') row = Math.min(8, row + 1);
            if (e.key === 'ArrowLeft') col = Math.max(0, col - 1);
            if (e.key === 'ArrowRight') col = Math.min(8, col + 1);
            
            selectCell(row * 9 + col);
        }
    });
}

// -----------------
// Sudoku Algorithm
// -----------------
function generateBoard() {
    // 1. Initialize empty boards
    board = Array.from({length: 9}, () => Array(9).fill(0));
    solvedBoard = Array.from({length: 9}, () => Array(9).fill(0));
    
    // 2. Fill diagonal 3x3 blocks (independent, so fast)
    fillDiagonalBlocks();
    
    // 3. Solve the rest to get a complete valid board
    solve(board);
    
    // 4. Copy to solvedBoard
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            solvedBoard[r][c] = board[r][c];
        }
    }
    
    // 5. Remove cells based on difficulty
    removeCells();
}

function fillDiagonalBlocks() {
    for (let i = 0; i < 9; i += 3) {
        fillBlock(i, i);
    }
}

function fillBlock(rowStart, colStart) {
    let num;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            do {
                num = Math.floor(Math.random() * 9) + 1;
            } while (!isSafeBlock(rowStart, colStart, num));
            board[rowStart + i][colStart + j] = num;
        }
    }
}

function isSafeBlock(rowStart, colStart, num) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[rowStart + i][colStart + j] === num) return false;
        }
    }
    return true;
}

function isSafe(grid, row, col, num) {
    // Check row
    for (let x = 0; x < 9; x++) {
        if (grid[row][x] === num) return false;
    }
    // Check col
    for (let x = 0; x < 9; x++) {
        if (grid[x][col] === num) return false;
    }
    // Check block
    let startRow = row - (row % 3);
    let startCol = col - (col % 3);
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (grid[i + startRow][j + startCol] === num) return false;
        }
    }
    return true;
}

function solve(grid) {
    let row = -1;
    let col = -1;
    let isEmpty = false;
    
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (grid[i][j] === 0) {
                row = i;
                col = j;
                isEmpty = true;
                break;
            }
        }
        if (isEmpty) break;
    }
    
    // No empty space left
    if (!isEmpty) return true;
    
    for (let num = 1; num <= 9; num++) {
        if (isSafe(grid, row, col, num)) {
            grid[row][col] = num;
            if (solve(grid)) {
                return true;
            }
            grid[row][col] = 0;
        }
    }
    return false;
}

function removeCells() {
    let diff = difficultySelect.value;
    let cellsToRemove = DIFFICULTIES[diff];
    
    while (cellsToRemove > 0) {
        let cellId = Math.floor(Math.random() * 81);
        let row = Math.floor(cellId / 9);
        let col = cellId % 9;
        
        if (board[row][col] !== 0) {
            board[row][col] = 0;
            cellsToRemove--;
        }
    }
}

// -----------------
// Theme Toggle
// -----------------
const themeToggleBtn = document.getElementById('theme-toggle');
const iconSun = document.getElementById('icon-sun');
const iconMoon = document.getElementById('icon-moon');

function initTheme() {
    const savedTheme = localStorage.getItem('sudoku-theme');
    if (savedTheme === 'light') {
        document.body.setAttribute('data-theme', 'light');
        iconSun.style.display = 'none';
        iconMoon.style.display = 'block';
    } else {
        document.body.removeAttribute('data-theme');
        iconSun.style.display = 'block';
        iconMoon.style.display = 'none';
    }
}

themeToggleBtn.addEventListener('click', () => {
    const isLight = document.body.getAttribute('data-theme') === 'light';
    if (isLight) {
        document.body.removeAttribute('data-theme');
        localStorage.setItem('sudoku-theme', 'dark');
        iconSun.style.display = 'block';
        iconMoon.style.display = 'none';
    } else {
        document.body.setAttribute('data-theme', 'light');
        localStorage.setItem('sudoku-theme', 'light');
        iconSun.style.display = 'none';
        iconMoon.style.display = 'block';
    }
});

// Start app
initTheme();
init();
