// . Calculate the sum of even numbers greater than 10 and less than 30

let start=11;
let end=30;
let sum=0;
function iseven(num){
    if(num%2==0){
        return true;
    }
    else{
    return false;
    }
}
while(start<end){
    // iseven(start);
    if(iseven(start)){
        sum+=start;
    }
    start++;
}
console.log(`sum of even number between 11 and ${end} is = ${sum}`);
