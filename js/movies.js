const itemsDiv = document.querySelector('.items');

const fetchData = async () => {
  const res = await fetch('../database/db.json');
  const data = await res.json();
  const items = data.movies;

  items.forEach(({ id, title, author, price }) => {
    itemsDiv.innerHTML += `
      <div class="item">
        <div class="image">
          <img src='../images/movies/${id}.png' alt='${title}' />
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

fetchData();
