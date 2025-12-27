const prompt = require("prompt-sync")();
let year = Number(prompt("Enter current year:"));

if(year %4  ==0 && year%100!=0 ){
    console.log(year +" "+" is a leap year");
}
console.log(year +" "+" is a not a leap year");