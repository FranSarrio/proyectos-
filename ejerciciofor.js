
// EJERCICIOS FOR

//ejercicio 1

function ImprimirNumeros (numero) {
	for (let i = 1; i <= numero; i++) {
		console.log(i)
	}
}



//ejercicio  2

function imprimirOtrosNumeros (desde, hasta) {
	if (desde<hasta) {
		for (let i = desde+1; i<hasta ; i++) {
		console.log(i)
		}
	}
}

/*----------------------------------------------------------------------------------------------------*/

//EJERCICIOS ARRAY

//ejercicio 1

function DuplicarNumeros(listaDeNumeros) {
	
	listaDeNumerosDuplicados= []

	for (let i=0; i < listaDeNumeros.length; i++) {
		
		listaDeNumerosDuplicados.push((listaDeNumeros[i])*2)

	}

	return listaDeNumerosDuplicados

}

lista = [2,65,4,39]




//ejercicio 2

function Multiplicar (listado) {
	acumulado= listado[0]

	for(let i=1; i<lista.length; i++) {
		acumulado= acumulado*listado[i]

	}
	return acumulado
}



//ejercicio 3

function calcularPromedio (listaDeNumeros) {
	acumulado= 0

	for (let i=0; i<listaDeNumeros.length; i++) {
		acumulado= acumulado + listaDeNumeros[i]
	}

	promedio= acumulado/listaDeNumeros.length

	return promedio
}

/*----------------------------------------------------------------------------------------------------*/
//EJERCICIOS STRINGS

//ejercicio 1

function contarEspacios (texto) {
	contespacios=0

	for(let i=0; i<texto.length; i++)

		if (texto[i]===" ") {
			contespacios=contespacios + 1
		}
		return contespacios
}

//ejercicio 2

listaDeTweets= ["hola que tal", 'aguante bokita','bokita sos lo mas', 'sin bokita me muero','gayina vigilantee']

palabra= "bokita"

function buscarTweets (listaDeTweets, textoABuscar) {
	
	listaDeTweetsEncontrados= []

	for(let i=0; i<listaDeTweets.length; i++){
		if (listaDeTweets[i].includes(textoABuscar)) {
			listaDeTweetsEncontrados.push (listaDeTweets[i])
		}
	}
	return listaDeTweetsEncontrados
}

console.log(buscarTweets(listaDeTweets,palabra))

//ejercicio 3


frase1= "adalberto roman y la puta que te pario, hacete el canchero ahora boludo!"
listaDeExpresionesCensuradas1= ['puta', 'boludo']

function censurarTexto (frase,listaDeExpresionesCensuradas) {
	
	for(let i=0; i<listaDeExpresionesCensuradas.length; i++) {
		
		if(frase.includes(listaDeExpresionesCensuradas[i])) {
			frase= frase.replace(listaDeExpresionesCensuradas[i],'*'.repeat(listaDeExpresionesCensuradas[i].length))
		}

	}

	return frase

}


console.log(censurarTexto(frase1,listaDeExpresionesCensuradas1))












