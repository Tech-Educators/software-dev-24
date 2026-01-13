console.log('Working...')


// What is an object? 

// An object is a javascript Data type. It is a collection of proptert: value pairs

const dog = {
    color: 'Brown',
    age: 8
}

console.log(dog.color)


// A method is a function that is part of an object
// log()
// .querySelector()
// .createElement()
// .setAttribute()


// template literal

const bird = {
    colors: 'Brown',
    wingpsan: 43,
    fly: function(location) {
        console.log(`The bird flies to ${location}!!!!!`)
    },
    squawk: function() {
        console.log(`The bird squawks with rage`)
    },
    getWingSpan: function() {
        console.log(this)
        return this.wingpsan
    }
}

bird.fly(`London`)
bird.fly('Chengdu')
bird.fly(`Bolton`)

const eagle = bird.getWingSpan()
console.log(eagle)