const API_URL = 'https://api.github.com/users';

// State
const state = {
    currentUser: null,
    repos: [],
    history: JSON.parse(localStorage.getItem('gh_search_history')) || [],
    theme: localStorage.getItem('gh_theme') || 'light',
    currentPage: 1,
    reposPerPage: 6
};

// DOM Elements
const elements = {
    themeToggle: document.getElementById('theme-toggle'),
    body: document.body,
    input: document.getElementById('username-input'),
    searchBtn: document.getElementById('search-btn'),
    historyContainer: document.getElementById('search-history'),
    profileSection: document.getElementById('profile-section'),
    loading: document.getElementById('loading'),
    errorMsg: document.getElementById('error-msg'),
    lastSearched: document.getElementById('last-searched'),
    welcomeBanner: document.getElementById('welcome-banner'),
    closeBanner: document.getElementById('close-banner'),
    toastContainer: document.getElementById('toast-container'),
    // Profile Fields
    avatar: document.getElementById('avatar'),
    name: document.getElementById('name'),
    login: document.getElementById('login'),
    bio: document.getElementById('bio'),
    company: document.getElementById('company'),
    location: document.getElementById('location'),
    blog: document.getElementById('blog'),
    twitter: document.getElementById('twitter'),
    joined: document.getElementById('joined'),
    followers: document.getElementById('followers'),
    following: document.getElementById('following'),
    publicRepos: document.getElementById('public-repos'),
    profileLink: document.getElementById('profile-link'),
    contributionGraph: document.getElementById('contribution-graph'),
    reposList: document.getElementById('repos-list'),
    pagination: document.getElementById('pagination'),
    prevPage: document.getElementById('prev-page'),
    nextPage: document.getElementById('next-page'),
    pageInfo: document.getElementById('page-info')
};

// Initialization
function init() {
    applyTheme(state.theme);
    checkBanner();
    renderHistory();
    setupEventListeners();
}

// Event Listeners
function setupEventListeners() {
    elements.searchBtn.addEventListener('click', () => handleSearch());
    elements.input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch();
    });

    // Theme Toggle
    elements.themeToggle.addEventListener('click', () => {
        state.theme = state.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('gh_theme', state.theme);
        applyTheme(state.theme);
    });

    // History interaction
    elements.input.addEventListener('focus', () => {
        if (state.history.length > 0) elements.historyContainer.classList.remove('hidden');
    });

    // Close history when clicking outside
    document.addEventListener('click', (e) => {
        if (!elements.searchBox.contains(e.target)) {
            elements.historyContainer.classList.add('hidden');
        }
    });

    // Banner
    elements.closeBanner.addEventListener('click', () => {
        elements.welcomeBanner.classList.add('hidden');
        sessionStorage.setItem('seenBanner', 'true');
    });

    // Pagination
    elements.prevPage.addEventListener('click', () => changePage(-1));
    elements.nextPage.addEventListener('click', () => changePage(1));
}

// Add reference to searchBox since it wasn't in original elements object
elements.searchBox = document.querySelector('.search-box');

// Theme Logic
function applyTheme(theme) {
    if (theme === 'dark') {
        elements.body.classList.add('dark-mode');
        elements.themeToggle.querySelector('.icon-sun').classList.add('hidden');
        elements.themeToggle.querySelector('.icon-moon').classList.remove('hidden');
    } else {
        elements.body.classList.remove('dark-mode');
        elements.themeToggle.querySelector('.icon-sun').classList.remove('hidden');
        elements.themeToggle.querySelector('.icon-moon').classList.add('hidden');
    }
}

// Banner Logic
function checkBanner() {
    if (!sessionStorage.getItem('seenBanner')) {
        elements.welcomeBanner.classList.remove('hidden');
    }
}

// Search Logic
function handleSearch(usernameOverride) {
    const username = usernameOverride || elements.input.value.trim();
    if (!username) return;

    // Reset UI
    elements.profileSection.classList.add('hidden');
    elements.errorMsg.classList.add('hidden');
    elements.loading.classList.remove('hidden');
    elements.historyContainer.classList.add('hidden');

    fetch(`${API_URL}/${username}`)
        .then(response => {
            if (response.ok) return response.json();
            throw new Error(response.status === 404 ? 'User not found' : 'Error fetching user');
        })
        .then(data => {
            state.currentUser = data;
            updateHistory(data.login);
            renderProfile(data);
            return fetchRepos(data.login, 1);
        })
        .catch(err => {
            elements.loading.classList.add('hidden');
            showToast(err.message, 'error');
            elements.errorMsg.textContent = err.message;
            elements.errorMsg.classList.remove('hidden');
        });
}

