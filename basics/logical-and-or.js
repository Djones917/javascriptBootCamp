let temp = 65;

// logical and operator
// both (sides) booleans have to be true to run for the and &&

//if (temp >= 60 && temp <= 90) {
   //console.log('It is pretty nice outside!');
//}

// only one side has to be true to run with the or || 

//if (temp <= 0 || temp >= 120) {
   //console.log('Do not go!');
//}


// You can also combine the two above with an else if

if (temp >= 60 && temp <= 90) {
    console.log('It is pretty nice outside!');
} else if (temp <= 0 || temp >= 120) {
    console.log('Do not go!');
} else {
    console.log('Eh, Do what you want!');
}





// Challenge area
// REMEMBER IT RUNS UNTIL IT FINDS TRUE and both booleans are stated in the let below!

let = isGuestOneVegan = true;
let = isGuestTwoVegan = false;

// Are both vegan? Only offer vegan dishes
// At least one is veagan. Make sure to offer some vegan dishes
// Else, offer anything on the menu

if (isGuestOneVegan  && isGuestTwoVegan) {
    console.log('Only offer vegan dishes!');
} else if(isGuestOneVegan  || isGuestTwoVegan) {
    console.log('Make sure to offer some vegan dishes');
} else {
    console.log('Please, have anything on the menu!');
}






