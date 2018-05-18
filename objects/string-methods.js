// Note: mdn - Mozilla Developer Network in google type mdn string to find.

let name = '  Derek ';

// Length property you don't need () it's not a method it's a property!!!
console.log(name.length);

// Convert to ToUpperCase this is not a property it's a method so use ()
console.log(name.toUpperCase());

// Convert to toLowerCase
console.log(name.toLowerCase());


// includes method 
//let password = 'abc123password098'; - this will return true because password is in the string!
let password = abc123asdf098 // this would return false as the argument for password is not in the string!
console.log(password.includes('password'));


// Trim method - allows us to remove the white space from the beginning and end of a string
// Trim is useful for data entered by a user it will make it easier to read as seeing white space is almost impossible.
// Note: name is being used
console.log(name.trim());





// Challenge Area
// isValidPassword
// return length is more than 8 - and it doesn't contain the word password
let isValidPassword = function (password) {
	if (password.length > 8 && !password.includes('password')){
		return true;
	} else {
		return false;
	}
}

// this can also be solved like this if you find yourself returning true and false in an if statement.
//let isValidPassword = function (password) {
	//return password.length > 8 && !password.includes('password')
//}

console.log(isValidPassword('asdfp'));
console.log(isValidPassword('abc123!@#$%^&'));
console.log(isValidPassword('asdfpasdfpoijpassword'));