// generate a random choice from the computer
Array.prototype.random = function () {
    return this[Math.floor((Math.random())*this.length)]
}
var list = ['Rock', 'Paper', 'Scissors'];
let computerSelection = list.random();
// take an inout from the player
let playerChoice = (prompt("Please enter your selection for the game you: [Rock, Paper or Scissors}"));
// format the inout for comparison
function capitalize (playerChoice) {
    let first = playerChoice.slice(0,1);
    let rest = playerChoice.slice(1);
    let newName = first.toUpperCase(first) + rest.toLowerCase(rest);
    return newName;
}
let playerSelection = capitalize(playerChoice);
//check to make sure that the computer and player selctions are 
// working properly

console.log(' Player: ' + playerSelection);
        
console.log('Computer: ' + computerSelection);