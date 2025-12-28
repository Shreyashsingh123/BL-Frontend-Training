const prompt=require("prompt-sync")();
let num1=Number(prompt("Enter num1:"));
let num2=Number(prompt("Enter num2:"));

check(num1,num2);

function reverse(num) {
    let r = 0;
    let temp = num;

    while (temp > 0) {
        let rem = temp % 10;
        r = r * 10 + rem;
        temp = Math.floor(temp / 10);
    }
    return r;
}

// to check whwther number is palindrome or not 

function isPalindrome(num) {
    return num === reverse(num);
}


function check(num1, num2) {
    if (isPalindrome(num1) && isPalindrome(num2)) {
        console.log("Both the numbers are Palindromes");
    } else if (isPalindrome(num1)) {
        console.log(`${num1} is palindrome and ${num2} is not palindrome`);
    } else if (isPalindrome(num2)) {
        console.log(`${num2} is palindrome and ${num1} is not palindrome`);
    } else {
        console.log("Both the numbers are not palindrome");
    }
}

