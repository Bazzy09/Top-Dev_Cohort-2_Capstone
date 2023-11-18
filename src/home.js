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





}
    
