
const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('nav-menu');
  const icon = document.getElementById('menu-icon');

  toggle.addEventListener('click', () => {
    menu.classList.toggle('active');

    // Toggle icon class
    if (menu.classList.contains('active')) {
      icon.classList.remove('ri-menu-line');
      icon.classList.add('ri-close-line');
    } else {
      icon.classList.remove('ri-close-line');
      icon.classList.add('ri-menu-line');
    }
  });

