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
        return 'You win rock beats scissors';
    } else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        return 'You lose paper beats rock';
    } else if ( playerSelection == 'Rock' && computerSelection == 'Rock') {
        return 'Tie';
    } else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        return 'You win paper beats rock';
    } else if ( playerSelection == 'Paper' && computerSelection == 'Scissors') {
        return 'You lose scissors beat paper';
    } else if (playerSelection == 'Paper' && computerSelection == 'Paper') {
        return 'Tie';
    } else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        return 'You win scissors beat paper';
    } else if ( playerSelection == 'Scissors' && computerSelection == 'Rock') {
        return 'You lose rock beats scissors';
    } else if (playerSelection == 'Scissors' && computerSelection == 'Scissors') {
        return 'Tie';
    } 
}
// trying to invoke the game five times and create a tally of wins for
// each player
let results = "";
/*let playerWins = 0;
let computerWins = 0;*/
function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
        results = playRound(playerSelection, computerSelection); 
        if (results == 'You win rock beats scissors' || 'You win paper beats rock' || 'You win scissors beat paper') {
            console.log(results);          
        } else if (results == 'You lose paper beats rock' || 'You lose scissors beat paper' || 'You lose rock beats scissors') {
            console.log(results);            
        } else if (results == 'Tie') {
            console.log(results); 
        }   
    }    
}

game();
/*
function determineWinner (){
    game();
   
}*/
/*console.log(playerWins);
console.log(computerWins);*/