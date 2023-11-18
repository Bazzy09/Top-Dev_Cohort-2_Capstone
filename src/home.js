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
    likesCounter.textContent = `3 likes`;

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

    content.appendChild(searchResultDiv);
}
    
export async function displayHomeResults() {
    const content = document.querySelector('#content');
    const url = 'https://api.tvmaze.com/shows';
    try {
      console.log('Fetching TV shows...');
      const response = await fetch(url);
      const loadedTvShows = await response.json();
      (loadedTvShows.slice(0, 15)).forEach(show => {
        createAppend(content, show)
    })
      return loadedTvShows;
    } catch (error) {
      console.log(error);
      return error;
    }
}