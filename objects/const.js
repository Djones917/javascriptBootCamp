// let variables
let isRaining = true;
isRaining = false;
console.log(isRaining); // returns false

// const variables - when you know you will not be reassigning a variable it best to use 'const' over 'let'.
// Using 'let' and 'const' comes down to semantics letting a developer no something will change or will not in your code.
const isSnowing = false;
isSnowing = true; 
console.log(isSnowing); // You can't change const so this will throw an error!


// an example of const with an object
const person = {
	age:27;
}

// person = {} this is invalid you can't reassign the object.
// But you still can change a property value in const object.
person.age = 28;
console.log(person);