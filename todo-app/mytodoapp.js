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


const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodos.length} todos left`
document.querySelector('body').appendChild(summary)

myTodos.forEach(function (todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})
