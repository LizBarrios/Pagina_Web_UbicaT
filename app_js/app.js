document.addEventListener('DOMContentLoaded', function() {
  var mapContainer = document.querySelector('.map-container');
  var mapImage = document.querySelector('.map-image');
  var scale = 1;
  var maxScale = 3; // Máximo zoom permitido
  var zoomSpeed = 0.08; // Velocidad de zoom

  mapContainer.addEventListener('wheel', function(event) {
    event.preventDefault(); // Evita el comportamiento de desplazamiento predeterminado

    // Calcula la posición del mouse dentro del contenedor de la imagen
    var mouseX = event.clientX - mapContainer.offsetLeft;
    var mouseY = event.clientY - mapContainer.offsetTop;

    // Calcula el factor de cambio de escala basado en la dirección de la rueda del mouse
    var delta = event.deltaY > 0 ? -1 : 1;

    // Calcula el nuevo nivel de zoom aplicando el factor de velocidad de zoom
    var newScale = scale + delta * zoomSpeed;

    // Limita el zoom dentro del rango permitido
    newScale = Math.min(Math.max(newScale, 1), maxScale);

    // Calcula el cambio en la escala
    var scaleChange = newScale / scale;

    // Calcula el cambio en la posición del mouse después del zoom
    var deltaX = (mouseX - mapContainer.scrollLeft) * (scaleChange - 1);
    var deltaY = (mouseY - mapContainer.scrollTop) * (scaleChange - 1);

    // Aplica el cambio de escala y desplazamiento a la imagen
    mapImage.style.transformOrigin = mouseX + 'px ' + mouseY + 'px';
    mapImage.style.transform = 'scale(' + newScale + ')';
    mapContainer.scrollLeft += deltaX;
    mapContainer.scrollTop += deltaY;

    // Actualiza la escala actual
    scale = newScale;
  });
});
