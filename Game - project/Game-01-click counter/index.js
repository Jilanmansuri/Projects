// six elemets

var currentScore = document.querySelector('#currentScore');
var highScore = document.querySelector('#highScore');
var timer = document.querySelector('#timer');
var clickButton = document.querySelector('#clickButton');
var startButton = document.querySelector('#startButton');
var statusMessage = document.querySelector('#statusMessage');
var resetButton = document.querySelector('#resetButton');
var pauseButton = document.querySelector('#pauseButton');
var resumeButton = document.querySelector('#resumeButton');
var video = document.querySelector('#video');
var subtitle = document.querySelector('.subtitle');

// extra use variable
var current = 0;   // user => button clicked => data store (click me)
var high = 0;   // highscore => track rakh sake.....
var time1 = 10; // time => update.....
var track = false;
var idTrack = null; //time => control
let scale = 1;

function loadContent() {
    dataLoad();
    displayMessage();
}

function dataLoad() {

    var temp = localStorage.getItem('highScore');  //pehli baar local storage  => return null otherwise => data;
    if (temp != null) {
        high = parseInt(temp);  // explicity type coversion.....
    }
    else {
        high = 0;
    }

};

function displayMessage() {
    currentScore.textContent = current;
    highScore.textContent = high;
    timer.textContent = time1;
    if (current > 20) {
        currentScore.style.color = 'red';
    }
    else {
        currentScore.style.color = 'white';
    }
};

function statuMsg(msg) {
    statusMessage.textContent = msg;
}

function endGame() {


    clearInterval(idTrack);
    track = false;
    clickButton.disabled = true;
    startButton.disabled = false;

    startButton.innerHTML = "Play Again🔃";
    startButton.style.backgroundColor ='rgb(236, 129, 8)';
    clickButton.style.transform = 'scale(1)'
    time1 = 0;
    
    var cps = (current / 10).toFixed(2);
    subtitle.textContent = `You clicked ${cps} times per second!`;

    if (current > high) {
        localStorage.setItem('highScore', current);
        high = current;
        displayMessage();
        statuMsg("You're current score is higher than previous score");
        // video.style.display = 'block';
        // alert("Game Finish! You are won!");


        
        var flash = setTimeout(function () {
            if (current >= high) {
                document.body.style.background = 'gold';
                setTimeout(() => {
                    // document.body.style.background = "linear-gradient(115deg, #667eea, #764ba2)"
                    video.style.display = 'block';
                }, 1000)
            }

        }, 1000)

    }

    else if (current == high) {
        statuMsg("Your current score and high score is equal");
        // alert("Game tied");
    }



    else {
        statuMsg("Your current score is less than privious score");
        // alert("You are Lose")
    }
};

function startGame() {
    track = true;
    time1 = 10;
    current = 0;
    
    clickButton.disabled = false;
    startButton.disabled = true;
    resumeButton.style.display = 'none';
    pauseButton.disabled=false;
    statuMsg("Game is started");
    video.style.display = 'none';
    clickButton.innerHTML = "Click Me!";
    document.body.style.background = 'linear-gradient(115deg, #667eea, #764ba2)';
    startButton.style.background='linear-gradient(135deg, #667eea, #764ba2)';
    
    
    idTrack = setInterval(function () {
        time1--;
        if (time1 < 0) {
            endGame();
        }
        displayMessage();
    }, 1000);


    var touch = setTimeout(function () {
        clickButton.innerHTML = "";
        

    }, 1000);


};

function clickMe() {
    if (track) {
        current++;
        displayMessage();
    }

    // clickButton.style.transform = 'scale(1.1)'
};


function handleClick() {

    scale *= 1.02;

    if (scale > 1.5) {
        scale = 1.5;
    }

    clickButton.style.transform = `scale(${scale})`;
};


loadContent();

function resetGame() {
    startButton.disabled = false;
    clickButton.disabled= true;
    localStorage.clear();
    high = 0;
    current = 0;
    time1=10;
    clearInterval(idTrack);
    loadContent();
    displayMessage();
    video.style.display = 'none';
    resumeButton.style.display = 'none';
    document.body.style.background = 'linear-gradient(115deg, #667eea, #764ba2)';

    //  clickButton.style.transform = 'scale(1)';
    statuMsg("Your entire is reset! Click 'Start Game' to play again.");
    clickButton.innerHTML = "Click Me!";
    //  location.reload();
}

function pauseGame() {
    clearInterval(idTrack);
    clickButton.disabled = true;
    displayMessage();
    statuMsg("Game is Pause");
    resumeButton.style.display = 'block';

}

function resumeGame() {
    clickButton.disabled = false;
    displayMessage();
    idTrack = setInterval(function () {
        time1--;
        if (time1 < 0) {
            endGame();
        }
        displayMessage();
    }, 1000);
    resumeButton.style.display = 'none';
    statuMsg("Game is Start");

}




startButton.addEventListener('click', startGame);
clickButton.addEventListener('click', clickMe);
resetButton.addEventListener('click', resetGame);
pauseButton.addEventListener('click', pauseGame);
resumeButton.addEventListener('click', resumeGame);
clickButton.addEventListener('click', handleClick);



// reset button => user click => 1.localstorage => previous => total clear (localstorage.clear()),
//  2.display message
