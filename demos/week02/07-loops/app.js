console.log('Loops..')

for (let counter = 0; counter < 5; counter = counter + 1) {
    console.log(counter)
}

// i++ is the same thing as say i = i + 1
// i += 2 is the same thing as i = i + 2

for (let i = 0; i < 5; i++) {
    console.log(`The value of i is: ${i} `)
}


// WHILE 

let counter = 0;
// while the condition is true; do this 
while (counter < 10) {
    console.log(`Running counter ${counter} value`)
    // i need to increase counter each loop or the condition will never be false.
    counter++
}

// declare a variable without giving it a value
// let usernumber;
// // as long is it's true that usernumber is null, it will keep asking over and over again
// do {
//     usernumber = prompt(`What is your number?`)
// } while (usernumber === null)


// working with arrays and loops

const myCoworkers = ['Connor', 'Tim', 'Manny', 'Joe', 'Jez', 'Frankie']

// the last index of the array is laways the length of the array minus 1. 


console.log(myCoworkers.length)
// we can use i in getting each of our eleemtns out of the array - i already starts at 0; and our index starts at 0.
for (let i = 0; i < myCoworkers.length; i++) {
    console.log(myCoworkers[i])

    // instead of just console.logging each of our coworkers, we'll try to create some HTML for them
    const h2 = document.createElement('h2')
    h2.innerText = myCoworkers[i]
    document.body.append(h2)
}

// a couple of shorthands
// for... of loops automatically go through each element of the array 1 by 1. 
for (const coworker of myCoworkers) {
    console.log(`I work with ${coworker}`)
}

// for each is an 'array method'
// it takes a function as an argument
myCoworkers.forEach(function(item) {
    console.log(`In my foreach loop, I'm logging ${item}`)
})