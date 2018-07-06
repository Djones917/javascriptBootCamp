//console.log('connected!')

const paragraphs = document.querySelectorAll('p')
//console.log(ps)

paragraphs.forEach(function (paragraph){
	if(paragraph.textContent.includes('the')) {
		paragraph.remove()
	}
})

