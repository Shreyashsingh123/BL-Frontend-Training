// take 3 number and perform following operation and find minimum and maximmum in it
let a=10;
let b=20;
let c=30;

let op1 = a + b * c;
let op2 = a % b + c;
let op3 = c + a / b;
let op4 = a * b + c;

let min=op1;
let max=op1;
if(op2>max)max=op2;
if(op3>max)max=op3;
if(op4>max)max=op4;

if(op2<min)min=op2;
if(op3<min)min=op3;
if(op4<min)min=op4;

console.log(`Minimum is ${min} and Maximum is ${max}`);

