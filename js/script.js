const tiles = document.querySelectorAll('.tile');

tiles.forEach((tile) => {
  tile.addEventListener('click', () => {
    document.location.href = `/subpages/${tile.id}.html`;
  });
});

const menu = document.querySelector('.menu');
const list = document.querySelector('.list');
menu.addEventListener('click', () => {
  list.classList.toggle('visible');
});