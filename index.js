// generate a random choice from the computer
const options = ["Rock", "Paper", "Scissors"];
function computerChoice (options) {
    const computerSelection = Math.floor((Math.random()) * options.length);
    return options[computerSelection];
}
// take an input from the player
//const playerChoice ="";
//function playerInput (playerChoice) {
  //  playerChoice = (prompt("Please enter your selection for the game: [Rock, Paper or Scissors]"));
    //return playerChoice;
//}
//let middleStep = playerInput(playerChoice);
// format the input for comparison
//function capitalize (middleStep) {
  //  let first = middleStep.slice(0,1);
    //let rest = middleStep.slice(1);
    //let newName = first.toUpperCase(first) + rest.toLowerCase(rest);
  //  return newName;
//}
//play a single round and return a result 
let computerSelection = "";
let playerSelection = '';
let results = '';

//console.log('Player chooses: ', playerSelection);
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

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

let playerWins = 0;
let computerWins = 0;

if (computerWins < 5 || playerWins < 5) {
    // we use the .forEach method to iterate through each button
    buttons.forEach((button) => {

        // and for each one we add a 'click' listener
        button.addEventListener('click', () => {
        playerSelection = button.id;
        results = playRound(playerSelection, computerSelection);
        const container = document.querySelector('#container');
    
        const content = document.createElement('div');
        content.classList.add('content');
        content.textContent = `${results}`;
    
        container.appendChild(content);
        
        if (results === 'You win rock beats scissors' || results === 'You win paper beats rock' ||
        results === 'You win scissors beat paper') {
            playerWins++;
        } else if (results === 'You lose paper beats rock' || results === 'You lose scissors beat paper' ||
        results === 'You lose rock beats scissors') {
            computerWins++;
        }
        const displayResults = document.querySelector('#displayResults');
    
        const otherContent = document.createElement('div');
        otherContent.classList.add('otherContent');
        otherContent.textContent = `player wins = ${playerWins} computer wina = ${computerWins}`;
    
        displayResults.appendChild(otherContent);
        
        });
      
    });
  
} /* else if (computerWins === 5) {
    return;

} else if (playerWins === 5){
    return;
}  */










//console.log(playerSelection);


// trying to invoke the game five times and create a tally of wins for
// each player
/*let results = "";
let playerWins = 0;
let ties =0;
let computerWins = 0;
function game() {
    for (let i = 0; i < 5; i++) {
       
        playRound(playerSelection, computerSelection);
        results = playRound(playerSelection, computerSelection); 
        if (results === 'Tie') {
            console.log(results);
            ties++;
             
                
        } else if (results === 'You lose paper beats rock' || results === 'You lose scissors beat paper' || results === 'You lose rock beats scissors') {
            console.log(results); 
            computerWins++; 
            
                        
        } else if (results === 'You win rock beats scissors' || results === 'You win paper beats rock' || results === 'You win scissors beat paper') {
           
            console.log(results);
            playerWins++;
                  
        }  
    }
    
}



//game();
console.log('ties =', ties);
 
console.log('computer =', computerWins);
console.log('player =',playerWins); 

if (computerWins => playerWins) {
    console.log('you lose');
} else {
    console.log('you won')
}
/*
function determineWinner (){
    game();
   
}*/

