const notes = [];


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



document.querySelector('#search-text').addEventListener('input', function (e) {
   filters.searchText = e.target.value
   renderNotes(notes, filters)
})


document.querySelector('#filter-by').addEventListener('change', function (e) {
   console.log(e.target.value)
})