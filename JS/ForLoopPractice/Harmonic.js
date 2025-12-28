// to find nth harmonic number

let num =process.argv[2];

if(num>0){
    let h=0;
    for(let i=1;i<num;i++){
        h += 1/i;
        // harmonic number=1+1/2+1/3+1/4....till nth 1/n
    }
    console.log(num+"th harmonic number is "+": "+h);
   
}
else{
    console.log("Invalid Input");   
}