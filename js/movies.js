const itemsDiv = document.querySelector('.items');

const items = [
  {
    id: 'a1',
    title: 'Avengers: Endgame',
    author: 'Anthony Russo',
    price: '9',
  },
  {
    id: 'a2',
    title: 'Fast And Furious',
    author: 'Rob Cohen',
    price: '10',
  },
  {
    id: 'a3',
    title: 'Shrek',
    author: 'Andrew Adamson',
    price: '6',
  },
  {
    id: 'a4',
    title: "The Lion King 2 - Simba's Pride",
    author: 'Darrell Rooney',
    price: '7',
  },
  {
    id: 'a5',
    title: 'The Shawshank Redemption',
    author: 'Frank Darabont',
    price: '9',
  },
  {
    id: 'a6',
    title: 'The Green Mile',
    author: 'Frank Darabont',
    price: '16',
  },
  {
    id: 'a7',
    title: 'The Lord of the Rings: The Return of the King',
    author: 'Peter Jackson',
    price: '18',
  },
  {
    id: 'a8',
    title: 'A Beautiful Mind',
    author: 'Ron Howard',
    price: '12',
  },
  {
    id: 'a9',
    title: 'The Silence of the Lambs',
    author: 'Jonathan Demme',
    price: '15',
  },
];

getData(items, 'movies');
