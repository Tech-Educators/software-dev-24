console.log("Testing...")

// Scope is how we describe what variables our program has access to while its running


// Global variable - is any variable declared outside of code blocks {}

const myGlobalVariable = `This variable can be used by all funcitons`

// Local variable - any variable declared inside a code block (any variable/value declared inside a function)

function sayHello() {
    // username is a local function
    const username = 'Sam'
    console.log(username, myGlobalVariable)
}

sayHello()

// console.log(username) // this causes a ReferenceError: usernmae is not defined.

let myName = 'Sam'

function hasManyVariables() {
    const myDog = 'Darcy'
    const myCity = 'Liverpool'
    const myHair = 'Brown'
    myName = 'Foo'

    // Template literal
    console.log(`My name is ${myName}. My dogs name is ${myDog}, we live in ${myCity} and I have ${myHair} hair.`)
}


console.log(myName)
hasManyVariables()


if (true) {
    const fire = 'Fire'
}

console.log(fire)

