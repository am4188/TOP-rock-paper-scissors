function computerPlay() {
    let ranNum = Math.floor(Math.random() * 3);
    if (ranNum == 0) {
        return "rock";
    } else if (ranNum == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "It's a tie. We both got " + computerSelection + ". Try again, unless you're a coward!";
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return "Haha you lose! " + computerSelection + " beats " + playerSelection;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return "Haha you lose! " + computerSelection + " beats " + playerSelection;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return "Haha you lose! " + computerSelection + " beats " + playerSelection;
    } else {
        return "Oh no.. you won! " + playerSelection + " beats " + computerSelection + ". You really got lucky...";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Choose your weapon: rock, paper, or scissors: ").toLowerCase();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
    


}
game();