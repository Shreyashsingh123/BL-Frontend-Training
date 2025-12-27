let arr=[];
for(let i=0;i<5;i++){
    let num=Math.floor(Math.random()*900)+100;
   arr[i]=num;
}
console.log(arr);
let min=arr[0];
let max=arr[1];
for(let i=1;i<arr.length;i++){
if(arr[i]<min)min=arr[i];
if(arr[i]>max)max=arr[i];
}
console.log("Minimum number is "+" "+min);
console.log("Maximum number is"+" "+max);