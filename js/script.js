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
document.addEventListener("DOMContentLoaded", () => {
  checkScroll();
  updateActiveSection();

  const btn = document.querySelector(".btn-container .btn");
  if (btn) {
    btn.addEventListener("mouseenter", explodeOnHover);
  }
});
