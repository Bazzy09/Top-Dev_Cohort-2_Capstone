const likes = document.querySelector('.likes');
const counter = document.querySelector('.counter');

let isLiked = false;

export function toggleLike() {
  isLiked = !isLiked;
  
  if (isLiked) {
    counter.textContent = 'Liked';
    likeButton.classList.add('liked');
  } else {
    counter.textContent = '';
    likeButton.classList.remove('liked');
  }
}

likes.addEventListener('click', (e) => {
    e.preventDefault();
    toggleLike();
})