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

// Dom - Document Object Model

// querySelector will match the very first selector found in html
// query and remove
//const p = document.querySelector('p')
//console.log(p) 
//p.remove()


// query all and remove
const ps = document.querySelectorAll('p')

// textContent is a property to read the value
ps.forEach(function (p){
	p.textContent = '****'
	//console.log(p.textContent) 
	//p.remove()
})


// Add a new element with createElement 3 steps
const newParagraph = document.createElement('p')
newParagraph.textContent = 'This is a new element from javascript'
document.querySelector('body').appendChild(newParagraph)