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

subtract();
const subtract = function(){
    console.log(20 - 10); // ReferenceError: Cannot access 'subtract' before initialization
}

// Hoisting with let and const --> Although variables declared with let and const are also hoisted. but not accessible. because variables declared with let and const do not have a default value when hoisted :

console.log(number);
let number = 100;

console.log(a);// output: 50
if(true){
    var a = 50;
}

test();
// output: ReferenceError: Cannot access 'b' before initialization
function test(){
    var b = 40;
    console.log(b);
}







