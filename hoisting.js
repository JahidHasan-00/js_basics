/**
 * Hoisting is JavaScript's default behavior of moving declarations to the top
 * 
 * Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function)
 * 
 * In JavaScript, a variable can be used before it has been declared
 * 
 * Variables defined with let and const --> The block of code is aware of the variable, but it cannot be used until it has been declared
 * 
 * Using a let and const variable before it is declared will result in a ReferenceError.
 * 
 * JavaScript Initializations are Not Hoisted. JavaScript only hoists declarations, not initializations.
 */

console.log(myName);
var myName;
myName = 'Jahid';
console.log('My Name is ', myName);


// function hoisting:
sum();

function sum(){
    let a = 5, b = 10;
    console.log(a + b);
}


console.log(sub);
function subtraction(){
    var sub = 20 - 10;
}
subtraction();

// Hoisting with let and const :

console.log(number);
let number = 100;

console.log(a);
if(true){
    const a = 50;
}


