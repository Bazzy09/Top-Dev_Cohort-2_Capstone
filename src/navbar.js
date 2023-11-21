import { displayHomeResults } from "./home";
import { getShowsList } from "./tvshows";
import { getSearchShow } from "./showsearch";

/* eslint-disable no-undef */
/* eslint-disable consistent-return */
/* eslint-disable no-use-before-define */
/* eslint-disable prefer-template */
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-items');
const searchBtn = document.querySelector('.search-button');
const tvShows = document.querySelectorAll('#tvshows');
const homeBtn = document.querySelector('#home');
const content = document.querySelector('#content');

function clearContent() {
  content.innerHTML = '';
}

searchBtn.addEventListener('click', (event) => {
  event.preventDefault();
  clearContent();
  getSearchShow();
});

tvShows.forEach((tvshownav) => tvshownav.addEventListener('click', (event) => {
  event.preventDefault();
  clearContent();
  getShowsList();
}));

homeBtn.addEventListener('click', (event) => {
  event.preventDefault();
  clearContent();
  displayHomeResults();
});

function closeMenu() {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}

function toggleHamburger() {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
}

function windowClick(event) {
  if (
    !event.target.closest('.hamburger') && !event.target.closest('.nav-items')
  ) {
    closeMenu();
  }
}

let navLinks = document.getElementsByClassName('nav-link');

export function activeBtn(event) {

  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].classList.remove('active');
  }

  event.target.classList.add('active');  
}

export function handleClick() {
  for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', activeBtn);
  }
}

export { toggleHamburger, windowClick, closeMenu };