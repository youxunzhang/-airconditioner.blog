// Simple Game functionality
let currentGame = null;
let gameScore = 0;

// Initialize games
document.addEventListener('DOMContentLoaded', function() {
    console.log('Games page loaded');
});

// Start game function
function startGame(gameType) {
    currentGame = gameType;
    gameScore = 0;
    
    // Hide game selection and show game area
    document.querySelector('.game-selection').style.display = 'none';
    document.getElementById('gameArea').style.display = 'block';
    
    // Hide all game containers
    document.querySelectorAll('.game-container').forEach(container => {
        container.style.display = 'none';
    });
    
    // Show specific game
    const gameContainer = document.getElementById(gameType + 'Game');
    if (gameContainer) {
        gameContainer.style.display = 'block';
    }
    
    // Initialize game
    switch(gameType) {
        case 'memory':
            initMemoryGame();
            break;
        case 'puzzle':
            initPuzzleGame();
            break;
        case 'quiz':
            initQuizGame();
            break;
        case 'typing':
            initTypingGame();
            break;
    }
}

// Show game selection
function showGameSelection() {
    document.querySelector('.game-selection').style.display = 'block';
    document.getElementById('gameArea').style.display = 'none';
    currentGame = null;
}

// Memory Game
function initMemoryGame() {
    const brands = ['Gree', 'Midea', 'Haier', 'Daikin'];
    const grid = document.getElementById('memoryGrid');
    grid.innerHTML = '';
    
    brands.forEach(brand => {
        const card = document.createElement('div');
        card.className = 'memory-card';
        card.textContent = brand[0];
        card.onclick = () => {
            card.style.background = '#28a745';
            gameScore += 5;
            updateScore();
        };
        grid.appendChild(card);
    });
}

// Puzzle Game
function initPuzzleGame() {
    const container = document.getElementById('puzzleImage');
    container.innerHTML = '<p>Puzzle game coming soon!</p>';
}

// Quiz Game
function initQuizGame() {
    const container = document.getElementById('question');
    container.innerHTML = '<p>Quiz game coming soon!</p>';
}

// Typing Game
function initTypingGame() {
    const container = document.getElementById('wordDisplay');
    container.innerHTML = '<p>Typing game coming soon!</p>';
}

// Update score
function updateScore() {
    const scoreElement = document.getElementById('score');
    if (scoreElement) {
        scoreElement.textContent = `Score: ${gameScore}`;
    }
}

// Restart game
function restartGame() {
    if (currentGame) {
        startGame(currentGame);
    }
}

// Close modal
function closeGameModal() {
    const modal = document.getElementById('gameModal');
    if (modal) {
        modal.style.display = 'none';
    }
}
