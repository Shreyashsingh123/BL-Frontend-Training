
let a=process.argv[2];
let c=0;
for(let i=1;i<=a;i++){
    if(a%i==0)c++;
}
if(c>2){
    console.log(a+" "+ "is not a prime number");
}
else{

console.log(a+" "+ "is a prime number");
}
