// DOM Elements
const textDisplay = document.querySelector('#textDisplay');
const typingArea = document.querySelector('#typingArea');
const timerDisplay = document.querySelector('#timer');
const wpmDisplay = document.querySelector('#wpm');
const accuracyDisplay = document.querySelector('#accuracy');
const bestWPMDisplay = document.querySelector('#bestWPM');
const startBtn = document.querySelector('#startBtn');
const resetBtn = document.querySelector('#resetBtn');
const fifteenbtn = document.querySelector('#fifteenbtn');
const tertybtn = document.querySelector('#tertybtn');
const sixtybtn = document.querySelector('#sixtybtn');
const message = document.querySelector('.message')


// Test texts
const testTexts = [
    "jilan jilan jilan jilan jilan jilan jilan jilan jilan jilan jilan jilan jilan jilan jilan jilan jilan jilan jilan jilan jilan ",
    "Technology has revolutionized the way we communicate and work in the modern digital era.",
    "Typing speed is an essential skill for anyone working with computers in today's workplace."
];

// Game state
let currentText = '';
let timeLeft = 60;
let timerInterval = null;
let startTime = null;
let isTestActive = false;
let bestWPM = 0;
let wpm = 0;


function webLoad() {
    onLoad();
    displayContent();
}


function onLoad() {
    var temp = sessionStorage.getItem('previousWpm')
    // compute final stats before showing message
    updateStatus();
    displayContent();
    message.textContent = `Your Curent Typing Speed is : ${wpm}`;
        bestWPM = 0;
    }


function displayContent() {
    timerDisplay.textContent = timeLeft;
    bestWPMDisplay.textContent = bestWPM;
}

webLoad();


function endGame() {
    clearInterval(timerInterval);
    startBtn.disabled = false;
    fifteenbtn.disabled = false;
    tertybtn.disabled = false;
    sixtybtn.disabled = false;
    typingArea.disabled = true;
    timeLeft = 0;
    wpm = 0;
    message.textContent = `Your Curent Typing Speed is : ${wpm}`;
    displayContent();
    updateStatus();
    if (wpm > bestWPM) {
        bestWPM = wpm;
        sessionStorage.setItem('previousWpm', wpm);
        message.textContent = "Your Typing Speed is higher than privious bestspeed";
    }
}


function fifteen() {
    timeLeft = 15;

    fifteenbtn.style.backgroundColor = 'green';
    tertybtn.style.backgroundColor = 'rgb(48, 184, 184)';
    sixtybtn.style.backgroundColor = 'rgb(48, 184, 184)';
    message.textContent = "15-second test selected";
    message.style.color='green';
    displayContent();
};

function terty() {
    timeLeft = 30;
    tertybtn.style.backgroundColor = 'rgb(236, 129, 8)';
    fifteenbtn.style.backgroundColor = 'rgb(48, 184, 184)';
    sixtybtn.style.backgroundColor = 'rgb(48, 184, 184)';
    message.textContent = "30-second test selected";
    message.style.color='rgb(236, 129, 8)';

      displayContent();
};

function sixty() {
    timeLeft = 60;

    sixtybtn.style.backgroundColor="red";
    fifteenbtn.style.backgroundColor = 'rgb(48, 184, 184)';
    tertybtn.style.backgroundColor = 'rgb(48, 184, 184)';
    message.textContent = "60-second test selected";
    message.style.color='red';
      displayContent();
};

function startGame() {
    clearInterval(timerInterval);
    displayContent();
    
    message.textContent = `Your  ${timeLeft}  Second test is start`;
    startBtn.disabled = true;
    fifteenbtn.disabled = true;
    tertybtn.disabled = true;
    sixtybtn.disabled = true;
    // 5️⃣           4️⃣       3️⃣            1️⃣             2️⃣   aa number pramane one by one kam karshe
    currentText = testTexts[Math.floor(Math.random() * testTexts.length)];
    console.log(currentText);
    textDisplay.textContent = currentText;
    typingArea.disabled = false;
    typingArea.value = "";
    typingArea.focus();
    typingArea.setAttribute('placeholder', 'Now you are eligible to write and use the input box');

    timerInterval = setInterval(function () {
        timeLeft--;
        if (timeLeft <= 0) {
            endGame();
        }
        displayContent();
    }, 1000);
}






function resetGame() {
    // 1️⃣ Timer stop karo
    clearInterval(timerInterval);

    // 2️⃣ Typing area clear aur disable karo
    typingArea.value = '';
    typingArea.disabled = true;

    // 3️⃣ Stats reset karo
    wpmDisplay.textContent = 0;
    accuracyDisplay.textContent = '0%';

    // 4️⃣ Timer reset karo
    timeLeft = 60;
    displayContent();

    
    // 5️⃣ Start time reset karo
    startTime = null;

    

    // 6️⃣ Start button enable karo
    startBtn.disabled = false;

    // 7️⃣ Text display clear karo
    textDisplay.textContent = 'Click "Start Test" to begin typing!';

    // 🔹 Optional: agar best WPM bhi reset karna ho
    bestWPM = 0;
    bestWPMDisplay.textContent = bestWPM;
    sessionStorage.removeItem('previousWpm');
}



function updateStatus() {
    var typed = typingArea.value;

    const word = typed.trim().split(/\s+/).filter(w => w.length > 0);
    console.log(word);
    const elapsedTime = (Date.now() - startTime) / 1000 / 60;
    console.log(elapsedTime);
    wpm = elapsedTime > 0 ? Math.floor(word.length / elapsedTime) : 0;
    wpmDisplay.textContent = wpm;

    var currentScore = 0;
    for (var i = 0; i < currentText.length; i++) {
        if (currentText[i] == typed[i]) {
            currentScore++;
        }
    }
    const accuracy = (typed.length > 0) ? Math.floor(currentScore / typed.length * 100) : 0;
    accuracyDisplay.textContent = accuracy + '%';


}


function Highlights() {
    var typed = typingArea.value;
    var highlightText = '';
    for (let i = 0; i < currentText.length; i++) {
        if (i <= typed.length) {
            if (currentText[i] === typed[i]) {
                highlightText += `<span class= "correct">${currentText[i]}</span>`;
            }

            else {
                highlightText += `<span class= "incorrect">${currentText[i]}</span>`;
            }
        }

        else {
            highlightText += currentText[i];
        }
    }
    textDisplay.innerHTML = highlightText;
}


function typeControl() {
    if (startTime == null) {
        startTime = Date.now();
    }
    console.log(startTime);
    updateStatus();
    Highlights();
}



startBtn.addEventListener('click', startGame);
resetBtn.addEventListener('click', resetGame);
fifteenbtn.addEventListener('click', fifteen);
tertybtn.addEventListener('click', terty);
sixtybtn.addEventListener('click', sixty);
typingArea.addEventListener('input', typeControl);

