const startButton = document.querySelector('.btn-start');
const gameWindow = document.querySelector('.game-window');
const resetButton = document.querySelector('.btn-reset');

startButton.addEventListener('click', function (e) {
    if (gameWindow === undefined) return;
    gameWindow.style.display = 'flex';
    this.classList.add('hidden');
    this.parentNode.classList.add('hidden');
    this.parentNode.parentNode.style.alignItems = 'flex-start';
});

