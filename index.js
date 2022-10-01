// generate a random choice from the computer
const options = ["Rock", "Paper", "Scissors"];
function computerChoice (options) {
    const computerSelection = Math.floor((Math.random()) * options.length);
    return options[computerSelection];
}
// take an input from the player
const playerChoice ="";
function playerInput (playerChoice) {
    playerChoice = (prompt("Please enter your selection for the game: [Rock, Paper or Scissors]"));
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
//play a single round and return a result 
let playerSelection = capitalize(middleStep);
let computerSelection = "";
console.log('Player chooses: ', playerSelection);
function playRound(playerSelection, computerSelection) {
    computerSelection = computerChoice(options);
    if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        return 'W';
    } else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        return 'L';
    } else if ( playerSelection == 'Rock' && computerSelection == 'ROck') {
        return 'T';
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        return 'W';
    } else if ( playerSelection == 'Paper' && computerSelection == 'Scissors') {
        return 'L';
    } else if (playerSelection == 'Paper' && computerSelection == 'Paper') {
        return 'T';
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        return 'W';
    } else if ( playerSelection == 'Scissors' && computerSelection == 'Rock') {
        return 'L';
    } else if (playerSelection == 'Scissors' && computerSelection == 'Scissors') {
        return 'T';
    } 
}
// trying to invoke the game five times and create a tally of wins for
// each player
let results = "";
let playerWins = 0;
let computerWins = 0;
function game() {
    for (let i = 0; i < 5; i++) {
        results = playRound(playerSelection, computerSelection); 
            if (results == 'You win! Rock beats Scissors' || results == 'You win! Paper beats Rock' || results == 'You win! Scissors beat Paper') {
                console.log(results);
                return ++playerWins;           
            } else if (results == 'You lose! Rock beats Scissors' || results == 'You lose! Paper beats Rock' || results == 'You lose! Scissors beat Paper') {
                console.log(results);
                return ++computerWins;            
            } else if (results == 'Tie') {
                console.log(results);
                return 
            }   
    }    
}

game();
/*
function determineWinner (){
    game();
   
}*/
console.log(playerWins);
console.log(computerWins);