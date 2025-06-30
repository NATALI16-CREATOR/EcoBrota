  // Carrusel de imágenes
  let slideIndex = 0;
  const slides = document.querySelectorAll(".slide");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) slide.classList.add("active");
    });
  }

  function moveSlide(n) {
    slideIndex += n;
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    showSlide(slideIndex);
  }

  // Cambiar automáticamente cada 5 segundos
  setInterval(() => {
    moveSlide(1);
  }, 5000);

  // Menú hamburguesa
  document.addEventListener("DOMContentLoaded", () => {
    showSlide(slideIndex); // iniciar carrusel

    const btnMenu = document.getElementById('btnMenu');
    const navMenu = document.getElementById('navMenu');
    btnMenu.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  });

  // Mostrar/ocultar footer
  function toggleFooter() {
    const content = document.getElementById('footerContent');
    const toggleBtn = document.querySelector('.footer-toggle i');
    const isOpen = content.style.display === 'flex';

    content.style.display = isOpen ? 'none' : 'flex';
    toggleBtn.className = isOpen ? 'fas fa-chevron-up' : 'fas fa-chevron-down';
  }
