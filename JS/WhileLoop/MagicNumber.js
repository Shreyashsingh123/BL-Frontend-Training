// to find a magic number 
// user will think of a number between 1 and 100 we will use binary search logic to find guessed number

const a = Math.floor(Math.random() * 100) + 1;

let start = 1;
let end = 100;
let x = 0;
while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (mid == a) {
        console.log("Magic number is"+" "+mid);
        break;
    }
    if (a > mid) {
        start = mid + 1;
    } else {
        end = mid - 1;
    }

}