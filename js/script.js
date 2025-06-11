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
//Funcion de el menu hamburguesa
const menuToggle = document.querySelector(".menu-toggle");
const navList = document.getElementById("nav-list");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navList.classList.toggle("visible");
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
  loop: false,
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
ScrollReveal().reveal("#i_am_social ul li, .social_icons", {
  origin: "bottom",
  distance: "70px",
  duration: 1000,
  interval: 170,
  easing: "ease-out",
  reset: true,
});
// Animar las cajas de habilidades desde la derecha
ScrollReveal().reveal(".skill", {
  origin: "right",
  distance: "80px",
  duration: 1200,
  interval: 150, // va uno por uno
  easing: "ease-in-out",
  reset: false,
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
  duration: 800,
  easing: "ease-in-out",
  reset: false,
});

// Idiomas pares → desde la derecha
ScrollReveal().reveal(".idioma:nth-child(even)", {
  origin: "right",
  distance: "180px",
  duration: 800,
  easing: "ease-in-out",
  reset: false,
});

// Educación desde abajo
ScrollReveal().reveal("#edu .the_school", {
  origin: "bottom",
  distance: "80px",
  duration: 1200,
  interval: 200,
  easing: "ease-in-out",
  reset: false,
});

// Experiencia desde abajo
ScrollReveal().reveal("#experience .the_work", {
  origin: "bottom",
  distance: "80px",
  duration: 1200,
  interval: 200,
  easing: "ease-in-out",
  reset: false,
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
  reset: false,
});
// Animar sección de contacto al hacer scroll
ScrollReveal().reveal("#contacto .text-cont", {
  origin: "bottom",
  distance: "60px",
  duration: 800,
  delay: 200,
  easing: "ease-in-out",
  reset: false,
});
// Animar seccion de footer

ScrollReveal().reveal("footer p, .footer-links a", {
  origin: "bottom",
  distance: "180px",
  duration: 1000,
  interval: 350,
  easing: "ease-out",
  reset: false,
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

const btnPro = document.getElementById("btn-pro");

if (btnPro) {
  // Explode al pasar el mouse
  btnPro.addEventListener("mouseenter", () => {
    btnPro.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
    btnPro.style.transform = "scale(1.15)";
    btnPro.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.3)";

    setTimeout(() => {
      btnPro.style.transform = "scale(1)";
      btnPro.style.boxShadow = "none";
    }, 300);
  });

  // Ripple al hacer clic
  btnPro.addEventListener("click", function (e) {
    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.left = `${e.offsetX}px`;
    ripple.style.top = `${e.offsetY}px`;
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
}

//Mi barra de progreso en idiomas
function crearCirculo(selector, porcentaje, color) {
  const elemento = document.querySelector(selector);
  if (elemento) {
    elemento.innerHTML = ""; // limpia si ya existía
    const barra = new ProgressBar.Circle(selector, {
      color: color,
      strokeWidth: 6,
      duration: 1600,
      easing: "easeInOut",
      trailColor: "#eee",
      trailWidth: 2,
      text: {
        value: Math.round(porcentaje * 100) + "%",
        style: {
          color: "#272727",
          fontWeight: "bold",
          fontSize: "14px",
          position: "absolute",
          left: "50%",
          top: "50%",
          padding: 0,
          margin: 0,
          transform: "translate(-50%, -50%)",
        },
      },
    });
    barra.animate(porcentaje);
  }
}

ScrollReveal().reveal("#lenguaje", {
  beforeReveal: () => {
    // Siempre se animan al hacer scroll hacia la sección
    crearCirculo("#circle-es", 1.0, "#4eb8f8");
    crearCirculo("#circle-en", 0.4, "#4caf50");
  },
  reset: true, // Para que se vuelva a ejecutar cada vez que haces scroll
});

// Mostrar sección de tecnologías circulo
ScrollReveal().reveal("#tech .tech", {
  beforeReveal: () => {
    crearCirculo("#circle-html", 1.0, "#e44d26"); // 100% - HTML (naranja)
    crearCirculo("#circle-css", 0.95, "#264de4"); // 95% - CSS (azul)
    crearCirculo("#circle-js", 0.9, "#f7df1e"); // 90% - JS (amarillo)
    crearCirculo("#circle-node", 0.7, "#68a063"); // 70% - Node.js (verde)
    crearCirculo("#circle-react", 0.6, "#61dbfb"); // 60% - React (celeste)
  },

  reset: true, // para que se reinicie si vuelves a scrollear
});
