console.log('Testing....')


// 1. Get my button from the DOM into my javascript 

const myButton = document.querySelector('button')
console.log(myButton)

myButton.textContent = 'Click me please'

// 2. Add an event listener to the button to 'listen' for when an event happens

// addEventListner takes two 'arguents'
// what event to listen for (in a string) 'click' 
// the second is a function to run when that event happens.

myButton.addEventListener('click', function() {
    console.log('button clicked')
})


// Lets add an even to our H1!

// 1. Get element into js 
const myHeader = document.querySelector('h1')

myHeader.addEventListener('mouseover', function(event) {
    console.log(event)
})