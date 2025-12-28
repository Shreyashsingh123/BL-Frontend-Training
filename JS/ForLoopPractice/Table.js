// to print till n using for loop and command line argument 
// this is command line argument 
let n = process.argv[2];
let ans;
for(let i=0;i<=n;i++){
ans=Math.pow(2,i);
console.log(`2^${i} is = ${ans}`);
}


