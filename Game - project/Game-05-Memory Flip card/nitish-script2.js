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
let timeleft = initialTime;
let timerId = null;
let pendingTimeouts = [];
let bestScore = null;



function onLoad() {            //1.
    var temp = localStorage.getItem('bestPair');
    if (temp != null) {
        bestScore = parseInt(temp);
    }
    else {
        bestScore = 0;
    }
}


function displayContent() {       //2.
    timeEl.textContent = timeleft;
    bestScoreEl.textContent = bestScore;
}

onLoad();  //3.
displayContent();


var num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];   //4. taki box me random number dal sake

function shuffle(num2) {         // 5. create a shuffle function for random number
    console.log(num2);
    for (let i = num2.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        console.log(j);
        [num2[i], num2[j]] = [num2[j], num2[i]];
    }
    return num2;
}

function createCard(value) {      //7.
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

function endgame() {
    startBtn.style.backgroundColor='#4ECDC4';
    clearInterval(timerId);
    startBtn.disabled = false;
    busy = false;
    firstCard = null;
    secondCard = null;

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

    board.innerHTML = '';     // 8. taki sara box create karne ke baad use screen me laa sake

    const reshuffleNumber = shuffle([...num1, ...num1]);     // 5. shuffle ek function hai jisse call kar rahe hai aur uske andar argument likhe hai and destrture ka concept lagaye hai
    console.log(reshuffleNumber);

    reshuffleNumber.forEach(value => {     //7. card banane ke liye
        const card = createCard(value);
        console.log(card);
        board.appendChild(card);   //9. position bata rahe hai ki card ko kaha aana hai

        card.addEventListener('click', () => {       // 10. 18 card me add even listner lagana hoga isliye direct loop me lagaye hai
            displayValue(card);
        });
    });
}

createBoxGame();  // 6. call kiye

function startGame() {
    startBtn.style.backgroundColor='red';
    startBtn.disabled = true;
    busy = true;
    timeleft = 60;
    timerId = setInterval(function () {
        timeleft--;

        if (timeleft <= 0) {
            endgame();
        }
        displayContent();
    }, 1000)
}
startBtn.addEventListener('click', startGame);