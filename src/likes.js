export function toggleLike(reaction, likesCounter) {
  if (reaction.classList.contains('liked')) {
    likesCounter.innerHTML = ''
    reaction.classList.remove('liked');
  } else {
    likesCounter.innerHTML = 'Like'
    reaction.classList.add('liked');
  }
}