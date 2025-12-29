const prompt = require("prompt-sync")();

let number = Number(prompt("Temp in Celcius : "));

let fun=solve(number);
console.log(fun);
function solve(number){
    let a=number*(9/5)+32;
    return a;
}