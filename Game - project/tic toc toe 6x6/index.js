
  // player ka name input karne ke liye scanf ke jaise
var player1=prompt("enter your name");
var player2=prompt("enter your name");
//   console.log("the winner is player 0")


const boxes = document.querySelectorAll(".btn");
// console.log()
var player = true;

const winner = [
    [0, 1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11],
    [12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22, 23],
    [24, 25, 26, 27, 28, 29],
    [30, 31, 32, 33, 34, 35],
    [0, 6, 12, 18, 24, 30],
    [1, 7, 13, 19, 25, 31],
    [2, 8, 14, 20, 26, 32],
    [3, 9, 15, 21, 27, 33],
    [4, 10, 16, 22, 28, 34],
    [5, 11, 17, 23, 29, 35],
    [0, 7, 14, 21, 28, 35],
    [5, 10, 15, 20, 25, 30]


];




function disabledbtn() {
    for (var b of boxes) {
        b.disabled = false;
        b.innerHTML = "";
    }
}
function displaywinner() {
    for (let a of winner) {
        var btn1 = boxes[a[0]].innerHTML;
        var btn2 = boxes[a[1]].innerHTML;
        var btn3 = boxes[a[2]].innerHTML;
        var btn4 = boxes[a[3]].innerHTML;
        var btn5 = boxes[a[4]].innerHTML;
        var btn6 = boxes[a[5]].innerHTML;

        if (btn1 != "" && btn2 != "" && btn3 != "" && btn4!=="" && btn4!="" && btn5!=="" && btn6!=="") {
            if (btn1 == btn2 && btn1 == btn3 && btn1 == btn4 && btn1 == btn5 && btn1 == btn6 &&
                btn2 == btn3 && btn2 == btn4 && btn2 == btn5 && btn2 == btn6 && 
                btn3 == btn4 && btn3 == btn5 && btn3 == btn6 &&
                btn4 == btn5 && btn4 == btn6 && btn5 == btn6  ) {

                if (btn1 == "O") {
                    console.log("the winner is "+player1);
                }
                else {
                    console.log("the winner is "+player2);
                }
                disabledbtn();
            }
        }
    }
}


boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (player) {
            // console.log(box.innerHTML);

            box.innerHTML = "O";
            player = false;
        }

        else {
            box.innerHTML = "X";
            player = true;
        }

        box.disabled = true;
        displaywinner()

    });


})