document.addEventListener("DOMContentLoaded", function() {
    var salones = {
        facultad1: [
            {nombre: "Salón 101"},
            {nombre: "Salón 102"},
            // Agrega más salones aquí
        ],
        facultad2: [
            {nombre: "Salón 120"},
            {nombre: "Salón 121"},
            // Agrega más salones aquí
        ]
    };

    

    var salonMarker = L.marker([0, 0], {icon: L.divIcon({className: 'salon-marker'})}).addTo(map);
    var userMarker = L.marker([0, 0], {icon: L.divIcon({className: 'user-marker'})}).addTo(map);
    
    var drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);
    var drawControl = new L.Control.Draw({
        draw: {
            polyline: false,
            polygon: false,
            circle: false,
            marker: false,
            circlemarker: false
        },
        edit: {
            featureGroup: drawnItems
        }
    });
    map.addControl(drawControl);

    // Función para actualizar los salones según la facultad seleccionada
    function actualizarSalones() {
        var facultad = document.getElementById('facultad').value;
        var salonSelect = document.getElementById('salon');
        salonSelect.innerHTML = '<option value="">Seleccione un salón</option>';
        
        if (facultad && salones[facultad]) {
            salones[facultad].forEach(function(salon) {
                var option = document.createElement('option');
                option.value = salon.nombre;
                option.textContent = salon.nombre;
                salonSelect.appendChild(option);
            });
            salonSelect.disabled = false;
        } else {
            salonSelect.disabled = true;
        }
    }

    // Añadir evento para actualizar los salones cuando se selecciona una facultad
    document.getElementById('facultad').addEventListener('change', actualizarSalones);

    // Añadir evento para mostrar el punto del salón seleccionado en el mapa
    document.getElementById('salon').addEventListener('change', function() {
        var salonName = this.value;
        var facultad = document.getElementById('facultad').value;
        
        if (facultad && salonName) {
            var salon = salones[facultad].find(s => s.nombre === salonName);
            if (salon) {
                salonMarker.setLatLng([salon.coords.top, salon.coords.left]);
                // Crea un camino desde la ubicación del usuario hasta el salón seleccionado
                var userLatLng = userMarker.getLatLng();
                var salonLatLng = salonMarker.getLatLng();
                var polyline = L.polyline([userLatLng, salonLatLng], {color: 'blue'}).addTo(map);
                map.fitBounds(polyline.getBounds());
            }
        }
    });

    // Función para obtener la ubicación del usuario
    function obtenerUbicacionUsuario() {
        // Simplemente supongamos que la ubicación del usuario se encuentra en las coordenadas [latitud, longitud]
        var latitud = 0;
        var longitud = 0;
        userMarker.setLatLng([latitud, longitud]);
    }

    // Llama a la función para obtener la ubicación del usuario
    obtenerUbicacionUsuario();
});
