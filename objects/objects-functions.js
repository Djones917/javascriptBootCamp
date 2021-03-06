// Pass an object into a function
let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A peoples history',
    author: 'Howard Zinn',
    pageCount: 723
}

// notice I am not directly referencing both books above just book so this is a reusable function! Just address the argument book and you can access any book!
//let getSummary = function (book) {    
    //console.log(`${book.title} by ${book.author}`);
//}

//getSummary(myBook);
//getSummary(otherBook);







// return an object from a function (return multiple values)

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
    }
}

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.pageCountSummary);




// Chalenge Area
// create function - take in fahrenheit - return object with all three

let convertFahrenheit = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit + 459.67) * (5 / 9),
        celsius: (fahrenheit - 32) * (5 / 9)
    }
}


let temps = convertFahrenheit(74);
console.log(temps);








// my self challenge for passing an object into a function
let = someCat = {
    name: 'Sammy',
    sex: 'Male',
    age: 7
}

let anotherCat = {
    name: 'Silver',
    sex: 'Male',
    age: 7
}


let aCat = function (cat) {
   console.log(`${cat.name} is ${cat.age} year old!`)
}

let puddy = aCat(anotherCat)





// return an object from a function
let aCatInfo = function (cat) {
    return {
        puddySummary: `${cat.name} is a good boy. He is ${cat.age} years old!`
    }    
}

let anotherPuddy = aCatInfo(someCat)
console.log(anotherPuddy.puddySummary)

