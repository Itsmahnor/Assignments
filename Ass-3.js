/* Qno:02
Write a program to print marks of student in an object using for in loop
 */

// let obj = {
// harry:98,
// rohan:70,
// aakash:7,
// };
// for(let i=0;i<Object.keys(obj).length;i++){
//     console.log("The Marks of "+Object.keys(obj)[i]+ "are "+ obj[Object.keys(obj)[i]]);
// }


// for(let i in obj){
//     console.log("Marks of "+i+" : "+obj[i]);
// }

//qno3: write code to print try again until user enters correct number
let number=25; let a;
const prompt = require("prompt-sync")();
while(true){
 a = parseInt(prompt("Enter number: "));

 if(a==number){
    console.log("found");
    break;
 }
 else{
    console.log("Try Again");
 }
}

// qno 4 :  mean of 5 numbers
// function findMean(a, b, c, d, e) {
//     return (a + b + c + d + e) / 5;.j
// }

// console.log(findMean(2, 4, 5, 6, 2)); 
