document.querySelector('h1').style.fontSize = '3em';

const addStyle = document.querySelector('h2');
console.log(addStyle);
addStyle.id = 'h2'
document.getElementById('h2').innerText = 'Hello World';
addStyle.style.color = 'green';
addStyle.style.background = 'gray';

const box = document.querySelector('.container');
box.style.width = '150px';
box.style.background = 'tomato';
box.style.padding = '10px';
console.log(box);

//QuerySelectorAll method returns a static NodeList representing a list of the document's elements that match the specified group of selectors.
// NodeList objects are collections of nodes, usually returned by properties such as Node.childNodes and methods such as document.querySelectorAll().
// Although NodeList is not an Array, it is possible to iterate on it using forEach(). It can also be converted to a real Array using Array.from().
// NodeList is almost the same as HTMLCollection.
// The NodeList object represents a collection of nodes. The nodes can be accessed by index numbers. The index starts at 0.
// The nodes in the NodeList collection are read-only, but can be modified by other objects in the DOM.
// Note: NodeList objects are collections of nodes, usually returned by properties such as Node.childNodes and methods such as document.querySelectorAll().
// Although NodeList is not an Array, it is possible to iterate on it using forEach(). It can also be converted to a real Array using Array.from().

const boxElement = document.querySelectorAll('p');
// console.log(boxElement);
boxElement.forEach(element => {
    element.style.color = 'green';
});

// getElementsByClassName method returns a collection of all elements in the document with the specified class name, as a NodeList object.
// The NodeList object represents a collection of nodes. The nodes can be accessed by index numbers. The index starts at 0. 
// The nodes in the NodeList collection are read-only, but can be modified by other objects in the DOM.
// Note: getElementsByClassName() method is only available for HTMLCollection objects.
// Note: getElementsByClassName() method is not available for the NodeList object.
// Note: getElementsByClassName() method is not available for the Element object.
// Note: getElementsByClassName() method is not available for the Document object.
// It cannot use forEach() method to iterate over the HTMLCollection object.
const boxElement2 = document.getElementsByClassName('class-1');
console.log(boxElement2);
boxElement2[1].style.color = 'blue';
// boxElement2.forEach(element => {
//     element.style.color = 'yellow'; // TypeError: element.style is undefined
// })

const convertIntoArray = Array.from(boxElement2);
console.log(convertIntoArray);
convertIntoArray.forEach( i => {
    i.style.backgroundColor = 'yellow';
    i.style.borderRadius = '5px'; 
    i.style.padding = '5px'; 

})
