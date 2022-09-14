function getComputerChoice(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];

    return item;
}

const array = ['Rock', 'Paper', 'Scissors'];

const computerSelection = getComputerChoice(array);

console.log(computerSelection);