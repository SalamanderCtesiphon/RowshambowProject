// generate a random choice from the computer
const options = ["Rock", "Paper", "Scissors"];
function computerChoice (options) {
    const computerSelection = Math.floor((Math.random()) * options.length);
    return options[computerSelection];
}
// take an input from the player
const playerChoice ="";
function playerInput (playerChoice) {
    playerChoice = (prompt("Please enter your selection for the game: [Rock, Paper or Scissors}"));
    return playerChoice;
}
let middleStep = playerInput(playerChoice);
// format the input for comparison
function capitalize (middleStep) {
    let first = middleStep.slice(0,1);
    let rest = middleStep.slice(1);
    let newName = first.toUpperCase(first) + rest.toLowerCase(rest);
    return newName;
}
let playerSelection = capitalize(middleStep);
//check to make sure that the computer and player selctions are 
// working properly

// the function to give the results of the game for each round
let computerSelection = "";

function playRound(playerSelection, computerSelection) {
    computerSelection = computerChoice(options);
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


let results = "";
let playerWins = 0;
let computerWins = 0;
function game(playerWins, computerWins) {
    for (let i = 0; i < 5; i++) {
        results = playRound(playerSelection, computerSelection);
        console.log('Player: ' + playerSelection);
        console.log('Computer: ' + computerSelection);   
        console.log(results);   
        if (results == 'You win! Rock beats Scissors' || results == 'You win! Paper beats Rock' || results == 'You win! Scissors beat Paper') {
            ++playerWins;            
        } else if (results == 'You lose! Rock beats Scissors' || results == 'You lose! Paper beats Rock' || results == 'You lose! Scissors beat Paper') {
            ++computerWins;            
            }
    }
    return computerWins, playerWins;
}
game(playerWins, computerWins);
//console.log(game(playerWins, computerWins));

//console.log(playerWins);
//console.log(computerWins)