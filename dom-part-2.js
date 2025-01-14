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
    li.innerHTML = `${fruitName}`;

    document.querySelector('ul').append(li);
}
addFruits('Apple');

//Add Element: Optimize way
function moreFruits(nameFruit){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(nameFruit));

    document.querySelector('ul').append(li);
}
moreFruits('Grape');
moreFruits('Orange');

//Edit Element:
const edit = document.querySelector('li:nth-child(4)');
edit.innerText = 'Jackfruit';

//Another way to edit using replaceWith() method:
const edit2 = document.querySelector('li:last-child');
edit2.textContent = 'Strawberry';

const newFruit = document.createElement('li');
// console.log(newFruit);
newFruit.textContent = 'Cherry';
edit2.replaceWith(newFruit);


//Delete Element using remove() method:
const deleteItem = document.querySelector('li:last-child');
// console.log(deleteItem)
deleteItem.remove();
