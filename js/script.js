const tiles = document.querySelectorAll('.tile');
tiles.forEach((tile) => {
  tile.addEventListener('click', () => {
    if (window.location.href.includes('index')) {
      window.location.href = window.location.href.replace(
        'index',
        `subpages/${tile.id}`
      );
    } else {
      window.location.href = window.location.href.concat(
        `subpages/${tile.id}.html`
      );
    }
  });
});

const menu = document.querySelector('.menu');
const list = document.querySelector('.list');
menu.addEventListener('click', () => {
  list.classList.toggle('visible');
});
