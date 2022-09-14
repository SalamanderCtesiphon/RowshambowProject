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

console.log('player choice = ' + playerSelection);
console.log('computer choice = ' +computerSelection);

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'Rock' && computerSelection === 'Rock') {
        return 'Tie';
    }  else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return 'You win! Rock beats Scissors.';
    } else if (playerSelection === "Rock" && computerSelection === 'Paper') {
        return 'You lose! Paper beats Rock.';
    } else if (playerSelection === 'Paper' && computerSelection === 'Paper') {
        return 'Tie';
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return 'You win! Paper beats Rock.';
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
        return 'You lose! Scissors beat Paper.';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Scissors') {
        return 'Tie';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Papper') {
        return 'You win! Scissors beat Paper.';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
        return 'You lose! Rock beats Scissors';
    }
   
   
}







console.log(playRound(playerSelection,computerSelection));
