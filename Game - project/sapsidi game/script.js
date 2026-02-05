// Game Configuration
const BOARD_SIZE = 100;
const GRID_COLS = 10;
const GRID_ROWS = 10;
const NUM_PLAYERS = 2;

// Snakes and Ladders Configuration (position -> destination)
const SNAKES = {
    17: 4,
    54: 34,
    62: 19,
    87: 24,
    99: 78,
    95: 75,
    80: 71,
    98: 79
};

const LADDERS = {
    3: 22,
    5: 14,
    9: 31,
    20: 38,
    32: 42,
    51: 67,
    57: 72,
    71: 91,
    85: 99
};

// Game State
class Game {
    constructor() {
        this.players = [];
        this.currentPlayerIndex = 0;
        this.gameStarted = false;
        this.moves = 0;
        this.gameOver = false;
        this.initializePlayers();
        this.initializeBoard();
    }

    initializePlayers() {
        for (let i = 0; i < NUM_PLAYERS; i++) {
            this.players.push({
                id: i + 1,
                position: 0,
                name: `Player ${i + 1}`,
                color: ['#3498db', '#e74c3c', '#f39c12', '#9b59b6'][i]
            });
        }
    }

    initializeBoard() {
        this.board = document.getElementById('board');
        this.board.innerHTML = '';
        
        for (let i = BOARD_SIZE; i >= 1; i--) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.id = `cell-${i}`;
            
            // Add special markings
            if (SNAKES[i]) {
                cell.classList.add('snake');
                const icon = document.createElement('div');
                icon.className = 'cell-icon';
                icon.textContent = '🐍';
                cell.appendChild(icon);
            } else if (LADDERS[i]) {
                cell.classList.add('ladder');
                const icon = document.createElement('div');
                icon.className = 'cell-icon';
                icon.textContent = '🪜';
                cell.appendChild(icon);
            } else {
                const number = document.createElement('div');
                number.className = 'cell-number';
                number.textContent = i;
                cell.appendChild(number);
            }
            
            this.board.appendChild(cell);
        }
    }

    getCurrentPlayer() {
        return this.players[this.currentPlayerIndex];
    }

    rollDice() {
        return Math.floor(Math.random() * 6) + 1;
    }

    movePlayer(diceValue) {
        const player = this.getCurrentPlayer();
        let newPosition = player.position + diceValue;

        // Check if player overshoots
        if (newPosition > BOARD_SIZE) {
            return { success: false, message: `${player.name} overshot! Stay at ${player.position}` };
        }

        player.position = newPosition;

        // Check for snake
        if (SNAKES[newPosition]) {
            const destination = SNAKES[newPosition];
            const message = `${player.name} hit a snake! 🐍 Moving from ${newPosition} to ${destination}`;
            player.position = destination;
            return { success: true, message, hitSnake: true, newPosition: destination };
        }

        // Check for ladder
        if (LADDERS[newPosition]) {
            const destination = LADDERS[newPosition];
            const message = `${player.name} climbed a ladder! 🪜 Moving from ${newPosition} to ${destination}`;
            player.position = destination;
            return { success: true, message, hitLadder: true, newPosition: destination };
        }

        return { success: true, message: `${player.name} moved to ${newPosition}`, newPosition };
    }

    checkWin() {
        const player = this.getCurrentPlayer();
        if (player.position === BOARD_SIZE) {
            this.gameOver = true;
            return player;
        }
        return null;
    }

    nextTurn() {
        this.currentPlayerIndex = (this.currentPlayerIndex + 1) % NUM_PLAYERS;
    }

    reset() {
        this.players.forEach(player => player.position = 0);
        this.currentPlayerIndex = 0;
        this.gameStarted = false;
        this.moves = 0;
        this.gameOver = false;
        this.updateUI();
    }

    updateUI() {
        // Update player list
        const playersList = document.getElementById('playersList');
        playersList.innerHTML = '';
        
        this.players.forEach((player, index) => {
            const playerDiv = document.createElement('div');
            playerDiv.className = 'player-item';
            if (index === this.currentPlayerIndex && this.gameStarted) {
                playerDiv.style.background = '#e3f2fd';
                playerDiv.style.borderLeft = '4px solid #667eea';
            }
            
            const dot = document.createElement('div');
            dot.className = 'player-dot';
            dot.style.background = player.color;
            
            const name = document.createElement('span');
            name.textContent = player.name;
            
            const position = document.createElement('span');
            position.className = 'player-position';
            position.textContent = player.position;
            
            playerDiv.appendChild(dot);
            playerDiv.appendChild(name);
            playerDiv.appendChild(position);
            playersList.appendChild(playerDiv);
        });

        // Update game stats
        document.getElementById('currentPlayer').textContent = this.getCurrentPlayer().name;
        document.getElementById('totalMoves').textContent = this.moves;

        // Update board tokens
        document.querySelectorAll('.player-token').forEach(token => token.remove());
        
        this.players.forEach(player => {
            if (player.position > 0) {
                const cell = document.getElementById(`cell-${player.position}`);
                if (cell) {
                    const token = document.createElement('div');
                    token.className = `player-token player${player.id}-token`;
                    token.textContent = player.id;
                    token.style.background = player.color;
                    cell.appendChild(token);
                }
            }
        });
    }
}

