 // Write a JavaScript for loop that iterates from 0 to 15. For each iteration, it checks if the current number is odd or even, and displays a message on the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even

for(let i=0;i<=15;i++){
    if(i % 2 ==0){
        console.log(i+" is even");
    }
    else{
        console.log(i+" is odd");
    }
}

//  Write a JavaScript program that computes the average marks of the following students. Then, this average is used to determine the corresponding grade.
// Student Name	Marks
// Dawood	80
// Mohsin	77
// Awais	88
// Ahsan	95
// Fatima	68
// Range	Grade
// <60	F
// <70	D
// <80	C
// <90	B
// <100 A
// Student data
let Student={
    Dawood:80,
    Mohsin:77,
    Awais:88,
Ahsan:95,
Fatima:68,
};
function Grade(averageMarks) {
    if (averageMarks < 60) {
        return 'F';
    } else if (averageMarks < 70) {
        return 'D';
    } else if (averageMarks < 80) {
        return 'C';
    } else if (averageMarks < 90) {
        return 'B';
    } else {
        return 'A';
    }
}
let Avg=0;let s=0;
for(let i=0;i<Object.keys(Student).length;i++){
    s+=Student[Object.keys(Student)[i]];
        
    }
    Avg=s/Object.keys(Student).length;
    let G=Grade(Avg);

    console.log("Average Marks: ",Avg);
    console.log("Grade is: ",G);




// Write a JavaScript program that iterates integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for multiples of five print "Buzz". For numbers multiples of both three and five print "FizzBuzz".

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


// Write a JavaScript program to construct the following pattern, using a nested for loop.  
// *
// * *  
// * * *  
// * * * *  
// * * * * *

let str='';
for(let i=0;i<5;i++){
    for(let j=0;j<=i;j++){
        str+="* ";
    }
console.log(str);
str='';
}

//  by using while  & do-while loop
// program to find the sum of positive numbers
// if the user enters a negative numbers, the loop ends
// the negative number entered is not added to sum
let number;
const prompt = require("prompt-sync")();
let sum=0;
while(true){
    number = parseInt(prompt("Enter Number: "));
if(number >= 0){
    sum+=number;
}
else{
    break;
}
}
console.log("Sum of Positive Numbers: ",sum);
sum=0;
// do while
do {
    number = parseInt(prompt("Enter Number: "));
    if (number >= 0) {
        sum += number;
    }
} while (number >= 0);

console.log("Sum of Positive Numbers: ", sum);
