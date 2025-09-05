const startButton = document.querySelector('.btn-start');
const gameWindow = document.querySelector('.game-window');
const resetButton = document.querySelector('.btn-reset');
const rockSelected = document.querySelector('.selection-rock');
const paperSelected = document.querySelector('.selection-paper');
const scissorSelected = document.querySelector('.selection-scissor');
const resultText = document.querySelector('.result-text');
const player = document.querySelector('#player');
const computer = document.querySelector('#computer');
let playerScore = player.querySelector('.score');
let computerScore = computer.querySelector('.score');
let playerSelection;
let computerSelection;


startButton.addEventListener('click', function (e) {
    if (gameWindow === undefined) return;
    gameWindow.style.display = 'flex';
    this.classList.add('hidden');
    this.parentNode.classList.add('hidden');
    this.parentNode.parentNode.style.alignItems = 'flex-start';
});

resetButton.addEventListener('click', function (e) {
    resultText.innerText = "Let's start again!";
    playerScore.innerText = '';
    computerScore.innerText = '';
});

rockSelected.addEventListener('click', function (e) {
    playerSelection = "Rock";
    console.log(playerSelection);
});

paperSelected.addEventListener('click', function (e) {
    playerSelection = "Paper";
    console.log(playerSelection);
});

scissorSelected.addEventListener('click', function (e) {
    playerSelection = "Scissors";
    console.log(playerSelection);
});

