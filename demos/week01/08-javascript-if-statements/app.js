console.log('We are checking....')

const myName = 'Sam'

// if statements a certain syntax

// if (aCondition) {
//     // code to run if the condition is true
// }


if (5 === 5) {
    console.log(`yes, that's true`)
}

// we're using prompt to get user input and store in a variable
let averageRating = prompt(`Rate the movie you watched (between 1 and 5.)`)
console.log(averageRating)

if (averageRating < 1) {
    alert(`You'll need to wash your eyes out from that one`)
} else if (averageRating >= 1 && averageRating < 2) {
    alert(`it had some redeeming qualities`)
} else if (averageRating >= 2 && averageRating < 3) {
    alert(`must have been mid`)
} else if (averageRating >= 3 && averageRating < 4) {
    alert(`Id recommend to anyone but something was missing`)
} else {
    alert(`You must have watched the bee movie`)
}


// AND operator (logic operators)
// its check if the left and right side of itself both evaluate to true and returns true if both do.

// you can simplify like an equation
5 === 5 && 3 === '3'
true && false
false 

true && true // true
true && false // false



if (true) {
    // do something 
} else {
    // this is a fallback - if non of the if statments are true, this will run
}

if (true) {
    // do something 
} else if (true) {
    // do something 
}

// else - a fallback
// else if - test another condition.