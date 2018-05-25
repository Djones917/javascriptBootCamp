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
//jobs.splice(0, 1);
// jobs.splice(1, 0 'This is the new second item');  so this would go to the index of 1 and take 0 as an argument the the string would be inserted! 
// jobs.splice(1, 1 'This is the new second item'); so this would got to the index of 1 and delete 1 item and replace it completely!
jobs[2] = 'This is now the new job 3' // another way to assign a value. A quick way to swap out one for another.
console.log(jobs);

// forEach method for looping through an array THIS IS A CALL BACK FUNCTION IT'S NOTHING MORE THAN A FUNCTION PASSED TO A FUNCTION forEach is the most common array method!
jobs.forEach(function() {
   console.log('Testing123'); // This will call three times because we have three items in array
})


// Another example of forEach item and index are two arguments we can pass in
const employees = ['Randy', 'Adam', 'Curtis', 'David'];

employees.forEach(function(item, index){
   console.log(index); 
   console.log(item)
})





// THE FOR LOOP AN ALTERNATIVE TO forEach
// YOU CAN DO MORE WITH THE FOR LOOP AS IT'S MORE FLEXABLE WERE forEach is mostly just for an array!

for (let count = 0; count <= 2; count++) {
   console.log(count);
}