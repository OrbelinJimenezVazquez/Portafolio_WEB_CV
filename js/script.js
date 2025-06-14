// ==============================================
// =========== CONSTANTES Y SELECTORES ==========
// ==============================================
const header = document.querySelector("header");
const menuToggle = document.querySelector(".menu-toggle");
const navList = document.getElementById("nav-list");
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector("i");
const root = document.documentElement;

// ==============================================
// =========== FUNCIONES DE SCROLL ==============
// ==============================================

// Controlar sombra del header al hacer scroll
function handleScrollEffects() {
  header.classList.toggle("with-shadow", window.scrollY > 0);
}

// Actualizar sección activa en el menú
function updateActiveSection() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("nav ul li a");
  let activeFound = false;
  const scrollY = window.scrollY + 150; // Offset para activar antes

  sections.forEach(section => {
    const { offsetTop: top, offsetHeight: height, id } = section;
    
    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href").includes(id));
      });
      activeFound = true;
    }
  });

  if (!activeFound) {
    navLinks.forEach(link => link.classList.remove("active"));
  }
}

// Optimización de eventos de scroll
function setupScrollListener() {
  let ticking = false;
  
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleScrollEffects();
        updateActiveSection();
        ticking = false;
      });
      ticking = true;
    }
  });
}

// ==============================================
// ========== FUNCIONES DE INTERACCIÓN ==========
// ==============================================

// Menú hamburguesa
function setupMenuToggle() {
  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navList.classList.toggle("visible");
  });
}

// Efecto de explosión para botones
function createExplodeEffect(btn) {
  btn.style.transform = "scale(1.15)";
  btn.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.3)";
  
  setTimeout(() => {
    btn.style.transform = "";
    btn.style.boxShadow = "";
  }, 300);
}

// Efecto ripple para botones
function createRippleEffect(e, btn) {
  const ripple = document.createElement("span");
  ripple.className = "ripple";
  ripple.style.left = `${e.offsetX}px`;
  ripple.style.top = `${e.offsetY}px`;
  btn.appendChild(ripple);
  
  setTimeout(() => ripple.remove(), 600);
}

// Manejar descarga de CV
function handleCVDownload(e, btn) {
  e.preventDefault();
  
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
      link.href = btn.href;
      link.download = "";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  });
}

// Configurar botones interactivos
function setupInteractiveButtons() {
  document.querySelectorAll("#btn-cv, #btn-proyectos, .btn-pro").forEach(btn => {
    // Efecto hover
    btn.addEventListener("mouseenter", () => createExplodeEffect(btn));
    
    // Efecto click
    btn.addEventListener("click", (e) => {
      createExplodeEffect(btn);
      createRippleEffect(e, btn);
      
      if (btn.id === "btn-cv") {
        handleCVDownload(e, btn);
      }
    });
  });
}

// ==============================================
// =========== MANEJO DEL TEMA OSCURO ===========
// ==============================================

// Mejorar el manejo del tema oscuro
function setupThemeToggle() {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  const currentTheme = localStorage.getItem('theme') || 
                      (prefersDark.matches ? 'dark' : 'light');
  
  // Aplicar tema inicial
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
  }

  // Manejar cambios en las preferencias del sistema
  prefersDark.addListener(e => {
    if (!localStorage.getItem('theme')) {
      document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
      themeIcon.classList.replace(e.matches ? 'fa-moon' : 'fa-sun', 
                                e.matches ? 'fa-sun' : 'fa-moon');
    }
  });

  // Manejar clic en el botón
  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.hasAttribute('data-theme');
    
    document.documentElement.classList.add('theme-transition');
    themeIcon.classList.add('fade-out');
    
    setTimeout(() => {
      if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
      }
      
      themeIcon.classList.remove('fade-out');
      setTimeout(() => {
        document.documentElement.classList.remove('theme-transition');
      }, 300);
    }, 200);
  });
}
// ==============================================
// ========== ANIMACIONES Y EFECTOS =============
// ==============================================

function setupAnimations() {
  // Inicializar AOS (Animate On Scroll)
AOS.init({
  duration: 800,
  once: true,
  offset: 120,
  easing: 'ease-out-quad',
  disable: window.innerWidth < 768
});

  // Animación de escritura del nombre
  new Typed(".name", {
    strings: ["", "", "Orbelin Jimenez Vazquez."],
    typeSpeed: 100,
    backSpeed: 100,
    loop: false,
  });

  // Configurar ScrollReveal
  const sr = ScrollReveal({
  reset: false,
  distance: '40px',
  duration: 1000,
  delay: 200,
  mobile: false
});
  
  // Animaciones comunes
  const commonReveal = {
    origin: "bottom",
    distance: "60px",
    duration: 1000,
    easing: "ease-in-out"
  };
  
  // Aplicar animaciones a elementos
  sr.reveal(".text-cont h1, #i_am_social ul li, .social_icons, .welcome h1, #contacto .text-cont", commonReveal);
  
  // Animaciones específicas
  sr.reveal(".skill", { ...commonReveal, origin: "right", interval: 150 });
  sr.reveal(".proye:nth-child(odd)", { ...commonReveal, origin: "left" });
  sr.reveal(".proye:nth-child(even)", { ...commonReveal, origin: "right" });
  sr.reveal(".idioma:nth-child(odd)", { ...commonReveal, origin: "left", distance: "80px" });
  sr.reveal(".idioma:nth-child(even)", { ...commonReveal, origin: "right", distance: "180px" });
  sr.reveal("#edu .the_school, #experience .the_work", { ...commonReveal, interval: 200 });
  sr.reveal("footer p, .footer-links a", { ...commonReveal, interval: 350, easing: "ease-out" });
  
  // Animaciones con delays
  sr.reveal(".welcome p", { ...commonReveal, delay: 200 });
  sr.reveal(".welcome .btn", { ...commonReveal, delay: 400, distance: "30px" });
}

// Barras de progreso para habilidades
function setupProgressBars() {
  function createCircle(selector, percentage, color) {
    const element = document.querySelector(selector);
    if (!element) return;
    
    element.innerHTML = "";
    
    new ProgressBar.Circle(selector, {
      color: color,
      strokeWidth: 6,
      duration: 1600,
      easing: "easeInOut",
      trailColor: "#eee",
      trailWidth: 2,
      text: {
        value: `${Math.round(percentage * 100)}%`,
        style: {
          color: "#272727",
          fontWeight: "bold",
          fontSize: "14px",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        },
      },
    }).animate(percentage);
  }

  // Configurar revelación con ScrollReveal
  ScrollReveal().reveal("#lenguaje", {
    beforeReveal: () => {
      createCircle("#circle-es", 1.0, "#4eb8f8");
      createCircle("#circle-en", 0.4, "#4caf50");
    },
    reset: true
  });

  ScrollReveal().reveal("#tech .tech", {
    beforeReveal: () => {
      createCircle("#circle-html", 1.0, "#e44d26");
      createCircle("#circle-css", 0.95, "#264de4");
      createCircle("#circle-js", 0.9, "#f7df1e");
      createCircle("#circle-node", 0.7, "#68a063");
      createCircle("#circle-react", 0.6, "#61dbfb");
    },
    reset: true
  });
}

// ==============================================
// ========== INICIALIZACIÓN GENERAL ============
// ==============================================

function init() {
  setupScrollListener();
  setupMenuToggle();
  setupInteractiveButtons();
  setupThemeToggle();
  setupAnimations();
  setupProgressBars();
}

// Iniciar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", init);