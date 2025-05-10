document.addEventListener("DOMContentLoaded", () => {
  // Menu toggle
  const menuToggle = document.getElementById("menuToggle")
  const navLinks = document.getElementById("navLinks")

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show")
    })

    // Cerrar menú al hacer clic en un enlace
    const links = navLinks.querySelectorAll("a")
    links.forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("show")
      })
    })
  }

  // FAQ accordion
  const faqQuestions = document.querySelectorAll(".faq-question")

  faqQuestions.forEach((question) => {
    question.addEventListener("click", function () {
      // Toggle active class on the question
      this.classList.toggle("active")

      // Get the answer element
      const answer = this.nextElementSibling

      // Toggle active class on the answer
      if (answer.classList.contains("active")) {
        answer.classList.remove("active")
      } else {
        // Close all other answers
        document.querySelectorAll(".faq-answer").forEach((item) => {
          item.classList.remove("active")
        })

        // Open this answer
        answer.classList.add("active")
      }

      // Toggle chevron rotation
      const chevron = this.querySelector(".chevron")
      if (chevron) {
        if (answer.classList.contains("active")) {
          chevron.style.transform = "rotate(180deg)"
        } else {
          chevron.style.transform = "rotate(0)"
        }
      }
    })
  })

  // Beneficios flip effect
  const benefitCircles = document.querySelectorAll(".lifestyle-circle")

  benefitCircles.forEach((circle) => {
    circle.addEventListener("click", function () {
      this.classList.toggle("flipped")
    })
  })

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetElement = document.querySelector(targetId)

      if (targetElement) {
        const headerOffset = 100
        const elementPosition = targetElement.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        })
      }
    })
  })

  // Intersection Observer para animaciones al hacer scroll
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible")
        observer.unobserve(entry.target)
      }
    })
  }, observerOptions)

  // Observar secciones para animarlas
  const sections = document.querySelectorAll("section")
  sections.forEach((section) => {
    section.classList.add("fade-in")
    observer.observe(section)
  })

  // Añadir clase para animación inicial
  document.body.classList.add("loaded")
})

// Añadir estilos dinámicos para animaciones
const style = document.createElement("style")
style.textContent = `
    .fade-in {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .fade-in.visible {
        opacity: 1;
        transform: translateY(0);
    }
    
    body.loaded .home h1,
    body.loaded .ubicacion-home,
    body.loaded .precenciales-home,
    body.loaded .center-button {
        animation: fadeInUp 1s ease forwards;
        opacity: 0;
    }
    
    body.loaded .home h1 { animation-delay: 0.3s; }
    body.loaded .ubicacion-home { animation-delay: 0.5s; }
    body.loaded .precenciales-home { animation-delay: 0.7s; }
    body.loaded .center-button { animation-delay: 0.9s; }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`
document.head.appendChild(style)
