/** JavaScript Variable Scope : 
 * In JavaScript, the scope of a variable determines where it can be accessed within the code.
 * 
 * Variables can be declared in different scopes:
    1. Global Scope
    2. Local (Function) Scope
    3. Block-Level Scope
    4. Module Scope

 */

// JavaScript Local Variables --> When variables are declared inside a function, they have a local scope and are accessible only within that function

function greet(){
    var message = 'Hello';
    let name = 'John';
    const country = 'USA';
}

greet();

// Try to access variables outside the function you will see ReferenceError like message is not defined
// console.log(message);
// console.log(name);
// console.log(country);


// JavaScript Global Variables --> In JavaScript, a variable declared outside any function or in the global scope is known as a global variable
// A global variable can be accessed both inside and outside of functions

var name = 'John';
let age = 35;
const country = 'USA';

function greet1(){
    console.log(name, age, country);
}

greet1();
console.log(name, age,  country);

// JavaScript Block-Level Variables --> Block-level variables(let, const) are accessible only within the block {} they are defined in, which can be smaller than a function's scope but "Note -> that var is not a block scope variable so, var can be access outside of block" :

function greeting(){

    if(true){
        let name1 = 'Abdullah';
        const age1 = 28;
        var country1 = 'Bangladeshi';
        console.log(name1, age1, country1);
    }
    console.log(country1);

    // ReferenceError: name1, age1 is not defined
    // console.log(name1, age1);
}

greeting();


/**What Does Lexical Mean: Lexical refers to the definition of things. Anything related to creating words, expressions, or variables is termed lexical
 * 
 * Lexical Scope: Lexical scope is the definition area of an expression.
 * 
 * Note:
 * 
 * Another name for lexical scope is static scope.
 * The place an item got invoked (or called) is not necessarily the item's lexical scope. Instead, an item's definition space is its lexical scope
 */

// Defined a variable in global scope:
const myName = 'Jahid';

// Call myName variable from a function
function getName(){
    return myName;
}
const output = getName();
console.log(output);


/**Scope Chain:
 * JavaScript engine uses scopes to find out the exact location or accessibility of variables and that particular process is known as Scope Chain
 * 
 * Scope Chain means that one variable has a scope (it may be global or local/function or block scope) is used by another variable or function having another scope (may be global or local/function or block scope)
 * 
 * This complete chain formation goes on and stops when the user wishes to stop it according to the requirement
 */

function sayName(){
    console.log(color);
}
function getName(){
    const color = 'Red';
    sayName();
}

var color = 'Blue';
getName();

//Another Example:

var count = 20;

function outer(){
    var count = 30;

    function inner(){
        var count = 40;
        console.log(count);
    }

    inner();

    console.log(count);
}

outer();
console.log(count);




