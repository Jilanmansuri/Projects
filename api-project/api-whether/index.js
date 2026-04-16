var p = document.querySelector('p');
var btn = document.querySelector(".btn");
var card = document.querySelector(".card");
var inputbox = document.querySelector(".inputbox");

function createCard(data) {
    card.innerHTML = ""; 

    var div = document.createElement('div');
    div.classList.add("weatherCard");

    var img = document.createElement('img');
    img.src = "https:" + data.current.condition.icon;

    var p1 = document.createElement('p');
    p1.textContent = "City: " + data.location.name;

    var p2 = document.createElement('p');
    p2.textContent = "Temperature: " + data.current.temp_c + "°C";

    var p3 = document.createElement('p');
    p3.textContent = "Condition: " + data.current.condition.text;

    var p4 = document.createElement('p');
    p4.textContent = "Humidity: " + data.current.humidity + "%";

    var p5 = document.createElement('p');
    p5.textContent = "Wind Speed: " + data.current.wind_kph + " km/h";
    
    var p6 = document.createElement('p');
    p6.textContent = "Time: " + data.current.last_updated ;

    div.appendChild(img);
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(p4);
    div.appendChild(p5);
    div.appendChild(p6);

    card.appendChild(div);
}

function loadData() {
    var input = inputbox.value.trim();
    if (input === "") {
        p.textContent = "Please enter a city name!";
        p.style.color = "red";
        return;
    }

    fetch(`https://api.weatherapi.com/v1/current.json?key=f94cb8d5c48b4f0e9cb51318250912&q=${input}&aqi=yes`)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                p.textContent = "City not found!";
                p.style.color = "red";
            } else {
                p.textContent = "";
                createCard(data);
            }
        })
        .catch(error => {
            p.textContent = "Something went wrong!";
            p.style.color = "red";
        });
        
}

btn.addEventListener("click", loadData);


