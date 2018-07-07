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

const paragraphs = document.querySelectorAll('p')
//console.log(ps)

paragraphs.forEach(function (paragraph){
	if(paragraph.textContent.includes('the')) {
		paragraph.remove()
	}
})

