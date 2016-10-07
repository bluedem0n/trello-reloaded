window.addEventListener("load", cargar);
var contenedor = document.getElementById("contenedor");
var span = document.getElementById("span");
var boton = document.getElementById("boton");
var textoLista = document.getElementById("textoLista");
var contenedorLista = document.getElementById("contenedorLista");


function cargar() {
	span.addEventListener("click", añadirLista);
	boton.addEventListener("click", verSpan);
	boton.addEventListener("click", nuevaLista);
}
function verSpan(e) {
	e.preventDefault();
	contenedorLista.classList.add("none");
}

function añadirLista(e) {
	e.preventDefault();
	span.classList.add("ocultar");
	form.classList.add("inline");
	contenedorLista.classList.add("inline");
}


function nuevaLista(e) {
	e.preventDefault();
	var contenedorLista = document.createElement("div");
	var spanLista = document.createElement("span");

	if(textoLista.value === ""){
		return false;
	}

	spanLista.textContent = textoLista.value;
	spanLista.classList.add("spanLista");

	contenedorLista.classList.add("contenedorLista");
	spanLista.contentEditable = true;

	contenedorLista.appendChild(spanLista);

}
