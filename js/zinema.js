var TotalButacas = [ 100, 150, 75, 50 ];
var ButacasLibres = [ 100, 150, 75, 50 ];
numSalaSeleccionado = 0;

// var salaActual = document.getElemen

function mostrarDetalles(numSala) {

	var todasSalas = document.getElementsByClassName("texto");
	numSalaSeleccionado = numSala;

	for (i = 0; i < todasSalas.length; i++) {
		todasSalas[i].style.display = "none";
	}

	switch (numSala) {
	case "1":
		document.getElementById("sala1").style.display = "block";

		break;
	case "2":
		document.getElementById("sala2").style.display = "block";

		break;
	case "3":
		document.getElementById("sala3").style.display = "block";

		break;
	case "4":
		document.getElementById("sala4").style.display = "block";

		break;
	default:

	}
	indice = parseInt(numSala) - 1;

	texto = "PROXIMA SESION SALA " + numSala + "<br/>" + "TOTAL BUTACAS SALA: "
			+ TotalButacas[indice] + " BUTACAS LIBRES: "
			+ ButacasLibres[indice];

	document.getElementById("salacompra").innerHTML = texto;
	document.getElementById("compraentradas").style.display = "block";
}

function comprarEntradas() {
	numeroEntradas = document.getElementById("numeroent").value;
	e = document.getElementById("tipo");
	tipoEntradas = e.options[e.selectedIndex].value;

	totalApagar = numeroEntradas * tipoEntradas;

	document.getElementById("precio").value = tipoEntradas;
	document.getElementById("total").value = totalApagar;
}

function restarButacas() {

	if (ButacasLibres[indice] < numeroEntradas) {

		alert("Error, el numero de entradas solicitadas es mayor a lo permitido.")

	} else {

		switch (numSalaSeleccionado) {
		case "1":
			ButacasLibres[0] = (ButacasLibres[0] - numeroEntradas);

			break;
		case "2":
			ButacasLibres[1] = (ButacasLibres[1] - numeroEntradas);

			break;
		case "3":
			ButacasLibres[2] = (ButacasLibres[2] - numeroEntradas);

			break;
		case "4":
			ButacasLibres[3] = (ButacasLibres[3] - numeroEntradas);

			break;
		}

		numeroEntradas = parseInt(document.getElementById("numeroent").value);
		texto = "PROXIMA SESION SALA " + numSalaSeleccionado + "<br/>"
				+ "TOTAL BUTACAS SALA: "
				+ TotalButacas[numSalaSeleccionado - 1] + " BUTACAS LIBRES: "
				+ ButacasLibres[numSalaSeleccionado - 1];

		document.getElementById("salacompra").innerHTML = texto;
	}

}

function soloNumeros(e) {
	tecla = (document.all) ? e.keyCode : e.which;
	if (tecla == 8)
		return true;
	patron = /\d/;
	;
	te = String.fromCharCode(tecla);
	return patron.test(te);
}