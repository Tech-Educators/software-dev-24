console.log('Test, test')


function runsOtherFunctions(a) {
    console.log(a)
    // the parameter a IS whatever its argument was, so if its argument is a function, we can invoke that function
    a()
}

runsOtherFunctions(greet)


// // Here we are passing in the 'greet' function. We refer to greet as a 'callback function' because it a function being passed to another function (runsOtherFunctions) as a argument
// runsOtherFunctions(greet)

function greet() {
    console.log(`Hello`)
}

function byeBye() {
    console.log(`Cya!`)
}


// Another example


function notifyUser() {
    console.log(`notifyUser function called`)
}


function myAwesomeFunction(anythingatall) {
    console.log(`Running my awesome function`)
    anythingatall()
}

myAwesomeFunction(notifyUser)



