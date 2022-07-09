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

let userScore = null;
let computerScore = null;

function checkScore() {
    if (computerScore >= 5 || userScore >= 5) {
        const winner = document.querySelector('.winner');
        const para = document.createElement('p');
        para.textContent = 'You lose :(';
        winner.classList.add('winner');
        winner.appendChild(para);
    } else if (userScore >= 5) {
        const winner = document.querySelector('.winner');
        const para = document.createElement('p');
        para.textContent = 'You win!';
        winner.classList.add('winner');
        winner.appendChild(para);
        
    }
    }
function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        return "It's a tie. We both got " + computerSelection + ". Try again, unless you're a coward!";
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore += 1;
        computerScoreRight.textContent = computerScore;
        checkScore();
        return "Haha you lose! " + computerSelection + " beats " + playerSelection;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore += 1;
        computerScoreRight.textContent = computerScore;
        checkScore();
        return "Haha you lose! " + computerSelection + " beats " + playerSelection;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore += 1;
        computerScoreRight.textContent = computerScore;
        checkScore();
        return "Haha you lose! " + computerSelection + " beats " + playerSelection;
    } else {
        userScore += 1;
        userScoreLeft.textContent = userScore;
        checkScore();
        return "Oh no.. you won! " + playerSelection + " beats " + computerSelection + ". You really got lucky...";
    }
    
}


/*function game() {
    for (let i = 0; userScore > 5 && computerScore > 5; i++) {
        const playerSelection = prompt("Choose your weapon: rock, paper, or scissors: ").toLowerCase();
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
*/



const rock = document.querySelector('.btn-rock');
const paper = document.querySelector('.btn-paper');
const scissors = document.querySelector('.btn-scissors');

rock.addEventListener('click', () => {
    let playerSelection = 'rock';
    const computerSelection = computerPlay();
    para.textContent = playRound(playerSelection, computerSelection);
    resultsDiv.appendChild(para);
});

paper.addEventListener('click', () => {
    let playerSelection = 'paper';
    const computerSelection = computerPlay();
    para.textContent = playRound(playerSelection, computerSelection);
    resultsDiv.appendChild(para);
});

scissors.addEventListener('click', () => {
    let playerSelection = 'scissors';
    const computerSelection = computerPlay();
    para.textContent = playRound(playerSelection, computerSelection);
    resultsDiv.appendChild(para);
});

const resultsDiv = document.querySelector('.results');
const para = document.createElement('p');
const userScoreLeft = document.querySelector('.user-score-left');
const computerScoreRight = document.querySelector('.computer-score-right');
const winner = document.querySelector('.winner');
userScoreLeft.textContent = userScore

