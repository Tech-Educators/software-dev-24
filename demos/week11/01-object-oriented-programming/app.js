// Objects are good but it's a pain if we have to write out the properties over and over again
const myObject = {
  name: "Connor",
  isCool: true,
};
const anotherObject = {
  name: "Sam",
  isCool: false,
};

class Person {
  // The class is a template that our constructed objects will follow
  // The constructor function runs when we use the keyword 'new'
  // The constructor function creates a new instance of the the class (a new object) based on the arguments we give it
  constructor(name, isCool) {
    // 'this' refers to the object that we're
    this.name = name;
    this.isCool = isCool;
  }
}

// Some examples of constructors we've seen on the course
new FormData();
new Error();
// new pg.Pool();

// Just call the constructor function using 'new' and give it arguments to be used as the properties
const me = new Person("Connor", true);
console.log(me);

const sam = new Person("Sam", false);
console.log(sam);

class Biscuit {
  constructor(name, tastiness, flavour) {
    this.name = name;
    this.tastiness = tastiness;
    this.flavour = flavour;
  }
  // Outside of the constructor function we can give our classes methods that we can access from each instance of the class
  advertise() {
    console.log(
      `This ${this.name} is a great biscuit! It has a tastiness rating of ${this.tastiness}, and the flavour tastes like ${this.flavour}! Wonderful!`,
    );
  }
}

const custardCream = new Biscuit("Custard cream", 8, "custard");
custardCream.advertise();
const richTea = new Biscuit("Rich Tea", 6, "a biscuit");
richTea.advertise();

// We can extend a class to create a descendant class
// It uses the properties of the ancestor class but adds some more
class Cookie extends Biscuit {
  constructor(name, tastiness, flavour, size) {
    // 'super' tells this class to call the constructor of the ancestor class using these arguments
    // We only need to tell this class how to handle new arguments/properties
    super(name, tastiness, flavour);
    this.size = size;
  }
  // We can add new methods too but we still have access to the methods from the ancestor class
  slogan() {
    console.log(`The ${this.name} is the best cookie in town!`);
  }
}

const chocoChip = new Cookie("Chocolate chip", 10, "chocolatey", "large");
console.log(chocoChip);
chocoChip.slogan();
chocoChip.advertise();

// If we miss out some arguments then we get a lot of 'undefined'
const plainCookie = new Cookie("Plain");
console.log(plainCookie);
plainCookie.advertise();
