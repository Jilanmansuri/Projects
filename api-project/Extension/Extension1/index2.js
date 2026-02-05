var btn = document.querySelector('.btn');
var btn2 = document.querySelector('.btn2');
var p1 = document.querySelector('.p1');
var card=document.querySelector('.card');

var intervalId = null;

function colorGenerate() {
    var a = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var c = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor= `rgb(${a}, ${b}, ${c})`;
}

function createCard(data) {
    p1.textContent=`${data.value}`;
    var img = document.createElement('img');
    img.setAttribute("src", data.icon_url);
    card.appendChild(img);
    console.log(card);
    
}

function loadData() {
        fetch(`https://api.chucknorris.io/jokes/random`)    
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
                createCard(data);
                
        })
        .catch((error) => {
            p.textContent = "You got the error pls check the given link you provided";
            p.style.color = "red";
        })
}


btn.addEventListener('click', function () {
    setTimeout(() => {
        intervalId = setInterval(colorGenerate, 200);
    }, 2000); 
});


btn.addEventListener('click',loadData);

btn2.addEventListener('click', function () {
    document.body.style.backgroundColor='white';
    clearInterval(intervalId);
});


