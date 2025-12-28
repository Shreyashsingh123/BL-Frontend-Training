let a=process.argv[2];
let b=process.argv[3];

// a is starting and b is ending range is in between both

// let ans=false;
for(let i=a;i<=b;i++){
    let ans=true;
    if(i==1)continue;

    for(let j=2;j<=Math.sqrt(i);j++){
        if(i%j==0){
            ans=false;
            break;
        }
    }
    if(ans==true){
        console.log(`${i} is a Prime number`);
    }
}