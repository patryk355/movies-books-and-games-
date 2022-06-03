const tiles = document.querySelectorAll('.tile');
tiles.forEach((tile) => {
  tile.addEventListener('click', () => {
    // window.location.href = `../subpages/${tile.id}.html`;
    window.location.href = window.location.href.replace(
      'index',
      `subpages/${tile.id}`
    );
  });
});

const menu = document.querySelector('.menu');
const list = document.querySelector('.list');
menu.addEventListener('click', () => {
  list.classList.toggle('visible');
});
