function checkSauzal() {
    var selectElement = document.getElementById("unidad");
    var selectedIndex = selectElement.selectedIndex;
    var sauzalOption = selectElement.options[1]; // La opción de Sauzal es la segunda en la lista
  
    // Si no se ha seleccionado Sauzal, desactiva las otras opciones
    if (selectedIndex !== 1) {
      for (var i = 2; i < selectElement.options.length; i++) {
        selectElement.options[i].disabled = true;
      }
    } else {
      // Si Sauzal está seleccionado, activa las otras opciones
      for (var i = 2; i < selectElement.options.length; i++) {
        selectElement.options[i].disabled = false;
      }
    }
  }
  