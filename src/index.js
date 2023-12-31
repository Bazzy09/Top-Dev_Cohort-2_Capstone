import { toggleHamburger, windowClick, closeMenu, handleClick } from './navbar.js';
import { displayHomeResults } from './home.js';

displayHomeResults();
handleClick();

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', toggleHamburger);

navLinks.forEach((menu) => menu.addEventListener('click', closeMenu));

window.addEventListener('click', windowClick);