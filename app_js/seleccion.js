document.addEventListener("DOMContentLoaded", function() {
  // Ejemplo de puntos de interés
  var salones = {
    edificio1: {
      facultad1: [
        { nombre: "Salón 101", imagen: "./mapas/mapa1.png" },
        { nombre: "Salón 102", imagen: "./mapas/mapa2.png" },
        // Agrega más salones aquí para edificio1 y facultad1
      ],
      facultad2: [
        { nombre: "Salón 120", imagen: "./mapas/mapa3.png" },
        { nombre: "Salón 121", imagen: "./mapas/mapa4.png" },
        // Agrega más salones aquí para edificio1 y facultad2
      ],
    },
    edificio2: {
      facultad1: [
        { nombre: "Salón 101", imagen: "./mapas/mapa5.png" },
        { nombre: "Salón 102", imagen: "./mapas/mapa6.png" },
        // Agrega más salones aquí para edificio2 y facultad1
      ],
      facultad2: [
        { nombre: "Salón 120", imagen: "./mapas/mapa7.png" },
        { nombre: "Salón 121", imagen: "./mapas/mapa8.png" },
        // Agrega más salones aquí para edificio2 y facultad2
      ],
    },
    // Agrega más edificios y sus salones aquí
  };

  // Función para actualizar los salones según la facultad seleccionada
  function actualizarSalones() {
    var edificio = document.getElementById('ubicacion').value;
    var facultad = document.getElementById('facultad').value;
    var salonSelect = document.getElementById('salon');
    salonSelect.innerHTML = '<option value="">Seleccione un salón</option>';

    if (edificio && facultad && salones[edificio] && salones[edificio][facultad]) {
      salones[edificio][facultad].forEach(function(salon) {
        var option = document.createElement('option');
        option.value = salon.nombre;
        option.textContent = salon.nombre;
        salonSelect.appendChild(option);
      });
      salonSelect.disabled = false;
    } else {
      salonSelect.disabled = true;
      var imagenMapa = document.querySelector('.map-image');
      imagenMapa.src = "./mapas/mapa_ensenada.png";
    }
  }

  // Añadir evento para actualizar los salones cuando se selecciona una facultad
  document.getElementById('facultad').addEventListener('change', actualizarSalones);

  // Añadir evento para actualizar la imagen del mapa cuando se selecciona un salón
  document.getElementById('salon').addEventListener('change', function() {
    var salonNombre = this.value;
    var edificio = document.getElementById('ubicacion').value;
    var facultad = document.getElementById('facultad').value;

    if (edificio && facultad && salonNombre && salones[edificio] && salones[edificio][facultad]) {
      var salon = salones[edificio][facultad].find(function(s) {
        return s.nombre === salonNombre;
      });
      if (salon) {
        var imagenMapa = document.querySelector('.map-image');
        imagenMapa.src = salon.imagen;
      }
    }
  });

  // Añadir evento para actualizar la imagen del mapa cuando se cambia la ubicación
  document.getElementById('ubicacion').addEventListener('change', function() {
    var edificio = this.value;
    var facultad = document.getElementById('facultad').value;
    if (!edificio) {
      var imagenMapa = document.querySelector('.map-image');
      imagenMapa.src = "./mapas/mapa_ensenada.png";
    }
    actualizarSalones();
  });
});
