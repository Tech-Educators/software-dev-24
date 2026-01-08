console.log(`Running...`)


// lets modify our p tag using javascript

// 1. I need to select the element I want to modify
const myPTag = document.querySelector('p')

// 2. change the text

myPTag.innerText = 'I changed this with javascript'

// I can change style
myPTag.style.backgroundColor = 'red'
myPTag.style.fontFamily = 'monospace'
myPTag.style.color = 'white'

myPTag.classList.add('cool-class')
myPTag.setAttribute('id', 'my-id')


// Lets create an element

// 1. We'll create an marquee element using document.createElement

const myMarquee = document.createElement('marquee')

myMarquee.innerText = 'Wheeeeeee'

console.log(myMarquee)


// 2. Add the element we made to the DOM. 
document.body.appendChild(myMarquee)

// myMarquee.remove()