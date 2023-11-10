import { toggleHamburger, windowClick, closeMenu } from './navbar.js';

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', toggleHamburger);

navLinks.forEach((menu) => menu.addEventListener('click', closeMenu));

window.addEventListener('click', windowClick);