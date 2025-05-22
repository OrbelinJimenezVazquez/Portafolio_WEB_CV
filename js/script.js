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
function explodeOnHover() {
  // Puedes agregar el efecto que desees aquí. Por ejemplo, un pequeño cambio de escala:
  this.style.transform = "scale(1.1)";
  this.style.transition = "transform 0.3s ease-in-out";
}

document.addEventListener("DOMContentLoaded", () => {
  checkScroll();
  updateActiveSection();

  const btn = document.querySelector(".btn-container .btn");
  if (btn) {
    btn.addEventListener("mouseenter", explodeOnHover);
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
// ✅ AOS: Animaciones al hacer scroll
AOS.init({
  duration: 1000,
  once: true,
});

// ✅ ScrollReveal: apariciones suaves
ScrollReveal().reveal(".text-cont h1", {
  delay: 200,
  origin: "bottom",
  distance: "50px",
});

// ✅ Typed.js: texto animado
new Typed(".saludo", {
  strings: ["Hola,", "Bienvenido 👋", "Soy Orbelin."],
  typeSpeed: 60,
  backSpeed: 30,
  loop: true,
});

// ✅ ProgressBar.js: animación para habilidades (si la usas después)
const bar = new ProgressBar.Circle(".circle_b", {
  color: "#4eb8f8",
  strokeWidth: 6,
  trailWidth: 1,
  duration: 1400,
  text: {
    autoStyleContainer: false,
  },
  from: { color: "#aaa", width: 1 },
  to: { color: "#4eb8f8", width: 6 },
  step: (state, circle) => {
    circle.path.setAttribute("stroke", state.color);
    circle.setText(Math.round(circle.value() * 100) + "%");
  },
});
bar.animate(0.9); // 90%

// ✅ EmailJS (solo si tienes un form con ID #form-contacto)
emailjs.init("TU_USER_ID");

document
  .getElementById("form-contacto")
  ?.addEventListener("submit", function (e) {
    e.preventDefault();
    emailjs.sendForm("TU_SERVICE_ID", "TU_TEMPLATE_ID", this).then(
      () => {
        Swal.fire("¡Mensaje enviado!", "Gracias por contactarme.", "success");
        this.reset();
      },
      (error) => {
        Swal.fire("Error", "No se pudo enviar el mensaje.", "error");
        console.error(error);
      }
    );
  });
