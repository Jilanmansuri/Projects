// DOM elements
const board = document.getElementById('board');
const movesEl = document.getElementById('moves');
const pairsEl = document.getElementById('pairs');
const timeEl = document.getElementById('timeLeft');
const startBtn = document.getElementById('startBtn');
const restartBtn = document.getElementById('restartBtn');
const resetBtn = document.getElementById('resetBtn');
const bestScoreEl = document.getElementById('bestScore');
const overlay = document.getElementById('countdownOverlay');

// Game configuration
const rows = 3; // grid layout chosen via CSS; use 6x3 = 18 cards (9 pairs)
const cols = 6;
const totalPairs = 9;
const initialTime = 60; // seconds

// State
let firstCard = null;
let secondCard = null;
let busy = false;
let moves = 0;
let matchedPairs = 0;
let timeleft = initialTime; //  L  ka l
let timerId = null;
let pendingTimeouts = [];
let bestScore = null;


function onLoad() {
    var temp = localStorage.getItem('bestPair');
    if (temp != null) {
        bestScore = parseInt(temp);
    }

    else {
        bestScore = 0;
    }
}

function displayContent() {
    timeEl.textContent = timeleft;
    bestScoreEl.textContent = bestScore;
}

onLoad();
displayContent();

var num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function shuffle(num2) {
    console.log(num2);
    for (let i = num2.length - 1; i > 0; i++) {
        var j = Math.floor(Math.random() * (i + 1));
        console.log(j);
        [num2[i], num2[j]] = [num2[j], num2[i]]
    }
    return num2;
}

function createCard(value) {
    const card = document.createElement('div');
    card.classList.add('card');

    const inner = document.createElement('div');
    inner.classList.add('inner');

    const front = document.createElement('div');
    front.classList.add('front');
    front.textContent = '';

    const back = document.createElement('div');
    back.classList.add('back');
    back.textContent = value;

    inner.appendChild(front);
    inner.appendChild(back);

    card.appendChild(inner);

    return card;

}

function displayValue(card) {
    if (busy == false) return;

    if (card === firstCard || card.classList.contains('matched')) return;
    card.classList.add('flipped'); //card => flipped

    if (firstCard == null) {  //when user selected first card it should always store in firstcard variables
        firstCard = card;
        return;
    }

    secondCard = card; //second card will always be store in second card variable
    moves++;
    movesEl.textContent = moves;

    var a = firstCard.querySelector('.back');
    console.log("a value is :" + a.textContent);
    var b = secondCard.querySelector('.back');
    console.log("b value is :" + b.textContent);

    if (a.textContent === b.textContent) {
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        matchedPairs++;
        pairsEl.textContent = matchedPairs;

        if (matchedPairs == 9) {
            alert('end game');
        }

        firstCard = null;
        secondCard = null;
    }

    else {
        setTimeout(function () {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');

            firstCard = null;
            secondCard = null;
        }, 700);    //700=> 0.7s ------> time decrement -> per second
    }

}


function createBoxGame() {
    board.innerHTML = '';
    const reshuffleNumber = shuffle([...num1, ...num1]);
    console.log(reshuffleNumber);
    reshuffleNumber.forEach(value => {
        const card = createCard(value);
        console.log(card);
        board.appendChild(card);

        card.addEventListener('click', () => {       // 10. 18 card me add even listner lagana hoga isliye direct loop me lagaye hai
            displayValue(card);
        });
    });
}

createBoxGame();

function startGame() {
    startBtn.disabled = true;
    // reset game state
    busy = true;
    timeleft = initialTime;
    moves = 0;
    matchedPairs = 0;
    firstCard = null;
    secondCard = null;
    // rebuild board
    createBoxGame();
    movesEl.textContent = moves;
    pairsEl.textContent = matchedPairs;
    timerId = setInterval(function () {
        timeleft--;

        if (timeleft <= 0) {
            endGame();
        }
        displayContent();
    }, 1000)
}
startBtn.addEventListener('click', startGame);

function endGame() {
    clearInterval(timerId);
    busy = false;
    startBtn.disabled = false;
    // update best score
    if (matchedPairs > bestScore) {
        bestScore = matchedPairs;
        localStorage.setItem('bestPair', bestScore);
    }
    displayContent();
}

