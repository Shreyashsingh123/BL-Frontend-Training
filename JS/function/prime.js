const prompt=require("prompt-sync")();
// let a=Number(prompt("enter num1"));
let num=Number(prompt("Enter a number:"));
// To check a number is prime number or not 
function isprime(num){
    if(num<=1)return false;
    for(let i=2;i<Math.sqrt(num);i++){
        if(num%i==0)return false;
    }
    return true;
}
// To find the palindrome of the number 

function palindrome(num){
    let reverse=0;
    let temp=num;
    while(temp>0){
        let rem=temp%10;
        reverse=reverse*10+rem;
        temp=Math.floor(temp/10);
    }
    return reverse;
}
// calling functions
if(isprime(num)){
    console.log(num +" "+" is a prime number");
}
else{
    console.log(num +" "+" is not a prime number");
}
let p=palindrome(num);
console.log("Palindrome of "+" "+num +" is : "+p);

if(isprime(p)){
    console.log(p +" is a prime number");
}
else{
    console.log(p+" is not a prime number")
}