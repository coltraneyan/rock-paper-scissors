const gameArray = ["rock", "paper", "scissors"];

let playerSelection;
let computerSelection;

let computerScore = 0;
let playerScore = 0;
let tieScore = 0;

function computerPlay() {
 return gameArray[~~(Math.random() * gameArray.length)];
}

function playRound(playerSelection, computerSelection) {
    
    computerSelection = computerPlay().toLowerCase();
    if (playerSelection == computerSelection) {
        ++tieScore;
    } else if (
            (playerSelection == "rock" && computerSelection == "paper") ||
            (playerSelection == "paper" && computerSelection == "scissors") ||
            (playerSelection == "scissors" && computerSelection == "rock")
    ) {
        ++computerScoreText.textContent;
    } else {
        ++playerScoreText.textContent;
    }
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const buttons = document.querySelectorAll('button');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, computerSelection);
      });
    });

const container = document.querySelector(".container")
const playerScoreView = document.createElement('div');
const computerScoreView = document.createElement('div');
const playerScoreText = document.createElement('p');
const computerScoreText = document.createElement('p');

playerScoreText.textContent = `0`
computerScoreText.textContent = `0`

playerScoreView.appendChild(playerScoreText);
computerScoreView.appendChild(computerScoreText);

container.appendChild(playerScoreView);
container.appendChild(computerScoreView);
