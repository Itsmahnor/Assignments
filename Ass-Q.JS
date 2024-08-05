// 1.Write a JavaScript function that checks whether a passed string is a palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

function Palindrome(string){
    let newString=string.split("").reverse().join("");
if(newString === string){
    return true;
}
else{
    return false;
}
}

// let string;
// const prompt = require("prompt-sync")();
// string = prompt("Enter String: ");
if(Palindrome(string)){
    console.log("String is Palindrome");
}
else{
    console.log("Not Palindrome");
}

// 2.Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

let s="the quick brown fox";

function UppercaseT(s){
    let newString='';
    newString+=s.charAt(0).toUpperCase();

    for(let i=1;i<s.length;i++){
      if(s[i]==" " && s[i]!=s.length-1){
        newString+=s[i];
        newString+=s[i+1].toUpperCase();
        i++;
      }
      else{
    newString+=s[i];
      }
    }

    return newString;
}
// console.log(UppercaseT(s));

// Write a function to print table data.
function table( n){
    let i=1;
while(i<=10){
    console.log(`${n} * ${i} = ${n*i}`);
    i++;
}
}
let number;

// number = parseInt(prompt("Enter Number: "));
// table(number);

// 5. what will following print
// console.log("har \"".length)
// console.log("har \"".length); //5


//   6. Explore the includes, String slice(),String substring(),String trim() and String split()

let s1="   Mahnoor    ";
console.log(s1.includes("z"));
console.log(s1.slice(3,5));
console.log(s1.substring(3,5));
console.log(s1.trim(""));
console.log(s1.split(""));
