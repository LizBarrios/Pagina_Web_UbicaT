// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('map').setView([51.505, -0.09], 13); // Crea el mapa
  
    // Añade el mapa base
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  
    // Define las coordenadas de las zonas de salones para cada facultad
    var facultad1Zone = [
      [51.5, -0.09],
      [51.52, -0.1],
      [51.52, -0.12],
      [51.5, -0.12]
    ];
  
    var facultad2Zone = [
      [51.51, -0.12],
      [51.52, -0.1],
      [51.53, -0.12]
    ];
  
    var facultad3Zone = [
      [51.49, -0.08],
      [51.5, -0.06],
      [51.48, -0.07]
    ];
  
    // Crea polígonos para cada zona de salones
    var facultad1Polygon = L.polygon(facultad1Zone, {color: 'blue'});
    var facultad2Polygon = L.polygon(facultad2Zone, {color: 'green'});
    var facultad3Polygon = L.polygon(facultad3Zone, {color: 'red'});
  
    // Añade los polígonos al mapa, pero no los hace visibles inicialmente
    facultad1Polygon.addTo(map).setStyle({opacity: 0, fillOpacity: 0});
    facultad2Polygon.addTo(map).setStyle({opacity: 0, fillOpacity: 0});
    facultad3Polygon.addTo(map).setStyle({opacity: 0, fillOpacity: 0});
  
    // Cuando se seleccione una facultad, muestra la zona de salones correspondiente
    document.getElementById('facultad').addEventListener('change', function() {
      var selectedFacultad = this.value;
      if (selectedFacultad === 'facultad1') {
        facultad1Polygon.setStyle({opacity: 0.5, fillOpacity: 0.2});
        facultad2Polygon.setStyle({opacity: 0, fillOpacity: 0});
        facultad3Polygon.setStyle({opacity: 0, fillOpacity: 0});
      } else if (selectedFacultad === 'facultad2') {
        facultad1Polygon.setStyle({opacity: 0, fillOpacity: 0});
        facultad2Polygon.setStyle({opacity: 0.5, fillOpacity: 0.2});
        facultad3Polygon.setStyle({opacity: 0, fillOpacity: 0});
      } else if (selectedFacultad === 'facultad3') {
        facultad1Polygon.setStyle({opacity: 0, fillOpacity: 0});
        facultad2Polygon.setStyle({opacity: 0, fillOpacity: 0});
        facultad3Polygon.setStyle({opacity: 0.5, fillOpacity: 0.2});
      } else {
        // Si no se selecciona ninguna facultad, oculta todas las zonas de salones
        facultad1Polygon.setStyle({opacity: 0, fillOpacity: 0});
        facultad2Polygon.setStyle({opacity: 0, fillOpacity: 0});
        facultad3Polygon.setStyle({opacity: 0, fillOpacity: 0});
      }
    });
  
    // Añade un control de escala al mapa
    L.control.scale().addTo(map);
  
    // Aquí puedes agregar la lógica para obtener la ubicación del usuario y trazar un camino
    // desde su ubicación hasta la zona de salones seleccionada.
  });
  