function getComputerChoice(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];

    return item;
}

const array = ['Rock', 'Paper', 'Scissors'];

const computerSelection = getComputerChoice(array);

console.log(computerSelection);

playerSelection = 'sciSSORS';

let firstLetter = playerSelection.slice(0, 1);
let otherLetters = playerSelection.slice(1);
let playerChoice = firstLetter.toUpperCase(firstLetter) + otherLetters.toLowerCase(otherLetters);







console.log(playerChoice);
