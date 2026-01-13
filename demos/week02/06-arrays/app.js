console.log(`We are checking..`)


const myArray = ['Sam', 'Connor', 'Manny', 'Joe']
const myCompany = ['Tech Educators', 2021, true, {staff: 'foo'}]


// I can access elemetns in an array through bracket notation

myArray[1] // Connor
myArray[0] // Sam

// A new array

const colors = ['red', 'orange', 'blue', 'purple']

colors[4] = 'pink'

// Array methods

// add an element onto the end of the array
colors.push('green')


// removes the last element of the array
// and returns it 
const lastElement = colors.pop() 
// lastElement // green

// add something to the beginning of the array
colors.unshift('indigo')

// replace an item in the array with a new one
colors[2] = 'burnt umber'

// remove the first element
colors.shift()

// takes 3 arguments - where to start, many many elements to remove, and what to add
// returns the deleted elements in an array
const myDeletedElements = colors.splice(1, 3, 'Teal')
console.log(colors)
console.log(myDeletedElements)



// ARRAYS - WE GIVE IT THE NUMBER OF THAT ELEMENT IN THE LIST
const myInfo = ['Sam', 'Dog', ['Tech educatosrs', 'Instructor']]
// Square brackets for arrays
console.log(myInfo[2][0])


// Objects
// THE DOT IS ONLY FOR OBJECTS

const info = {
    myDog: 'darcy',
    myJob: 'instructor'
}

info.myDog


// Working with objects in arrays

const myFriends = [
    {
        name: 'Sam',
        age: 26
    },
    {
        name: 'Ry',
        age: 26
    },
    {
        name: 'Amber',
        age: 27
    }
]

// Arrays are 'ordered'
// Objects must be given the property name
console.log(myFriends[2].name)


// Functions in javascript are first-class
// you can use them like any other value

const myArray3 = [function(name) {console.log(`Hello, ${name}`)}]

myArray3[0]('Sam')