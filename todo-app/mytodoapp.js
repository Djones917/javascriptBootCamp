//console.log('connected!')

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

// You have two todos left (p element)
// Add a p for each todo above (use text value)
const incompleteTodos = myTodos.filter(function (todo) {
      return !todo.completed
})

// remember this part I might want to do a new notes repository!
const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(summary)

myTodos.forEach(function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})


document.querySelector('#add-todo').addEventListener('click', function (e) {
   console.log('Add a new todo...')
})

// Listen for to do text change
document.querySelector('#new-todo-text').addEventListener('input', function(e) {
    console.log(e.target.value)
})
