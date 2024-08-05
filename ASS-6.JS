// q 1
// write a program using prompt function to take input of age as a value from user and use alert to tell him if he can drive

let age;

age = parseInt(prompt("Enter your age: "));

if(age>=18){
    alert("You can drive");
}
else{
    alert("You Can't")
}

// use confirm to ask user if he wants to set prompt again
let value=true;
while(value){
    age = parseInt(prompt("Enter your age: "));

if(age>=18){
    alert("You can drive");
}
else{
    alert("You Can't")
}

value=confirm("Do u want to enter age again?");
}

// use console error to log if age is negative

while(value){
    age = parseInt(prompt("Enter your age: "));
if(age<0){
    console.error("Age is Negative");
}
else if(age>=18){
    alert("You can drive");
}
else{
    alert("You Can't")
}

value=confirm("Do u want to enter age again?");
}