const fila = document.querySelector('.barra-carrusel');
const fila2 = document.querySelector('.barra-carrusel2');

const peliculas = document.querySelectorAll('.pelicula');
const peliculas2 = document.querySelectorAll('.pelicula2');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

const flechaIzquierda2 = document.getElementById('flecha-izquierda2');
const flechaDerecha2 = document.getElementById('flecha-derecha2');

//---------------------------------------------------------------------------------------

// Event Flecha Derecha 
flechaDerecha.addEventListener('click', () => {
	fila.scrollLeft += fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.nextSibling){
		indicadorActivo.nextSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// Event Flecha Izquierda
flechaIzquierda.addEventListener('click', () => {
	fila.scrollLeft -= fila.offsetWidth;

	const indicadorActivo = document.querySelector('.indicadores .activo');
	if(indicadorActivo.previousSibling){
		indicadorActivo.previousSibling.classList.add('activo');
		indicadorActivo.classList.remove('activo');
	}
});

// Paginacion 
const numeroPaginas = Math.ceil(peliculas.length / 5);
for(let i = 0; i < numeroPaginas; i++){
	const indicador = document.createElement('button');

	if(i === 0){
		indicador.classList.add('activo');
	}

	document.querySelector('.indicadores').appendChild(indicador);
	indicador.addEventListener('click', (e) => {
		fila.scrollLeft = i * fila.offsetWidth;

		document.querySelector('.indicadores .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}

// Hover
peliculas.forEach((pelicula) => {
	pelicula.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

fila.addEventListener('mouseleave', () => {
	peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
});


// -----------------------------------------------------------------------------

// Event Flecha Derecha 2
flechaDerecha2.addEventListener('click', () => {
	fila2.scrollLeft += fila2.offsetWidth;

	const indicadorActivo2 = document.querySelector('.indicadores2 .activo');
	if(indicadorActivo2.nextSibling){
		indicadorActivo2.nextSibling.classList.add('activo');
		indicadorActivo2.classList.remove('activo');
	}
});

// Event Flecha Izquierda 2
flechaIzquierda2.addEventListener('click', () => {
	fila2.scrollLeft -= fila2.offsetWidth;

	const indicadorActivo2 = document.querySelector('.indicadores2 .activo');
	if(indicadorActivo2.previousSibling){
		indicadorActivo2.previousSibling.classList.add('activo');
		indicadorActivo2.classList.remove('activo');
	}
});

// Paginacion 2
const numeroPaginas2 = Math.ceil(peliculas2.length / 5);
for(let i = 0; i < numeroPaginas2; i++){
	const indicador2 = document.createElement('button');

	if(i === 0){
		indicador2.classList.add('activo');
	}

	document.querySelector('.indicadores2').appendChild(indicador2);
	indicador2.addEventListener('click', (e) => {
		fila2.scrollLeft = i * fila2.offsetWidth;

		document.querySelector('.indicadores2 .activo').classList.remove('activo');
		e.target.classList.add('activo');
	});
}

// Hover 2
peliculas2.forEach((pelicula2) => {
	pelicula2.addEventListener('mouseenter', (e) => {
		const elemento2 = e.currentTarget;
		setTimeout(() => {
			peliculas2.forEach(pelicula2 => pelicula2.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

fila.addEventListener('mouseleave', () => {
	peliculas2.forEach(pelicula2 => pelicula2.classList.remove('hover'));
});