//PUNTO 1 

	/*Se desea saber si un libro esta disponible o no. 

	0)El programa para ello buscara en la lista de libros el isbn correspondiente y luego
	corroborara si el estado es 'Disponible' o 'Esperando devolucion'. De estar disponible se entregara el libro y se cambiara el estado a 
	"Esperando devolucion". Luego se sumara una unidad al numero de veces que fue pedido el libro

	1) Se declarara una variable estado = "no disponible".
	Se recorrera el array con un for y se evaluara la propiedad "Estado". (if). Si el isbn coincide y el estado es disponible se cambia la variable
	y se devuelve con el valor "Disponible" */

	function chequearDisponibilidad (listaDeLibros,isbn) {
		
		let estado= "El libro no esta disponible"
		
		for (i=0; i<listaDeLibros.length; i++) {
			libro= listaDeLibros[i]
			
			if (libro.ISBN=== isbn && libro.Estado=== 'Disponible') {
				
				libro.VecesPedido= libro.VecesPedido + 1 
				estado = "El libro esta disponible"
				libro.Estado= "Esperando devolucion"

			}
		}

	return estado

	}

	function devolverLibro (listaDeLibros,isbn) {

		let respuesta= "Este libro no lo adquiriste en esta libreria"

		for (i=0; i<listaDeLibros.length; i++){

			libro= listaDeLibros[i]

			if(libro.ISBN===isbn && libro.Estado==="Esperando devolucion") {
				
				libro.Estado= Disponible
				respuesta= "libro devuelto correctamente"
			}
		}
		return respuesta
	}


	//_____________________________________________________________________________________________________________________________//

//PUNTO 2 (BUSCAR LIBROS POR AUTOR)

/* 

	0) Para saber que libros estan disponibles sobre un autor determinado la funcion debera comparar el autor ingresado
		con el autor de cada uno de los libros de la lista e ir guardandolos segun si estan dispobibles o no

	 1) A partir de las variables ingresadas el programa debera recorrer toda la lista y dentro de cada uno de los 
	 		objetos (libros) verificar si coincide la propiedad autor con el autor ingresado. De ser asi, luego se se 
	 		verificara el estado del mismo y si es "disponible" se guardara en la lista el nombre del libro y su ISBN

	 2) Se declarara una variable de tipo lista listaDeLibrosDelAutor= []  
	 
	 		se recorrera la lista de los libros (con un for).
	 			dentro de la lista se verificara si la propiedad autor coincide con la ingresada como variable (if) 
	 			de ser asi se evaluara la propiedad Estado (if) y si es "Disponible" (if) se guardara en la 
	 			lista el nombre del libro (.push)

	 		la funcion devolvera la listaDeLibrosDelAutor */


function buscarLibrosPorAutor (listaDeLibros, autor) {
	
	let listaDeLibrosDelAutor= []
	
	for(i=0; i<listaDeLibros.length; i++) {
		let libro= listaDeLibros[i]
		
		if(libro.autor===autor && libro.Estado==='Disponible'){
			listaDeLibrosDelAutor.push(
				{
					nombre: libro.nombre,
					ISBN: libro.ISBN
				}
			)
		}	
	}

	return listaDeLibrosDelAutor
}

//_____________________________________________________________________________________________________________________________//



/* PUNTO 3 CUALES SON LOS 10 LIBROS QUE MAS SE PIDEN?

	1) Para este ejercicio lo que pense fue en agregar una propiedad a los objetos que conforman a los libros 
	que sea la cantidad de veces que fue pedido el libro y que vaya sumandose en una unidad cada vez que un
	usuario pide un ejemplar del mismo. El programa, para averiguar cuales son los 10 mas pedidos recorrera la lista
	e ira guardando cada uno de los libros con sus respectivos numero de pedidos. Luego lo que hara sera ordenar esta
	lista a partir del valor en cuestion

	2) Se declarara una variable listaDeLibrosMasPedidos= []
		 Luego se recorrera la lista (con un for) y se guardaran las propiedades correspondientes a autor, nombre y 
		 cantidad de veces que se pidio en 3 variables distintas.

		 Despues se agregaran a la lista declarada al inicio objetos con las propiedades mencionadas para luego ordenarlo (sort)
		 segun el numero de veces pedido y se mostraran unicamente los primeros 10. (slice) */


function los10LibrosMasPedidos (listaDeLibros) {

	let listaDeLibrosMasPedidos = []

	for (i=0; i<listaDeLibros.length; i++) {
		let libro= listaDeLibros[i]
		let nombre= libro.nombre
		let autor= libro.autor
		let vecesPedido= libro.VecesPedido

		listaDeLibrosMasPedidos.push(
			{ 
				nombre: nombre,
				autor: autor,
				vecesPedido: vecesPedido

			}
		)
	}
	
	listaDeLibrosMasPedidos.sort (function(a,b) {
		return b.vecesPedido - a.vecesPedido

	})

	return listaDeLibrosMasPedidos.slice(0,10)
}

