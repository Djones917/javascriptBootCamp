// Do a array of with five todos
// print a message with x is actual length
// print first and second to last items -> Todo: walk the dog

// NEXT CHALLENGE
// Delete the third item
// Add new item to the end
// Remove the first item from the list


const myTodos = ['Feed the cats', 'Prep the coffee', 'Brush teeth', 'Watch a little TV', 'Go to bed'];

myTodos.splice(2, 1);
myTodos.push('Keep on coding!');
myTodos.shift();
console.log(`You have ${myTodos.length} todos!`);
//console.log(`Todo: ${myTodos[0]}`); 1st challenge
//console.log(`Todo: ${myTodos[myTodos.length - 2]}`); 1st challenge
console.log(myTodos);
