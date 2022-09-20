Array.prototype.random = function () {
    return this[Math.floor((Math.random())*this.length)]
}
var list = ['Rock', 'Paper', 'Scissors'];
let computerSelecction = list.random();

console.log(computerSelecction);