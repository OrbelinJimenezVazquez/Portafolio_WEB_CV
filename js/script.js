const header = document.querySelector("header");

// Detectar sombra
function checkScroll() {
  if (window.scrollY > 0) {
    header.classList.add("with-shadow");
  } else {
    header.classList.remove("with-shadow");
  }
}

// Detectar sección activa
function updateActiveSection() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("nav ul li a");
  let scrollY = window.pageYOffset;
  let found = false;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 150; // Ajuste para que se active un poco antes
    const sectionId = current.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(sectionId)) {
          link.classList.add("active");
        }
      });
      found = true;
    }
  });

  // Si no se encontró ninguna sección activa, quita todas las clases (esto arregla el "todo verde")
  if (!found) {
    navLinks.forEach((link) => link.classList.remove("active"));
  }
}

// Optimización con requestAnimationFrame
let ticking = false;

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      checkScroll();
      updateActiveSection();
      ticking = false;
    });
    ticking = true;
  }
});

const menuToggle = document.getElementById("menu-toggle");
const navList = document.getElementById("nav-list");
const menuIcon = document.querySelector(".fas.fa-bars"); // Icono de hamburguesa
const closeIcon = document.getElementById("close-icon"); // Icono de X

// Agregar evento de clic para mostrar u ocultar el menú
menuToggle.addEventListener("click", () => {
  // Alterna la clase active para mostrar u ocultar el menú
  navList.classList.toggle("active");

  // Alterna la visibilidad de los íconos
  if (navList.classList.contains("active")) {
    menuIcon.style.display = "none"; // Ocultar el ícono de hamburguesa
    closeIcon.style.display = "block"; // Mostrar el ícono de X
  } else {
    menuIcon.style.display = "block"; // Mostrar el ícono de hamburguesa
    closeIcon.style.display = "none"; // Ocultar el ícono de X
  }
});

//Inicio de libreríass

// ✅ AOS: animaciones al iniciar
AOS.init({
  duration: 1000,
  once: true,
});

// ✅ Typed.js: texto animado en la sección "saludo"
const typed = new Typed(".name", {
  strings: ["", "", "Orbelin Jimenez Vazquez."],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

// ✅ ScrollReveal: apariciones suaves en títulos
// Animar títulos de sección desde abajo
ScrollReveal().reveal(".text-cont h1", {
  origin: "bottom",
  distance: "60px",
  duration: 1000,
  delay: 200,
  easing: "ease-in-out",
  reset: false, // si quieres que solo se animen una vez
});

// Animar las cajas de habilidades desde la derecha
ScrollReveal().reveal(".skill", {
  origin: "right",
  distance: "80px",
  duration: 1200,
  interval: 150, // va uno por uno
  easing: "ease-in-out",
  reset: true,
});

ScrollReveal().reveal(".proye:nth-child(odd)", {
  origin: "left",
  distance: "60px",
  duration: 1300,
  interval: 150,
});

ScrollReveal().reveal(".proye:nth-child(even)", {
  origin: "right",
  distance: "60px",
  duration: 1300,
  interval: 150,
});

// Idiomas impares → desde la izquierda
ScrollReveal().reveal(".idioma:nth-child(odd)", {
  origin: "left",
  distance: "80px",
  duration: 1200,
  easing: "ease-in-out",
  reset: true,
});

// Idiomas pares → desde la derecha
ScrollReveal().reveal(".idioma:nth-child(even)", {
  origin: "right",
  distance: "80px",
  duration: 1200,
  easing: "ease-in-out",
  reset: true,
});

// Educación desde abajo
ScrollReveal().reveal("#edu .the_school", {
  origin: "bottom",
  distance: "80px",
  duration: 1200,
  interval: 200,
  easing: "ease-in-out",
  reset: true,
});

// Experiencia desde abajo
ScrollReveal().reveal("#experience .the_work", {
  origin: "bottom",
  distance: "80px",
  duration: 1200,
  interval: 200,
  easing: "ease-in-out",
  reset: true,
});

// Animar h1 de "welcome"
ScrollReveal().reveal(".welcome h1", {
  origin: "bottom",
  distance: "60px",
  duration: 1000,
  delay: 200,
  easing: "ease-in-out",
  reset: false,
});

// Animar párrafos de "welcome"
ScrollReveal().reveal(".welcome p", {
  origin: "bottom",
  distance: "40px",
  duration: 1000,
  delay: 400, // un poco después del h1
  easing: "ease-in-out",
  interval: 200,
  reset: false,
});
ScrollReveal().reveal(".welcome .btn", {
  origin: "bottom",
  distance: "30px",
  duration: 1000,
  delay: 800,
  easing: "ease-out",
  reset: true,
});
// Efecto "explode" al pasar el mouse
function explodeEffect(btn) {
  btn.style.transform = "scale(1.15)";
  btn.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
  btn.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.3)";
  setTimeout(() => {
    btn.style.transform = "scale(1)";
    btn.style.boxShadow = "none";
  }, 300);
}

// Ripple + acciones personalizadas
document.querySelectorAll("#btn-cv, #btn-proyectos").forEach((btn) => {
  // Hover (mouseenter)
  btn.addEventListener("mouseenter", () => explodeEffect(btn));

  // Click
  btn.addEventListener("click", function (e) {
    // Explotar al hacer clic
    explodeEffect(btn);

    // Ripple
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.left = `${e.offsetX}px`;
    ripple.style.top = `${e.offsetY}px`;
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);

    // SweetAlert solo para el botón del CV
    if (btn.id === "btn-cv") {
      e.preventDefault(); // Evita descarga directa
      Swal.fire({
        title: "¿Descargar CV?",
        text: "Puedes guardar una copia de mi CV en PDF.",
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "Sí, descargar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          const link = document.createElement("a");
          link.href = btn.getAttribute("href");
          link.download = "";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      });
    }
  });
});
