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

document.querySelector('#create-note').addEventListener('click', function (e) {
    e.target.textContent = 'Button was clicked!'
})


document.querySelector('#remove-all').addEventListener('click', function() {
    console.log('Remove all notes')
})

// Don't delet this! Using bracket notation this will select the second button. But if you switch order of the button in html you will have also switched the function!
// So use ids and classes in your html!
//document.querySelectorAll('button')[1].addEventListener('click', function(){
    //console.log('Delete all notes')
//})
