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
  const navLinks = document.querySelectorAll("#nav-list li a");
  let currentSection = "";
  const offset = 150; // Ajusta este valor según necesites

  // Verifica cada sección para ver cuál está activa
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    
    if (window.scrollY >= sectionTop - offset && 
        window.scrollY < sectionTop + sectionHeight - offset) {
      currentSection = section.id;
    }
  });

  // Actualiza las clases active en los enlaces
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
  console.log("Sección activa:", currentSection); // Depuración
  navLinks.forEach(link => {
    console.log(`Enlace: ${link.getAttribute('href')}, Coincide: ${link.getAttribute('href') === `#${currentSection}`}`);
  });
}

// Optimización de eventos de scroll
function setupScrollListener() {
  let isScrolling;
  
  window.addEventListener('scroll', () => {
    // Cancela el timeout anterior
    window.clearTimeout(isScrolling);
    
    // Configura un nuevo timeout
    isScrolling = setTimeout(() => {
      handleScrollEffects();
      updateActiveSection();
    }, 66); // ~15fps para mejor rendimiento
  }, false);
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
  btn.style.transform = "scale(1.1)";
  btn.style.boxShadow = "0 4px 18px var(--shadow-color)";
  
  setTimeout(() => {
    btn.style.transform = "";
    btn.style.boxShadow = "";
  }, 250);
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
  document.querySelectorAll("#btn-cv, #btn_contact, .btn-pro, .btn ").forEach(btn => {
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
  once: true, // No reiniciar animaciones al hacer scroll 
  offset: 120, // Desplazamiento para activar animaciones
  easing: 'ease-out-quad', //
  disable: window.innerWidth < 768 ,
  loop: false, // Desactivar bucle para animaciones
});

  // Animación de escritura del nombre
  new Typed(".name", {
    strings: ["", "", "Orbelin Jimenez Vazquez."],
    typeSpeed: 80,
    backSpeed: 20,
    loop: false,
  });

  // Configurar ScrollReveal
  const sr = ScrollReveal({
  reset: false,
  viewFactor: 0.2, // Factor de visibilidad para activar la animación
  origin: 'bottom', // Dirección de la animación
  distance: '100px', // Distancia de desplazamiento
  interval: 100, // Intervalo entre animaciones
  easing: 'ease-in', // Efecto de aceleración
  duration: 1000,
  delay: 200,
  mobile: true
});
  
  // Animaciones comunes
  const commonReveal = { // Configuración común para todas las animaciones
    viewFactor: 0.2, // Factor de visibilidad para activar la animación
    origin: "bottom", // Dirección de la animación
    distance: "60px", // Distancia de desplazamiento
    interval: 100, // Intervalo entre animaciones
    reset: false, // No reiniciar animaciones al hacer scroll 
    duration: 1000, // Duración de la animación
    delay: 100, // Retraso antes de iniciar la animación
    easing: "ease-in-out", // Efecto de aceleración
    mobile: true // Habilitar animaciones en dispositivos móviles

  };



  // Aplicar animaciones a elementos
  sr.reveal(".text-cont h1, #i_am_social ul li, .social_icons, .welcome_text, #contacto .text-cont", commonReveal);
  
  // Animaciones específicas
  sr.reveal(".skill", { ...commonReveal, origin: "right", interval: 150 });
  sr.reveal(".proye:nth-child(odd)", { ...commonReveal, origin: "left" });
  sr.reveal(".proye:nth-child(even)", { ...commonReveal, origin: "right" });
  sr.reveal(".idioma:nth-child(odd)", { ...commonReveal, origin: "left", distance: "180px",reset:false });
  sr.reveal(".idioma:nth-child(even)", { ...commonReveal, origin: "right", distance: "180px", reset:false});
  sr.reveal("#tech .tech", { ...commonReveal, origin: "bottom", distance: "85px" });
  sr.reveal("#edu .the_school, #experience .the_work", { ...commonReveal, interval: 200 });
  sr.reveal("#contacto .formulario", { ...commonReveal, distance: "100px" });
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
      strokeWidth: 4,
      duration: 1100,
      easing: "easeInOut",
      trailColor: "#ffff ",
      trailWidth: 1.5,
      text: {
        value: `${Math.round(percentage * 100)}%`,
        style: {
          color: "var(--text-color)",
          fontWeight: "bold",
          fontSize: "clamp(1.2rem, 2vw, 1.45rem)",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)"
        },
      },
    }).animate(percentage);
  }

  // Configurar revelación con ScrollReveal
  ScrollReveal().reveal("#lenguaje .idioma", {
    beforeReveal: () => {
      createCircle("#circle-es", 1.0, "#4eb8f8");
      createCircle("#circle-en", 0.3, "#4caf50");
    },
    reset: false
  });

  ScrollReveal().reveal("#tech .tech", {
    beforeReveal: () => {
      createCircle("#circle-html", 1.0, "#e44d26");
      createCircle("#circle-css", 0.75, "#264de4");
      createCircle("#circle-js", 0.4, "#f7df1e");
      createCircle("#circle-node", 0.2, "#68a063");
      createCircle("#circle-react", 0.3, "#61dbfb");
    },
    reset: false
  });
}

