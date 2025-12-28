const prompt = require("prompt-sync")();
let a=Number(prompt("Enter a number: "));

switch(a){
    case 1:
        console.log("Number is Unit ");
        break;
    case 10:
        console.log("Number is tens");
        break;
    case 100:
        console.log("Number is hundred");
        break;
    case 1000:
        console.log("Number is Thousand");
        break;
    default:
        console.log("Invalid number");
        break;
}