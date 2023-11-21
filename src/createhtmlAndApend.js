export function createAppend(content, show) {
  const searchResultDiv = document.createElement('div');
  searchResultDiv.classList.add('search-result');

  const posterImg = document.createElement('img');
  posterImg.src = show.image ? show.image.medium : './img/placeholder.jpg';
  posterImg.alt = 'Poster';
  posterImg.id = 'poster';

  const title = document.createElement('h3');
  title.textContent = show.name;
  title.classList.add('title');
  title.id = 'title';

  const likeIcon = document.createElement('img');
  likeIcon.src = './img/like.png';
  likeIcon.alt = 'Like';

  const likeText = document.createElement('div');
  likeText.textContent = 'Like';

  const likesCounter = document.createElement('div');
  likesCounter.textContent = '3 likes';

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
  searchResultDiv.addEventListener('click', () => {
    content.innerHTML = '';
    console.log('single Show clicked', show);
    showMovieDetails(content, show);
  });

  content.appendChild(searchResultDiv);
}

function showMovieDetails(content, movieDetails) {
  const fullDetailsContainer = document.createElement('div');
  fullDetailsContainer.className = 'full-details';

  const imageCard = document.createElement('div');
  imageCard.className = 'image-card';

  const img = document.createElement('img');
  img.src = movieDetails.image?.medium;
  img.alt = 'show poster';

  const showInfo = document.createElement('div');
  showInfo.className = 'show-info';

  const showTitle = document.createElement('h1');
  showTitle.className = 'showTitle';
  showTitle.textContent = movieDetails.name;

  const year = document.createElement('h3');
  year.className = 'year';
  year.textContent = `Ended: ${movieDetails.ended || 'N/A'}`;

  const genre = document.createElement('h3');
  genre.className = 'genre';
  genre.textContent = movieDetails.genres ? movieDetails.genres.join(', ') : 'Genres N/A';

  const language = document.createElement('h3');
  language.className = 'language';
  language.textContent = `Language: ${movieDetails.language || 'N/A'}`;

  const rating = document.createElement('h3');
  rating.className = 'rating';
  rating.textContent = movieDetails.rating?.average ? `Rating: ${movieDetails.rating.average}/10` : 'Rating: N/A';

  const showSummary = document.createElement('div');
  showSummary.className = 'show-summary';

  const plotTitle = document.createElement('h2');
  plotTitle.className = 'plot';
  plotTitle.textContent = 'Plot Summary';

  const summary = document.createElement('div');
  summary.className = 'summary';
  summary.innerHTML = movieDetails.summary || 'Summary N/A';

  showSummary.appendChild(plotTitle);
  showSummary.appendChild(summary);

  const showInfos = [showTitle, year, genre, language, rating, showSummary];
  for (let i = 0; i < showInfos.length; i += 1) {
    showInfo.appendChild(showInfos[i]);
  }

  imageCard.appendChild(img);
  imageCard.appendChild(showInfo);

  fullDetailsContainer.appendChild(imageCard);

  content.appendChild(fullDetailsContainer);
}
