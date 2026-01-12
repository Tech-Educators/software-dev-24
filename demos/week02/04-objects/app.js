// Objects are a complex data type in JavaScript, which means they store multiple pieces of data
// We use objects to store multiple pieces of data on the same thing (a post, a user, etc.)

// Objects are declared in {curly brackets} and are made up of key value pairs (e.g. key: value,)
const myHouse = {
  size: "medium",
  colour: "brown",
  occupants: 3,
  myTable: {
    colour: "brown",
    material: "wood",
    legs: 4,
    myPlate: {
      colour: "green",
    },
  },
};

// We can use console.log() to log the whole object to the console
console.log(myHouse);

// Or console.table() to have it displayed in a table
console.table(myHouse);

// We can use 'dot notation' to access individual properties of an object
console.log(myHouse.occupants);
console.log(
  `This house is ${myHouse.colour}, and it has ${myHouse.occupants} living in it!`
);

// Creating an element using object properties
// Notice that we're using dot notation here, that's because the document itself is an object (hence the DOM) and contains methods and properties
// Methods are functions stored within an object, more on that later
const houseP = document.createElement("p");
houseP.textContent = myHouse.colour;
document.body.appendChild(houseP);

console.log(myHouse.myTable);

// We can set properties or add new properties using dot notation and the `=` operator
myHouse.myTable.myPlate.shape = "circle";
console.log(myHouse.myTable.myPlate);

// For DOM elements we can use console.dir() to log the properties of the element instead of the HTML that makes it up
console.dir(document);
