function getComputerChoice() {
   let x = Math.random();

    if (x >= 0 && x <= .33) {
        return 'rock';
    } else if (x >= .34 && x <= .65) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

console.log(getComputerChoice());