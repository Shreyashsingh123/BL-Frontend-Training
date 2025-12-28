const prompt = require("prompt-sync")();


let choice = Number(prompt("Enter operation to perform: "));
let num = Number(prompt("Enter a number: "));

let result;


// first case for feet to ince, second for feet to meter , third for inches to feet and fourth for meters to feet
switch (choice) {
    case 1:
        result = num * 12;
        console.log(num + " Feet = " + result + " Inches");
        break;

    case 2:
        result = num * 0.3048;
        console.log(num + " Feet = " + result + " Meters");
        break;

    case 3:
        result = num / 12;
        console.log(num + " Inches = " + result + " Feet");
        break;

    case 4:
        result = num / 0.3048;
        console.log(num + " Meters = " + result + " Feet");
        break;

    default:
        console.log("lease enter correct input !");
}
