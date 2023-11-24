/* eslint-disable no-use-before-define */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-nested-ternary */
import { generateCommentForm, createCommentLogs, addCommentToComments } from './comment';
import { generateReservationForm, createReservationLogs, addReservationToReservations } from './reservation';

export function createAppend(content, show) {
  const searchResultDiv = document.createElement('div');
  searchResultDiv.classList.add('search-result');

  const posterImg = document.createElement('img');
  posterImg.src = show.image ? show.image.medium : (show.show.image ? show.show.image.medium : './img/placeholder.jpg');
  posterImg.alt = 'Poster';
  posterImg.id = 'poster';

  const title = document.createElement('h3');
  title.textContent = show.name || (show.show.name) || 'Title N/A';
  title.classList.add('title');
  title.id = 'title';

  const likeIcon = document.createElement('img');
  likeIcon.src = './img/like.png';
  likeIcon.alt = 'Like';

  const likeText = document.createElement('div');
  likeText.textContent = 'Like';

  const likesCounter = document.createElement('div');
  likesCounter.textContent = '3 likes';
  likesCounter.classList.add('likesCounter');

  const commentButton = document.createElement('button');
  commentButton.textContent = 'Comment';
  commentButton.classList.add('comment');

  const reservationButton = document.createElement('button');
  reservationButton.textContent = 'Reservations';
  reservationButton.classList.add('reservation');

  const searchResultPoster = document.createElement('div');
  searchResultPoster.classList.add('search-result-poster');
  searchResultPoster.appendChild(posterImg);

  const searchResultName = document.createElement('div');
  searchResultName.classList.add('search-result-name');
  searchResultName.appendChild(title);

  const reactionDiv = document.createElement('div');
  reactionDiv.classList.add('reaction-action');

  const reaction = document.createElement('div');
  reaction.classList.add('likes');
  reaction.appendChild(likeIcon);
  reaction.appendChild(likeText);

  const likesDiv = document.createElement('div');
  likesDiv.classList.add('reaction');
  likesDiv.appendChild(reaction);
  likesDiv.appendChild(likesCounter);

  const actionsDiv = document.createElement('div');
  actionsDiv.classList.add('actions');
  actionsDiv.appendChild(commentButton);
  actionsDiv.appendChild(reservationButton);

  reactionDiv.appendChild(likesDiv);
  reactionDiv.appendChild(actionsDiv);

  searchResultDiv.appendChild(searchResultPoster);
  searchResultDiv.appendChild(searchResultName);
  searchResultDiv.appendChild(reactionDiv);
  searchResultPoster.addEventListener('click', () => {
    content.style.alignItems = 'normal';
    content.innerHTML = '';
    showMovieDetails(content, show);
  });

  commentButton.addEventListener('click', () => {
    content.style.alignItems = 'normal';
    content.innerHTML = '';
    showMovieDetails(content, show);
    const commentSectiondisplay = document.querySelector('.comment-form');
    commentSectiondisplay.classList.toggle('active');
  });

  reservationButton.addEventListener('click', () => {
    console.log('first btn reserve');
    content.style.alignItems = 'normal';
    content.innerHTML = '';
    showMovieDetails(content, show);
    const reservationSectiondisplay = document.querySelector('.reservation-form');
    reservationSectiondisplay.classList.toggle('active');
  });
  content.appendChild(searchResultDiv);
}

function showMovieDetails(content, movieDetails) {
  const commentLogSection = createCommentLogs();
  const commentSection = generateCommentForm();
  const reservationLogSection = createReservationLogs();
  const reservationForm = generateReservationForm();
  const fullDetailsContainer = document.createElement('div');
  fullDetailsContainer.className = 'full-details';

  const imageCard = document.createElement('div');
  imageCard.className = 'image-card';

  const img = document.createElement('img');
  img.src = movieDetails.image ? movieDetails.image.medium : (movieDetails.show.image ? movieDetails.show.image.medium : './img/placeholder.jpg');
  img.alt = 'show poster';

  const showInfo = document.createElement('div');
  showInfo.className = 'show-info';

  const showTitle = document.createElement('h1');
  showTitle.className = 'showTitle';
  showTitle.textContent = movieDetails.name || movieDetails.show.name;

  const year = document.createElement('h3');
  year.className = 'year';
  year.textContent = `Ended: ${movieDetails.ended || movieDetails.show.ended || 'N/A'}`;

  const genre = document.createElement('h3');
  genre.className = 'genre';
  genre.textContent = movieDetails.genres ? movieDetails.genres.join(', ') : (movieDetails.show.genres ? movieDetails.show.genres.join(', ') : 'Genres N/A');

  const language = document.createElement('h3');
  language.className = 'language';
  language.textContent = `Language: ${movieDetails.language || movieDetails.show.language || 'N/A'}`;

  const rating = document.createElement('h3');
  rating.className = 'rating';
  rating.textContent = movieDetails.rating?.average ? `Rating: ${movieDetails.rating.average}/10` : (movieDetails.show.rating?.average ? `Rating: ${movieDetails.show.rating.average}/10` : 'Rating: N/A');

  const showSummary = document.createElement('div');
  showSummary.className = 'show-summary';

  const plotTitle = document.createElement('h2');
  plotTitle.className = 'plot';
  plotTitle.textContent = 'Plot Summary';

  const summary = document.createElement('div');
  summary.className = 'summary';
  summary.innerHTML = movieDetails.summary || movieDetails.show.summary || 'Summary N/A';

  showSummary.appendChild(plotTitle);
  showSummary.appendChild(summary);

  const showInfos = [showTitle, year, genre, language, rating, showSummary];
  for (let i = 0; i < showInfos.length; i += 1) {
    showInfo.appendChild(showInfos[i]);
  }

  imageCard.appendChild(img);
  imageCard.appendChild(showInfo);

  fullDetailsContainer.appendChild(imageCard);
  fullDetailsContainer.appendChild(commentLogSection);
  fullDetailsContainer.appendChild(commentSection);
  fullDetailsContainer.appendChild(reservationLogSection);
  fullDetailsContainer.appendChild(reservationForm);

  content.appendChild(fullDetailsContainer);

  const commentSubmitBtn = document.querySelector('.submit-comment');
  commentSubmitBtn.addEventListener('click', (event) => {
    console.log('clicked');
    event.preventDefault();
    addCommentToComments();
  });

  const reserveButton = document.querySelector('.reserve-button');
  reserveButton.addEventListener('click', (event) => {
    console.log('reserveButton clicked');
    event.preventDefault();
   addReservationToReservations();
  });
}