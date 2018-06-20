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



//Quick note of filter example:  a < b = true because 'a' comes before 'b'.  'March' < 'January' = false because J comes before M. 'a' < 'A' = capital letters come first
const sortNotes = function () {
   notes.sort(function (a, b) {
       if (a.title.toLowerCase() < b.title.toLowerCase()) {
          return -1
       } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
          return 1
       } else {
           return 0
       }
   })
}



const findNote = function (notes, noteTitle) {
     return notes.find(function (note, index){
         return note.title.toLowerCase() === noteTitle.toLowerCase()
     })     
}


const findNotes = function (notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
        return isTitleMatch || isBodyMatch
    })
}




//console.log(findNotes(notes, 'work'))


//const note = findNote(notes, 'Office Modification')
//console.log(note)


sortNotes(notes)
console.log(notes)