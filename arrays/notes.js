// Switched up teaching in arrays 1 notes.js and todo.js start with array ! lesson!

// MDN array for reference
const notes = [{
   title: 'My next trip',
   body: 'I want to go to Spain'
}, {
   title: 'Habbits to work on',
   body: 'Excercise and eating better'
}, {
   title: 'Office Modification',
   body: 'Get a new chair'
}];


const findNote = function (notes, noteTitle) {

}

const note = findNote(notes, 'Office Modification')


console.log(notes.length)
console.log(notes)


const index = notes.findIndex(function(note, index){
    console.log(note)
    return note.title === 'Habbits to work on'
})
console.log(index)

