// Switched up teaching in arrays 1 notes.js and todo.js start with array ! lesson!

// MDN array for reference
const notes = ['Note 1', 'Note 2', 'Note 3'];
console.log(notes.length);
console.log(notes[0]);

// Another example 
const task = ['Task 1', 'Task 2', 'Task 3'];
//console.log(task[2]); 
console.log(task[task.length - 2]); // another way to grab a certain array with length


// Manipulating arrays with methods
const name = ['Derek', 'Kim', 'Vincent'];
console.log(name.pop()); // .pop this removes the lastt value to array
name.push('Ivy'); // .push a value to the end of array
console.log(name);

