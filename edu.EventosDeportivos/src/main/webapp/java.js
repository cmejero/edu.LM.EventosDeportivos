let duracionEventosArray = [];

console.log(duracionEventosArray)



//PREGUNTAS:
// Porque no se me suma las fechas 
// Porque no puedo acceder a los valores dentro de mi array

let nuevoEvento = [];
console.log(nuevoEvento)

for (let i = 0; i < nuevoEvento.length; i++) {

	console.log(nuevoEvento[i].nombre)
}

function agregarTorneo() {
	let fechaActual = new Date();


	let pedirEvento = prompt("Marque el evento: futbol: 1 , maraton: 2, yoga: 3 o baloncesto: 4 ").toLowerCase();

	switch (pedirEvento) {

		case "1":
			let fechaFinal;
			let fechaF;
			do {
				let pedirFechaF = prompt("introduzca la fecha en formato: dd-MM-yyyy");
				fechaF = new Date(pedirFechaF)
				let fechafi = fechaF.setDate(fechaF.getDate() + 3)
				fechaFinal = new Date(fechafi)

			} while (!(fechaActual < fechaF));

			nuevoEvento.push({
				nombre: "Futbol",
				fechaInicio: fechaF,
				fechaFin: fechaFinal

			})

			break;

		case "2":
			let fechaM;
			let fechaFinalM;
			do {
				let pedirFechaM = prompt("introduzca la fecha en formato: dd-MM-yyyy");
				fechaM = new Date(pedirFechaM)
				let fechafiM = fechaM.setHours(fechaM.getHours() + 6)
				fechaFinalM = new Date(fechafiM)


			} while (!(fechaActual < fechaM))


			nuevoEvento.push({
				nombre: "Maraton",
				fecha: fechaM,
				fechaFin: fechaFinalM
			})

			break;

		case "3":
			let fechaY;
			let fechaFinalY;
			do {
				let pedirFechaY = prompt("introduzca la fecha en formato: dd-MM-yyyy");
				fechaY = new Date(pedirFechaY)
				let fechafiY = fechaY.setdgetDate(fechaY.getDate() + 1)
				fechaFinalY = new Date(fechafiY)


			} while (!(fechaActual < fechaY))
			nuevoEvento.push({
				nombre: "Yoga",
				fecha: fechaY,
				fechaFin: fechaFinalY
			})
			break;

		case "4":
			let fechaB;
			let fechaFinalB;
			do {
				let pedirFechaB = prompt("introduzca la fecha en formato: dd-MM-yyyy");
				fechaB = new Date(pedirFechaB)
				let fechafiB = fechaB.setDate(fechaB.getDate() + 2)
				fechaFinalB = new Date(fechafiB)
			} while (!(fechaActual < fechaB))


			nuevoEvento.push({
				nombre: "Baloncesto",
				fecha: fechaB,
				fechaFin: fechaFinalB

			})

			break;

	}

	for (let i in nuevoEvento){
		escribir.innerHTML += ("<tr><td>" + nuevoEvento[i].nombre + "</td><td>" + nuevoEvento[1])
	}

}


function mostrarPantalla() {

	let escribir = document.getElementById("mostrar");

	for (let i in nuevoEvento) {

		console.log(nuevoEvento[i].nombre)
	}

	escribir.innerHTML += ("<tr><td>" + nuevoEvento[0] + "</td><td>" + nuevoEvento[1])

}






















