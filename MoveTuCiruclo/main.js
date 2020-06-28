window.onload= function () {
	
	flechaIzquierda.onclick= function moveLeft () {
  		let principalCircleStyle= window.getComputedStyle(circuloPrincipal)
		let currentLeft= principalCircleStyle.left.slice(0,-2)
		let newLeft= parseInt(currentLeft) -3
		newLeft= newLeft + 'px'
		circuloPrincipal.style.left= newLeft
 	}

 	flechaDerecha.onclick= function () {
 		moveRight()
 	}
 	
 	flechaArriba.onclick= function () {
 		moveUp ()
 	}

  	flechaAbajo.onclick= function () {
  		moveDown()
  	} 
 	colorRojo.onclick= function () {
 		circuloPrincipal.style.backgroundColor= 'red'
 	}
 	colorVerde.onclick= function () {
 		circuloPrincipal.style.backgroundColor= 'green'
 	}
 	colorAzul.onclick= function () {
 		circuloPrincipal.style.backgroundColor= 'blue'
 	}

 	document.onkeydown= function (event) {
 		console.log(event)
 		if (event.key=== 'ArrowRight') {
 			moveRight ()
 		}
 		if (event.key=== 'ArrowLeft') {
 			moveLeft ()
 		}
 		if (event.key=== 'ArrowUp') {
 			moveUp ()
 		}
 		if (event.key=== 'ArrowDown') {
 			moveDown ()
 		}
 	}

 }
