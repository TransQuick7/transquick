const toggleButton = document.getElementById('toggleSidebar');
      const sidebar = document.querySelector('.sidebar');
      const dashboard = document.querySelector('.dashboard');

      toggleButton.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        dashboard.classList.toggle('open');
      });

      const links = document.querySelectorAll('.menu a');
      const sections = document.querySelectorAll('.section');

      links.forEach(link => {
        link.addEventListener('click', e => {
          e.preventDefault();
          links.forEach(l => l.classList.remove('active'));
          link.classList.add('active');

          sections.forEach(section => section.classList.remove('active'));
          const target = link.getAttribute('data-section');
          document.getElementById(target).classList.add('active');

          // On mobile, close menu
          if (window.innerWidth <= 768) {
            sidebar.classList.remove('open');
            dashboard.classList.remove('open');
          }
        });
      });

          // ✅ Close sidebar when clicking outside (mobile only)
document.addEventListener('click', (event) => {
  const isClickInsideSidebar = sidebar.contains(event.target);
  const isClickOnToggle = toggleButton.contains(event.target);

  if (!isClickInsideSidebar && !isClickOnToggle && sidebar.classList.contains('open')) {
    sidebar.classList.remove('open');
    dashboard.classList.remove('open');
  }
});