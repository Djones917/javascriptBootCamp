// Function - input (argument), code, output (return value)

let greetUser = function () {
    console.log('Welcome user!');
}

greetUser();


let square = function (num) {
   let result = num * num;
   return result;
}

let value = square(3); // return will not print so i'm storing the call in a variable
let otherValue = square(10);
console.log(value);
console.log(otherValue);






// Chalenge Area

// convertFahrenheitToCelcius

// Call a couple of time

// Print the converted values

let convertFahrenheitToCelcius = function (fahrenheit) {
    let celcius = (fahrenheit - 32) * 5 / 9;
    return celcius;
}

let firstTemp = convertFahrenheitToCelcius(32);
let secondTemp = convertFahrenheitToCelcius(68);
console.log(firstTemp);
console.log(secondTemp);






