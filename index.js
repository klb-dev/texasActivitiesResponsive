const faBars = document.getElementById('fa-bars');
const faXmark = document.getElementById('fa-xmark');


faBars.addEventListener('click', () => {
  openNavMenu();
});

faXmark.addEventListener('click', () => {
    closeNavMenu();
  });

function openNavMenu() {
    const navMenu = document.querySelector('.mobile-nav-menu');
    navMenu.style.display = 'block';
}

function closeNavMenu() {
    const navMenu = document.querySelector('.mobile-nav-menu');
    navMenu.style.display = 'none';
}