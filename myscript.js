function getComputerChoice() {
   let x = Math.random();

    if (x >= 0 && x <= .32) {
        return 'rock';
    } else if (x >= .33 && x <= .66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

let roundWinner; 

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection) {
        return roundWinner = "Tie Round!";
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper') {
        return roundWinner = "Paper beats rock, you lose this round!";
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') {
        return roundWinner = "rock beats scissors, you win this round!";
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors') {
        return roundWinner = "scissors beats paper, you lose this round!";
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') {
        return roundWinner = "Paper beats rock, you win this round!";
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock') {
        return roundWinner = "Rock beats scissors, you lose this round!";
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') {
        return roundWinner = "scissors beats paper, you win this round!";
    } else {
        return "Invalid Input";
    }
    
}

let computerScore = 0
let playerScore = 0

function game() {
    for (let i = 0; i < 5; i++) {
        playRound(prompt("Rock, Paper, or Scissors?"), getComputerChoice());
        
        if (roundWinner.includes("win")) {
            playerScore++;
        } else if (roundWinner.includes("lose")) {
            computerScore++
        }
        console.log(roundWinner);
        console.log(playerScore);
        console.log(computerScore);
    }
    if (playerScore > computerScore) {
        return "you win the whole damn thing!";
    } else if (playerScore == computerScore) {
        return "Tie game, play again!";
    } else {
        return "the computer beat you, try again...";
    }
}
console.log(game());
