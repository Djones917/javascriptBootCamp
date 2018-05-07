// Multiply Arguments

let add = function (a, b, c) {
    return a + b + c;
}

let result = add(10, 1, 5);
console.log(result);



// Default Arguments

let getScoretext = function (name = 'Anonymous', score = 0) {
    return 'Name: ' + name + ' - Score: ' + score;
}

let scoreText = getScoretext(undefined, 99); // Use undefined to use default argument when you want to skip to second argument! 
console.log(scoreText);






// Chalenge Area
// total, tipPercent .2
// A 25% tip of $40 would be $10

let getTip = function (total, tipPercent = 0.2) {
    let percent = tipPercent * 100;
    let tip = total * tipPercent;
    return `A ${percent}% tip on $${total} would be $${tip}`;
}

let tip = getTip(80, .2);
console.log(tip);



// Another work out

let bookService = function (name, status = 'Check Out') {
    return 'Name: ' + name + ' - status: ' + status;
}

let customerBook = bookService('Derek');
console.log(customerBook);




