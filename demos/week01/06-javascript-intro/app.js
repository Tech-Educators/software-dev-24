console.log('Hello world')
console.log(true)
console.log(5)

// JS has different kinds of data 

// STRINGS
// "This is also a string"
// `This is also a string, in back-ticks`


// NUMBERS
// 32
// 42.0
// -134

// BOOLEANS
// true 
// false


// Variable
// a veriable is a way to store information under a name so you can refer to it later on.

const usersName = 'Connor'
// usersName = 'Sam'


console.log(usersName)
console.log(usersName)
console.log(usersName)
console.log(usersName)
console.log(usersName)


// Variables can also be declared (made) with the keyword 'let'. 

let myCurrentYear = 2025
console.log(myCurrentYear)
myCurrentYear = 2026
console.log(myCurrentYear)


// Making some numbers, strings, and booleans and storing them in variables

// Booleans
const myHairIsBrown = true;
const iLovePython = false;


// Strings
const string1 = 'Sam'
const string2 = '3423423 $£$@1!!!!'
const string3 = `We'll use backticks so I can use an ' in my answer`

const myGreen = `Hell, I'm fine`

// THIS IS STILL A STRING
const myFavNumber = '42'


// NUMBERS

const number1 = 1
const number2 = 4.12
const number3 = -12323

// variables must start with a alphabetical character 
// const 4234 = 'Sam'
// long variable names are fine, no spaces, no dashes, must start with lowercase letter

const isUserLoggedIn = true

// OPERATORS 

let a = 1
let b = 2
let c = 3

// add two numbers
const addNumbers = a + b
console.log(addNumbers)

// concatenate a string
const addString = 'a' + 'b'// ab
console.log(addString)

// subtract
const cMinusB = c - b // 1

// multiply
const bSquared = b * b // 4

// divide
const bDividedBy3 = b / 3
console.log(bDividedBy3)


// We can also compare values to eacother 

// is the value in a bigger than the value in c ?
const isABiggerThanC = a > c // false
console.log(isABiggerThanC)

// a ='s is an assingment - make something equal to something else 

// const isAOne = a = 2
// a ==='s check if something is equal to something else
const isAOneAgain = a === 2
console.log(isAOneAgain)


const is5equalto5 = 5 === '5'
console.log(is5equalto5)

// ='s - assingment
// == - checks value
// === - checks value and data type are the same
/// != - Check if something is not equal to somethign else


// working with strings
const myPet = 'Darcy'

const myInformation = 'My name is Sam, and I have a pet named ' + myPet + '!'

console.log(myInformation)

// template literals 
const myInfoInTemplate = `My name is Sam, and I have a pet named ${myPet} !`

console.log(myInfoInTemplate)

const foo = 4
const bar = 5

console.log(foo, bar)