(() => {
  const menuBtn = document.querySelector('.js-open-menu');
  const menu = document.querySelector('.js-menu-container');
  const body = document.body;

  const toggleMenu = () => {
    const isMenuOpen = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', !isMenuOpen);
    menu.classList.toggle('is-open');
    body.classList.toggle('no-scroll', !isMenuOpen);
  };

  menuBtn.addEventListener('click', toggleMenu);
  
})();
