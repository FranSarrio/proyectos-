
window.onload= function () {
	
	const titulo= document.querySelector('h1')
	const imagenes= document.querySelector('img')
	const parrafo= document.querySelector('p')
	const nombre= document.querySelector('.nombre')
	const firma= document.querySelector(".firma")

	titulo.style.display= "none"
	parrafo.style.fontSize= "40px"
	parrafo.style.color= "violet"
	parrafo.style.border= "5px solid black"
	parrafo.style.borderRadius= '10px'

	let mostrarNombre= true

	firma.onclick= function () {

		if (mostrarNombre) {
			nombre.style.display= "none"
			mostrarNombre= false
		}

		else {
			nombre.style.display = "block"
			mostrarNombre= true
		}

		
	}
}

	
