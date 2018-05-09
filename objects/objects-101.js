let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}`); // Dot Notation with template string!


// Reasign the value to title
myBook.title = 'Animal Farm'; 

console.log(`${myBook.title} by ${myBook.author}`); // Dot Notation with template string!


// Challenge Area

// name, age, location
// name is age and lives in location
// Increase age by 1 and reprint

let somePerson = {
    name: 'Vincent',
    age: 6,
    location: 'Utah'
}

console.log(`${somePerson.name} is ${somePerson.age} years old and lives in ${somePerson.location}`);

somePerson.age = somePerson.age = 7; // add one year
console.log(`${somePerson.name} is ${somePerson.age} years old and lives in ${somePerson.location}`);
