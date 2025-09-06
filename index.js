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
    playerScore.innerText = '0';
    computerScore.innerText = '0';
});

rockSelected.addEventListener('click', function (e) {
    playerSelection = "Rock";
    compareChoices(playerSelection, computerChoice())
});

paperSelected.addEventListener('click', function (e) {
    playerSelection = "Paper";
    compareChoices(playerSelection, computerChoice())
});

scissorSelected.addEventListener('click', function (e) {
    playerSelection = "Scissors";
    compareChoices(playerSelection, computerChoice())
});

function computerChoice() {
    let options = ['Rock', "Paper", "Scissors"];
    let optionIndex = Math.floor(Math.random() * options.length);
    return options[optionIndex];
}

function compareChoices(player, computer) {
    let playerSelected = player.toLowerCase();
    let computerSelected = computer.toLowerCase();

    if (playerSelected === "rock") {
        if (computerSelected === "scissors") {
            resultText.innerText = `The Player Selected: ${playerSelected.charAt(0).toUpperCase() + playerSelected.slice(1)} and The Computer Selected: ${computerSelected.charAt(0).toUpperCase() + computerSelected.slice(1)}. So, The Player Won.`;
            playerScore.innerText++;
        }
        else if (computerSelected === "paper") {
            resultText.innerText = `The Player Selected: ${playerSelected.charAt(0).toUpperCase() + playerSelected.slice(1)} and The Computer Selected: ${computerSelected.charAt(0).toUpperCase() + computerSelected.slice(1)}. So, The Computer Won.`;
            computerScore.innerText++;
        }
        else {
            resultText.innerText = `The Player Selected: ${playerSelected.charAt(0).toUpperCase() + playerSelected.slice(1)} and The Computer Selected: ${computerSelected.charAt(0).toUpperCase() + computerSelected.slice(1)}. So, The Game Tied.`;
        }

    }
    else if (playerSelected === "paper") {
        if (computerSelected === "rock") {
            resultText.innerText = `The Player Selected: ${playerSelected.charAt(0).toUpperCase() + playerSelected.slice(1)} and The Computer Selected: ${computerSelected.charAt(0).toUpperCase() + computerSelected.slice(1)}. So, The Player Won.`;
            playerScore.innerText++;
        }
        else if (computerSelected === "scissors") {
            resultText.innerText = `The Player Selected: ${playerSelected.charAt(0).toUpperCase() + playerSelected.slice(1)} and The Computer Selected: ${computerSelected.charAt(0).toUpperCase() + computerSelected.slice(1)}. So, The Computer Won.`;
            computerScore.innerText++;
        }
        else {
            resultText.innerText = `The Player Selected: ${playerSelected.charAt(0).toUpperCase() + playerSelected.slice(1)} and The Computer Selected: ${computerSelected.charAt(0).toUpperCase() + computerSelected.slice(1)}. So, The Game Tied.`;
        }

    }
    else if (playerSelected === "scissors") {
        if (computerSelected === "paper") {
            resultText.innerText = `The Player Selected: ${playerSelected.charAt(0).toUpperCase() + playerSelected.slice(1)} and The Computer Selected: ${computerSelected.charAt(0).toUpperCase() + computerSelected.slice(1)}. So, The Player Won.`;
            playerScore.innerText++;
        }
        else if (computerSelected === "rock") {
            resultText.innerText = `The Player Selected: ${playerSelected.charAt(0).toUpperCase() + playerSelected.slice(1)} and The Computer Selected: ${computerSelected.charAt(0).toUpperCase() + computerSelected.slice(1)}. So, The Computer Won.`;
            computerScore.innerText++;
        }
        else {
            resultText.innerText = `The Player Selected: ${playerSelected.charAt(0).toUpperCase() + playerSelected.slice(1)} and The Computer Selected: ${computerSelected.charAt(0).toUpperCase() + computerSelected.slice(1)}. So, The Game Tied.`;
        }

    }

}