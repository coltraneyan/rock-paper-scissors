const gameArray = ["rock", "paper", "scissors"];

let playerSelection;
let computerSelection;

let computerScore = 0;
let playerScore = 0;

function computerPlay() {
 return gameArray[~~(Math.random() * gameArray.length)];
}

function playRound(playerSelection, computerSelection) {

    playerSelection = (prompt("Play!", "")).toLowerCase();
    computerSelection = computerPlay().toLowerCase();

    if (playerSelection == computerSelection) {
        return(`You tied! Are you a computer too? Score: ${playerScore} - ${computerScore}`);
    } else if (
            (playerSelection == "rock" && computerSelection == "paper") ||
            (playerSelection == "paper" && computerSelection == "scissors") ||
            (playerSelection == "scissors" && computerSelection == "rock")
    ) {
        return(`You lost! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}. Man will never overtake machine!
                Score: ${playerScore} - ${++computerScore}`);
    } else {
        return(`You won! ${capitalize(playerSelection)} beats ${capitalize(computerSelection)}. You're smarter than our robot!
        Score: ${++playerScore} - ${computerScore}`);
    }
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

function game() {
    alert(playRound(playerSelection, computerSelection));
    alert(playRound(playerSelection, computerSelection));
    alert(playRound(playerSelection, computerSelection));
    alert(playRound(playerSelection, computerSelection));
    alert(playRound(playerSelection, computerSelection));
    alert(`The score was ${playerScore} - ${computerScore}`)
    playerScore = 0;
    computerScore = 0;
}

console.log(game());