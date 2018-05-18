// mdn number in google search bar for number methods!
let num = 103.941;

 // toFixed() method
 console.log(num.toFixed(2));
 
 // also mdn math
 console.log(Math.round(num));
 console.log(Math.floor(num));
 console.log(Math.ceil(num));
 
 
 // Math.random
 let min = 10; // you could use 0
 let max = 20; // you could use 1 the two comments would be like flipping a coin heads or tails!
 
 let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
 console.log(randomNum);
 
 
 
 // Challenge Area
 // 1- 5 -true if correct - false in incorrect
 let makeGuess = function (guess) {	
	let min = 1; 
    let max = 5;  
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min; 
    return guess === randomNum;	
 }
 
 console.log(makeGuess(1));
 
 
 
 