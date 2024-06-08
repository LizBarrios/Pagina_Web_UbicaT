// Función para actualizar la imagen del mapa según el edificio seleccionado
function actualizarImagenMapa() {
    const edificioSeleccionado = document.getElementById("ubicacion").value;
    const salonSeleccionado = document.getElementById("salon").value;
    const imagenMapa = document.querySelector(".map-image");

    // Verifica si se ha seleccionado un edificio y un salón
    if (edificioSeleccionado && salonSeleccionado) {
        // Verifica si el edificio seleccionado es E55 y el salón seleccionado es 101
        if (edificioSeleccionado === "facultad1" && salonSeleccionado === "101") {
            // Actualiza la imagen del mapa con la ruta de la nueva imagen
            imagenMapa.src = "./mapas/mapa1.png";
        } else {
            // Si no se cumple la condición, muestra la imagen por defecto
            imagenMapa.src = "./mapa_ensenada.png";
        }
    }
}

// Evento que se activa cuando se selecciona un edificio
document.getElementById("ubicacion").addEventListener("change", actualizarImagenMapa);

// Evento que se activa cuando se selecciona un salón
document.getElementById("salon").addEventListener("change", actualizarImagenMapa);
