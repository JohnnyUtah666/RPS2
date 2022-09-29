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
        ticker.textContent = `Tie game!`;
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper') {
        computerScore++;
        ticker.textContent =   `Paper beats rock, computer wins this round`;
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') {
        playerScore++;
        ticker.textContent = `Rock beats scissors, you win this round`;
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors') {
        computerScore++;
        ticker.textContent = `Scissors beats paper, computer wins this round`;
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') {
        playerScore++;
        ticker.textContent = `Paper beats rock, you win this round`;
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock') {
        computerScore++;
        ticker.textContent = `Rock beats scissors, computer wins this round`;
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') {
        playerScore++;
        ticker.textContent = `Scissors beats paper, you win this round`;
    } 
    
}


let computerScore = 0
let playerScore = 0



const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => {
    playRound('rock', getComputerChoice());
    results.textContent = `Player score = ${(playerScore)} \n Computer score = ${(computerScore)}`;
    if (playerScore === 5) {
        ticker.textContent = `Game over, you win!`;
        resetGame();
    } else if (computerScore === 5) {
        ticker.textContent = `Game over, computer wins!`;
        resetGame();
    }
});

paper.addEventListener("click", () => {
    playRound('paper', getComputerChoice());
    results.textContent = `Player score = ${(playerScore)} \n Computer score = ${(computerScore)}`;
    if (playerScore === 5) {
        ticker.textContent = `Game over, you win!`;
        resetGame();
    } else if (computerScore === 5) {
        ticker.textContent = `Game over, computer wins!`;
        resetGame();
    }
});

scissors.addEventListener("click", () => {
    playRound('scissors', getComputerChoice());
    results.textContent = `Player score = ${(playerScore)} \n Computer score = ${(computerScore)}`;
    if (playerScore === 5) {
        ticker.textContent = `Game over, you win!`;
        resetGame();
    } else if (computerScore === 5) {
        ticker.textContent = `Game over, computer wins!`;
        resetGame();
    }
});



const container = document.querySelector('#container');

const results = document.createElement('div');
results.classList.add('results');
results.textContent = `Player score = ${(playerScore)} \n Computer score = ${(computerScore)}`;
let playAgain = document.createElement('button');

container.appendChild(results);


playAgain.style.cssText = 'color:white;background-color:black;border-style:solid;border-width:4px;width:120px;height:60px;font-size:20px;font-family:"Courier New";border-radius:10px';


const announcement = document.querySelector('#announcement');

const ticker = document.createElement('div');
ticker.classList.add('ticker');
ticker.textContent = `Make a move to start playing!`;

announcement.appendChild(ticker);


function resetGame() {
    replay.appendChild(playAgain);
    playAgain.style.display = 'block';
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
    playAgain.innerHTML = "Play Again";
    playAgain.addEventListener ("click", () => {
        newGame();
    });
}

function newGame() {
    playerScore = 0;
    computerScore = 0;
    ticker.textContent = 'Make a move to start playing!';
    document.getElementById('rock').disabled = false;
    document.getElementById('paper').disabled = false;
    document.getElementById('scissors').disabled = false;
    playAgain.innerHTML = "";
    results.textContent = `Player score = ${(playerScore)} \n Computer score = ${(computerScore)}`;
    playAgain.style.display = 'none';
}
