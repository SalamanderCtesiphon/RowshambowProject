function getComputerChoice(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}

const array = ['Rock', 'Paper', 'Scissors'];
const computerSelection = getComputerChoice(array);
playerSelection = 'Rock';

let firstLetter = playerSelection.slice(0, 1);
let otherLetters = playerSelection.slice(1);
let playerChoice = firstLetter.toUpperCase(firstLetter) + 
otherLetters.toLowerCase(otherLetters);

playerSelection = playerChoice;

function playRound(playerSelection, computerSelection) {
    let playerScore = 0;
    let computerScore =0;
    if (playerSelection === 'Rock' && computerSelection === 'Rock') {
        return 'Tie';
    }  else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return 'You win! Rock beats Scissors.';
        playerScore += 1;
    } else if (playerSelection === "Rock" && computerSelection === 'Paper') {
        return 'You lose! Paper beats Rock.';
        computerScore += 1;
    } else if (playerSelection === 'Paper' && computerSelection === 'Paper') {
        return 'Tie';
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return 'You win! Paper beats Rock.';
        playerScore += 1;
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return 'You lose! Scissors beat Paper.';
        computerScore +=1;
    } else if (playerSelection === 'Scissors' && computerSelection === 'Scissors') {
        return 'Tie';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Papper') {
        return 'You win! Scissors beat Paper.';
        playerScore +=1;
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return 'You lose! Rock beats Scissors';
        computerScore +=1;
    }  
}

function game(playRound) {
    for (let i = 0; i < 5; i++) {
        playRound(playerSelection, computerSelection);
    }
    return playRound(playerSelection, computerSelection);


console.log(game(playRound);