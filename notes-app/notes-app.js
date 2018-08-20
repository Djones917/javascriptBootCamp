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


const filters = {
    searchText: ''
}

const renderNotes = function (notes, filters) {
   const filteredNotes = notes.filter(function (note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
   })

       document.querySelector('#notes').innerHTML = ''   

        filteredNotes.forEach(function (note) { 
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
   })
}

renderNotes(notes, filters)


document.querySelector('#create-note').addEventListener('click', function (e) {
    e.target.textContent = 'Button was clicked!'
})


document.querySelector('#remove-all').addEventListener('click', function() {
    document.querySelectorAll('.note').forEach(function (note) {
           note.remove()
    })
})


document.querySelector('#search-text').addEventListener('input', function(e) {
   filters.searchText = e.target.value
   renderNotes(notes, filters)
})

// Don't delet this! Using bracket notation this will select the second button. But if you switch order of the button in html you will have also switched the function!
// So use ids and classes in your html!
//document.querySelectorAll('button')[1].addEventListener('click', function(){
    //console.log('Delete all notes')
//})


// CSS classes and ids
// --Single--
// p
// #replace
// .item

// -- Multiple--
// p#order
// button.inventory
// h1#title.application
// h1.application#title
