
// Mobile Menu Toggle
const toggleButton = document.getElementById('toggleSidebar');
  const sidebar = document.querySelector('.sidebar');
  const dashboard = document.querySelector('.dashboard');

  toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    dashboard.classList.toggle('open');
  });

  // Optional: close sidebar on menu item click (mobile only)
  const menuLinks = document.querySelectorAll('.sidebar .menu a');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
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