function fetchRepos(username, page) {
    state.currentPage = page;
    const url = `${API_URL}/${username}/repos?sort=updated&per_page=${state.reposPerPage}&page=${page}`;

    fetch(url)
        .then(res => res.json())
        .then(repos => {
            state.repos = repos;
            renderRepos(repos);
            elements.loading.classList.add('hidden');
            elements.profileSection.classList.remove('hidden');
            updatePagination();
            showToast('User loaded successfully');
        })
        .catch(err => {
            console.error(err);
            elements.loading.classList.add('hidden');
        });
}

// Rendering
function renderProfile(user) {
    elements.avatar.src = user.avatar_url;
    elements.name.textContent = user.name || user.login;
    elements.login.textContent = `@${user.login}`;
    elements.bio.textContent = user.bio || 'No bio available';

    // Extra Fields
    if (user.company) {
        elements.company.querySelector('span').textContent = user.company;
        elements.company.classList.remove('hidden');
    } else {
        elements.company.classList.add('hidden');
    }

    if (user.location) {
        elements.location.querySelector('span').textContent = user.location;
        elements.location.classList.remove('hidden');
    } else {
        elements.location.classList.add('hidden');
    }

    if (user.blog) {
        const blogLink = elements.blog.querySelector('a');
        let url = user.blog;
        if (!url.startsWith('http')) url = 'https://' + url;
        blogLink.href = url;
        blogLink.textContent = user.blog;
        elements.blog.classList.remove('hidden');
    } else {
        elements.blog.classList.add('hidden');
    }

    if (user.twitter_username) {
        const twitterLink = elements.twitter.querySelector('a');
        twitterLink.href = `https://twitter.com/${user.twitter_username}`;
        twitterLink.textContent = `@${user.twitter_username}`;
        elements.twitter.classList.remove('hidden');
    } else {
        elements.twitter.classList.add('hidden');
    }

    const date = new Date(user.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    elements.joined.querySelector('span').textContent = `Joined ${date}`;

    elements.followers.textContent = user.followers;
    elements.following.textContent = user.following;
    elements.publicRepos.textContent = user.public_repos;
    elements.profileLink.href = user.html_url;

    // Contribution Graph (Proxy)
    // Using ghchart.rshah.org with current theme color
    // Determine color based on theme
    const color = state.theme === 'dark' ? '3fb950' : '2ea44f';
    elements.contributionGraph.src = `https://ghchart.rshah.org/${color}/${user.login}`;

    elements.lastSearched.textContent = `Last searched: ${user.login}`;
}

function renderRepos(repos) {
    elements.reposList.innerHTML = '';
    if (repos.length === 0) {
        elements.reposList.innerHTML = '<p>No repositories found.</p>';
        return;
    }

    repos.forEach(repo => {
        const card = document.createElement('div');
        card.className = 'repo-card';

        const name = document.createElement('h4');
        const link = document.createElement('a');
        link.href = repo.html_url;
        link.target = '_blank';
        link.textContent = repo.name;
        name.appendChild(link);

        const desc = document.createElement('p');
        desc.textContent = repo.description || 'No description';

        const meta = document.createElement('div');
        meta.className = 'repo-meta';
        meta.innerHTML = `
            <span>⭐ ${repo.stargazers_count}</span>
            <span>🍴 ${repo.forks_count}</span>
            <span>${repo.language || ''}</span>
        `;

        card.appendChild(name);
        card.appendChild(desc);
        card.appendChild(meta);
        elements.reposList.appendChild(card);
    });
}

// History Management
function updateHistory(username) {
    // Remove if exists
    state.history = state.history.filter(u => u.toLowerCase() !== username.toLowerCase());
    // Add to front
    state.history.unshift(username);
    // Limit to 5
    if (state.history.length > 5) state.history.pop();

    localStorage.setItem('gh_search_history', JSON.stringify(state.history));
    renderHistory();
}

function renderHistory() {
    elements.historyContainer.innerHTML = '';
    if (state.history.length === 0) return;

    state.history.forEach(user => {
        const div = document.createElement('div');
        div.className = 'history-item';
        div.textContent = user;
        div.addEventListener('click', () => {
            elements.input.value = user;
            elements.historyContainer.classList.add('hidden');
            handleSearch(user);
        });
        elements.historyContainer.appendChild(div);
    });
}

// Pagination
function changePage(direction) {
    const newPage = state.currentPage + direction;
    if (newPage < 1) return;
    // Simple check: if current page had less items than limit, we are likely at end
    // But better to just check if we have items
    fetchRepos(state.currentUser.login, newPage);
}

function updatePagination() {
    elements.pagination.classList.remove('hidden');
    elements.pageInfo.textContent = `Page ${state.currentPage}`;
    elements.prevPage.disabled = state.currentPage === 1;
    // Disable next if we got fewer items than limit (naive check)
    if (state.repos.length < state.reposPerPage) {
        elements.nextPage.disabled = true;
    } else {
        elements.nextPage.disabled = false;
    }
}

// Toast System
function showToast(msg, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = msg;

    elements.toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        toast.addEventListener('transitionend', () => toast.remove());
    }, 3000);
}

// Start
init();