// Initialize game
const game = new Game();

// DOM Elements
const rollDiceBtn = document.getElementById('rollDiceBtn');
const resetBtn = document.getElementById('resetBtn');
const startBtn = document.getElementById('startBtn');
const diceValue = document.getElementById('diceValue');
const statusModal = document.getElementById('statusModal');
const modalTitle = document.getElementById('modalTitle');
const modalMessage = document.getElementById('modalMessage');
const modalBtn = document.getElementById('modalBtn');

// Event Listeners
startBtn.addEventListener('click', () => {
    game.gameStarted = true;
    startBtn.disabled = true;
    rollDiceBtn.disabled = false;
    modalTitle.textContent = 'Game Started!';
    modalMessage.textContent = `${game.getCurrentPlayer().name} goes first! Click "Roll Dice" to begin.`;
    showModal();
    game.updateUI();
});

rollDiceBtn.addEventListener('click', () => {
    if (!game.gameStarted || game.gameOver) return;

    const dice = game.rollDice();
    diceValue.textContent = dice;

    // Disable button during animation
    rollDiceBtn.disabled = true;

    // Animate dice roll
    let rollCount = 0;
    const rollInterval = setInterval(() => {
        diceValue.textContent = Math.floor(Math.random() * 6) + 1;
        rollCount++;
        if (rollCount > 15) {
            clearInterval(rollInterval);
            diceValue.textContent = dice;
            
            setTimeout(() => {
                const result = game.movePlayer(dice);
                game.moves++;

                // Show movement message
                modalTitle.textContent = '🎲 Dice Roll';
                modalMessage.textContent = `${result.message}`;
                showModal();

                game.updateUI();

                // Check for win
                setTimeout(() => {
                    const winner = game.checkWin();
                    if (winner) {
                        modalTitle.textContent = '🎉 Game Over!';
                        modalMessage.textContent = `${winner.name} reached 100 and won the game!`;
                        showModal();
                        rollDiceBtn.disabled = true;
                    } else {
                        game.nextTurn();
                        game.updateUI();
                        rollDiceBtn.disabled = false;
                    }
                }, 500);
            }, 300);
        }
    }, 50);
});

resetBtn.addEventListener('click', () => {
    game.reset();
    diceValue.textContent = '-';
    startBtn.disabled = false;
    rollDiceBtn.disabled = true;
    modalTitle.textContent = 'Game Reset!';
    modalMessage.textContent = 'Click "Start Game" to begin a new game.';
    showModal();
});

modalBtn.addEventListener('click', () => {
    hideModal();
});

// Modal Functions
function showModal() {
    statusModal.classList.add('active');
}

function hideModal() {
    statusModal.classList.remove('active');
}

// Initial UI Update
game.updateUI();
rollDiceBtn.disabled = true;

// Prevent modal from closing on background click
statusModal.addEventListener('click', (e) => {
    if (e.target === statusModal) {
        e.preventDefault();
    }
});
