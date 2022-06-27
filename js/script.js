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

const getData = (items, filename) => {
  items.forEach(({ id, title, author, price }) => {
    itemsDiv.innerHTML += `
        <div class="item">
          <div class="image">
            <img src='../images/${filename}/${id}.png' alt='${title}' />
          </div>
          <div class="description">
            <div>
              <h3>${title}</h3>
              <small>${author}</small>
            </div>
            <p>$${price}</p>
          </div>
        </div>
      `;
  });
};
