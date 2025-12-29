let num=10;
let start=1;
let ans=1;
while(start<=num){
    ans*=start;
    start++;
}
console.log(`Factorial of ${num} is = ${ans}`);