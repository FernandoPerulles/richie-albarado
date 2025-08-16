const carruselContenedor = document.querySelector('.carrusel-contenedor');
const imagenes = document.querySelectorAll('.carrusel-contenedor img');
const anteriorBtn = document.querySelector('.anterior');
const siguienteBtn = document.querySelector('.siguiente');

let indiceActual = 0;

function mostrarImagen(indice) {
    const ancho = imagenes[0].clientWidth;
    carruselContenedor.style.transform = `translateX(${-indice * ancho}px)`;
}

siguienteBtn.addEventListener('click', () => {
    indiceActual = (indiceActual + 1) % imagenes.length;
    mostrarImagen(indiceActual);
});

anteriorBtn.addEventListener('click', () => {
    indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
    mostrarImagen(indiceActual);
});

// Ajustar el carrusel si cambia el tamaño de la ventana
window.addEventListener('resize', () => mostrarImagen(indiceActual));
