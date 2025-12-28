// to print till n using while loop and command line argument 
// this is command line argument 
let n = process.argv[2];
let ans;
let i=0;
while(i<=n){
ans=Math.pow(2,i);
console.log(`2^${i} is = ${ans}`);
i++;
}

