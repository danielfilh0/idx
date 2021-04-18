const elHamburguer = document.querySelector('.icon-hamburguer');
const elMenu = document.querySelector('.menu');
const elHeader = document.querySelector('header');
const elHambuguer = document.querySelector('.icon-hamburguer');

// ativa menu-mobile
elHamburguer.addEventListener('click', () => {
  if (elMenu.classList.contains('active') === false) {
    elMenu.classList.add('active');
    elHamburguer.setAttribute('src', './images/close.svg');
  } else {
    elMenu.classList.remove('active');
    elHamburguer.setAttribute('src', './images/hamburguer.svg');
  }
});

// menu com background rosa ao scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    elHeader.classList.add('bg-pink');
    elHeader.classList.remove('bg-opacity');
  } else {
    elHeader.classList.remove('bg-pink');
    elHeader.classList.add('bg-opacity');
  }
});
