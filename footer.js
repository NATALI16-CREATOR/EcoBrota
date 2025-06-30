function toggleFooter() {
    const content = document.getElementById('footerContent');
    const toggleBtn = document.querySelector('.footer-toggle i');
    const isOpen = content.style.display === 'flex';

    content.style.display = isOpen ? 'none' : 'flex';
    toggleBtn.className = isOpen ? 'fas fa-chevron-up' : 'fas fa-chevron-down';
  }
    const btnMenu = document.getElementById('btnMenu');
  const navMenu = document.getElementById('navMenu');

  btnMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  }); 
