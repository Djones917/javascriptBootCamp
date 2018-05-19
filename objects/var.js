// var
var firstName = 'Derek';
firstName = 'Mike';

var firstName = 'Kim'; // 1st reason to avoid var will let you reassign this were 'let' and 'const' will not!

console.log(firstName);



// 2nd reason to avoid var. var is function based scope they are not blocked scope!
// let and const are block scope!
if (10 === 10) {
	var lastName = 'Jones';
}

console.log(lastName); // Jones will print!




// 3rd reason odd behaviour with hoisting with var
let age;
console.log(age); // This will print undefined

// Another example
//console.log(age);
//var age;  This will print undefined but if you use 'let' it will throw an error! var gets hoisted to the top!
// SO YOU ARE REALLY RUNNING THIS WITH HOISTING BELOW
// var age;
// console.log(age);


