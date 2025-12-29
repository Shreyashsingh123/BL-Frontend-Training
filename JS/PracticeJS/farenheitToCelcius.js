const prompt = require("prompt-sync")();

let number = Number(prompt("Temp in Farenheit : "));

let fun=solve(number);
console.log(fun);
function solve(number){
    let a=(number-32)/(9/5);
    return a;
}