function GastadoPorCliente (cliente) {
	
	let GastadoPorCliente=0

	for (let j=0; j<cliente.Sesiones.length; j++) {
			Sesion= cliente.Sesiones[j]
			GastadoPorCliente += Sesion.duracion * VALOR_HORA
		}

	return GastadoPorCliente
}
	
