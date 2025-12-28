const prompt = require("prompt-sync")();
let a=Number(prompt("Enter a number:"));
let ans=1;
for(let i=a;i>=1;i--){
    ans*=i;
}
console.log(`Factorial of ${a} is ${ans}`);