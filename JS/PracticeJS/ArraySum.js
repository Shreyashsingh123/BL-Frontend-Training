
const prompt=require("prompt-sync")();
let num=Number(prompt("Enter size of array: "));
let arr=[];
for(let i=0;i<num;i++){
    arr[i]=Number(prompt("enter element:"));
}
let sum=0;
for(let i=0;i<num;i++){
    sum+=arr[i];
}
console.log(`sum of element of array is ${sum}`);