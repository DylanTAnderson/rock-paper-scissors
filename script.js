// Settings Rock, Papper, Scissors Variables
const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';

// Computer and User Score
let userScore = 0;
let computerScore = 0;

// Computer Choice 
const getComputerChoice = function() {
    let computerChoice = (Math.floor(Math.random() * 3) + 1);
    if (computerChoice === 1) {
        console.log(`Computer Choice: ${rock}`);
        console.log(computerChoice);
        return rock;
    } else if (computerChoice === 2) {
        console.log(`Computer Choice: ${paper}`);
        console.log(computerChoice);
        return paper;
    } else {
        console.log(`Computer Choice: ${scissors}`);
        console.log(computerChoice);
        return scissors;
    }
}

// Each game round instance
const gameRound = function() {
    let = playerSelection = prompt('Please Enter: Rock Paper or Scissors').toLowerCase();
    console.log(`Player Choice: ${playerSelection}`);
    let = computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        console.log('Draw! Nobody Wins');
    } else if (playerSelection === rock && computerSelection === scissors) {
        console.log('Player Wins: Rock beats scissors'); 
        userScore++;
    } else if (playerSelection === paper && computerSelection === rock) {
        console.log('Player Wins: Paper beats rock');
        userScore++;
    } else if (playerSelection === scissors && computerSelection === paper) {
        console.log('Player Wins: Scissors beats Paper');
        userScore++;
    } else if (computerSelection === rock && playerSelection === scissors) {
        console.log('Computer Wins: Rock beats scissors');
        computerScore++;
    } else if (computerSelection === paper && playerSelection === rock) {
        console.log('Computer Wins: Paper beats rock')
        computerScore++;
    } else if (computerSelection === scissors && playerSelection === paper) {
        console.log('Computer Wins: Scissors beats paper');
        computerScore++;
    }
}

// Running multiple rounds
const game = function() {
    let gameItr = 0;
    for (let i = 0; i < 5; i++) {
        gameRound();
        gameItr++;
    }
    console.log(`${gameItr} Rounds: Player Score - ${userScore}, Computer Score - ${computerScore}`);
}
game();
