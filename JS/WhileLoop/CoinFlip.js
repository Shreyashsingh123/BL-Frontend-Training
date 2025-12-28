let head=0;
let tail=0;

while(head<11 && tail<11){
    let flip=Math.random();
    // generate random num between 0 and 1 
    if(flip<0.5){
        tail++;
    }
    else{
        head++;
    }
}
if(head==11){
    console.log("heads win");
}
else{
    console.log("tails win");
}