// navbar fixed
window.onscroll = () => {
  const header = document.querySelector('header'); // ambil tag header
  const fixedNav = header.offsetTop; // ambil jarak header ke atas.
  const linkText = document.querySelectorAll('header nav a'); // ambil semua link

  if (window.scrollY > fixedNav) {
    /* bawah */
    header.classList.add('navbar-fixed');
    linkText.forEach((link) => {
      link.classList.add('lg:group-hover:text-white');
    });
  } else {
    /* atas */
    header.classList.remove('navbar-fixed');
    linkText.forEach((link) => {
      link.classList.remove('lg:group-hover:text-white');
    });
  }
}

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('nav.nav-menu');
const hamburgerSpan = document.querySelectorAll('#hamburger span');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger-active');
  navMenu.classList.toggle('scale-0');
  navMenu.classList.toggle('scale-100');
  navMenu.classList.toggle('opacity-0');
});


// Klik di luar hamburger dan nav-menu
window.addEventListener('click', (e) => {
  if (e.target != hamburger && e.target != navMenu && e.target != hamburgerSpan[0] && e.target != hamburgerSpan[1] && e.target != hamburgerSpan[2]) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.remove('scale-100');
    navMenu.classList.add('scale-0');
    navMenu.classList.remove('opacity-100');
    navMenu.classList.add('opacity-0');
  }
});

// Dark Mode Toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', () => {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else{
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
})




// toggle circle mode
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true;
} else {
  darkToggle.checked = false;
}