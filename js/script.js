const tiles = document.querySelectorAll('.tile');
tiles.forEach((tile) => {
  tile.addEventListener('click', () => {
    let str = '';
    if (window.location.href.includes('index')) str = 'index';

    window.location.href = window.location.href.replace(
      str,
      `subpages/${tile.id}`
    );
  });
});

const menu = document.querySelector('.menu');
const list = document.querySelector('.list');
menu.addEventListener('click', () => {
  list.classList.toggle('visible');
});
