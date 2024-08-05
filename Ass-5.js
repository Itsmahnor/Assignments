// create an array of numbers and take input from user to add numbers to this array

let arr=[];
const prompt = require("prompt-sync")();
let number = parseInt(prompt("Enter size of array: "));
let i=0;
while(i<number){
    let a = parseInt(prompt("Enter number: "));
    arr.push(a);
    i++;
}
console.log(arr);

// // keep adding numbers until zero is added
while(true){
    let a = parseInt(prompt("Enter number: "));
    if(a!=0){
        arr.push(a);
    }
    else{
        break;  
    }
  
}
console.log(arr);

// // filter numbers divisible by 10
let arr2=arr.filter((a)=>{
return a%10==0;
});
console.log(arr2);

// // square of numbers

let b=arr2.map((val)=>{
    return val*val;
})
console.log(b);

// use reduce to calculate factorial of a givem number from an array of first n natural numbers 
let array=[1,2,3,4,5];
let ans=array.reduce((a,b)=>{   
return a*b;
});
console.log(ans);