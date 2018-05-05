// Undefined for variable unassigned

let name;
name = 'Jen';


if (name === undefined) {
   console.log('Please provide a name!');
} else {
    console.log(name);
}


// Undefined for function arguments 
// Undefined as function return default value
let square = function (num) {
    console.log(num);
}

square(); // This will be undefined also undefined for below
let result = square(); 
console.log(result);



// Null as assigned value 
let age = 27;

age = null; // Instead of assigning  undefined!!!

console.log(age);