//Opciones de lazy loading para imágenes
// Observador para imágenes lazy
const lazyImages = document.querySelectorAll('img[loading="lazy"]');

const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.classList.add('loaded');
      imageObserver.unobserve(img);
    }
  });
});

lazyImages.forEach(img => imageObserver.observe(img));

// Registrar Service Worker para PWA sirve para cachear recursos y mejorar la carga
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registrado:', registration.scope);
      })
      .catch(error => {
        console.log('Error al registrar SW:', error);
      });
  });
}
// ==============================================
// ========== MANEJO DEL FORMULARIO =============
// ==============================================

const contactForm = document.querySelector('.formulario');

function setupFormValidation() {
  if (!contactForm) return;

  // Validación en tiempo real para cada campo
  contactForm.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('input', handleFieldValidation);
    input.addEventListener('blur', handleFieldValidation);
  });

  // Manejo del envío del formulario
  contactForm.addEventListener('submit', handleFormSubmit);
}

function handleFieldValidation(e) {
  const field = e.target;
  const fieldContainer = field.parentNode;
  
  // Limpiar estados anteriores
  field.classList.remove('valid', 'invalid');
  
  // Validar solo si el campo no está vacío
  if (field.value.trim() !== '') {
    if (field.checkValidity()) {
      field.classList.add('valid');
    } else {
      field.classList.add('invalid');
    }
  }
}

async function handleFormSubmit(e) {
  e.preventDefault();
  const submitBtn = contactForm.querySelector('button[type="submit"]');
  
  try {
    // Mostrar estado de carga
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    
    // Validar todos los campos antes de enviar
    let isFormValid = true;
    contactForm.querySelectorAll('[required]').forEach(field => {
      if (!field.checkValidity()) {
        field.classList.add('invalid');
        isFormValid = false;
      }
    });
    
    if (!isFormValid) {
      throw new Error('Por favor completa todos los campos requeridos correctamente');
    }
    if ('vibrate' in navigator) {
      navigator.vibrate(50); // Vibración corta al enviar
    }
    // Mostrar alerta de carga
    const loadingAlert = Swal.fire({
      title: 'Enviando mensaje...',
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading()
    });
    
    // Enviar datos del formulario (usando FormSubmit.co)
    const formData = new FormData(contactForm);
    const response = await fetch(contactForm.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });
    
    await loadingAlert.close();
    
    if (response.ok) {
      await Swal.fire({
        icon: 'success',
        title: '¡Mensaje enviado!',
        text: 'Gracias por contactarme. Te responderé lo antes posible.',
        confirmButtonText: 'Entendido'
      });
      
      // Resetear formulario
      contactForm.reset();
      contactForm.querySelectorAll('input, textarea').forEach(field => {
        field.classList.remove('valid');
      });
    } else {
      throw new Error('Error al enviar el mensaje');
    }
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: error.message || 'Hubo un problema al enviar tu mensaje. Por favor inténtalo de nuevo.',
      confirmButtonText: 'Entendido'
    });
    console.error('Error:', error);
  } finally {
    submitBtn.classList.remove('loading');
    submitBtn.disabled = false;
  }
}
// Mejorar la validación de campos mientras el usuario escribe
function setupLiveValidation() {
  const fields = contactForm.querySelectorAll('input, textarea');
  
  fields.forEach(field => {
    field.addEventListener('input', () => {
      if (field.value.trim() !== '') {
        if (field.checkValidity()) {
          field.style.borderColor = '#51cf66'; // Verde para válido
        } else {
          field.style.borderColor = '#ff6b6b'; // Rojo para inválido
        }
      } else {
        field.style.borderColor = ''; // Resetear si está vacío
      }
    });
  });
}

// Efecto "hover" táctil para dispositivos móviles
function setupProjectHover() {
  const proyectos = document.querySelectorAll('.proye');
  
  proyectos.forEach(proyecto => {
    proyecto.addEventListener('touchstart', () => {
      proyecto.classList.add('hover-effect');
    });
    
    proyecto.addEventListener('touchend', () => {
      setTimeout(() => {
        proyecto.classList.remove('hover-effect');
      }, 300);
    });
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
  setupFormValidation();
  updateActiveSection();
  setupLiveValidation();
}
// Iniciar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", init);
