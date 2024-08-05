// qno1
// Use logical operators to find whether the age person lies between 10 and 20
let age;
const prompt = require("prompt-sync")();
age = parseInt(prompt("Enter your age: "));
if(age>=10 && age<=20)
    console.log("Age lie between 10 and 20");
else{
    console.log("Age is not lie between 10 and 20");
}
// qno2
// Demonstrate the use of switch case statements  in JavaScript.

age = parseInt(prompt("Enter your age: "));
switch(age){
    case 10:{
        console.log("your age is 10");
      
    }
    case 20:{
        console.log("your age is 20");
     
    }
    case 30:{
        console.log("your age is 30");
        break;
    }
    default:
        console.log("your age is 40");
        break;

}

// qno3
// Write a Java Script program to find whether a number is Divisible by 2 and 3.
let n;

n = parseInt(prompt("Enter number: "));
if(n%2==0 && n%3==0){
    console.log("number is Divisible by 2 and 3.");
}
else{
    console.log("number is not Divisible by 2 and 3.");
}

// qno4
// Write a Javascript program to find whether a number is Divisible by either 2 or 3.
n = parseInt(prompt("Enter number: "));
if(n%2==0){
    console.log("number is Divisible by ",n);
}
else if(n%3==0){
    console.log("number is  Divisible by ",n);
}
else{
    console.log("invalid");
}
// q no 5
// Print -based You Can Drive" or " "cannot" age being greater Poperatage being on ternary operator
age = parseInt(prompt("Enter age: "));
let result=(age>18)?"you can drive":"you cannot";
 console.log(result);