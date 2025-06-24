let edad = 19;

function verificarEdad() {
  let mensaje = "";

  if (edad >= 18) {
    mensaje = "Puedes conducir";
  } else {
    mensaje = "No puedes conducir";
  }

  console.log(mensaje);

  document.getElementById("resultado").textContent = mensaje;
}
