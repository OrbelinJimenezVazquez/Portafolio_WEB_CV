// Seleccionamos el header
const header = document.querySelector("header");

// Función para verificar el scroll
function checkScroll() {
  // Si el scroll está más allá de 0 (es decir, el usuario ha hecho scroll)
  if (window.scrollY > 0) {
    header.classList.add("with-shadow");
    header.classList.remove("no-shadow");
  } else {
    header.classList.add("no-shadow");
    header.classList.remove("with-shadow");
  }
}

// Ejecutar la función cuando se haga scroll
window.addEventListener("scroll", checkScroll);

// Ejecutar la función para asegurarse de que el estado inicial sea correcto
checkScroll();
