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
