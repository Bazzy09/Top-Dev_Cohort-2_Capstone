const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-items');

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