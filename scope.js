/** JavaScript Variable Scope : 
 * In JavaScript, the scope of a variable determines where it can be accessed within the code.
 * 
 * Variables can be declared in different scopes:
    1. Global Scope
    2. Local (Function) Scope
    3. Block-Level Scope

 */

// JavaScript Local Variables --> When variables are declared inside a function, they have a local scope and are accessible only within that function

function greet(){
    var message = 'Hello';
    let name = 'John';
    const country = 'USA';
}

greet();

// Try to access variables outside the function you will see ReferenceError like message is not defined
console.log(message);
console.log(name);
console.log(country);


// JavaScript Global Variables --> In JavaScript, a variable declared outside any function or in the global scope is known as a global variable
// A global variable can be accessed both inside and outside of functions

var name = 'John';
let age = 35;
const country = 'USA';

function greet(){
    console.log(name, age, country);
}

greet();
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




