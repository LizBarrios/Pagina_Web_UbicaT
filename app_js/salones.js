// Ejemplo de puntos de interés
var salones = {
    facultad1: [
      { nombre: "Salón 101", coords: { left: 200, top: 100 } },
      { nombre: "Salón 102", coords: { left: 250, top: 150 } }
      // Agrega más salones aquí
    ],
    facultad2: [
      { nombre: "Salón 201", coords: { left: 300, top: 200 } },
      { nombre: "Salón 202", coords: { left: 350, top: 250 } }
      // Agrega más salones aquí
    ]
  };
  
  // Función para mostrar los puntos de los salones en el mapa
  function mostrarSalones(facultad) {
    // Oculta todos los puntos de los salones
    document.querySelectorAll(".salon-marker").forEach(function (marker) {
      marker.style.display = "none";
    });
  
    // Muestra los puntos de los salones de la facultad seleccionada
    salones[facultad].forEach(function (salon) {
      var marker = document.getElementById("salon-" + salon.nombre.replace(" ", "-"));
      if (marker) {
        marker.style.display = "block";
      }
    });
  }
  
  // Añadir evento para mostrar los puntos de los salones cuando se selecciona una facultad
  document.getElementById("facultad").addEventListener("change", function () {
    var facultad = this.value;
    if (facultad) {
      mostrarSalones(facultad);
    }
  });
  