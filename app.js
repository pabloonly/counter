// let name = document.querySelector('h1')
// console.log(name);
// // name.innerText = 'PRAISE'

// const rest = document.querySelector('.res')
// const heading = document.querySelector('h1')

// function changeText(){
//     let newCounter = document.querySelector('h1')
//     newCounter.innerText = "1";
// }
// rest.addEventListener("click", changeText)

// let btn = document.querySelector('.inc')

// function colored (){
//     let body = document.body
//     body.style.backgroundColor = 'brown'
// }

// btn.addEventListener('click', colored)

let heading = document.querySelector('h1');
let inc = document.querySelector('.inc')
let res = document.querySelector('.res')
let dec = document.querySelector('.dec')

function DECREASE (){
    heading.innerText--
    let body = document.body
    body.style.backgroundColor = 'yellow'
}

dec.addEventListener('click' , DECREASE)

function INCREASE (){
    heading.innerText++
    let body = document.body
    body.style.backgroundColor = 'green'
}

inc.addEventListener('click' , INCREASE)

function RESET (){
    heading.innerText = 0
    let body = document.body
    body.style.backgroundColor = 'red'
}

res.addEventListener('click' , RESET)

