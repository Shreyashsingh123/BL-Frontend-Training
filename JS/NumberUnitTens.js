const prompt = require("prompt-sync")();
let a=Number(prompt("Enter a number: "));
if(a==1){
    console.log("Number is unit")
}
else if(a==10){
    console.log("Number is tens");
}
else if(a==100){
    console.log("Number is hundred");
}
else if(a==1000){
    console.log("Number is thousand");
}
else if(a==10000){
    console.log("Number is ten thousand");
}
else{
    console.log("Invalid Number");
}