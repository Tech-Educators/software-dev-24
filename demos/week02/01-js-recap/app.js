console.log('Hello, world!')


// My three (simple) data types
const myString = `Hello`
const myNumber = 43
const myBoolean = true

const userName = `Connor`
// userName = `Sam`


// trying to fetch an element
// if the element you're trying to select doesn't exist (either type or you forgot defer) it will return 'null' and attempts to edit 'null' will fail
const myHeader = document.querySelector('h2')
// myHeader.innerText = 'This is my new header'


// (Smooth?) Operators
5 + 5 
5 * 5
5 - 5
5 / 5


// comparison operators
/*
=== - strict equality
== - equality
!= - not equal
!== - strictly not equal
> - greater than
< - less than
>= - greater than or equal to
<= - less than or equal to
*/

// Logical Operators

/*
&& - Both left and right need to be true
|| - OR - left or right need to be true
! - turn the value into the opposite
*/



// If statements

let weather = 'Fosdfasdf'


if (weather == 'Sunny') {
    console.log('Bring sunscreen')
} else if (weather == 'Rainy') {
    console.log('bring an umbrella')
}



// HTML DOM


// Select the element you want to change

const myPTag = document.querySelector('p')

myPTag.innerText = 'I changed this with JavaScirpt! you cant stop me!!!!!'

// change styles

myPTag.style.backgroundColor = 'blue'
myPTag.style.color = 'white'

// add attributes

myPTag.setAttribute('class', 'my-class')
myPTag.setAttribute('id', 'my-id')


