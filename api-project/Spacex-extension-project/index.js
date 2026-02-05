var timeline = document.querySelector(".timeline");
var searchBox = document.querySelector("#searchBox");
var searchBtn = document.querySelector("#searchBtn");

var filterSelect = document.querySelector("#filterSelect");


var allLaunches = [];
var rocketMap = {};
var currentFilter = "all";

function createRow(data) {
    var tr = document.createElement("tr");

    var rocketName = rocketMap[data.rocket] || "Unknown";
    var status = "";
    var cls = "";

    if (data.upcoming) {
        status = "Upcoming";
        cls = "upcoming";

    } else if (data.success) {
        status = "Success";
        cls = "success";

    } else {
        status = "Failure";
        cls = "failure"; 
    }

    tr.className = cls;

    tr.innerHTML =
        "<td>" + data.name + "</td>" +
        "<td>" + new Date(data.date_utc).toLocaleString() + "</td>" +
        "<td>" + rocketName + "</td>" +
        "<td>" + status + "</td>";

    timeline.appendChild(tr);
}


function showData(list) {
    timeline.innerHTML = "";
    for (var i = 0; i < list.length; i++) {
        createRow(list[i]);
    }
}


function applyFilter() {
    if (currentFilter === "all") {
        return allLaunches;
    }

    if (currentFilter === "past") {
        return allLaunches.filter(l => !l.upcoming);
    }

    if (currentFilter === "upcoming") {
        return allLaunches.filter(l => l.upcoming);
    }

    if (currentFilter === "success") {
        return allLaunches.filter(l => l.success === true);
    }

    if (currentFilter === "failure") {
        return allLaunches.filter(l => l.success === false && !l.upcoming);
    }

    return allLaunches;
}


function applySearchAndFilter() {
    var text = searchBox.value.toLowerCase();
    var data = applyFilter();
    if (text !== "") {
        data = data.filter(l => l.name.toLowerCase().includes(text));
    }
    showData(data);
}



function loadData(type) {
    currentFilter = type;
    if (allLaunches.length === 0) {
        fetch("https://api.spacexdata.com/v4/rockets")
            .then(r => r.json())
            .then(rockets => {
                for (var i = 0; i < rockets.length; i++) {
                    rocketMap[rockets[i].id] = rockets[i].name;
                }

                fetch("https://api.spacexdata.com/v5/launches")
                    .then(r => r.json())
                    .then(launches => {
                        allLaunches = launches;
                        applySearchAndFilter();
                    });
            });
    } 
    
    else {
        applySearchAndFilter();
    }
}


loadData("all");



filterSelect.addEventListener("change", function () {
    currentFilter = this.value;

    if (allLaunches.length === 0) {
        loadData("all");
    } else {
        applySearchAndFilter();
    }
});



searchBtn.addEventListener("click", function () {
    if (allLaunches.length === 0) {
        loadData("all");
    } else {
        applySearchAndFilter();
    }
});
