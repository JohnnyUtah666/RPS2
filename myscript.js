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

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == computerSelection) {
        return "Tie Round!";
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper') {
        return "Paper beats rock, you lose this round!";
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') {
        return "rock beats scissors, you win this round!";
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors') {
        return "scissors beats paper, you lose this round!";
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') {
        return "Paper beats rock, you win this round!";
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock') {
        return "Rock beats scissors, you lose this round!";
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') {
        return "scissors beats paper, you win this round!";
    } else {
        return "Invalid Input";
    }
    
}
let computerScore
let playerScore
function game() {
    for (let i = 0; i < 5; i++) {
        playRound(prompt("Rock, Paper, or Scissors?"), getComputerChoice());
    }
}

game()