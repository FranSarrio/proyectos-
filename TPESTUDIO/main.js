
function obtenerDeudores (ListaDeClientes) {

	ListaDeDeudores=[]
	
	for (let i= 0; i<ListaDeClientes.length; i++) {
		
		let PagoTotal= 0
		let Cliente= ListaDeClientes[i]
		let Apagar= GastadoPorCliente (Cliente)
		
		for (let j=0; j< Cliente.Pagos.length; j++) {
			
			Pago= Cliente.Pagos[j]
			PagoTotal+= Pago.monto
		}

		if (PagoTotal< Apagar) {
			Deuda= Apagar- PagoTotal
			
			ListaDeDeudores.push ({
				Deudor: Cliente.Nombre,
				Debe: Deuda

				})
		}
	}

	return (ListaDeDeudores)
}

function obtenerMejoresClientes (ListaDeClientes) {
	ListaDeMejoresClientes = []

	for (let i=0; i<ListaDeClientes.length; i++) {
		let Cliente= ListaDeClientes[i]
		Gastado= GastadoPorCliente(Cliente)
		
		ListaDeMejoresClientes.push ( {
			Banda: Cliente.Nombre,
			Gastado: Gastado
		})

	}
	
	ListaDeMejoresClientes.sort(function(a,b) {
		return b.Gastado - a.Gastado
	})
	
	return ListaDeMejoresClientes
}

function obtenerFacturacionEn (clientes,mes,anio) {
	facturacionTotal= 0
	for(let i=0; i<clientes.length; i++) {
		
		Cliente= clientes[i]

		for (let j= 0; j<Cliente.Pagos.length; j++) {
			
			Pago= Cliente.Pagos[j]

			if (Pago.fecha.includes(mes+'/'+anio))  {
				facturacionTotal+= Pago.monto
			}
			
		}
	}
	return facturacionTotal
}

function PredecirGrabacionesDeSemanaQueViene {

/* la funcion recibe el primer y el ultimo dia de la semana que se desea predecir, recorre la lista de clientes
con sus respectivas sesiones. desde el primer año trabajado hasta el año anterior al corriente 
y si encuentra una sesion entre ambos dias se suma una unidad en el acumulador del año en cuestion
luego se divide la cantidad de sesiones por la cantidad de años y se predice que habra dicho resultado */

	
