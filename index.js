

/*In JavaScript, objects are king. If you understand objects, you understand JavaScript.

In JavaScript, almost "everything" is an object.

    Booleans can be objects (if defined with the new keyword)
    Numbers can be objects (if defined with the new keyword)
    Strings can be objects (if defined with the new keyword)
    Dates are always objects
    Maths are always objects
    Regular expressions are always objects
    Arrays are always objects
    Functions are always objects
    Objects are always objects

All JavaScript values, except primitives, are objects.
*/

/* JavaScript Primitives

A primitive value is a value that has no properties or methods.

3.14 is a primitive value

A primitive data type is data that has a primitive value.

JavaScript defines 7 types of primitive data types:
Examples

    string
    number
    boolean
    null
    undefined
    symbol
    bigint
 */

    /* 
Immutable

Primitive values are immutable (they are hardcoded and cannot be changed).

if x = 3.14, you can change the value of x, but you cannot change the value of 3.14.
 */

// Objects are Variables:
// JavaScript variables can contain single values:
let person = 'John Doe'


//creating an object:
//It is a common practice to declare objects with the const keyword.

const joe = {
  fullName: "Joseph Emad al-Din",
  age: 23.9,
  job: "front end web developer & barista",
  location: "Egypt",
}

console.log(joe);
//reassignment the object:
//Adding New Properties:

joe.weight = 59
console.log(joe["fullName"])
console.log(joe.job)

console.log(joe)

// objects built-in methods/functions:

console.log(joe.hasOwnProperty("gaol"))
console.log(Object.keys(joe))
console.log(Object.values(joe))
console.log(Object.entries(joe))

//Accessing Object Properties:

console.log(joe.location)
//or
console.log(joe["job"])

// Deleting Properties:

delete joe.weight
//or
delete joe["weight"]
console.log(joe);

// Nested Objects

const myObj = {
  cars: {
    car1: "ford",
    car2: "bmw",
  },
};
console.log(myObj.cars);
