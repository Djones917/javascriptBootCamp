let isAccountLocked = false;
let userRole = 'admin';

if (isAccountLocked) {
   console.log('Is account locked');
} else if(userRole === 'admin') {
    console.log('Welcome Admin!');
} else {
    console.log('Welcome!');
}



// exampie of else if statement
//if (false) {
  // console.log('Yea baby!');
//} else if (true) {
  //console.log('You got this!');
//} else {
  //console.log('What\'s up?');
//}



// Chanllenge Area



let temp = 45;

// it is freezing outside 32
// it is hot outside 110
// go out, it is nice outside 45


if (temp <= 32) {
   console.log('It\'s freezing outside!');
} else if (temp >= 110) {
   console.log('It\'s hot outside!');
} else {
   console.log('Go out, it\'s nice outside!');
}

