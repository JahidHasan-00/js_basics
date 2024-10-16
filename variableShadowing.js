// Variable in Global Scope this is the outer scope variable:
let fruit = 'Apple';

function chooseFruit(){
    //This is the inner scope variable shadowed the outer scope variable
    //The variable will be gone from the memory when the function ends and it doesn’t go outside of it. This happens due to the scope hierarchy in JavaScript
    let fruit = 'Orange';
    console.log(fruit);
}

chooseFruit();
// The variables inside the function are prioritized and then when the function ends, they are gone from the memory
console.log(fruit);


// The same applies to block scope because the let keyword is also block-scoped.
for(let fruit = 0; fruit <= 2; fruit++){
    console.log(`Number ${fruit}`);
}

console.log(fruit);


// Let's use the same example but use var inside a function scope. The var keyword is also function-scoped so it will behave the same way 
var fruit1 = 'Banana';

function chooseYourFruit(){
    var fruit1 = 'Mango';
    console.log(fruit1);
}
chooseYourFruit();
console.log(fruit1);

// Next, use the var but in a block. As a reminder, var is not block-scoped so it isn’t trapped there.
for(var fruit1 = 0; fruit1 <= 2; fruit1++){
    console.log(`Number is ${fruit1}`);
}
console.log(fruit1);

/**Illegal Shadowing:
 * If you create a variable in an outer scope with the let keyword and another variable with the var keyword in a block scope but with the same name, it will throw an error. This is called illegal shadowing
 */

function food(){
    // Variable Outer Scope
    let vegetable = 'Tomato';
    var fruit = 'Cherry';
    let hungry = true;

    if(true){
        // Variable Inner Scope
        var vegetable = 'Cucumber'; //Cannot redeclare block-scoped variable 'vegetable'
        let fruit = 'Coconut';
        console.log(vegetable);
        console.log(fruit);
    }
}

food();