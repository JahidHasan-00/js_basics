// Add Text inside a heading tag
const changeHeading = document.querySelector('.heading-2');
// console.log(changeHeading); 
changeHeading.innerText = changeHeading.innerText + ' Programmer';

//Select all and change the style
let allElements = document.querySelectorAll('.box');
// allElements[1].innerText = 'box 2'
let newNum = 1;
for(element of allElements){
    element.innerText = `box ${newNum}`;
    // console.log(element);
    newNum++;
}

//Create an Element: Button Element
const addBtn = document.createElement('button');
addBtn.innerText = 'Click Me';

const secHero = document.querySelector('.sec-hero');
// secHero.prepend(addBtn);
// secHero.before(addBtn);
// secHero.after(addBtn);
secHero.append(addBtn);

//Add an Element: list(<li> </li>) Element
function addFruits(fruitName){
    const li = document.createElement('li');
    li.innerText = `${fruitName}`;

    document.querySelector('ul').append(li);
}
addFruits('Apple');



