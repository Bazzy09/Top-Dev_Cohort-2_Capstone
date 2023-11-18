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








}
    
