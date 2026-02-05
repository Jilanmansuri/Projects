var p = document.querySelector('.paratop');
var card = document.querySelector(".card");

var allArticles = [];
var index = 0;
var filteredArticles = [];

// 👉 Existing search elements
var searchInput = document.querySelector(".search-input");
var searchBtn = document.querySelector(".search-btn");

// 👉 On search button click
searchBtn.addEventListener("click", () => {
    const keyword = searchInput.value.trim().toLowerCase();
    
    if (keyword === "") {
        // Agar search box khali hai to purane news show karo
        filteredArticles = [];
        index = 0;
        card.innerHTML = "";
        p.textContent = "Today News";
        p.style.color = "black";
        showMore();
        loadMoreBtn.style.display = "block";
        return;
    }

    filteredArticles = allArticles.filter(article => 
        (article.title && article.title.toLowerCase().includes(keyword)) ||
        (article.description && article.description.toLowerCase().includes(keyword))
    );
    
    index = 0;
    card.innerHTML = ""; // Clear previous cards

    if (filteredArticles.length === 0) {
        // Agar koi result nahi mila
        p.textContent = "Your search did not match any results.";
        p.style.color = "red";
        loadMoreBtn.style.display = "none"; // Load More button hide kar do
    } else {
        p.textContent = `Search Results for "${searchInput.value}"`;
        p.style.color = "black";
        loadMoreBtn.style.display = "block"; // Load More show karo
        showMore();
    }
});

function createCard(article) {
    var div = document.createElement('div');
    div.classList.add("news-card");

    var img = document.createElement('img');
    img.setAttribute("src", article.urlToImage || "");

    var contentDiv = document.createElement('div');
    contentDiv.classList.add("right");

    var p1 = document.createElement('p');
    p1.textContent = article.title;

    var p2 = document.createElement('p');
    p2.textContent = `short by: ${article.author || "unknown"} / ${article.publishedAt}`;

    var p4 = document.createElement('p');
    p4.textContent = article.description || "";

    var p5 = document.createElement('p');
    p5.textContent = `Published: ${article.publishedAt}`;

    var p6 = document.createElement('p');
    p6.textContent = article.content || "No content available";

    contentDiv.appendChild(p1);
    contentDiv.appendChild(p2);
    contentDiv.appendChild(p4);
    contentDiv.appendChild(p5);
    contentDiv.appendChild(p6);

    div.appendChild(img);
    div.appendChild(contentDiv);

    card.appendChild(div);
}

// 👉 Load 10 more items
function showMore() {
    const sourceArray = filteredArticles.length ? filteredArticles : allArticles;
    for (let i = 0; i < 10; i++) {
        if (index >= sourceArray.length) {
            loadMoreBtn.style.display = "none";
            break;
        }
        createCard(sourceArray[index]);
        index++;
    }
}

function loadData() {
    // 🔹 Show loading message
    p.textContent = "Loading news...";
    p.style.color = "blue";

    fetch("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=ea5328485b404dcbaceabd4de735dd4f")
        .then((response) => response.json())
        .then((data) => {
            allArticles = data.articles;
            filteredArticles = [];
            
            // 🔹 Reset heading after data load
            p.textContent = "Today News";
            p.style.color = "black";

            showMore();
        })
        .catch((error) => {
            p.textContent = "You got the error, please check the given link.";
            p.style.color = "red";
        })
}


// 👉 Page load
window.onload = loadData;

// 👉 LOAD MORE BUTTON
// 👉 LOAD MORE BUTTON
var loadMoreBtn = document.createElement("button");
loadMoreBtn.textContent = "Load More";
loadMoreBtn.classList.add("load-more");
loadMoreBtn.style.margin = "20px auto";
loadMoreBtn.style.display = "block";
loadMoreBtn.addEventListener("click", showMore);

// 👉 Footer ke pehle append karo
var footer = document.querySelector("footer");
if (footer) {
    document.body.insertBefore(loadMoreBtn, footer);
} else {
    // Agar footer nahi hai to body ke end me append
    document.body.appendChild(loadMoreBtn);
}

