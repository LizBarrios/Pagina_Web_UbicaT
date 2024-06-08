var BaseDeDatos = {
  usuarios: [],
  passwordRequested: false, // Variable para verificar si se solicitó la contraseña

  cargarUsuarios: function () {
    fetch('usuarios.csv')
      .then(response => response.text())
      .then(data => {
        this.usuarios = this.parseCSV(data);
      })
      .catch(error => {
        console.error('Error al leer el archivo CSV:', error);
        alert("Error al cargar la base de datos de usuarios.");
      });
  },

  verificarUsuario: function (username) {
    if (this.usuarios.length === 0) {
      this.cargarUsuarios();
    } else {
      const usuarioValido = this.usuarios.find(user =>
        user.username.trim() === username.trim() || user.email.trim() === username.trim()
      );

      if (usuarioValido) {
        if (usuarioValido.special === 'true') {
          if (!this.passwordRequested) { // Verificar si la contraseña ya se solicitó
            const storedPassword = usuarioValido.password;
            const password = prompt("Por favor ingrese la contraseña:");

            if (password === storedPassword) {
              this.passwordRequested = true; // Establecer que la contraseña ya se solicitó
              window.location.href = "indice.html";
            } else {
              alert("Contraseña incorrecta. Por favor inténtelo de nuevo.");
            }
          }
        } else {
          window.location.href = "indice.html"; // Redirigir a la página de índice para usuarios normales
        }
      } else {
        const inputBox = document.querySelector(".input-box");
        const existingErrors = inputBox.querySelectorAll(".error-message");
        existingErrors.forEach(error => inputBox.removeChild(error));

        const errorElement = document.createElement("div");
        errorElement.innerText = "Usuario incorrecto o correo electrónico inválido.";
        errorElement.style.color = "red";
        errorElement.classList.add("error-message");
        inputBox.appendChild(errorElement);

        errorElement.classList.add("blink");
      }
    }
  },

  parseCSV: function (csv) {
    const usuarios = [];
    const lines = csv.split(/\r?\n/);

    for (let i = 1; i < lines.length; i++) {
      const columns = lines[i].split(',');
      if (columns.length === 4) {
        const username = columns[0];
        const email = columns[1];
        const password = columns[2];
        const special = columns[3];
        usuarios.push({ username, email, password, special });
      } else {
        console.error('Error al leer la fila', i + 1, 'en el archivo CSV:', lines[i]);
        alert('Error al leer la fila ' + (i + 1) + ' en el archivo CSV.');
      }
    }

    return usuarios;
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();

    BaseDeDatos.verificarUsuario(username);
  });

  BaseDeDatos.cargarUsuarios();
});
