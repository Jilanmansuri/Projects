var player1=prompt("enter your name");
var player2=prompt("enter your name");

const boxes = document.querySelectorAll(".btn");
// console.log()
var player = true;

const winner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

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

        if (btn1 != "" && btn2 != "" && btn3 != "") {
            if (btn1 == btn2 && btn2 == btn3 && btn1 == btn3) {
                if (btn1 == "O") {
                    console.log("the winner is player 0")
                }
                else {
                    console.log("the winner is player 1")
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