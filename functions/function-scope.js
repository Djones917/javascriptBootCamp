// Global scope (convertFahrenheitToCelcius, firstTemp, secondTemp)
  // Local scope (fahrenheit, celcius)
      // Local scope (isFreezing)

let convertFahrenheitToCelcius = function (fahrenheit) {  // function local scope starts with function includes argument and everything in code block
    let celcius = (fahrenheit - 32) * 5 / 9;

    if (celcius <= 0) {
        let isFreezing = true;
    }

    return celcius;
}

let firstTemp = convertFahrenheitToCelcius(32);
let secondTemp = convertFahrenheitToCelcius(68);
console.log(firstTemp);
console.log(secondTemp);


