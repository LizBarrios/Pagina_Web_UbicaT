document.addEventListener("DOMContentLoaded", function() {
    var powerBtn = document.getElementById("powerBtn");
    var areaDeInteres = document.createElement("img"); // Crear la imagen de área de interés
    areaDeInteres.src = "./mapas/AreasDeInteres.png"; // Establecer la ruta de la imagen
    areaDeInteres.className = "area-de-interes"; // Asignar la clase para el estilo
    areaDeInteres.style.display = "none"; // Ocultar la imagen por defecto
    document.body.appendChild(areaDeInteres); // Agregar la imagen al cuerpo del documento

    // Función para cambiar el estado del botón y mostrar/ocultar la imagen
    function toggleImage() {
        // Cambiar el estado del botón
        powerBtn.classList.toggle("active");

        // Mostrar u ocultar la imagen de área de interés según el estado del botón
        if (powerBtn.classList.contains("active")) {
            areaDeInteres.style.display = "inline"; // Mostrar la imagen de área de interés
        } else {
            areaDeInteres.style.display = "none"; // Ocultar la imagen de área de interés
        }
    }

    // Agregar evento de clic al botón para cambiar su estado y mostrar/ocultar la imagen de área de interés
    powerBtn.addEventListener("click", toggleImage);

    // Activar la imagen de área de interés por defecto al cargar la página
    toggleImage();
});
