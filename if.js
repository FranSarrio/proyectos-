//ejercicio 1

function calcularResultadoDeExamen (notaDeExamen) {

	if (notaDeExamen<4){
		return aplazado
	}

	else if (4=<notaDeExamen<=6) {
		return ARecuperar 
	}

	else if(10>notaDeExamen>6)
		return aprobado
}

	else {
		return SOBRESALIENTE
	}

	//Ejercicio 2

	function sonHermanos (persona1, persona2) {
		if(persona2.padre===persona1.padre && persona1.madre===persona2.madre) {
			return true
		}

		else {
			return false 
		}
	}

	//ejercicio 3

	function contarEspacios (texto) {
		let espacios= 0

		for (let i = 0; i<texto.length; i++) {
			
			if (texto[i]=== " ") {
				espacios= espacios + 1
			}
		}

		return espacios 
	}

