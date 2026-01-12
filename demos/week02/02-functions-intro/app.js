console.log('Hello... is it me?')


// if () {}

// function declaration
function theFunctionName() {
    console.log('Running function...')
}

// function invocation (run the function)

theFunctionName()

// Ask the user to pick a number, and then we'll alert them to their number

// const userNumber = prompt(`Pick a number`)
// console.log(userNumber)

const yourFriendsNumber = '24'

// function declaration
// I want this function to work for both the friends number and the users number
// *number* here is a parameter -> a placeholder value 
function alertTheUser(number) {
    alert(`Your number was ${number}...`)
}

// when we invoke the function, we are passing in an argument
// userNumber & yourFriendsNumber are *arguments*. Their values are passed into the function
// alertTheUser(userNumber)
// alertTheUser(yourFriendsNumber)
// alertTheUser(10)


// y is a parameter
function add5AndY(y) {
    console.log(5 + y)
}

// we are passing in the 'argument' 20.
add5AndY(20)
add5AndY(1231)


// better function because it can any two numbers

function sum(a, b) {
    console.log(a + b)
}

// when we invoke our function, we can tell it what a and b should be
sum(5, 10)
sum(34234234, -123123123)





//// ---------- RETURNING



// a function called multiply
// a function declaration

// return has to be inside a function declaration, and it must be the last thing inside that function declartion. 
function figuresOutCCScore(a, b) {
    const myFigure = 1300

    return a * b * myFigure
}




// I'll invoke the multiply function and give it arguments
const userCCStore = figuresOutCCScore(10 , 5)

console.log(userCCStore)


// variables and values that we make inside a function are only availbe inside that function. 
// console.log(myFigure)


function One() {
    return 1
}

function Two() {
    return 2
}


console.log(One() + Two())








// turnign a string into a number

// const userNumber = prompt('Enter a humber')

// console.log(Number(userNumber) + 3)