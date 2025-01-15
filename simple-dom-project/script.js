
const body = document.getElementById('body');
const button = document.querySelectorAll('li');
// console.log(button);
// console.log(body);

// const redColor = document.querySelector('.red');
// // console.log(redColor);
// redColor.addEventListener('click', function() {
//     body.style.backgroundColor = '#ff7675';
//     // redColor.style.backgroundColor = '#ddd';
// })

// const greenColor = document.querySelector('.green');
// greenColor.addEventListener('click', function() {
//     // redColor.style.backgroundColor = '#ff7675';
//     body.style.backgroundColor = '#00cec9';
//     // greenColor.style.backgroundColor = '#ddd';
// })

// const blueColor = document.querySelector('.blue');
// blueColor.addEventListener('click', function() {
//     body.style.backgroundColor = '#0984e3';
//     // blueColor.style.backgroundColor = '#ddd';
// })

// const pinkColor = document.querySelector('.pink');
// pinkColor.addEventListener('click', () =>{
//     body.style.backgroundColor = '#fd79a8';
// })

//Another way:
/**
button.forEach(li =>{
    // console.log(li);
    li.addEventListener('click', function(){
        let className = this.classList.value;
        body.style.backgroundColor = className;
    })
})
**/

//Optimal Way:
button.forEach(li =>{
    // console.log(li);
    li.addEventListener('click', function(){
        let className = this.classList[0];
        console.log(className);
        // if(className === 'red'){
        //     body.style.backgroundColor= '#ff7675';
        // }
        let color = '';
        switch(className){
            case 'red': color = '#ff7675';
            break;
            case 'green': color = '#00cec9';
            break;
            case 'blue': color = '#0984e3';
            break;
            case 'pink': color = '#fd79a8';
            break;

            default: body.innerHTML = 'Class Name is not Found';
        }
        
        body.style.backgroundColor = color;
        console.log(color);
    })
})

// Dark Mode:
function changeMode(){
    const getElement = document.body;
    getElement.classList.toggle('dark');
    // console.log(getElement);
    // document.querySelector('.mode-main').getAttribute('class');
    document.querySelector('.mode-main').setAttribute('class', 'icon-style mode-main');
    // console.log(setAttr);
}
