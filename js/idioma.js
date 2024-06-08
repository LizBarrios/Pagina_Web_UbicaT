var check = document.querySelector(".check");

check.addEventListener('click', idioma);

function idioma() {
    let id = check.checked;
    console.log(check.checked);

    let currentFile = location.pathname.split('/').pop();

    if (currentFile === "index.html" || currentFile === "index_en.html") {

        if (id) {
            location.href = "index_en.html";
        } else {
            location.href = "index.html";
        }
    }
    if (currentFile === "sesion.html" || currentFile === "sesion_en.html") {
        // Si está en sesion o sesion_en, redirigir a la página correspondiente
        if (id) {
            location.href = "sesion_en.html";
        } else {
            location.href = "sesion.html";
        }
    }
    if (currentFile === "indice.html" || currentFile === "indice_en.html") {
        // Si está en sesion o sesion_en, redirigir a la página correspondiente
        if (id) {
            location.href = "indice_en.html";
        } else {
            location.href = "indice.html";
        }
    }
}
