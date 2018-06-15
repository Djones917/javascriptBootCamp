// Do a array of with five todos
// print a message with x is actual length
// print first and second to last items -> Todo: walk the dog

// NEXT CHALLENGE
// Delete the third item
// Add new item to the end
// Remove the first item from the list


// NEXT CHALLENGE forEach array method
// 1. The first item
// 2. The second item
// 3. The third item

// NEXT CHALLENGE
// 1. CONVERT ARRAY TO AN ARRAY OF OBJECTS
// 2. CREATE A FUNCTION TO REMOVE A TODO BY TEXT VALUE



const myTodos = [{
    text: 'Feed the cats',
    completed: false
}, {
    text: 'Prep the coffee',
    completed: true
}, {
    text:'Brush teeth',
    completed: true
}, {
    text: 'Watch a little TV',
    completed: false
}, {
    text: 'Go to bed',
    completed: false
}];



const deleteTodo = function (myTodos, todoText) {
     const index = myTodos.findIndex(function(todo){
         return todo.text.toLowerCase() === todoText.toLowerCase()
     })
     if (index > -1) {
        myTodos.splice(index, 1)
     }
}


deleteTodo(myTodos, 'Prep the coffee')
console.log(myTodos)




//myTodos.splice(2, 1);
//myTodos.push('Keep on coding!');
//myTodos.shift();
//console.log(`You have ${myTodos.length} todos!`);
//console.log(`Todo: ${myTodos[0]}`); 1st challenge
//console.log(`Todo: ${myTodos[myTodos.length - 2]}`); 1st challenge
//console.log(myTodos);

//myTodos.forEach(function(todo, index){
    //const num = index + 1;
    //console.log(`${num}. ${todo}`);
//})

//  But with a for loop 
//for (let count = 0; count < myTodos.length; count++) {
    //const num = count + 1;
    //const myTodo = myTodos[count]
    //console.log(`${num}. ${myTodo}`);
    ////console.log(myTodos[count]); 
//}




