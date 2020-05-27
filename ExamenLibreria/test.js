const listaDeLibros= [
	{
		nombre: 'La Insoportable levedad del ser',
		autor: 'Milan Kundera',
		anio: '1984',
		editorial: 'Harper',
		ISBN: '9783446141056',
		Estado: 'Disponible',
		VecesPedido: 5,


	},
	{
		nombre: 'El viejo y el mar',
		autor: 'Ernest Hemingway',
		anio: '1952',
		editorial: 'Debolsillo',
		ISBN: '97834461410630',
		Estado: 'Esperando devolucion',
		VecesPedido: 3


	},
	{
		nombre: 'El Señor de las Moscas',
		autor: 'William Golding',
		anio: '1954',
		editorial: 'Faber and Faber',
		ISBN: '978344614152',
		Estado: 'Esperando devolucion',
		VecesPedido: 2


	},
	{
		nombre: 'Las venas abiertas de America Latina',
		autor: 'Eduardo Galeano',
		anio: '1971',
		editorial: 'Catalogos',
		ISBN: '9783446141043',
		Estado: 'Disponible',
		VecesPedido: 9


	},
	{
		nombre: 'El hombre en busca de sentido',
		autor: 'Viktor Frankl',
		anio: '1946',
		editorial: 'Herder',
		ISBN: '9783446141014',
		Estado: 'Esperando devolucion',
		VecesPedido: 19


	},
	{
		nombre: 'La Gansada',
		autor: 'Roberto Fontanarrosa',
		anio: '2007',
		editorial: 'Planeta',
		ISBN: '9783443341056',
		Estado: 'Disponible',
		VecesPedido: 2


	},
	{
		nombre: 'La noche de la Usina',
		autor: 'Eduardo Sacheri',
		anio: '2011',
		editorial: 'Alfaguara',
		ISBN: '9783446141045',
		Estado: 'Disponible',
		VecesPedido: 5


	},
	{
		nombre: 'Sinceramente',
		autor: 'Cristina Fernandez de Kirchner',
		anio: '2019',
		editorial: 'Sudamericana',
		ISBN: '978344614435',
		Estado: 'Disponible',
		VecesPedido: 90


	},
	{
		nombre: 'Carrie',
		autor: 'Stephen King',
		anio: '1989',
		editorial: 'Debolsillo',
		ISBN: '9783446410345',
		Estado: 'Disponible',
		VecesPedido: 8


	},
	{
		nombre: 'Sapiens, de animales a dioses',
		autor: 'Yuval Noah Harari',
		anio: '2016',
		editorial: 'Debate',
		ISBN: '97834461414676',
		Estado: 'Disponible',
		VecesPedido: 10


	},
	{
		nombre: 'Cerrado por futbol',
		autor: 'Eduardo Galeano',
		anio: '2016',
		editorial: 'Debate',
		ISBN: '97834461414676',
		Estado: 'Disponible',
		VecesPedido: 12


	}
	
]

console.log(buscarLibrosPorAutor(listaDeLibros,'Eduardo Galeano'))
console.log(chequearDisponibilidad(listaDeLibros,'9783446141056'))
console.log(los10LibrosMasPedidos(listaDeLibros))
