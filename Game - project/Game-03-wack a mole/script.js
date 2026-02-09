const scoreDisplay = document.querySelector('#score');
const timeLeftDisplay = document.querySelector('#timeLeft');
const maxScoreDisplay = document.querySelector('#maxScore');
const startBtn = document.querySelector('#startBtn');
const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const displayMessage = document.querySelector('.displayMessage');
const newBtn = document.querySelector('#newBtn');
const resetBtn = document.querySelector('#resetBtn');
const pauseBtn = document.querySelector('#pauseBtn');
const resumeBtn = document.querySelector('#resumeBtn');

//Required variable

var score = 0;
var time = 30;
var bestScore = 0;
var playGame = false;
var gameId = null;

//common function 

function webload() {
    onLoad();
    displayContent();
}

function onLoad() {
    var temp = localStorage.getItem('highScoreMole');
    if (temp != null) {
        bestScore = parseInt(temp);
    }
    else {
        bestScore = 0;
    }
};

function displayContent() {
    scoreDisplay.textContent = score;
    timeLeftDisplay.textContent = time;
    maxScoreDisplay.textContent = bestScore;
};

function endGame() {
    clearInterval(gameId);
    startBtn.disabled = false;
    playGame = false;
    if (score > bestScore) {
        localStorage.setItem('highScoreMole', score);
        bestScore = score;

        displayMessage.textContent = `Your score is higher than privious best score: ${score}`;
        displayMessage.style.color = "green";
        score = 0;
    }
    else {
        // alert(`your current score is:`);
        displayMessage.textContent = `Your Curent Score is : ${score}`;
        displayMessage.style.color = "green";
    }
    displayContent();
}

function randomTime(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function randomHole() {
    var index = Math.floor(Math.random() * holes.length);
    console.log(holes[index]);
    return holes[index];

}



function popGame() {
    var timer = randomTime(400, 1300);
    var hole = randomHole();
    console.log(hole);
    var mole = hole.querySelector('.mole');

    if (playGame) {
        mole.classList.add('up');
        setTimeout(function () {
            mole.classList.remove('up');
            popGame();
        }, timer);
    }
}


function startGame() {
    time = 30;
    score = 0;
    startBtn.disabled = true;
    playGame = true;
    displayMessage.textContent = "Your Game is start";
    displayMessage.style.color = "blue";

    popGame();

    gameId = setInterval(function () {
        time--;
        if (time == 0) {
            endGame();
        }
        displayContent();
    }, 1000);
}


function newGame() {

    score = 0;
    startGame();
    displayContent();
   

}

function resetGame() {
    clearInterval(gameId);      // 🛑 Stop any running timer
    playGame = false;
    localStorage.clear();
    score = 0;
    bestScore = 0;
    time = 30;
    startBtn.disabled = false;
   
    displayContent();
}


// 🛑 Pause Game Function
function pauseGame() {
    if (!playGame) return;        // agar game already pause ya band hai to kuch nahi kare
    clearInterval(gameId);        // timer rok do
    playGame = false;             // state pause kar do

    resumeBtn.disabled = false;
}

// ▶️ Resume Game Function
function resumeGame() {
    if (playGame) return;          // agar already chal raha hai to kuch nahi kare
    playGame = true;               // dobara start state
   
    resumeBtn.disabled = true;

    // Timer resume karo
    gameId = setInterval(function () {
        time--;
        if (time == 0) {
            endGame();
        }
        displayContent();
    }, 1000);

    // Pop function dobara chalu karo
    popGame();
}





function bonk(event) {
    if (!event.isTrusted) return;
    if (playGame == false) return;
    if (event.target.classList.contains('up')) {
        score++;
        event.target.classList.remove('up');
        event.target.classList.add('bonked');
    }
    setTimeout(function () {
        event.target.classList.remove('bonked');
        displayContent();
    }, 300);
}

webload();

moles.forEach((box) => {
    box.addEventListener('click', bonk);
})


startBtn.addEventListener('click', startGame)
newBtn.addEventListener('click', newGame)
resetBtn.addEventListener('click', resetGame)
pauseBtn.addEventListener('click', pauseGame)
resumeBtn.addEventListener('click', resumeGame)