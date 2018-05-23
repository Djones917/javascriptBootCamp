// Switched up teaching in arrays 1 notes.js and todo.js start with array ! lesson!

// MDN array for reference
const notes = ['Note 1', 'Note 2', 'Note 3'];
console.log(notes.length);
console.log(notes[0]);

// Another example 
const task = ['Task 1', 'Task 2', 'Task 3'];
//console.log(task[2]); 
console.log(task[task.length - 2]); // another way to grab a certain array with length




// Manipulating arrays with 
// push and pop end of array
const name = ['Derek', 'Kim', 'Vincent'];
console.log(name.pop()); // .pop this removes the lastt value to array
name.push('Ivy'); // .push a value to the end of array
// shift and unshift from the beginning of array
console.log(name.shift()); // removes
name.unshift('Sammy');
console.log(name);


// splice method
const jobs = ['pull books', 'ship books', 'receive books'];
jobs.splice(0, 1);
// jobs.splice(1, 0 'This is the new second item');  so this would go to the index of 1 and take 0 as an argument the the string would be inserted! 
// jobs.splice(1, 1 'This is the new second item'); so this would got to the index of 1 and delete 1 item and replace it completely!
console.log(jobs);






