/* eslint-disable no-undef */
/* eslint-disable consistent-return */
/* eslint-disable no-use-before-define */
/* eslint-disable prefer-template */
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-items');
const searchBtn = document.querySelector('.search-button');

searchBtn.addEventListener('click', (event) => {
  event.preventDefault();
  getSearchShow();
});

async function getSearchShow() {
  try {
    const searchInput = document.getElementById('search').value;
    const url = 'https://api.tvmaze.com/';
    if (searchInput !== '') {
      const response = await fetch(`${url}search/shows?q=${searchInput}`);
      const processedSearch = fetchedData(response);
      return processedSearch;
    } console.log ('No search input provided.');
  } catch (error) {
    console.log (error);
  }
}

async function fetchedData(response) {
  const result = await response.json();
  if (response.ok) {
    if (result.length === 0) {
      console.log('No movies found.');
    } else {
      console.log(result);
    }
    return result;
  } console.log(result.Error);
  throw new Error(result.Error);
}

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

export { toggleHamburger, windowClick, closeMenu };