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
     return notes.find(function (note, index){
         return note.title.toLowerCase() === noteTitle.toLowerCase()
     })     
}


const findNotes = function (notes, query) {
    const filteredNotes = notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes('office')
        const isBodyMatch = note.body.toLowerCase().includes('office')
        return isTitleMatch || isBodyMatch
    })
}


console.log(filteredNotes)


//const findNote = function (notes, noteTitle) {
    //const index = notes.findIndex(function (note, index) {
        //return note.title.toLowerCase() === noteTitle.toLowerCase()
    //})
    //return notes[index]
//}

const note = findNote(notes, 'Office Modification')
console.log(note)


