  	const flechaIzquierda= document.querySelector('.left-row')
	const flechaDerecha= document.querySelector('.right-row')
	const flechaArriba= document.querySelector('.up-row')
	const flechaAbajo= document.querySelector('.bottom-row')
	const randomize= document.querySelector('.randomize')
	const diagonal= document.querySelector('.diagonal')
	const colorRojo= document.querySelector('.red')
	const colorVerde= document.querySelector('.green')
	const colorAzul= document.querySelector('.blue')
	const circuloPrincipal= document.querySelector('.principal-circle')

	function moveLeft () {
  		let principalCircleStyle= window.getComputedStyle(circuloPrincipal)
		let currentLeft= principalCircleStyle.left.slice(0,-2)
		let newLeft= parseInt(currentLeft) -8
		newLeft= newLeft + 'px'
		circuloPrincipal.style.left= newLeft
		if (circuloPrincipal.style.left=== '-196px') {
			circuloPrincipal.style.left= '1276px'
		}

 	}

 	function moveUp () {
 		   
  		let principalCircleStyle= window.getComputedStyle(circuloPrincipal)
		let currentTop= principalCircleStyle.top.slice(0,-2)
		let newTop= parseInt(currentTop) -8
		newTop= newTop + 'px'
		circuloPrincipal.style.top= newTop
		if (circuloPrincipal.style.top=== '-204px') {
			circuloPrincipal.style.top= '692px'
		}
 	}

 	function moveDown () {
  		let principalCircleStyle= window.getComputedStyle(circuloPrincipal)
		let currentTop= principalCircleStyle.top.slice(0,-2)
		let newTop= parseInt(currentTop) +8
		newTop= newTop + 'px'
		circuloPrincipal.style.top= newTop
		if (circuloPrincipal.style.top=== '700px') {
			circuloPrincipal.style.top= '-212px'
		}
 	}

 	function moveRight () {
 		let principalCircleStyle= window.getComputedStyle(circuloPrincipal)
		let currentLeft= principalCircleStyle.left.slice(0,-2)
		let newLeft= parseInt(currentLeft) +8
		newLeft= newLeft + 'px'
		circuloPrincipal.style.left= newLeft
		if (circuloPrincipal.style.left=== '1284px') {
			circuloPrincipal.style.left= '-188px'
		}
 	}
