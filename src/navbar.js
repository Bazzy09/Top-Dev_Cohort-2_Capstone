/* eslint-disable no-undef */
/* eslint-disable consistent-return */
/* eslint-disable no-use-before-define */
/* eslint-disable prefer-template */
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-items');
const searchBtn = document.querySelector('.search-button');
const tvShows = document.querySelectorAll('#tvshows');

searchBtn.addEventListener('click', async (event) => {
  const content = document.querySelector('.content');
  content.innerHTML = '';
  event.preventDefault();
  const searched = await getSearchShow();
  seeShowDetails(searched);
});

tvShows.forEach((tvshownav) => tvshownav.addEventListener('click', (event) => {
  console.log('TV Shows link clicked');
  event.preventDefault();
  getShowsList();
}));

async function getSearchShow() {
  try {
    const searchInput = document.getElementById('search').value;
    const url = 'https://api.tvmaze.com/';
    if (searchInput !== '') {
      const response = await fetch(`${url}search/shows?q=${searchInput}`);
      const processedSearch = fetchedData(response);
      return processedSearch;
    } console.log('No search input provided.');
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function fetchedData(response) {
  const results = await response.json();
  if (response.ok) {
    // console.log(results);
    const mainResult = results[0]; // return onlt the first item
    console.log(mainResult);
    seeShowDetails(mainResult);
  }
  console.log(results.Error);
  return results.Error;
}

async function getShowsList() {
  const url = 'https://api.tvmaze.com/shows';
  try {
    console.log('Fetching TV shows...');
    const response = await fetch(url);
    const loadedTvShows = await response.json();
    console.log(loadedTvShows);
    return loadedTvShows;
  } catch (error) {
    console.log(error);
    return error;
  }
}

function seeShowDetails(showDetails) {
  const content = document.querySelector('.content');

  const fullDetailsContainer = document.createElement('div');
  fullDetailsContainer.className = 'full-details';

  const imageCard = document.createElement('div');
  imageCard.className = 'image-card';

  const img = document.createElement('img');
  img.src = showDetails.show?.image?.medium;
  img.alt = 'show poster';

  const showInfo = document.createElement('div');
  showInfo.className = 'show-info';

  const showTitle = document.createElement('h1');
  showTitle.className = 'showTitle';
  showTitle.textContent = showDetails?.show?.name;

  const year = document.createElement('h3');
  year.className = 'year';
  year.textContent = `Ended: ${showDetails.show.ended}`;

  const genre = document.createElement('h3');
  genre.className = 'genre';
  genre.textContent = showDetails.show.genres.join(', ');

  const language = document.createElement('h3');
  language.className = 'language';
  language.textContent = `Language: ${showDetails?.show?.language}`;

  const rating = document.createElement('h3');
  rating.className = 'rating';
  rating.textContent = `Rating: ${showDetails.show?.rating?.average}/10` || '';

  const showSummary = document.createElement('div');
  showSummary.className = 'show-summary';

  const plotTitle = document.createElement('h2');
  plotTitle.className = 'plot';
  plotTitle.textContent = 'Plot Summary';

  const summary = document.createElement('div');
  summary.className = 'summary';
  summary.innerHTML = showDetails.show?.summary;

  showSummary.appendChild(plotTitle);
  showSummary.appendChild(summary);

  const showInfos = [showTitle, year, genre, rating, showSummary];
  for (let i = 0; i < showInfos.length; i += 1) {
    showInfo.appendChild(showInfos[i]);
  }

  imageCard.appendChild(img);
  imageCard.appendChild(showInfo);

  fullDetailsContainer.appendChild(imageCard);

  content.appendChild(fullDetailsContainer);
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