// generate a random choice from the computer
Array.prototype.random = function () {
    return this[Math.floor((Math.random())*this.length)]
}
var list = ['Rock', 'Paper', 'Scissors'];

// take an input from the player
const playerChoice = (prompt("Please enter your selection for the game you: [Rock, Paper or Scissors}"));
// format the input for comparison
function capitalize (playerChoice) {
    let first = playerChoice.slice(0,1);
    let rest = playerChoice.slice(1);
    let newName = first.toUpperCase(first) + rest.toLowerCase(rest);
    return newName;
}

//check to make sure that the computer and player selctions are 
// working properly

console.log('Player: ' + playerSelection);
        
console.log('Computer: ' + computerSelection);

// the function to give the results of the game for each round

function playRound() {
    const computerSelection = list.random();
    let playerSelection = capitalize(playerChoice);
    if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        return 'You win! Rock beats Scissors';
    } else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        return 'You lose! Paper beats Rock';
    } else if ( playerSelection == 'Rock' && computerSelection == 'ROck') {
        return 'Tie';
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        return 'You win! Paper beats Rock';
    } else if ( playerSelection == 'Paper' && computerSelection == 'Scissors') {
        return 'You lose! Scissors beat Paper';
    } else if (playerSelection == 'Paper' && computerSelection == 'Paper') {
        return 'Tie';
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        return 'You win! Scissors beat Paper';
    } else if ( playerSelection == 'Scissors' && computerSelection == 'Rock') {
        return 'You lose! Rock beats Scissors';
    } else if (playerSelection == 'Scissors' && computerSelection == 'Scissors') {
        return 'Tie';
    } 
}
// trying to envoke the game five times and create a tally of wins for
// each player
let playerWins = 0;
let computerWins = 0;
let results = playRound(playerSelection, computerSelection);
console.log(results);

function game(playerWins, computerWins) {
    for (let i = 0; i < 5; i++) {
        if (results == 'You win! Rock beats Scissors' || results == 'You win! Paper beats Rock' || results == 'You win! Scissors beat Paper') {
            playerWins++;            
        } else if (results == 'You lose! Rock beats Scissors' || results == 'You lose! Paper beats Rock' || results == 'You lose! Scissors beat Paper') {
            computerWins++;            
        }
        return computerWins, playerWins;
    }
}

game(playerWins, computerWins);
console.log(playerWins);
console.log(computerWins)